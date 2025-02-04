const baseConfig = require("@config/tailwind-config/basic")


module.exports = {
    ...baseConfig, // 기본 설정 확장
    content: [
        './app/**/*.{ts,tsx,astro,md,mdx}',
        './src/**/*.{ts,tsx,astro,md,mdx}',

    ],
    theme: {
        ...baseConfig.theme,
        extend: {
            ...baseConfig.theme?.extend,
            colors: {
                primary: '#ff0000', // app에서 primary 색상 재정의
            },
        },
    },
    plugins: [
        ...baseConfig.plugins,
    ],
};
