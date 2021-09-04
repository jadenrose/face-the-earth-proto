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
import Header from '../../components/header/Header.vue'
import CTA from '../../components/elements/cta/CTA.vue'
import MainCopy from '../../components/mainCopy/MainCopy.vue'
import HeroText from '../../components/elements/heroText/HeroText.vue'

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

<style>

@import './home.css';

</style>
