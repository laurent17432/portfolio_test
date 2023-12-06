<script>
    import twitter from '$lib/images/Logo_of_Twitter.svg.png';
    import gmail from '$lib/images/logo-gmail.png';
    import linkedin from '$lib/images/logo-linkedin.png';
    import github from '$lib/images/logo-github.png';
</script>
<footer>
    <nav id="pied-page">
  Mes réseaux : 
  <a href="https://twitter.com/kalindor62"><img class="icones" src={twitter} alt="icone twitter" title="twitter"></a>
  <a href="mailto:lepoivre.laurent@gmail.com"><img class="icones" src={gmail} alt="icone gmail" title="gmail"></a>
  <a href="https://www.linkedin.com/in/laurent-lepoivre/"><img class="icones" src={linkedin} alt="icone linkedin" title="linkedin"></a>
  <a href="https://github.com/laurentlepoivre"><img class="icones" src={github} alt="icone github" title="github"></a>
   </nav>
</footer>
<style>
/*pied de page*/
footer{position:relative;
    width:100%;
    display:flex;
    color: white;
    height: 10vh;
    min-height:55px;
    background :linear-gradient(rgba(255,249,229,0.17),rgba(255,7,7,0.53));}
#pied-page{
    display:flex;
    min-height:55px ;
     height:10vh;
     align-items:center;
    }
.icones{height:40px;
    width:48px;
     margin:0 4vw;
     align-items:center;}

</style>