<template>
    <MobileNav v-if="store.state.showMobileNav && width < 1200" />

    <nav v-else class="nav">
        <Navlist v-if="width > 1200" />

        <Hamburger v-else />

        <SocialLinks v-if="width > 600" />
    </nav>
</template>

<script>
import { inject, onMounted, onUnmounted, ref, computed } from 'vue'

import Navlist from '../navlist/Navlist.vue'
import SocialLinks from '../socialLinks/SocialLinks.vue'
import Hamburger from '../elements/hamburger/Hamburger.vue'
import MobileNav from '../nav/MobileNav.vue'

export default {
    name: 'Nav',
    components: {
        Hamburger,
        MobileNav,
        Navlist,
        SocialLinks,

    },
    setup () {
        const windowWidth = ref(0)

        const setWindowWidth = () => {
            windowWidth.value = window.innerWidth
        }

        onMounted(() => {
            setWindowWidth()
            window.addEventListener('resize', setWindowWidth)
        })
        onUnmounted(() => window.removeEventListener('resize', setWindowWidth))

        const store = inject('store')

        const width = computed(() => windowWidth.value)

        return {
            store,
            width,
        }
    }
}
</script>

<style>
@import "./nav.css";
</style>