import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InvitationMessage } from "@/components/InvitationMessage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WeddingDetails } from "@/components/WeddingDetails";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <LanguageSwitcher />
      <MusicPlayer />
      <main className="flex flex-1 flex-col">
        <Hero />
        <InvitationMessage />
        <WeddingDetails />
      </main>
      <Footer />
    </>
  );
}
