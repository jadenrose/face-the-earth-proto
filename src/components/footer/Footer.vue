<template>
	<footer class="pv-med">
		<div class="container-wide">
			<Logo />
		</div>
	</footer>
</template>

<script>
import getLinks from '../../composables/getLinks'
import Logo from '../elements/logo/Logo.vue'

export default {
	name: 'Header',
	components: {
		Logo
	},
	setup () {
		const { navLinks, extLinks } = getLinks()

		return { navLinks, extLinks }
	}
}
</script>

<style lang="scss">
/*
==============
footer styles
==============
*/

.footer-nav {
	flex-direction: column;
}
</style>