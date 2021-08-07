<script>
	document.title = 'Admin'

	let listTulisan

	import {post} from 'axios'
	import {stringify} from 'qs'
	import {sql, tulisan} from '../api'

	async function dapatkan(){
		const {data} = await post(sql, stringify({
			id: tulisan,
			kunci: 'list'
		}))
		listTulisan = data
	}
	dapatkan()
</script>

{#if listTulisan}
	<div class="kotak">
		{#each listTulisan as x}
			<a href="/admin/edit/{x.slug}">{x.judul}</a>
		{/each}
	</div>
{/if}

<style>
	.kotak {
		box-shadow: 10px 10px 0 0 black;
		@apply block m-6 my-8 mt-0 border border-black
	}
	.kotak a {
		@apply block p-3 hover:bg-gray-100;
	}
</style>