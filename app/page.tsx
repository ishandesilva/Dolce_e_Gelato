import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { FlavorGallery } from "@/components/flavor-gallery"
import { Seasonal } from "@/components/seasonal"
import { Story } from "@/components/story"
import { MenuSection } from "@/components/menu-section"
import { Testimonials } from "@/components/testimonials"
import { Visit } from "@/components/visit"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <FlavorGallery />
        <Seasonal />
        <Story />
        <MenuSection />
        <Testimonials />
        <Visit />
      </main>
      <SiteFooter />
    </>
  )
}
