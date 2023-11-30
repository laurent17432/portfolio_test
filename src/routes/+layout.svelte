<script>
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
import './styles.css';
import './stylepage.css';
</script>

<Header/>
<main>
    <slot/>
</main>
<Footer/>
