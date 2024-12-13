<script>
	export let event, counter;
	import './EventComponent.css';
	let isRotated = false;

	import { myMeetups } from './myMeetups'; // Путь к хранилищу


	// Функция для добавления события в "Мои события"
	function addToMyMeetups() {
		myMeetups.update((current) => {
			// Проверяем, чтобы событие не добавлялось повторно
			if (!current.some((e) => e.id === event.id)) {
				return [...current, event];
			}
			return current;
		});
	}

	function removeFromMyMeetups() {
        myMeetups.update((current) => {
            return current.filter((e) => e.id !== event.id); // Удаляем событие по id
        });
    }


	// Переключение состояния вращения
	function toggleRotation(event) {
		event.stopPropagation()
		isRotated = !isRotated;
	}

</script>

<div class="one-container">
	<img src="/images/hackmeetup.png" class={`event-img${event.isOpen ? '-active' : ''}`} alt="HUY"/>
	<div class={`gradient${event.isOpen ? '-active' : ''}`} />
	<input
		id={`ac-${counter}`}
		name={`accordion-${counter}`}
		type="checkbox"
		checked={event.isOpen}
		on:change={(e) => {event.isOpen = !event.isOpen; toggleRotation(e)}}
	/>

	<!-- Контейнер с тегами, добавляем класс через Svelte -->
	<div class="ac-header">
		<div style={`margin-top:${event.name.length > 23 ? "20px" : "0px"}`} class={`ac-header-inf${event.isOpen ? '-active' : ''}`}>
			<label  for={`ac-${counter}`}>{event.name}</label>
			<span style={`margin-top:${event.name.length > 23 ? "20px" : "0px"}`} class="time">16.11.2024 — 20:30</span>
		</div>
		<button class="krestik-btn" on:click={removeFromMyMeetups}>
            <img src="images/krestik.png" alt="Удалить" class="krestik" />
        </button>
	</div>
	<div class="conteiner-of-tags" class:background-visible={event.isOpen}>
		<div class="tags">
			{#each event.tags as tag}
			<div class="tag-container">
					<p class="tag">{tag}</p>
			</div>
			{/each}
		</div>
		<label class={`galochka-container${event.isOpen ? '-active' : ''}`} for={`ac-${counter}`}
			><img src="images/galochka.png"
			alt="Galochka"
			class="galochka {isRotated ? 'rotated' : ''}" 
			/></label
		>
	</div>
	
	<article class="chto-v-meshochke">
		<p class="description">{event.description}</p>
		<button class="signup" on:click={addToMyMeetups}>
			<img src="images/signup.png" alt="SignUp" />
		</button>
	</article>
</div>
