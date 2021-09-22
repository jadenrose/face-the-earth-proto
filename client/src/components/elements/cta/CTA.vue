<template>
    <div class="cta-container">
        <div class="btn-frame">
            <button :style="styleVars" class="cta">
                <span>{{ text }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
    props: {
        text: String
    },
    setup () {
        const styleVars = computed(() => {
            const randRotation = Math.floor(Math.random() * 10) - 5
            const randRotationReverse = randRotation * -1

            const randClipPath = `
				polygon(
					${Math.floor(Math.random() * 5) + 5}%
					${Math.floor(Math.random() * 5)}%,

					${Math.floor(Math.random() * 5) + 95}%
					${Math.floor(Math.random() * 5)}%,

					${Math.floor(Math.random() * 5) + 95}%
					${Math.floor(Math.random() * 5) + 95}%,

					0%
					${Math.floor(Math.random() * 5) + 95}%
				)
			`

            return {
                '--random-rotation': `rotate(${randRotation}deg)`,
                '--random-rotation-reverse': `rotate(${randRotationReverse}deg)`,
                '--random-clip-path': randClipPath,
            }
        })

        return { styleVars }
    }
}
</script>

<style>
@import "./cta.css";
</style>