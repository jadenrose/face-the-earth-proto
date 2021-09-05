<template>
    <section class="hero">
        <Header />
        <main class="container pv-big">
            <HeroText />

            <CTA text="check out our music" />
        </main>
    </section>

    <About />
</template>

<script>
import Header from '../../components/header/Header'
import CTA from '../../components/elements/cta/CTA'
import HeroText from '../../components/elements/heroText/HeroText'
import About from '../../components/about/About'

export default {
    name: 'Home',
    components: {
        Header,
        CTA,
        HeroText,
        About
    }
}
</script>

<style>
@import "./home.css";
</style>
