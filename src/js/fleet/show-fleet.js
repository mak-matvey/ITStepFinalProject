const fleetButton = document.getElementById('fleet-button')
const textBox = document.getElementById('text-box')

fleetButton.addEventListener('click', function showFleet() {
	textBox.innerHTML = ''
	textBox.innerHTML = `<img url="https://belavia.com.ru/wp-content/uploads/2023/06/plain1.jpg" />
    <p class="fleet-subheading">Данные самолёты производятся и собираются на одноимённом бразильском предприятии. «Белавиа» располагает сразу четырьмя судами данной модели, а их среднее возрастное значение составляет 4 года. Такой транспорт оснащается мощными двигателями CF34-8Е5 от мирового лидера General Electric, благодаря чему самолёты применяются для средне- и дальнемагистральных авиарейсов.</br>
    Ключевые технические показатели Embraer Е-175:</br></br>

    Наибольшая пассажировместимость: 64 места эконом, 12 мест бизнес-части</br>
    Максимум взлётной массы: 38.79 тонн</br>
    Предел дальности рейсов: 3335 км</br>
    Максимум крейсерской скорости: 890 км/ч</br>
    Наибольшая высота полёта: 12.5 км (41.000 фт)</p>`
})
