import CustomerReviews from "./Sections/CustomerReviews";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import PopularProducts from "./Sections/PopularProducts";
import Services from "./Sections/Services";
import SpecialOffers from "./Sections/SpecialOffers";
import Subscribe from "./Sections/Subscribe";
import SuperQuality from "./Sections/SuperQuality";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffers></SpecialOffers>
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </main>
  );
}
