<template>
  <section class="hero">
	  <Header />
	  <div class="container pv-big">
			<HeroText />

			<CTA text="check out our music" />
	  </div>
  </section>

  <MainCopy />
</template>

<script>
import Header from '../components/Header.vue'
import CTA from '../components/subs/CTA.vue'
import MainCopy from '../components/MainCopy.vue'
import HeroText from '../components/subs/HeroText.vue'

export default {
  name: 'Home',
  components: {
	  Header,
	  CTA,
	  MainCopy,
	  HeroText
  }
}
</script>

<style lang="scss">
/* home */
.hero {
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;

	overflow: hidden; // cut off blur

	&:after {
		position: absolute;
		content: '';
		background: url('../assets/img/band-photo.png');
		background-size: cover;
		background-position: center;
		filter: blur(1px) saturate(50%);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		z-index: -1;
	}
}
</style>
