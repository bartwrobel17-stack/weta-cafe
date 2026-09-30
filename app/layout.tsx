import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title:"Weta Cafe | Kawa, matcha i coś słodkiego we Wrocławiu",
  description:"Weta Cafe przy ul. Jana Mikulicza-Radeckiego 6 we Wrocławiu. Espresso, flat white, ceremonialna matcha i kameralny klimat.",
  keywords:["Weta Cafe","kawiarnia Wrocław","matcha Wrocław","kawa Wrocław","Mikulicza-Radeckiego"],
  openGraph:{title:"Weta Cafe",description:"Mała kawiarnia z dobrą kawą i matchą we Wrocławiu.",type:"website"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}