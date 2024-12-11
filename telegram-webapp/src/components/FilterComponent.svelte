<script>
    export let isVisible, filter, clubs, meetups;
    import { fade } from "svelte/transition";
	import './FilterComponent.css'

	$: filter, console.log(filter.club), console.log(filter.meetup);
	$: console.log('Current filter for meetups:', filter.meetup);
</script>
<footer class="footer">
	{#if isVisible}
		<div transition:fade class="filter">
			<!-- <input type="text" style="color: black; display:block;" bind:value={key.prom}/>	 -->
			<h1 class="filters!">Фильтры</h1>
			<div class="divider" />
			<h2 class="poEventam">По мероприятиям</h2>
			<div class="button-container">
				{#each meetups as meetup}
				<!-- <button class={filter.meetup.includes(meetup) ? "filter-button-active" : "filter-button"} on:click={() =>  {filter.meetup.includes(meetup) ? filter.meetup = filter.meetup.filter((obj) => {return obj!==meetup}) : filter.meetup = [...filter.meetup, meetup]}}>{meetup}</button> -->
				<button
					class={filter.meetup.includes(meetup) ? "filter-button-active" : "filter-button"}
					on:click={() => {
						// Обновляем массив фильтров для мероприятий
						filter.meetup = filter.meetup.includes(meetup)
							? filter.meetup.filter(obj => obj !== meetup) 
							: [...filter.meetup, meetup];
					}}
				>
					<p>{meetup}</p>
				</button>

			  {/each}
			</div>
			<h2>По клубам</h2>
			<div class="button-container">
				{#each clubs as club}
				<button class={filter.club.includes(club) ? "filter-button-active" : "filter-button"} on:click={() =>  {filter.club.includes(club) ? filter.club = filter.club.filter((obj) => {return obj!==club}) : filter.club = [...filter.club, club]}}><p>{club}</p></button>
				{/each}
			</div>
		</div>
	{/if}
</footer>
