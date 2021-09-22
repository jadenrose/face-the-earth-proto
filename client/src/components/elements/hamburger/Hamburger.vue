<template>
    <svg
        @click="openMobileMenu"
        class="hamburger"
        id="mobile-menu-open"
        alt="open navigation menu"
        aria-label="open navigation menu"
    >
        <use href="@/../public/assets/img/menu.svg#img" />
    </svg>
</template>

<script>
import { inject } from 'vue'

export default {
    name: 'Hamburger',
    setup () {
        const store = inject('store')

        const openMobileMenu = () => {
            store.setShowMobileNav(true)
        }

        return {
            openMobileMenu,
        }
    }

}
</script>

<style>
@import "./hamburger.css";
</style>