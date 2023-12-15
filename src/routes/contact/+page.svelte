<script>
 async function handleSubmit(event) {
    event.preventDefault(); // 
    const form = event.target; 
    const formData = new FormData(form);
    console.log(formData);
    const data = Object.fromEntries(formData); 
    console.log(data)
    const response = await fetch('http://localhost:4001/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        console.error('Erreur lors de l\'envoi du formulaire');
    } else {
        console.log('Formulaire envoyé avec succès');
    }
}
</script>

<h1 id="titre-projet"> Me Contacter </h1>
          
<form on:submit|preventDefault={handleSubmit}>
    <label for="subject">Objet de votre message</label>
    <input type="text" name="object" id="">
    <label for="email">Votre e-mail</label>
    <input type="email" name="email" id="">
    <label for="message">Votre message</label>
    <textarea name="message" id="" cols="30" rows="10"></textarea>
    <button type="submit">Envoyer</button>
</form>
<style>
form {
    color: white;
}
</style>