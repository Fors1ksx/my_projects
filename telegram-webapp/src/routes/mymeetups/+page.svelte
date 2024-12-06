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
			<input id={`ac-${counter}`} name={`accordion-${counter}`} type="checkbox" checked={event.isOpen} on:click={() => event.isOpen=!event.isOpen}/>
			<label for={`ac-${counter}`}>{event.name}</label>
			<article>
                <div class="tag-container">
                    <p class="tag">HackClub</p>
                </div>
				<p>{event.description}</p>
			</article>
		</div>
		{/each}
	</section>
</main>

<footer class="footer">
    {#if isVisible}
    <div transition:fade class="filter">
        <!-- <input type="text" style="color: black; display:block;" bind:value={key.prom}/>	 -->
         <h1 class="filters!">Фильтры!</h1>
         <h2 class="poEventam">По мероприятиям</h2>
         <button>MeetUp</button><button>Соревнование</button><button>Q&A</button>
         <h2>По клубам</h2>
         <button>HackClub</button><button>Design Club</button><button>RoboLab</button>
         <button>AI KC</button><button>GameDev</button><button>AMC</button><button>CTF</button>
    </div>
    {/if}
</footer>

<script>
    import "./styles.css"
    import { page } from '$app/stores';
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

