var Vue = require('vue')

new Vue({
	el: 'body',
	components: {
		'splash': require('./Splash/Splash.vue'),
		'style-section': require('./StyleSection/StyleSection.vue'),
		'safety-section': require('./SafetySection/SafetySection.vue')
	},
	methods: {
		log: function(message) {
			console.log('[Vapor Website] ' + message);
		}
	}})
