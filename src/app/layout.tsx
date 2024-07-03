import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StoreProvider } from "@/Store/StoreProvider";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={inter.className}>
                    <MantineProvider defaultColorScheme="auto">
                        <Header />
                        {children}
                        <Footer />
                    </MantineProvider>
                </body>
            </html>
        </StoreProvider>
    );
}