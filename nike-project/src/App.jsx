// import {CustomerReviews,Footer,Hero,PopularProducts,
//   Services,SpecialOffer,Subscribe,SuperQuality
// } from './sections'

import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import SuperQuality from "./sections/SuperQuality"
import Services from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import CustomerReviews from "./sections/CustomerReviews"
import Subscribe from "./sections/Subscribe"
import Footer from "./sections/Footer"
import Nav from "./Components/Nav"
 
const App = () => (

  <main className="relative bg-gray-200">
    <Nav/>
    <section className="xl:padding-1 pl-10 wide:padding-r padding-b">
    <Hero/>
    </section>
    <section className="padding">
    <PopularProducts/>
    </section>
    <section className="padding">
    <SuperQuality/>
    </section>
    <section className="padding-x py-10">
    <Services/>
    </section>
    <section className="padding-x py-10">
    <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
    <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
    <Footer/>
    </section>
  </main>

)

export default App;