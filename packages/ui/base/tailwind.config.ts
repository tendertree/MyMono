import sharedConfig from "@config/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
    content: [
		"./shadcn/**/*.tsx",
        "./layout/**/*.tsx",
		"./section/**/*.tsx",
        "./menu/**/*.tsx"
    ],
    presets: [sharedConfig],
} satisfies Config

export default config;


