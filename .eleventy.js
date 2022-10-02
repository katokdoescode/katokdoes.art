module.exports = function(config) {
	config.addPassthroughCopy("src/img");
	config.addPassthroughCopy("src/scripts");
	config.addPassthroughCopy("src/styles");
	config.addPassthroughCopy("src/pages/**/*.html");

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes',
			layouts: 'layouts',
		},
		dataTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		passthroughFileCopy: false,
		templateFormats: ['md', 'njk']
	};
};
