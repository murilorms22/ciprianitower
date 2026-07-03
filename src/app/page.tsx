import { ModalProvider } from "@/context/ModalContext";
import { LeadModal } from "@/components/ui/LeadModal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Sections
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Amenities } from "@/components/sections/Amenities";
import { Map } from "@/components/sections/Map";
import { Gallery } from "@/components/sections/Gallery";

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        
        <Hero />
        <Location />
        <FloorPlans />
        <Amenities />
        <Map />
        <Gallery />

        <Footer />
        <LeadModal />
      </main>
    </ModalProvider>
  );
}
