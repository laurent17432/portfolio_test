<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import './stylepage.css';
	import { onMount } from 'svelte';
	import {backgroundInit, backgroundReload} from './astro';
	onMount(() => {
		(sessionStorage.getItem('fond-ecran')===null) ? backgroundInit() :backgroundReload();
	});
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
