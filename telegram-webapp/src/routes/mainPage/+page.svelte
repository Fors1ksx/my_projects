<svelte:head>
	<link rel="stylesheet" href="/styles.css" />
</svelte:head>

<header class="header">
	<nav class="nav">
		<a href="#home" class="nav-item">
			<img src="images/icon1.png" alt="Home" class="nav-icon" />
		</a>
		<a href="#services" class="nav-item">
			<img src="images/icon2.png" alt="Services" class="nav-icon" />
		</a>
		<a href="#contact" class="nav-item">
			<img src="images/icon3.png" alt="Contact" class="nav-icon" />
		</a>
	</nav>
</header>
<main class="main-content">
  <div class="MetsITAM">
    <h1><span class="meetings">Мероприятия от</span><span class="ITAM">ITAM</span></h1>
    <img src="images/filter.png" alt="Filters" class="filter">
  </div>
	<section class="ac-container">
		<div>
			<input id="ac-1" name="accordion-1" type="checkbox" checked />
			<label for="ac-1">Hackathon MeetUP</label>
			<article>
				<p>Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет</p>
			</article>
		</div>
		<div>
			<input id="ac-2" name="accordion-1" type="checkbox" />
			<label for="ac-2">Hackathon MeetUP</label>
			<article>
				<p>Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет</p>
			</article>
		</div>
		<div>
			<input id="ac-3" name="accordion-1" type="checkbox" />
			<label for="ac-3">Hackathon MeetUP</label>
			<article>
				<p>Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет</p>
			</article>
		</div>
		<div>
			<input id="ac-4" name="accordion-1" type="checkbox" />
			<label for="ac-4">Hackathon MeetUP</label>
			<article>
				<p>Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет</p>
			</article>
		</div>
	</section>
</main>
<footer class="footer"></footer>

<style>
  * {
    font-family: "Roboto Flex", sans-serif;
  }
	.header {
		background-color: #1e1d1c;
		padding: 10px 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-icon {
		width: 56px;
		height: 43px;
	}

  .MetsITAM {
  display: flex;
  align-items: center; 
  justify-content: space-between;
  margin-top: 16px;
  margin-left: 23px; /* А здесь можно же как-то объединить margin в один? */
  margin-right: 23px;
  }

  .MetsITAM h1 {
    margin-right: 10px; 
  }

	.meetings {
		color: #d9d9d9;
		margin-right: 5px;
	}

	.ITAM {
		color: #ff7575;
	}

  .filter {
    width: 24px;
    height: 24px;
  }
	/* Далее идут стили для аккордеона */
	.ac-container {
    width: 400px;
    margin: 10px auto 30px auto;
	}

	.ac-container label {
		padding: 5px 20px;
		position: relative;
		z-index: 20;
		display: flex; /* Используем flexbox для выравнивания текста и чекбокса */
		align-items: center; /* Выравниваем чекбокс и текст по вертикали */
		height: 30px;
		cursor: pointer;
		color:  #d9d9d9;
		line-height: 33px;
		font-size: 19px;
		background: #1e1d1c; /* Легкий фон для лейбла */
		border-radius: 4px; /* Скругленные углы */
		transition: background 0.3s ease, box-shadow 0.3s ease; /* Плавный переход */
	}

	/* Чекбокс */
	.ac-container input[type="checkbox"] {
		width: 18px;
		height: 18px;
		margin-right: 10px;
		border: 10px solid rgba(155, 155, 155, 0.6); /* Тонкая серая рамка */
		background-color: transparent; /* Прозрачный фон */
		transition: border-color 0.3s ease; /* Плавный переход для рамки */
	}

	/* При наведении на чекбокс */
	.ac-container label:hover {
		background: #1e1d1c; /* Немного затемняем при наведении */
	}

	.ac-container input:checked + label,
	.ac-container input:checked + label:hover {
		background: #1e1d1c; /* Полупрозрачный голубоватый фон при активном состоянии */
	}

	/* Стиль стрелки */
	.ac-container label:hover:after,
	.ac-container input:checked + label:hover:after {
		content: '';
		position: absolute;
		width: 24px;
		height: 24px;
		right: 13px;
		top: 7px;
		background: transparent url(http://netcribe.com/example/arrow_down.png) no-repeat center center;
	}

	.ac-container input:checked + label:hover:after {
		background-image: url(http://netcribe.com/example/arrow_up.png);
	}

	.ac-container input {
		display: none;
	}

	.ac-container article {
		background: #1e1d1c;
		margin-top: -1px;
		overflow: hidden;
		height: 0px;
		position: relative;
		z-index: 10;
		-webkit-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
		-moz-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
		-o-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
		-ms-transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
		transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
	}

	.ac-container input:checked ~ article {
		height: 100px;
	}

	.ac-container article p {
		color: #d9d9d9;
		line-height: 23px;
		font-size: 14px;
		padding: 20px;
	}

	@media (max-width: 768px) {
		.nav {
			justify-content: center;
			width: 100%;
			gap: 8px;
		}
	}
</style>
