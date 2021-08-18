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

<script context='module'>
	import {sql, tulisan} from './api'
	import {headers} from '$lib/headers'

	export async function load({fetch}){
		const datanya = await fetch(sql, {
			method: 'post',
			headers,
			body: `id=${tulisan}&kunci=list-beranda`
		})
		return {
			props: {
				semuaTulisan: await datanya.json()
			}
		}
	}
</script>

<script>
	import Meta from '$lib/Meta.svelte'
	export let semuaTulisan
</script>

<svelte:head>
	<title>Zen</title>
	<Meta slug='' cuplikan='Blog yang membahas tentang frontend developing dan psikologi' judul='Zen'></Meta>
</svelte:head>

<h1>Zen</h1>

{#each semuaTulisan as x}
	<a href="/{x.slug}" class="kotak">
		<h2>{x.judul}</h2>
		<p>{x.cuplikan}....</p>
	</a>
{/each}

<a href="/admin/tulisan-baru" class="kotak">Tulis baru</a>