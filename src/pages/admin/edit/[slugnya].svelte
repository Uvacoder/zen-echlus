<script type="text/javascript">
	let judul
	let markdown

	$: document.title = `Edit ${judul}`

	export let slugnya

	import {stringify} from 'qs'
	import {post} from 'axios'
	import {slug} from 'kumpulan-tools'
	import marked from 'marked'
	import highlight from 'highlight.js'
	import {goto, redirect} from '@roxi/routify'
	import {sql, tulisan} from '../../api' // id, judul, markdown, html, slug, tanggal

	marked.setOptions({
		breaks: true,
		highlight: function(code, lang){
			const language = highlight.getLanguage(lang) ? lang : 'javascript'
			return highlight.highlight(code, {language}).value
		}
	})

	async function dapatkan(){
		const {data} = await post(sql, stringify({
			id: tulisan,
			kunci: 'dapatkan',
			slug: slugnya
		}))
		judul = data[0].judul
		markdown = data[0].markdown
	}
	dapatkan()

	async function update(){
		const diubah = await post(sql, stringify({
			id: tulisan,
			kunci: 'update',
			judul,
			markdown,
			html: marked(markdown),
			slug: slugnya,
			cuplikan: markdown.substring(0, 198),
			username: localStorage.username,
			password: localStorage.password
		}))
		if (diubah) {
			alert('Tulisan sudah diupdate')
		}
	}

	async function hapus(){
		const tanya = confirm('Hapus kah?')
		if (tanya) {
			const mulaiHapus = await post(sql, stringify({
				id: tulisan,
				kunci: 'hapus',
				slug: slugnya,
				username: localStorage.username,
				password: localStorage.password
			}))
			if (mulaiHapus) {
				$redirect('/admin')
			}
		}
	}
</script>

<form action="" on:submit|preventDefault={update}>
	<!-- {new Date(Date.now())} -->
	<input class="kotak" bind:value={judul} type="text" required placeholder="Judul">
	<textarea name="" class="kotak" id="" bind:value={markdown} cols="30" rows="10" placeholder="Isi"></textarea>
	<div class="flex gap-5">
		<input type="submit" class="kotak tombol submit" value="Perbarui">
		<div class="kotak tombol hapus" on:click={hapus}>Hapus</div>
	</div>
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
	.tombol {
		@apply cursor-pointer text-center user-select-none
	}
	.hapus {
		@apply bg-red-500 text-white
	}
	.submit {
		@apply user-select-none cursor-pointer
	}
</style>