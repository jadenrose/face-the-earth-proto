const getLinks = () => {
	const navLinks = [
		{
			id: 1,
			text: 'home',
			view: 'Home'
		},
		{
			id: 2,
			text: 'our shows',
			view: 'Shows'
		},
		{
			id: 3,
			text: 'book us',
			view: 'Contact'
		},
		{
			id: 4,
			text: 'watch us',
			view: 'Watch'
		},
	]
	
	const extLinks = [
		{
			id: 1,
			name: 'facebook',
			icon: require('../assets/img/fb.svg'),
			url: 'https://www.facebook.com/FacetheEarth'
		},
		{
			id: 2,
			name: 'instagram',
			icon: require('../assets/img/ig.svg'),
			url: 'https://www.instagram.com/facetheearth'
		},
		{
			id: 3,
			name: 'youtube',
			icon: require('../assets/img/yt.svg'),
			url: 'https://www.youtube.com/channel/UCynYkCrwJCfNNLc7Z03yhKA/featured'
		},
		{
			id: 4,
			name: 'spotify',
			icon: require('../assets/img/sy.svg'),
			url: 'https://open.spotify.com/artist/3B8dM8jspZ4ADCUXvVszi6'
		},
	]

	return {
		navLinks,
		extLinks
	}
}

export default getLinks