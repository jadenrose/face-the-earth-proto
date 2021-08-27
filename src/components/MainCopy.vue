<template>
	<section class="about pv-med">
		<div class="container">
			<h2>about us</h2>
			<p>Formed back in late 2019, we’re an alternative rock band emerging straight out of Red Deer, Alberta Canada.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna nulla vestibulum molestie volutpat in id. Blandit aliquet sem massa nulla morbi. Ac eget eu facilisis amet. A suspendisse feugiat sit vitae, sed risus nulla elit volutpat.</p>
			<p class="mb-med">Check out our EP on all major streaming services today!</p>

			<CTA text="check out our music" />
		</div>
	</section>
</template>

<script>
import CTA from './subs/CTA.vue'

export default {
	name: 'About',
	components: {
		CTA
	}
}
</script>

<style>

</style>