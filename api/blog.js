const {get, post} = require('axios')
const {stringify} = require('qs')
const {sql, tulisan} = require('./api')

const link = 'https://zen.echlus.my.id'

async function ambilData(req, res){
	let {data: template} = await get(`${link}/template.html`)

	const slug = req.url.split('/')[1]

	const {data} = await post(sql, stringify({
		id: tulisan,
		kunci: 'dapatkan',
		slug
	}))

	// id, judul, markdown, html, slug, tanggal, cuplikan

	if (data) {

		let {judul, cuplikan, slug, tanggal} = data[0]
		cuplikan = cuplikan.replace(/"/g, "").replace(/'/g, "")

		template = template.replace(/<title>.*<\/title>/, `
			<title>${judul}</title>
			<meta name="description" content="${cuplikan}" />
			<link rel="canonical" href="${link}/${slug}" />
			<meta property="og:locale" content="id_ID" />
			<meta property="og:type" content="article" />
			<meta property="og:title" content="${judul}" />
			<meta property="og:description" content="${cuplikan}" />
			<meta property="og:url" content="${link}/${slug}" />
			<meta property="og:site_name" content="Zen" />
			<meta property="article:publisher" content="https://www.facebook.com/mzaini30/" />
			<meta property="article:author" content="https://www.facebook.com/mzaini30/" />
			<meta property="article:published_time" content="${Date(tanggal).toString()}" />
			<meta property="article:modified_time" content="${Date(tanggal).toString()}" />
			<meta property="og:image" content="https://cdn.statically.io/og/${encodeURIComponent(judul)}.jpg" />
			<meta property="og:image:width" content="2048" />
			<meta property="og:image:height" content="1170" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@zenia2020" />
			<meta name="twitter:site" content="@zenia2020" />
			<meta name="twitter:label1" content="Ditulis oleh" />
			<meta name="twitter:data1" content="Zen" />
		`)
	}

	res.send(template)
}

module.exports = ambilData
