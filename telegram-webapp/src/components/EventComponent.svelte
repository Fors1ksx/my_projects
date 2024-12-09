<script>
	export let event, counter;
	import './EventComponent.css';
	let isRotated = false;

	// Переключение состояния вращения
	function toggleRotation() {
		isRotated = !isRotated;
	}

</script>

<div class="one-container">
	<input
		id={`ac-${counter}`}
		name={`accordion-${counter}`}
		type="checkbox"
		checked={event.isOpen}
		on:change={() => (event.isOpen = !event.isOpen)}
	/>

	<!-- Контейнер с тегами, добавляем класс через Svelte -->
	<div class="conteiner-of-tags" class:background-visible={event.isOpen}>
		<div class="tags">
			<div class="tag-container">
				<p class="tag">MeetUp</p>
			</div>
			<div class="tag-container">
				<p class="tag">HackClub</p>
			</div>
		</div>
		<label for={`ac-${counter}`}
			><img src="images/galochka.png"
			alt="Galochka"
			class="galochka {isRotated ? 'rotated' : ''}" 
			on:click={toggleRotation} /></label
		>
	</div>
	<div class="ac-header">
		<div class="ac-header-inf">
			<label for={`ac-${counter}`}>{event.name}</label>
			<span class="time">16.11.2024 — 20:30</span>
		</div>
		<img src="images/krestik.png" alt="Krestik" class="krestik" />
	</div>
	<article class="chto-v-meshochke">
		<p class="description">{event.description}</p>
		<img src="images/signup.png" alt="SignUp" class="signup">
	</article>
</div>
