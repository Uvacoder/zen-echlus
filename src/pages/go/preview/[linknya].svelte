<script>
	export let linknya

	document.title = 'Preview'
</script>

<form action="">
	<p>Hasilnya:</p>
	<input type="url" readonly value='https://zen.echlus.my.id/go/{linknya}'>
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