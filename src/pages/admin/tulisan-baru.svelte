<script type="text/javascript">
	document.title = 'Tulisan baru'
</script>

<form action="">
	<input class="kotak" type="text" required placeholder="Judul">
	<textarea name="" class="kotak" id="" cols="30" rows="10" placeholder="Isi"></textarea>
	<input type="submit" class="kotak submit" value="Kirim">
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
	.submit {
		@apply user-select-none cursor-pointer
	}
</style>