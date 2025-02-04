import type { Metadata } from "next";
import "./globals.css";

import {navList} from '../src/domain/NavList.json';
import WrapperMaxWidth from "@ui/base/layout/WrapperMaxWidth";
import { NavHeader } from "@ui/base/menu/NavHeader";


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
        <html lang="en">
            <body
                className={` antialiased`}
            >
                <WrapperMaxWidth>
					<NavHeader navList={navList}/>
                    <main>  
						{children}
                    </main>
           </WrapperMaxWidth>
            </body>
        </html>
    );
}
