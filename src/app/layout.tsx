
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import StyledComponentsRegistry from "@/lib/registry";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
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


