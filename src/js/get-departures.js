import { CONFIG } from './config.js';

const departuresButton = document.getElementById("main-page-departure-button");
const arrivalsDepartures = document.getElementById("arrivals-departures");
const tableTemplate = document.getElementById("departures-template");

function getDeparturesURL()
{
  return CONFIG.API.BASE_URL + CONFIG.API.ENDPOINTS.DEPARTURES;
}

async function fetchDeparturesData()
{
  const response = await fetch(getDeparturesURL());

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`)
  }

  return await response.json();
}

function createTableRow(flightData)
{
    const { airline, destination, departure_time, status } = flightData;
    
    return `
      <tr>
        <td>${airline}</td>
        <td>${destination}</td>
        <td>${departure_time}</td>
        <td>${status}</td>
      </tr>
    `;
}

departuresButton.addEventListener("click", async () =>
{
  try
  {
    const data = await fetchDeparturesData();
    const newItem = tableTemplate.content.cloneNode(true);
    const newTdBody = newItem.querySelector("tbody");
    
    const markup = data
      .map((departure) => createTableRow(departure))
      .join("");
    
    newTdBody.innerHTML = markup;
    
    arrivalsDepartures.innerHTML = '';
    arrivalsDepartures.appendChild(newItem);
    
  } 
  
  catch (error)
  {
    console.error('Ошибка загрузки:', error);
    arrivalsDepartures.innerHTML = `Не удалось загрузить данные: ${error.message}`;
  }
});