<template>
    <svg
        @click="closeMobileMenu"
        class="close-btn"
        id="mobile-menu-open"
        alt="open navigation menu"
        aria-label="open navigation menu"
    >
        <use href="@/../public/assets/img/x.svg#img" />
    </svg>
</template>

<script>
import { inject } from 'vue'

export default {
    name: 'CloseBtn',
    setup () {
        const store = inject('store')

        const closeMobileMenu = () => {
            store.setShowMobileNav(false)
        }

        return {
            closeMobileMenu,
        }
    }
}
</script>