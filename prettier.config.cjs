module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    bracketSpacing: true,
    singleQuote: true,
    astroAllowShorthand: false,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    tailwindConfig: './tailwind.config.cjs',
    pluginSearchDirs: false,
    bracketSameLine: true,
};
