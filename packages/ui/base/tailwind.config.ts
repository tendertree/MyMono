import sharedConfig from "@config/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
    content: [
        "./feature/**/*.tsx",
        "./shadcn/**/*.tsx",
        "./layout/**/*.tsx",
        "./section/**/*.tsx",
        "./menu/**/*.tsx",
        "./stories/**/*.{js,ts,jsx,tsx}", // 정확한 경로 지정
        './.storybook/preview.ts', // ← 추가!
        '../../packages/ui/**/*.{js,ts,jsx,tsx}', // 모노레포 경로 확인
    ],
    presets: [sharedConfig],
    darkMode: ['class', '[data-mode="dark"]'],
} satisfies Config

export default config;


