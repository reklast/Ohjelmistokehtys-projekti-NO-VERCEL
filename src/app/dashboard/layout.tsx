import Header from "@/components/Header/Header";
import { ButtonPanel } from "@/components/ButtonPanel/ButtonPanel";
import { Providers } from "@/components/Providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

import AntdThemeWrapper from "@/components/AntdThemeWrapper/AntdThemeWrapper";
import ThemeContext from "@/context/ThemeContext";

import "@/styles/styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heippalappu",
  description: "Ohjelmistokehitysprojekti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext>
      <AntdThemeWrapper>
        <html lang="en" className="light">
          <body className={inter.className}>
            <StyledComponentsRegistry>
              <Providers>
                <Header />
                <main className="container">{children}</main>
              </Providers>
              <footer>
                <ButtonPanel />
              </footer>
            </StyledComponentsRegistry>
          </body>
        </html>
      </AntdThemeWrapper>
    </ThemeContext>
  );
}
