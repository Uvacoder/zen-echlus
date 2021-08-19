<script context='module'>
	import {sql, tulisan, support} from './api'
	import {headers} from '$lib/headers'

	export async function load({page, fetch}){
		let isinya = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=dapatkan&slug=${page.params.slugnya}`
		})
		isinya = await isinya.json()

		const listSupport = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${support}&kunci=dapatkan&slug=${page.params.slugnya}`
		})

		return {
			props: {
				isinya: isinya[0],
				listSupport: await listSupport.json(),
				slugnya: page.params.slugnya
			}
		}
	}
</script>

<script>
	export let isinya
	export let listSupport
	export let slugnya

	const rasioIcon = 2

	import Meta from '$lib/Meta.svelte'

	async function ambilSupport(){
		const getSupport = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${support}&kunci=dapatkan&slug=${slugnya}`
		})
		listSupport = await getSupport.json()
	}
	ambilSupport()

	let teksSupport

	async function kirimSupport(){
		const kirim = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${support}&kunci=tambah&support=${encodeURIComponent(teksSupport)}&slug=${slugnya}`
		})
		if (kirim) {
			ambilSupport()
			teksSupport = ''
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/monokai.css">
	<title>{isinya.judul}</title>
	<Meta slug={slugnya} judul={isinya.judul} cuplikan={isinya.cuplikan}></Meta>
</svelte:head>

<div class="konten">
	<h1 class="judul">{isinya.judul}</h1>
	<div class="aktifkan-prose">
		{#if isinya.tanggal}
			<p><em>{new Date(+isinya.tanggal)}</em></p>
		{/if}
		{@html isinya.html}
		<blockquote><p>Buat yang mau donasi untuk kelangsungan komunitas Echlus, silahkan transfer ke <a href="https://sociabuzz.com/hiyurigi/tribe">halaman donasi kami.</a></p></blockquote>
		<p><a href="/admin/edit/{slugnya}">edit</a></p>
	</div>

<!--
<div>
<div id="SC_TBlock_858415"></div>
<script type="text/javascript">
(sc_adv_out = window.sc_adv_out || []).push({
    id: 858415,
    domain: "n.ads5-adnow.com",
});
</script>
<script type="text/javascript" src="//st-n.ads5-adnow.com/js/a.js" async></script>
</div>
-->

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

	<a href="/"><svg width="{rasioIcon * 1.27}em" class='icon' height="{rasioIcon}em" viewBox="0 0 1664 1312"><path d="M1408 768v480q0 26-19 45t-45 19H960V928H704v384H320q-26 0-45-19t-19-45V768q0-1 .5-3t.5-3l575-474l575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 200L140 777q-12 8-24 7q-13-2-21-11l-62-74q-8-10-7-23.5T37 654L756 55q32-26 76-26t76 26l244 204V64q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="currentColor"></path></svg></a>
</div>

<style>
	.konten {
		@apply p-4 pb-10 md:(w-[70%] mx-auto);
	}
	.judul {
		@apply text-3xl pb-3
	}
	:global(.aktifkan-prose) {
		@apply prose max-w-none
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
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block m-6 mx-0 my-8 mt-0 border border-black p-3 whitespace-pre-wrap
	}
	textarea.kotak {
		@apply w-full
	}
	[type="submit"].kotak {
		@apply cursor-pointer user-select-none bg-white focus:bg-gray-300;
	}
</style>
