import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import FeaturedProducts from '@/components/FeaturedProducts'
import SocialProof from '@/components/SocialProof'
import OfficialPartners from '@/components/OfficialPartners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProducts />
      <SocialProof />
      <OfficialPartners />
      <Footer />
    </main>
  )
}
