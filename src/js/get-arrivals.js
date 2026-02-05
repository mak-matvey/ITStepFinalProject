import { CONFIG } from './config.js'

const arrivalsButton = document.getElementById('main-page-arrival-button')
const arrivalsDepartures = document.getElementById('arrivals-departures')
const tableTemplate = document.getElementById('arrivals-template')

function getArrivalsURL() {
	return CONFIG.API.BASE_URL + CONFIG.API.ENDPOINTS.ARRIVALS
}

async function fetchArrivalsData() {
	const response = await fetch(getArrivalsURL())

	if (!response.ok) {
		throw new Error(`Ошибка: ${response.status}`)
	}

	return await response.json()
}

function createTableRow(flightData) {
	const { airline, departure, arrival_time, status } = flightData
	let resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/4e3bdc6556844bde1c84c53fc65a8cc6.png"
	  class="airlineLogo" alt="Авиакомпания 'Belavia'"/></td>
  `

	if (airline === 'Aeroflot') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/3a4144634cb5678c4c6fb1aad958c551.png"
	  class="airlineLogo" alt="Авиакомпания 'Аэрофлот'"/></td>
  `
	} else if (airline === 'Azimuth') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/71bb9c226f5bcc0ff6226bb7ba9b65e7.png"
	  class="airlineLogo" alt="Авиакомпания 'Азимут'"/></td>
  `
	} else if (airline === 'Flydubai') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/82b69bbc0d54724ba30d858ec627c1ab.png"
	  class="airlineLogo" alt="Авиакомпания 'Флайдубай'"/></td>
  `
	} else if (airline === 'SCAT') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/cf971f898cc418c1533bb0fbcfaffb34.png"
	  class="airlineLogo" alt="Авиакомпания 'СКАТ'"/></td>
  `
	} else if (airline === 'Red Wings') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/e2c347fadfc93b651d2ae7f2e349b147.png"
	  class="airlineLogo" alt="Авиакомпания 'Ред Вингс'"/></td>
  `
	} else if (airline === 'Uzbekistan Airways') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/7ccd048a691fb7891b48992da3e1433f.png"
	  class="airlineLogo" alt="Авиакомпания 'Узбекистанские авиалинии'"/></td>
  `
	} else if (airline === 'CA722') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/bacea75529c765409cec75c9076d547f.png"
	  class="airlineLogo" alt="Авиакомпания 'Эир Чайна'"/></td>
  `
	}

	resultTableRow += `<td>${departure}</td>
      <td>${arrival_time}</td>
      <td>${status}</td>
    </tr>`

	return resultTableRow
}

arrivalsButton.addEventListener('click', async () => {
	try {
		const data = await fetchArrivalsData()
		const newItem = tableTemplate.content.cloneNode(true)
		const newTdBody = newItem.querySelector('tbody')

		const markup = data.map(arrival => createTableRow(arrival)).join('')

		newTdBody.innerHTML = markup

		arrivalsDepartures.innerHTML = ''
		arrivalsDepartures.appendChild(newItem)
	} catch (error) {
		console.error('Ошибка загрузки:', error)
		arrivalsDepartures.innerHTML = `Не удалось загрузить данные: ${error.message}`
	}
})
