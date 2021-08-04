<script>
	document.title = 'Zen'
</script>

<h1>Zen</h1>

{#each Array(10) as x}
	<a href="/lorem-ipsum" class="kotak">
		<h2>Judulnya lorem</h2>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Maiores, a. Saepe ex excepturi fugit dolore laudantium alias quos quis totam, dicta. Omnis nulla molestias vel a natus odit tempora aliquam....</p>
	</a>
{/each}

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