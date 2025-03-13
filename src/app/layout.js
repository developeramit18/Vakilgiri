import FixedContactUsComponent from "./common/FixedContactUsComponent";
import Footer from "./common/Footer";
import Header from "./common/Header";
import TopHeader from "./common/TopHeader";
import WhyChooseUs from "./common/WhyChooseUs";
import "./globals.css";


export const metadata = {
  title: "Private Limited Company Registration | Vakilgiri",
  description: "Vakilgiri - Private Limited componay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        <Header />
        <FixedContactUsComponent />
        <div className="w-full">{children}</div>
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        <Footer />
      </body>
    </html>
  );
}
