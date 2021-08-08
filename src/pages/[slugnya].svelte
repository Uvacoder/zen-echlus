<script>
	$: document.title = isinya.judul || '...'

	import '/src/aset/monokai.css'

	export let slugnya

	let isinya = {}

	const rasioIcon = 2

	import {post} from 'axios'
	import {stringify} from 'qs'
	import {sql, tulisan, support} from './api'

	async function dapatkan(){
		const {data} = await post(sql, stringify({
			id: tulisan,
			kunci: 'dapatkan',
			slug: slugnya
		}))
		isinya = data[0]
	}
	dapatkan()

	let listSupport

	async function ambilSupport(){
		const {data} = await post(sql, stringify({
			id: support,
			kunci: 'dapatkan',
			slug: slugnya
		}))
		listSupport = data
	}
	ambilSupport()

	let teksSupport

	async function kirimSupport(){
		const kirim = await post(sql, stringify({
			id: support,
			kunci: 'tambah',
			support: teksSupport,
			slug: slugnya
		}))
		if (kirim) {
			ambilSupport()
			teksSupport = ''
		}
	}
</script>

<div class="container">
	<h1 class="judul">{isinya.judul || ''}</h1>
	<div class="isi prose">
		{#if isinya.tanggal}
			<p><em>{new Date(+isinya.tanggal)}</em></p>
		{/if}
		{@html isinya.html || ''}
		<p><a href="/admin/edit/{slugnya}">edit</a></p>
	</div>

	<form action="" on:submit|preventDefault={kirimSupport}>
		<textarea required name="" id="" cols="30" rows="10" class="kotak" placeholder="Tulis support di sini" bind:value={teksSupport}></textarea>
		<input type="submit" class="kotak" value="Kirim support">
	</form>

	{#if listSupport}
		<div class="kumpulan-kotak">
			{#each listSupport as x}
				<div class="kotak">{x.support.trim()}</div>
			{/each}
		</div>
	{/if}

</div>

<a href="/"><svg width="{rasioIcon * 1.27}em" class='icon' height="{rasioIcon}em" viewBox="0 0 1664 1312"><path d="M1408 768v480q0 26-19 45t-45 19H960V928H704v384H320q-26 0-45-19t-19-45V768q0-1 .5-3t.5-3l575-474l575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 200L140 777q-12 8-24 7q-13-2-21-11l-62-74q-8-10-7-23.5T37 654L756 55q32-26 76-26t76 26l244 204V64q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="currentColor"></path></svg></a>

<style>
	* {
		@apply focus:outline-none;
	}
	.container {
		@apply p-4 pb-10
	}
	.judul {
		@apply text-3xl pb-3
	}
	.isi {
		@apply max-w-none
	}
	.icon {
		@apply fixed right-3 bottom-3
	}
	.kumpulan-kotak {
		@apply mt-10
	}
	form {
		@apply mt-10
	}
	textarea.kotak {
		@apply w-full
	}
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block m-6 mx-0 my-8 mt-0 border border-black p-3 whitespace-pre-wrap
	}
	[type="submit"].kotak {
		@apply cursor-pointer user-select-none bg-white focus:bg-gray-300;
	}
</style>
