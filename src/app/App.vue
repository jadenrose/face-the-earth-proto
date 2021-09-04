<template>
    <Header v-if="notHome" />
	
    <router-view />

    <Footer />
</template>

<script>
import Header from '../components/header/Header.vue'
import Footer from '../components/footer/Footer.vue'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'

export default {
    components: {
        Header,
        Footer
    },
    setup () {
        const route = useRoute()

        const notHome = computed(() => route.name !== 'Home')

        return {
            notHome,
        }
    }
}

</script>

<style lang="scss">
@import "../assets/styles/global.css";
</style>
