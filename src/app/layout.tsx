import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/styles/GlobalStyles";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: nunito.style.fontFamily }}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header/>
          <main>
            {children} 
          </main>
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}


