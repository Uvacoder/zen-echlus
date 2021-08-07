<script type="text/javascript">
	document.title = 'Tulisan baru'

	import {stringify} from 'qs'
	import {post} from 'axios'
	import {slug} from 'kumpulan-tools'
	import marked from 'marked'
	import highlight from 'highlight.js'
	import {goto} from '@roxi/routify'
	import {sql, tulisan} from '../api' // id, judul, markdown, html, slug, tanggal

	let judul
	let markdown

	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			const language = highlight.getLanguage(lang) ? lang : 'javascript'
			return highlight.highlight(code, {language}).value
		}
	})

	async function tambah(){
		const slugnya = slug(judul)

		const kirim = await post(sql, stringify({
			id: tulisan,
			kunci: 'tambah',
			judul,
			markdown,
			html: marked(markdown),
			cuplikan: markdown.substring(0, 198),
			slug: slugnya,
			tanggal: Date.now()
		}))
		if (kirim) {
			$goto(`/admin/edit/${slugnya}`)
		}
	}
</script>

<form action="" on:submit|preventDefault={tambah}>
	<!-- {new Date(Date.now())} -->
	<input class="kotak" bind:value={judul} type="text" required placeholder="Judul">
	<textarea name="" class="kotak" id="" bind:value={markdown} cols="30" rows="10" placeholder="Isi"></textarea>
	<input type="submit" class="kotak submit" value="Kirim">
</form>

<style>
	* {
		@apply focus:outline-none;
	}
	form {
		@apply p-5 pt-0
	}
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block my-8 mt-0 border border-black w-full p-3 bg-white
	}
	.submit {
		@apply user-select-none cursor-pointer
	}
</style>