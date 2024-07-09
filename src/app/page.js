import Clean from "@/components/clean/Clean";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Testimo from "@/components/testimo/Testimo";

export default function Home() {
  return (
    <>
      <Hero />
      <Products limit={8} title={"Products"} text={"Order it for you or for your beloved ones "} />
      <Clean />
      <Testimo />
      <Products limit={4} title={"Popular"} text={"Our top selling product that you may like"} />
    </>
  );
}
