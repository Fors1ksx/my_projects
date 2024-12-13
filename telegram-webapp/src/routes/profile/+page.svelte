<script lang="ts">
    import { page } from '$app/stores';
  
    $: currentPath = $page.url.pathname;
  
    interface User {
      firstName: string;
      lastName: string;
      telegramNick: string;
      birthDate: string;
      completedTasks: number;
      group: string;
    }
  
    let user: User = {
      firstName: "Мариф",
      lastName: "Магомедов",
      telegramNick: "@tgnickname",
      birthDate: "15.02.2003",
      completedTasks: 69,
      group: "БИВТ-14-88"
    };
  
    let isEditing: Record<keyof User, boolean> = {
      firstName: false,
      lastName: false,
      telegramNick: false,
      birthDate: false,
      completedTasks: false,
      group: false
    };
  
    function toggleEdit(field: keyof User): void {
    for (let key in isEditing) {
        if (Object.prototype.hasOwnProperty.call(isEditing, key)) {
            isEditing[key as keyof User] = false;
        }
    }
    isEditing[field] = true;
}

function handleEnter(event: KeyboardEvent, field: keyof User): void {
    if (event.key === "Enter") {
        isEditing[field] = false;
    }
}

function handleClickOutside(event: MouseEvent): void {
    const isClickInside = (event.target as HTMLElement)?.closest(".field");
    const isClickOnInput = (event.target as HTMLElement)?.closest("input");
    if (!isClickInside && !isClickOnInput) {
        for (let key in isEditing) {
            if (Object.prototype.hasOwnProperty.call(isEditing, key)) {
                isEditing[key as keyof User] = false;
            }
        }
    }
}

  
    // import { onMount } from "svelte";
    // onMount(() => {
    //   document.addEventListener("click", handleClickOutside);
    //   return () => {
    //     document.removeEventListener("click", handleClickOutside);
    //   };
    // });
    // import { onMount } from 'svelte';

    // let telegramUser = null;

    // onMount(() => {
    //     if (window.Telegram?.WebApp) {
    //         const webApp = window.Telegram.WebApp;

    //         // Получаем данные пользователя Telegram
    //         telegramUser = webApp.initDataUnsafe.user;
    //         console.log('Telegram User:', telegramUser);
    //     }
    // });



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

<div class="profile">
    <div class="avatar">
      <img src="images/user-icon.png" alt="Avatar" />
    </div>
    <div class="container-fields">
        <div class="field">
            <span>Имя</span>
            {#if isEditing.firstName}
                <input 
                    type="text" 
                    bind:value={user.firstName} 
                    on:keydown={(e) => e.key === 'Enter' && toggleEdit("firstName")} 
                />
            {:else}
                <span class="value">{user.firstName}</span>
                <span 
                    class="edit-icon" 
                    on:click={() => toggleEdit("firstName")}
                >✎</span>
            {/if}
        </div>
        
        
        
          <div class="field">
            <span>Фамилия</span>
            {#if isEditing.lastName}
              <input type="text" bind:value={user.lastName} on:keydown={(e) => e.key === 'Enter' && toggleEdit("lastName")}/>
            {:else}
              <span class="value">{user.lastName}</span>
              <span class="edit-icon" on:click={() => toggleEdit("lastName")}>✎</span>
            {/if}
          </div>
        
          <div class="field">
            <span>Ник в телеграме</span>
            {#if isEditing.telegramNick}
              <input type="text" bind:value={user.telegramNick} on:keydown={(e) => e.key === 'Enter' && toggleEdit("telegramNick")}/>
            {:else}
              <span class="value">{user.telegramNick}</span>
              <span class="edit-icon" on:click={() => toggleEdit("telegramNick")}>✎</span>
            {/if}
          </div>
        
          <div class="field">
            <span>Дата рождения</span>
            {#if isEditing.birthDate}
              <input type="text" bind:value={user.birthDate} on:keydown={(e) => e.key === 'Enter' && toggleEdit("birthDate")}/>
            {:else}
              <span class="value">{user.birthDate}</span>
              <span class="edit-icon" on:click={() => toggleEdit("birthDate")}>✎</span>
            {/if}
          </div>
        
          <div class="field">
            <span>Посещено мероприятий</span>
            <span class="value">{user.completedTasks}</span>
          </div>
        
          <div class="field">
            <span>Учебная группа</span>
            <span class="value">{user.group}</span>
          </div>
      </div>      
    </div>
<style>

* {
	font-family: 'Roboto Flex', sans-serif;
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
	object-fit: contain; /* Сохранить пропорции изображений */
}


.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #d9d9d9;
    background: #1e1d1c;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    margin: auto;
}

.avatar {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.avatar img {
    width: 88px;
    height: 88px;
}

.container-fields {
    margin-top: 20px;
}
.field {
    position: relative;
    z-index: 1; /* Гарантирует, что контейнер находится ниже кнопки */
    pointer-events: auto; /* Убедитесь, что клики проходят к элементам внутри */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
}


.field input {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
}

.field .value {
    flex-grow: 1;
    margin-left: 10px;
}

.edit-icon {
    cursor: pointer;
    pointer-events: auto;
    z-index: 10;
    padding: 5px;
}

</style>

  


