const {post} = require("axios")
const {stringify} = require("qs")
const {sql, tulisan} = require("./api")

async function ambilData(req, res){
	const {data} = await post(sql, stringify({
		id: tulisan,
		kunci: 'slug-aja'
	}))
	if (data) {
		res.writeHead(200, {
			'Content-Type': 'image/svg+xml'
		})
		let isi = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`
		for (let x of data){
			isi += `
				<url>
			    	<loc>https://zen.echlus.my.id/${x.slug}</loc>
			    </url>
			`
		}
		isi += `<url><loc>https://zen.echlus.my.id/</loc></url>`
		isi += `</urlset>`
		res.write(isi)
		res.end()
	}
}

module.exports = ambilData
