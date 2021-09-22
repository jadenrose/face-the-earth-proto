module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Face the Earth'
				return args
			})
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import '@/scss/_variables.scss';
					@import '@/scss/_mixins.scss';
				`
			}
		}
	}
}