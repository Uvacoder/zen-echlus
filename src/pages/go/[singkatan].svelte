<script>
	document.title = 'Redirect'

	export let singkatan

	import {post} from 'axios'
	import {stringify} from 'qs'
	import {sql, link} from './api'

	async function mulai(){
		const {data} = await post(sql, stringify({
			id: link,
			kunci: 'dapatkan',
			singkatan
		}))
		location.href = data[0].tujuan
	}
	mulai()
</script>