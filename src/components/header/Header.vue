<template>

	<div class="container-wide">
		<div class="navbar header-nav">
			<Logo />
		
			<nav>
				<ul class="navlist">
					<li v-for="link in navLinks" :key="link.id">
						<router-link :to="{ name: link.view }">{{ link.text }}</router-link>
					</li>
				</ul>
				<ul class="social-links">
					<li v-for="link in extLinks" :key="link.id">
						<a :href="link.url" target="_blank">
							<svg>
								<use :href="link.icon+'#img'" :aria-label="link.name"></use>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
			
			<Hamburger />
		</div>
	</div>
</template>

<script>
import getLinks from '../../composables/getLinks'
import Logo from '../elements/logo/Logo.vue'
import Hamburger from '../elements/hamburger/Hamburger.vue'

export default {
	name: 'Header',
	components: {
		Logo,
		Hamburger
	},
	setup () {
		const { navLinks, extLinks } = getLinks()

		return { navLinks, extLinks }
	}
}
</script>

<style lang="scss">
/*
==============
navbar styles
==============
*/
nav {
	display: none;
	margin: 0;
	

	@include tablet() {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		
		@include tablet() {
			display: flex;
			align-items: center;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
		display: block;
		padding: 0.5em 1em;
		font-weight: 900;
		letter-spacing: 1px;

		&:hover {
			color: $accent-main;
		}
	}

}

.social-links {
	margin-left: $spacing-small;
	
	a {
		padding: 0;
		margin-left: 1em;

		&:hover svg {
			color: $accent-main;
		}
	}

	svg {
		width: 2.5em;
		height: 2.5em;
		
		color: $color-main;
	}
}

.container-wide {
	padding: 0;
	padding: 0 $vw-med;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: $spacing-small 0;
}

a.router-link-exact-active {
	color: $color-deact;
	cursor: default;

	&:hover {
		color: $color-deact;
	}
}


</style>