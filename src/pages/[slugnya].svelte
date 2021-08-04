<script>
	document.title = 'Hello World'

	export let slugnya

	const rasioIcon = 2
</script>

<div class="container">
	<h1 class="judul">Hello World</h1>
	<div class="isi">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos possimus hic nesciunt similique eum quia amet qui omnis magnam accusamus eaque modi, architecto, ullam cupiditate ad, nulla suscipit blanditiis provident.</p>
		<ol>
			<li>hello</li>
			<li>hello</li>
			<li>hello</li>
			<li>hello</li>
			<li>hello</li>
		</ol>
	</div>

	{#key slugnya}
		<div>
			<script src="https://utteranc.es/client.js"
			        repo="mzaini30/zen-echlus"
			        issue-term="pathname"
			        theme="github-light"
			        crossorigin="anonymous"
			        async>
			</script>
		</div>
	{/key}
</div>

<a href="/"><svg width="{rasioIcon * 1.27}em" class='icon' height="{rasioIcon}em" viewBox="0 0 1664 1312"><path d="M1408 768v480q0 26-19 45t-45 19H960V928H704v384H320q-26 0-45-19t-19-45V768q0-1 .5-3t.5-3l575-474l575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7L832 200L140 777q-12 8-24 7q-13-2-21-11l-62-74q-8-10-7-23.5T37 654L756 55q32-26 76-26t76 26l244 204V64q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" fill="currentColor"></path></svg></a>

<style>
	.container {
		@apply p-4 pb-10
	}
	.judul {
		@apply text-3xl pb-3
	}
	.isi {
		@apply prose max-w-none
	}
	.icon {
		@apply fixed right-3 bottom-3
	}
</style>