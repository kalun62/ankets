 (async function fetchLink() {
	const {data} =  await axios.get('https://script.google.com/macros/s/AKfycbwIhBEfbWwbjwY3K1l4-KLLlX_CHi7PSIZaD08204vB0lvxTvqUbJcZolAb8rykfWom/exec')
	const linkForm = data.link[0].link;

	setTimeout(() => {
		window.location.replace(linkForm);
	},10)
}())
