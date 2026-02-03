import { CONFIG } from './config.js'

const departuresButton = document.getElementById('main-page-departure-button')
const arrivalsDepartures = document.getElementById('arrivals-departures')
const tableTemplate = document.getElementById('departures-template')

function getDeparturesURL() {
	return CONFIG.API.BASE_URL + CONFIG.API.ENDPOINTS.DEPARTURES
}

async function fetchDeparturesData() {
	const response = await fetch(getDeparturesURL())

	if (!response.ok) {
		throw new Error(`Ошибка: ${response.status}`)
	}

	return await response.json()
}

function createTableRow(flightData) {
	const { airline, destination, departure_time, status } = flightData
	let resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/4e3bdc6556844bde1c84c53fc65a8cc6.png" class="airlineLogo"/></td>
  `

	if (airline === 'Aeroflot') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/3a4144634cb5678c4c6fb1aad958c551.png" class="airlineLogo"/></td>
  `
	} else if (airline === 'Azimuth') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/71bb9c226f5bcc0ff6226bb7ba9b65e7.png" class="airlineLogo"/></td>
  `
	} else if (airline === 'Flydubai') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/82b69bbc0d54724ba30d858ec627c1ab.png" class="airlineLogo"/></td>
  `
	} else if (airline === 'SCAT') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/cf971f898cc418c1533bb0fbcfaffb34.png" class="airlineLogo"/></td>
  `
	} else if (airline === 'Red Wings') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/e2c347fadfc93b651d2ae7f2e349b147.png" class="airlineLogo"/></td>
  `
	} else if (airline === 'Uzbekistan Airways') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/7ccd048a691fb7891b48992da3e1433f.png" class="airlineLogo"/></td>
  `
	} else if (airline === 'CA722') {
		resultTableRow = `
    <tr>
      <td><img src="https://airport.by/upload/images/bacea75529c765409cec75c9076d547f.png" class="airlineLogo"/></td>
  `
	}

 resultTableRow += `<td>${destination}</td>
      <td>${departure_time}</td>
      <td>${status}</td>
    </tr>`

	return resultTableRow
}

departuresButton.addEventListener('click', async () => {
	try {
		const data = await fetchDeparturesData()
		const newItem = tableTemplate.content.cloneNode(true)
		const newTdBody = newItem.querySelector('tbody')

		const markup = data.map(departure => createTableRow(departure)).join('')

		newTdBody.innerHTML = markup

		arrivalsDepartures.innerHTML = ''
		arrivalsDepartures.appendChild(newItem)
	} catch (error) {
		console.error('Ошибка загрузки:', error)
		arrivalsDepartures.innerHTML = `Не удалось загрузить данные: ${error.message}`
	}
})
