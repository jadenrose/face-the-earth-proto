<template>
    <span :class="{ Typography: true, [className]: className }">
        {{ content }}
    </span>
</template>

<script>
export default {
    name: 'Typography',
    props: [
        'className',
        'content'
    ],
}
</script>

<style>
@import "./typography.css";
</style>