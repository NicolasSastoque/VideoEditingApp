import Header from './sections/header.jsx';
import Hero from './sections/Hero.jsx';
import Features from './sections/Features.jsx';
import Pricing from './sections/pricing.jsx';
import Faq from './sections/faq.jsx';
import Testimonials from './sections/testimonials.jsx';
import Download from './sections/Download.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  )
}

export default App