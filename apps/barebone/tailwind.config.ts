// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@config/tailwind-config/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  presets: [sharedConfig],

};

export default config;


