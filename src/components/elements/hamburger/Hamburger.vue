<template>
	<svg @click="$emit('open')" class="menu-open" alt="open navigation menu" aria-label="open navigation menu">
		<use href="@/assets/img/menu.svg#img" />
	</svg>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.menu-open {
	display: block;
	cursor: pointer;
	width: 3em;
	height: 3em;

	@include tablet() {
		display: none;
	}
}
</style>