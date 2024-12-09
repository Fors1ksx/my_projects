<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import './styles_for_mymeetups.css';
	import { page } from '$app/stores';
	import EventComponent from '../../components/EventComponent.svelte';
	import FilterComponent from '../../components/FilterComponent.svelte';

	let b = [];
	const clubs = ["club1", "club2", "club3"]

	async function getData() {
		return await axios.get('http://90.156.229.249:8000/get_all_events').then((res) => {
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
	
	$: filter = { club: [] }

	$: key = { name: 'Конференция по IT' };
	$: sorted = b.filter((obj) => {
		if (filter.club){

		}
			return obj.name == key.name;
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
		<h1><span class="meetings">Мои события</span></h1>
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

<FilterComponent bind:isVisible bind:filter {clubs} />
