<script>
	import '../app.scss';
	import BaseFooter from '$lib/BaseFooter.svelte'
	import BaseHeader from '$lib/BaseHeader.svelte'
</script>

<BaseHeader />
<div class="main">
	<slot />
</div>
<BaseFooter />

<style lang="scss">
	.main {
		min-height: 90vh;
		padding: 50px 200px;
		background-color: #F3F3F3;
	}
</style>
