<template>
    <div class="hero-container mb-med">
        <h1 class="heading-logo" aria-label="Face the Earth">
            <img
                class="logo big"
                src="@/../public/assets/img/logo-big.svg"
                alt="Face the Earth"
                aria-label="Face the Earth"
            />
        </h1>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.heading-logo {
    font-size: 1rem;
    margin: 0;
    padding: 0;
}

.logo.big {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    @include tablet {
        margin: 0;
    }
}
</style>