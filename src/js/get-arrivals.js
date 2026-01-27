import { CONFIG } from './config.js';

const arrivalsButton = document.getElementById("main-page-arrival-button");
const arrivalsDepartures = document.getElementById("arrivals-departures");
const tableTemplate = document.getElementById("arrivals-template");

function getArrivalsURL()
{
  return CONFIG.API.BASE_URL + CONFIG.API.ENDPOINTS.ARRIVALS;
}

async function fetchArrivalsData()
{
  const response = await fetch(getArrivalsURL());

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`)
  }

  return await response.json();
}

function createTableRow(flightData) {
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

arrivalsButton.addEventListener("click", async () =>
{
  try
  {
    const data = await fetchArrivalsData();
    const newItem = tableTemplate.content.cloneNode(true);
    const newTdBody = newItem.querySelector("tbody");
    
    const markup = data
      .map((arrival) => createTableRow(arrival))
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

// 1. Получить данные 
// 2. Создать ряд
// 3. Создать разметку на основе ряда
// 4. Отрендерить ряд