<script>
	let tampil = false

	import {post} from 'axios'
	import {stringify} from 'qs'
	import {sql, akun} from '../api'
	import {redirect} from '@roxi/routify'

	async function cek(){
		if (localStorage.username && localStorage.password) {
			const {data} = await post(sql, stringify({
				id: akun,
				kunci: 'cek',
				username: localStorage.username,
				password: localStorage.password
			}))
			if (data[0].banyak > 0) {
				tampil = true
			} else {
				$redirect('/login')	
			}
		} else {
			$redirect('/login')
		}
	}
	cek()
</script>

{#if tampil}
	<a href="/admin/menu" class="menu"><svg width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path></g></svg></a>

	<div class="isi">
		<slot></slot>
	</div>
{/if}

<style>
	.menu {
		@apply fixed right-3 top-3 cursor-pointer user-select-none
	}
	.isi {
		@apply pt-13
	}
</style>