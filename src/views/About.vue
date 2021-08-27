<template>
  about
</template>

<script>
export default {

}
</script>

<style lang="scss">
/* about */
.about {
	position: relative;
	z-index: 1;

	&:after {
		position: absolute;
		content: '';
		background: url('../assets/img/fractures-watermark.png') no-repeat;
		background-position: bottom right;
		background-size: contain;
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0.05;
		z-index: -1;
	}
}
</style>