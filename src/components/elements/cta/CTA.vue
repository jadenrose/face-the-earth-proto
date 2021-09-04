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
			const rotation = randRotation + 'deg'
			const rotationReverse = (randRotation * -1) + 'deg'
			const clipPathArr =  [
				[
					Math.floor(Math.random() * 5) + 5,
					Math.floor(Math.random() * 5),
				],
				[
					Math.floor(Math.random() * 5) + 95,
					Math.floor(Math.random() * 5),
				],
				[
					Math.floor(Math.random() * 5) + 95,
					Math.floor(Math.random() * 5) + 95,
				],
				[
					0,
					Math.floor(Math.random() * 5) + 95,
				],
			]

			let clipPath = ''
			for (let i=0; i<clipPathArr.length; i++) {
				clipPath += `${clipPathArr[i][0]}% ${clipPathArr[i][1]}%`
				if (i < clipPathArr.length - 1) clipPath += ',' 
			}

			console.log(clipPath)

			return {
				'--random-rotation': rotation,
				'--random-rotation-reverse': rotationReverse,
				'--random-shape': clipPath,
			}
		})

		return { styleVars }
	}
}
</script>

<style lang="scss">
.cta {
	appearance: none;
	border: none;
	background: $accent-main;
	color: $background;
	font-family: inherit;
	font-size: 1rem;
	font-weight: $bold;
	text-transform: uppercase;
	padding: 2em;

	&:hover,
	&:focus {
		background: $accent-hover;
	}

	&:active {
		background: $accent-main;
	}

	transform: rotate(var(--random-rotation));
	clip-path: polygon(var(--random-shape));
	// 5-15% 0-10%, 90-95% 0-10%, 95-100% 90-100%, 0% 90-100%

	span {
		display: block;
		transform: rotate(var(--random-rotation-reverse));
	}
}
</style>