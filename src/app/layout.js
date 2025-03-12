
import FixedContactUsComponent from "./common/FixedContactUsComponent";
import Footer from "./common/Footer";
import Header from "./common/Header";
import TopHeader from "./common/TopHeader";
import "./globals.css";
import {Poppins, Nunito} from 'next/font/google';

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700','800', '900']
})
const nunito = Nunito({
  subsets:['latin'],
  weight:['200','300','400','500','600','700','800', '900']
})

export const metadata = {
  title: "Private Limited Company Registration | Vakilgiri",
  description: "Vakilgiri - Private Limited componay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} ${poppins.className}`}
      >
        <TopHeader/>
        <Header/>
        <FixedContactUsComponent/>
        <div className="w-full">
        {children}


        </div>
        <Footer/>
      </body>
    </html>
  );
}
