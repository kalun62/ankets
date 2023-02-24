
const body = document.querySelector('body'),
	 loader = document.createElement('div'),
	 error = document.createElement('div'), 
	linkApp = 'https://script.google.com/macros/s/AKfycbw0NEz_qxgiPkGYCXuDe7Dn7ym45rPzZEj9ms_Rw7NeHh8riNUY8MaIimxih3OC3b2tqg/exec'

loader.classList.add('loader');
error.classList.add('error');

loader.innerHTML = `<img src="img/loader.gif" alt="loader">`;
body.prepend(loader);

function errorScreen () {
	body.innerHTML = ''
	body.prepend(error);
	error.innerHTML = 
		`<div class="txt">
				<p>
					Ошибка 404 <br>
					Кажется что-то сломалось...
				</p>
				<span>
					Такой страницы не существует, приходите позже!
				</span>
			</div>
			<img src="img/android.png" alt="android">
		`
}

(async function fetchLink() {
	try{
		const {data} =  await axios.get(linkApp)
		const linkForm = data;
		console.log(linkForm);
		if(!linkForm){
			errorScreen()
		}
		else{
			setTimeout(() => {
				window.location.replace(linkForm);
			},10)

		}

	}catch{
		errorScreen()
	}
}())


