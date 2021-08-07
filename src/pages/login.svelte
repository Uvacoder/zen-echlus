<script>
	document.title = 'Login'

	let username
	let password

	import {post} from 'axios'
	import {stringify} from 'qs'
	import {sql, akun} from './api'
	import {redirect} from '@roxi/routify'

	async function login(){
		const {data} = await post(sql, stringify({
			id: akun,
			kunci: 'cek',
			username,
			password
		}))
		if (data[0].banyak > 0){
			localStorage.username = username
			localStorage.password = password
			$redirect('/admin')
		} else {
			alert('Username dan password salah')
		}
	}
</script>

<form action="" on:submit|preventDefault={login}>
	<p>Username</p>
	<input type="text" required bind:value={username}>
	<p class="mt-5">Password</p>
	<input type="password" required bind:value={password}>
	<input type="submit" class="tombol" value="Login">
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
	.tombol {
		@apply mt-7 user-select-none cursor-pointer
	}
</style>