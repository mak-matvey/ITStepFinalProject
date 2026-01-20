const arrivalButton = document.getElementById("main-page-arrival-button")
const arrivalsDepartures = document.getElementById("arrivals-departures")

async function getArrivalsFromJSON () {
    const ARRIVALS_URL = "http://127.0.0.1:3000/arrivals/"
    const response = await fetch(ARRIVALS_URL)
    const data = await response.json()

    console.log(response)
}

const table = document.querySelector('.arrivals-table')
const template = document.querySelector('#template')
const