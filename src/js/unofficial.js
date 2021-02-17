import syntaxHighlight from "node_modules/@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) 
{
  eleventyConfig.addPlugin(syntaxHighlight, 
  {
      templateFormats: ["*"],
      alwaysWrapLineHighlights: false,
      trim: true,
      lineSeparator: "<br>",
  });
}