<script>
    import profil from '$lib/images/photo-profil.jpg'
</script>

<div id = "en_tete">       
    <div id="cadre-photo-profil">
    <img id="photo-profil" src = {profil} alt ="profil">
</div>
 <h1 id="titre-page"> Mon portfolio </h1>
 </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor nesciunt itaque est. Quod nihil ipsum nesciunt rem exercitationem repellat, nemo id assumenda perferendis natus voluptatum nisi fugit cum repellendus.<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eaque vero error sint reiciendis optio officiis. Cupiditate sed incidunt vel ab dignissimos harum provident, dolor ut nam tempore atque obcaecati!</p>
    
 <h2 id="titre-projet"> mes projets</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor nesciunt itaque est. Quod nihil ipsum nesciunt rem exercitationem repellat, nemo id assumenda perferendis natus voluptatum nisi fugit cum repellendus.<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eaque vero error sint reiciendis optio officiis. Cupiditate sed incidunt vel ab dignissimos harum provident, dolor ut nam tempore atque obcaecati!</p>

<style>
    #cadre-photo-profil{
    margin:15px 15px 15px 24px;
    border-image:none;
    border-style:solid;
    border-color:black;
    border-radius:50%;
    border-width:2px;
    overflow:hidden;
    flex-shrink: 0;
}
#photo-profil, #cadre-photo-profil{
    height:28vw;
    width:28vw;
    min-height:110px;
    min-width:110px;
    max-height: 350px;
    max-width: 350px;
}
@media screen and (min-width : 770px){
    #cadre-photo-profil{margin:15px 15px 15px 48px;}
    #photo-profil,#cadre-photo-profil{ 
        min-height:192px;
        min-width:192px;
        max-height:250px;
        max-width:250px;}
}
@media screen and (min-width: 1050px){
    #cadre-photo-profil{margin-top:48px;}
}
</style>