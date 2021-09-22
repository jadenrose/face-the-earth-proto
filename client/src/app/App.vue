<template>
    <Header v-if="notHome" />

    <router-view />

    <Footer />
</template>

<script>
import { provide, computed } from 'vue'
import { useRoute } from 'vue-router'

import store from '../store/store'
import Header from '../components/header/Header.vue'
import Footer from '../components/footer/Footer.vue'

export default {
    components: {
        Header,
        Footer
    },
    setup () {
        provide('store', store)

        const route = useRoute()
        const notHome = computed(() => route.name !== 'Home')

        return {
            notHome,
        }
    }
}

</script>

<style lang="scss">
@import "./app.css";
</style>
