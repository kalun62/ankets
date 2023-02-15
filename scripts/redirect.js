
const body = document.querySelector('body'),
	 loader = document.createElement('div'),
	 error = document.createElement('div')

loader.classList.add('loader');
error.classList.add('error');

loader.innerHTML = `<img src="img/loader.gif" alt="loader">`;
body.prepend(loader);

(async function fetchLink() {
	try{
		const {data} =  await axios.get('https://script.google.com/macros/s/AKfycbwIhBEfbWwbjwY3K1l4-KLLlX_CHi7PSIZaD08204vB0lvxTvqUbJcZolAb8rykfWom/exec')
		const linkForm = data.link[0].link;

		// setTimeout(() => {
		// 	window.location.replace(linkForm);
		// },10)
	}catch{
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
}())


