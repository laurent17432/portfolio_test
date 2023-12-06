<script>
	import { page } from '$app/stores';
  	let currentUrl = $page.url.pathname;
	let active = false;
	function handleClick(event) {
    	currentUrl = event.target.getAttribute('href');
		active = false;
  }
</script>

<header>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
<nav id="menu-principal">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div id="hamburger" class:croix={active} on:click={() => (active = !active)}>
		<span class="hamburger"></span>
		<span class="hamburger"></span>
		<span class="hamburger"></span>
	</div>
	<ul id="liste-liens" class:actif={active}>
		<li><a class="icone-menu" class:menu-actif={currentUrl === '/'} on:click={handleClick} href="/">Accueil</a></li>
		<li><a class="icone-menu" class:menu-actif={currentUrl === '/projets'} on:click={handleClick} href="/projets">Mes projets</a></li>
		<li><a class="icone-menu" class:menu-actif={currentUrl === '/mon-reseau'} on:click={handleClick} href="/mon-reseau">A propos</a></li>
        <li><a class="icone-menu" class:menu-actif={currentUrl === '/competences'} on:click={handleClick} href="/competences">Mes Atouts</a></li>
        <li><a class="icone-menu" class:menu-actif={currentUrl === '/contact'} on:click={handleClick} href="/contact">Me contacter</a></li>
		<li><a class="icone-menu" href="https://cvdesignr.com/p/5b04bfa822584" target="_blank" download="lepoivre_laurent_cv">Mon CV</a></li>
		<li><a class="icone-menu" href="*">Mon site</a></li>
	</ul>
</nav>
</header>

<style>
	#menu-principal {
		list-style: none;
		min-height: 48px;
		display: flex;
		flex-wrap: wrap;
		height: 8vh;
		align-items: center;
		justify-content: space-evenly;
		background: var(--color-nav);
	}
	#menu-principal ul {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: 100vw;
		top: -80vh;
		justify-content: right;
		transition: 1s ease-out;
	}
	#menu-principal ul.actif {
		position: absolute;
		z-index: 1;
		top: max(8vh, 48px);
		transition: 1s ease-out;
	}
	#menu-principal ul li {
		display: flex;
		justify-content: right;
	}
	/*#menu-principal ul li:first-child button{
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}*/

	#menu-principal ul li:last-child a {
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.icone-menu {
		display: flex;
		border: 0;
		height: 8vh;
		width: 50vw;
		font-family: Anson;
		text-transform: uppercase;
		font-size: 1.8rem;
		text-align: center;
		align-items: center;
		line-height: 1.4rem;
		color: #fff;
		text-shadow: 1px 1px 1px var(--color-shadow-1);
		background-color: var(--color-nav);
		/*margin : 0.5rem 2vw;*/
		padding: 0 2.5vw;
		transition: 0.2s all;
		overflow: hidden;
	}
	.icone-menu:visited {
		color: blue;
	}

	.icone-menu:hover {
		/*border-radius: 8px;*/
		background-color: var(--color-button-back);
	}
	.icone-menu:active {
		box-shadow:
			inset -2px -2px 3px var(--color-button-shadow-1),
			inset 2px 2px 3px var(--color-button-shadow-2);
	}
	.menu-actif {
		color: rgb(255, 0, 0) !important;
	}

	#hamburger {
		position: absolute;
		right: 10px;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		height: 50px;
		width: 50px;
	}
    .croix :first-child {
		transform-origin: left;
		transform: translateY(-8.2px) rotate(45deg);
		transition: 0.2s ease-out !important;
	}
	.croix :nth-child(2) {
		display: none !important;
	}
	.croix :last-child {
		transform-origin: left;
		transform: translateY(8.2px) rotate(-45deg);
		transition: 0.2s ease-out !important;
	}

	#hamburger .hamburger {
		background-color: white;
		display: block;
		width: 100%;
		height: 5px;
		border-radius: 8px;
		transition: 0.1s;
	}

	@media screen and (min-width: 770px) {
		#hamburger {
			display: none;
		}
		#menu-principal ul {
			position: relative;
			flex-direction: row;
			top: 0;
			justify-content: center;
		}
		.icone-menu {
			width: inherit;
			border-radius: 3px;
		}
		#menu-principal ul li:last-child a {
			border-bottom-right-radius: 3px;
			border-bottom-left-radius: 3px;
		}
	}
	@media screen and (min-width: 1050px) {
		#menu-principal {
			transform: translate(32px, 32px);
			width: 70vw;
			flex-wrap: nowrap;
			justify-content: left;
		}
		.icone-menu {
			font-size: 1.4rem;
			padding: 0vh 3vw;
		}
	}
</style>


