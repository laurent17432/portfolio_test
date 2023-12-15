 export function backgroundInit() {
	fetch('http://localhost:4001/fichiers')
		.then((res) => {
			console.log('coucou');
			return res.json();
		})
		.then((data) => {
			sessionStorage.setItem('fond-ecran', JSON.stringify(data.req));
			backgroundReload();
		});
}
export function backgroundReload(){
     const fondEcran = JSON.parse(sessionStorage.getItem('fond-ecran'));
     const nbfichiers = fondEcran.length;
     const aleat = Math.floor(Math.random() * nbfichiers);
     const chemin = fondEcran[aleat];
     const body = document.getElementsByTagName('body')[0];
     body.style.background = `url(src/lib/images/fond-ecran/${chemin}.jpg) no-repeat fixed  center`;
     body.style.backgroundSize= "cover";
}
