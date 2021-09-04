<template>
  	<router-link class="logo" :to="{ name: 'Home' }">
		<svg alt="face the earth logo" aria-label="face the earth logo">
			<use href="@/assets/img/logo-fte.svg#img"></use>
		</svg>
	</router-link>
</template>

<script>
export default {
	name: 'Logo'
}
</script>

<style lang="scss">
.logo {
	display: block;

	svg {
		color: $color-main;
		width: 5em;
		height: 5em;
		cursor: pointer;
	}
}
</style>