<script>
	document.title = 'Admin'

	let listTulisan
</script>

{#if listTulisan}
	<div class="kotak">
		{#each listTulisan as x}
			<a href="/admin">Beranda admin</a>
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