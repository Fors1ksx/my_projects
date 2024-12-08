<script>
    export let isVisible, filter, clubs;
    import { fade } from "svelte/transition";
</script>
<footer class="footer">
	{#if isVisible}
		<div transition:fade class="filter">
			<!-- <input type="text" style="color: black; display:block;" bind:value={key.prom}/>	 -->
			<h1 class="filters!">Фильтры</h1>
			<div class="divider" />
			<h2 class="poEventam">По мероприятиям</h2>
			<div class="button-container">
				<button class="filter-button">MeetUp</button><button class="filter-button"
					>Соревнование</button
				><button class="filter-button">Q&A</button>
			</div>
			<h2>По клубам</h2>
			<div class="button-container">
				{#each clubs as club}
				<button class={filter.club == club ? "filter-button-active" : "filter-button"} on:click={() =>  {filter.club == club ? filter.club = null : filter.club = club}}>{club}</button>
				{/each}
			</div>
		</div>
	{/if}
</footer>
