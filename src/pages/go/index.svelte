<script>
	document.title = 'Go'

	import randomatic from 'randomatic'
	import {stringify} from 'qs'
	import {post} from 'axios'
	import {sql, link} from './api'
	import {goto} from '@roxi/routify'

	let tujuan
	let singkatan

	async function buat(){
		singkatan = randomatic('a0', 4)
		const {data} = await post(sql, stringify({
			id: link,
			kunci: 'cek',
			singkatan
		}))
		if (data[0].banyak > 0) {
			buat()
		} else {
			const buatBaru = await post(sql, stringify({
				id: link,
				kunci: 'tambah',
				tujuan, singkatan
			}))
			if (buatBaru) {
				$goto(`/go/preview/${singkatan}`)
			}
		}
	}
</script>

<form action="" on:submit|preventDefault={buat}>
	<p>Masukkan link:</p>
	<input type="url" bind:value={tujuan} required>
</form>

<style>
	* {
		@apply focus:outline-none;
	}
	form {
		@apply p-5
	}
	input {
		@apply w-full block border border-black p-3;
		box-shadow: 10px 10px 0 0 black;
	}
</style>