(function(){
	let bagianCounter = document.createElement('div')
	bagianCounter.innerText = '0 kata'

	const warnaTeks = '#15803d'
	const warnaBackground = '#bbf7d0'

	const style = {
		position: 'fixed',
		'z-index': 10,
		bottom: '10px',
		left: '10px',
		background: warnaBackground,
		padding: '5px 10px',
		color: warnaTeks,
		border: `1px solid ${warnaTeks}`,
		'border-radius': '5px'
	}

	for (let n in style){
		bagianCounter.style[n] = style[n]
	}

	document.body.appendChild(bagianCounter)

	function hitungJumlahKata(){
		let teks = document.querySelector('.editable').innerText.trim()
		let banyakKata = teks.split('\n').map(x => x.split(' ')).flat().filter(x => x).length

		bagianCounter.innerText = `${banyakKata} kata`
	}
	hitungJumlahKata()
})()