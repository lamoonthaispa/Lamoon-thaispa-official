import Hero from "../components/Hero"
import Features from "../components/Features"
import SectionIntro from "../components/SectionIntro"
import Services from "../components/Services"
import Contact from "../components/Contact"
import GallerySlider from "../components/GallerySlider"
import Promotion from "@/components/Promotion"

export default function HomePage() {
  return (
    <main className="flex flex-col bg-background">
      <Hero />
      <Features />
      <Promotion />
      <SectionIntro />
      <GallerySlider />
      <Services />
      <Contact />
    </main>
  )
}