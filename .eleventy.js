const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("imgs");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));
};
