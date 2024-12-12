<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import './styles_for_home.css';
	import { page } from '$app/stores';
	import EventComponent from '../../components/EventComponent.svelte';
	import { fade } from 'svelte/transition';
	import FilterComponent from '../../components/FilterComponent.svelte';

	let b = [];
	const clubs = ["HackClub", "Design Club", "RoboLab", "AI KC", "GameDev", "AMC", "CTF"]
	const meetups = ["MeetUp", "Соревнование", "Q&A"]

	async function getData() {
		return await axios.get('http://90.156.229.249:8000/get_all_events').then((res) => {
			b = res.data.map((event1) => {event1.tags = event1.tags.split(","); return event1});
			console.log(b);
		});
	}

	onMount(() => {
		getData();
	});

	$: currentPath = $page.url.pathname;

	let isVisible = false;
	function toggleVisibility() {
		isVisible = !isVisible;
	}

	$: filter = { club: [], meetup: [] }
	
	$: key = { name: 'Конференция по IT' };
	// $: sorted = b.filter((obj) => {
	// 	if (filter.club){

	// 	}
	// 		return obj.name == key.name;
	// 	if (filter.meetup){

	// 	}
	// 		return obj.name == key.name;
	// });
	$: sorted = b.filter((obj) => {
    let matchesClub = filter.club.length === 0 || filter.club.some((club) => {return obj.tags.some((tag) => {return tag.includes(club)})});
    let matchesMeetup = filter.meetup.length === 0 || filter.meetup.some((meetup) => {return obj.tags.some((tag) => {return tag.includes(meetup)})});

    return matchesClub && matchesMeetup;
});

</script>

<header class="header">
	<nav class="nav">
		<a href="/home" class="nav-item">
			<img
				src={currentPath === '/home' ? 'images/home_active.png' : 'images/icon1.png'}
				alt="Home"
				class="nav-icon"
			/>
		</a>
		<a href="/mymeetups" class="nav-item">
			<img
				src={currentPath === '/mymeetups' ? 'images/services_active.png' : 'images/icon2.png'}
				alt="Services"
				class="nav-icon"
			/>
		</a>
		<a href="/profile" class="nav-item">
			<img
				src={currentPath === '/profile' ? 'images/contact_active.png' : 'images/icon3.png'}
				alt="Contact"
				class="nav-icon"
			/>
		</a>
	</nav>
</header>

<main class="main-content">
	<div class="MetsITAM">
		<h1><span class="meetings">Мероприятия от</span><span class="ITAM">ITAM</span></h1>
		<button class="toogleDisplay" on:click={toggleVisibility}
			><img src="images/filter.png" alt="Filters" class="filter-icon" /></button
		>
	</div>
	<section class="ac-container">
		{#each sorted as event, counter}
			<EventComponent bind:event {counter} />
		{/each}
	</section>
</main>

<!-- <FilterComponent bind:isVisible bind:filter {clubs} {meetups} /> -->
<FilterComponent bind:isVisible bind:filter {clubs} {meetups} />

