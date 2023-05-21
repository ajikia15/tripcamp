"use server";
import Listings from "./components/Listings";
import FooterFixed from "./components/footer/FooterFixed";
export default async function Home() {
  return (
    <main className="p-0 m-0">
      <Listings />
      <FooterFixed />

    </main>
  );
}
