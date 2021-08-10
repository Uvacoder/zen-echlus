/*
fetch = require("node-fetch")
FormData = require("form-data")
btoa = require("btoa")
sql = 'https://mzaini30.nasihosting.com/database/sql.php'
	tulisan = '3fd512b70b35cf2c220d2625020b9dce' // id, judul, slug, isi, gambar, label, isPublish
module.exports = (req, res) => {
	body = new FormData
	body.append("sql", btoa(btoa(`
		select slug from database_${tulisan}
		where isPublish = 'true'
		order by id desc
	`)))
	fetch(sql, {
		method: "post",
		body
	}).then(x => x.json()).then(hasil => {
		res.writeHead(200, {
			"Content-Type": "image/svg+xml"
		})
		isi = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`
		for (x of hasil){
			isi += `
	     <url>
	      <loc>https://duniazen.com/${x.slug}</loc>
	     </url>
			`
		}
		isi += `<url><loc>https://duniazen.com</loc></url>`
		isi += "</urlset>"
		res.write(isi)
		res.end()
	})
}
*/

const {post} = require("axios")
const {stringify} = require("qs")
const {sql, tulisan} = require("./api")
