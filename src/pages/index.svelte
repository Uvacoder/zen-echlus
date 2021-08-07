<script>
	document.title = 'Zen'

	import {post} from 'axios'
	import {stringify} from 'qs'
	import {sql, tulisan} from './api'

	let semuaTulisan

	async function dapatkan() {
		const {data} = await post(sql, stringify({
			id: tulisan,
			kunci: 'list-beranda'
		}))
		semuaTulisan = data
	}
	dapatkan()
</script>

<h1>Zen</h1>

{#if semuaTulisan}
	{#each semuaTulisan as x}
		<a href="/{x.slug}" class="kotak">
			<h2>{x.judul}</h2>
			<p>{x.cuplikan}....</p>
		</a>
	{/each}
{/if}

<a href="/admin" class="kotak">Admin</a>

<style>
	h1 {
		font-family: 'MonteCarlo', cursive;
		@apply text-7xl text-center py-7
	}
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block m-6 my-8 mt-0 border border-black p-3
	}
	.kotak h2 {
		@apply text-2xl pb-2 pt-1
	}
</style>