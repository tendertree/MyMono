// packages/ui/tailwind.config.js
const baseConfig = require('config/tailwind.config');

module.exports = {
    ...baseConfig, // 기본 설정 확장
    content: [
        '/**/*.{ts,tsx}',
		 '!**/node_modules/**', 

    ],
    theme: {
        ...baseConfig.theme,
        extend: {
            ...baseConfig.theme?.extend,
            colors: {
                secondary: '#ffed4a', // UI 패키지에서만 사용할 색상
            },
        },
    },
    plugins: [
        ...baseConfig.plugins,
        require('tailwindcss-animate'), // UI 패키지에서만 사용할 플러그인
    ],
};
