import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CampingEquipmentPage } from "@/components/pages/CampingEquipmentPage";

export default function CampingEquipment() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <CampingEquipmentPage />
      <Footer />
    </main>
  );
}
