const headerHTML = `
<header class="header" id="header">
<nav class="nav" id="nav">
    <ul class="nav">
        <li class="nav-list-li">
            <img
                src="https://airport.by/upload/images/4e3bdc6556844bde1c84c53fc65a8cc6.png"
                alt="Авиакомпания 'Belavia'"
                width="350"
            />
        </li>
        <li class="nav-list-li">
            <a href="/src/index.html" rel="noopener noreferrer">
                <h2 class="nav-heading">Главная</h2>
            </a>
        </li>
        <li class="nav-list-li">
            <a href="/src/html/about-us.html">
                <h2 class="nav-heading">О нас</h2>
            </a>
        </li>
        <li class="nav-list-li">
            <a href="/src/html/fleet.html">
                <h2 class="nav-heading">Флот</h2>
            </a>
        </li>
    </ul>
</nav>
<br />
</header>
`

const footerHTML =
`
<footer>
				<div class="footer-main-box">
					<div class="company-box">
						<div class="company-top">
							<a href="index.html">
								<img
								src="https://drive.google.com/file/d/17iDI65XIcp9niLssktHqG9sZnbmiosWz/view"
								alt="Авиакомпания 'Belavia'"
								class="footer-logo"
								/>
							</a>
						</div>
						<div class="company-bottom">
							<a href="https://belavia.by/">
								<p class="footer-subheading">Источник</p>
							</a>
							<a href="index.html">
								<p class="footer-subheading">Подробнее</p>
							</a>
						</div>
					</div>
					<div class="navigation-box">
						<div class="navigation-top">
							<h3 class="footer-heading">Навигация</h3>
						</div>
						<div class="navigation-bottom">
							<a href="index.html">
								<p class="footer-subheading">Главная</p>
							</a>
							<a href="html/about-us.html">
								<p class="footer-subheading">О нас</p>
							</a>
							<a href="html/fleet.html">
								<p class="footer-subheading">Флот</p>
							</a>
						</div>
					</div>
					<div class="contact-us-box">
						<div class="contact-us-top">
							<h3 class="footer-heading">Напишите нам</h3>
						</div>
						<div class="contact-us-bottom">
							<a href="https://t.me/belavia_official">
								<img src="/src/img/telegram.svg" class="footer-mini-logo">
							</a>
							<a href="https://www.instagram.com/belavia.airlines/">
								<img src="/src/img/instagram.svg" class="footer-mini-logo">
							</a>
							<a href="https://www.youtube.com/user/OfficialBelavia">
								<img src="/src/img/youtube.svg" class="footer-mini-logo">
							</a>	
							<a href="https://vk.com/belavia_airlines">
								<img src="/src/img/vk.svg" class="footer-mini-logo">
							</a>
							<a href="http://twitter.com/Belavia_by">
								<img src="/src/img/x.svg" class="footer-mini-logo">
							</a>
							<a href="https://www.facebook.com/belavia">
								<img src="/src/img/facebook.svg" class="footer-mini-logo">
							</a>
						</div>
					</div>
				</div>
			</footer>
`

let headerDiv = document.getElementById('header-placeholder')
let footerDiv = document.getElementById('footer-placeholder')

headerDiv.insertAdjacentHTML('afterbegin', headerHTML)
footerDiv.insertAdjacentHTML('afterbegin', footerHTML)