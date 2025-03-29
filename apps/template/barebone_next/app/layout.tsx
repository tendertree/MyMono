import type { Metadata } from "next";
import "./globals.css";

import { navList } from '../src/domain/NavList.json';
import MaxWidthWrapper from "@ui/base/provider/MaxWidthWrapper";
import { NavHeader } from "@ui/base/menu/NavHeader";
import { ThemeProvider } from "@ui/base/feature/ToggleTheme";
export const metadata: Metadata = {
    title: "Monorepo barebone",
    description: "Minimal app setting",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={` antialiased`}

            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                >
                    <MaxWidthWrapper>
                        <NavHeader navList={navList} colorActive={"text-red-100"} colorInactive={"text-green-100"} />
                        <main
                            className="transition-colors duration-1000"
                        >
                            {children}
                        </main>
                    </MaxWidthWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
