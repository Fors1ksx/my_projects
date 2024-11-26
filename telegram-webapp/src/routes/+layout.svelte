<script lang="ts">
    import { onMount } from 'svelte';

    let userData: { first_name?: string; last_name?: string; username?: string } | undefined;

    onMount(() => {
        if (window.Telegram?.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.expand(); // Раскрывает Web App на весь экран.
            userData = tg.initDataUnsafe?.user; // Получение информации о пользователе.
        }
    });
</script>

<div>
    <h1>Привет, {userData?.first_name || "гость"}!</h1>
    <button on:click={() => window.Telegram?.WebApp?.close()}>Закрыть</button>
</div>



<!-- <script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()} -->
