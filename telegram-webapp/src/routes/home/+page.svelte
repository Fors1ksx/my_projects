<header class="header">
	<nav class="nav">
		<a href="/home" class="nav-item">
			<img src={currentPath === '/home' ? 'images/home_active.png' : 'images/icon1.png'} alt="Home" class="nav-icon" />
		</a>
		<a href="/mymeetups" class="nav-item">
			<img src={currentPath === '/mymeetups' ? 'images/services_active.png' : 'images/icon2.png'} alt="Services" class="nav-icon" />
		</a>
		<a href="/profile" class="nav-item">
			<img src={currentPath === '/profile' ? 'images/contact_active.png' : 'images/icon3.png'} alt="Contact" class="nav-icon" />
		</a>
	</nav>
</header>

<main class="main-content">
  <div class="MetsITAM">
    <h1><span class="meetings">Мероприятия от</span><span class="ITAM">ITAM</span></h1>
    <button class="toogleDisplay" on:click={toggleVisibility}><img src="images/filter.png" alt="Filters" class="filter-icon"></button>
  </div>
  <section class="ac-container">
    {#each sorted as event, counter}
    <div class="one-container">
        <input id={`ac-${counter}`} name={`accordion-${counter}`} type="checkbox" checked={event.isOpen} on:change={() => event.isOpen = !event.isOpen} />
        
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
            <label for={`ac-${counter}`}><img src="images/galochka.png" alt="Galochka" class="galochka"></label>
        </div>
        <div class="ac-header">
            <label for={`ac-${counter}`}>{event.name}</label>
            <span class="time">16.11.2024 — 20:30</span>
        </div>
        <article class="chto-v-meshochke">
            <p class="description">{event.description}</p>
            <img src="images/signup.png" alt="SignUp" class="signUp">
        </article>
    </div>
    {/each}
</section>
</main>

<footer class="footer">
    {#if isVisible}
    <div transition:fade class="filter">
        <!-- <input type="text" style="color: black; display:block;" bind:value={key.prom}/>	 -->
         <h1 class="filters!">Фильтры</h1>
         <div class="divider"/>
         <h2 class="poEventam">По мероприятиям</h2>
         <div class="button-container">
            <button class="filter-button">MeetUp</button><button class="filter-button">Соревнование</button><button class="filter-button">Q&A</button>
         </div>
         <h2>По клубам</h2>
         <div class="button-container">
            <button class="filter-button">HackClub</button><button class="filter-button">Design Club</button><button class="filter-button">RoboLab</button>
            <button class="filter-button">AI KC</button><button class="filter-button">GameDev</button><button class="filter-button">AMC</button><button class="filter-button">CTF</button>
         </div>        
    </div>
    {/if}
</footer>

<script>
    import axios from "axios";
    import { onMount } from "svelte";
    import "./styles.css"
    import { page } from '$app/stores';

    let b = [];

    async function getData() {
    return await axios
        .get('http://90.156.229.249:8000/get_all_events')
        .then((res) => {
        b = res.data;
        });
    }

    onMount(() => {
    getData();
    });

    $: currentPath = $page.url.pathname;

	import { fade } from 'svelte/transition';
    let isVisible = false;

    function toggleVisibility() {
        isVisible = !isVisible;
    }
	const a = [{
		name: 'Hackathon MeetUP1',
		description: "Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет",
		image: "",
		key: "1",
		isOpen: false,
	},{
		name: 'Hackathon MeetUP2',
		description: "Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет",
		image: "",
		key: "2",
		isOpen: false,
	},{
		name: 'Hackathon MeetUP3',
		description: "Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет",
		image: "",
		key: "1",
		isOpen: false,
	},{
		name: 'Hackathon MeetUP4',
		description: "Короткое описание мероприятия, чтобы понимать, куда идёшь и что там будет",
		image: "",
		key: "2",
		isOpen: false,
	}]
	$: key = {prom: "1"};
	$: sorted = a.filter((obj) => {return obj.key == key.prom});
</script>

