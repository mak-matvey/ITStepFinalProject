const fleetButton = document.getElementById('fleet-button')
const fleetPlaceholder = document.getElementById('fleet-placeholder')

function getFleetURL() {
    return 'http://127.0.0.1:3000/fleet'
}

async function fetchFleetData() {
    const response = await fetch(getFleetURL())

    if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.status}`)
    }

    return await response.json()
}

function createFleetCard(aircraft) {
    const imageHtml = aircraft.image 
        ? `<img src="${aircraft.image}" alt="${aircraft.type}" onerror="this.parentElement.innerHTML='<div class=\'no-image\'>✈️</div>'">`
        : `<div class="no-image">✈️</div>`
    
    return `
        <div class="fleet-card">
            <div class="fleet-card-image">
                ${imageHtml}
            </div>
            <div class="fleet-card-content">
                <h3 class="fleet-card-title">${aircraft.type}</h3>
                <ul class="fleet-card-specs">
                    <li><strong>Вместимость</strong> <span>${aircraft.capacity}</span></li>
                    <li><strong>Дальность полета</strong> <span>${aircraft.range}</span></li>
                    <li><strong>Двигатели</strong> <span>${aircraft.engines}</span></li>
                    <li><strong>Год выпуска</strong> <span>${aircraft.year}</span></li>
                    <li><strong>Количество в парке</strong> <span>${aircraft.quantity}</span></li>
                </ul>
                <p class="fleet-card-description">${aircraft.description}</p>
            </div>
        </div>
    `
}

function showLoading() {
    fleetPlaceholder.innerHTML = `
        <div class="fleet-loading">
            <div class="spinner"></div>
            <p>Загрузка данных о флоте...</p>
        </div>
    `
}

async function displayFleet() {
    showLoading()
    
    try {
        const data = await fetchFleetData()
        
        if (!data || data.length === 0) {
            fleetPlaceholder.innerHTML = '<p class="error-container">Нет данных о флоте</p>'
            return
        }
        
        const fleetHTML = `
            <div class="fleet-grid">
                ${data.map(aircraft => createFleetCard(aircraft)).join('')}
            </div>
        `
        
        fleetPlaceholder.innerHTML = fleetHTML
    } catch (error) {
        console.error('Ошибка загрузки флота:', error)
        showError(`Не удалось загрузить данные о флоте: ${error.message}`)
    }
}

if (fleetButton) {
    fleetButton.addEventListener('click', displayFleet)
}

document.addEventListener('DOMContentLoaded', () => {
    displayFleet()
})