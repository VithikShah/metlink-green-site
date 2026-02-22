import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";

import copperPipesImg from "@/assets/copper-pipes.jpg";
import milberryImg from "@/assets/milberry-copper.jpg";
import birchImg from "@/assets/birch-copper.jpg";
import cuproNickelImg from "@/assets/cupro-nickel.jpg";
import aluminium6063Img from "@/assets/aluminium-6063.jpg";
import aluminiumTTImg from "@/assets/aluminium-tt.jpg";
import aluminiumSheetsImg from "@/assets/aluminium-sheets.jpg";

const copperProducts = [
{
  name: "Copper Pipes & Tubes",
  desc: "High-quality copper pipes and tubes used in plumbing, HVAC, refrigeration, and industrial fluid transfer applications. Available in various diameters and wall thicknesses.",
  img: copperPipesImg
},
{
  name: "Berry Copper (No. 1 Bright)",
  desc: "Premium grade bare, bright, uncoated copper wire scrap — 99.9% pure. Ideal for direct melting and re-processing into high-grade copper products.",
  img: milberryImg
},
{
  name: "Birch / Cliff (No. 1 Copper)",
  desc: "Clean, uncoated, and unalloyed copper clippings, bus bars, and heavy scrap. Minimum 99% copper content, suitable for smelting and refining.",
  img: birchImg
},
{
  name: "Cupro-Nickel Scrap",
  desc: "Copper-nickel alloy scrap recovered from marine, desalination, and heat exchanger applications. Processed for maximum copper and nickel recovery.",
  img: cuproNickelImg
}];


const alumProducts = [
{
  name: "Aluminium 6063 Scrap",
  desc: "Widely used aluminium alloy extrusion scrap from window frames, doors, and structural profiles. Excellent for re-melting into 6063 alloy ingots.",
  img: aluminium6063Img
},
{
  name: "Aluminium Taint Tabor (TT)",
  desc: "Mixed low-copper aluminium scrap consisting of castings, extrusions, and sheet. Clean and sorted for efficient recycling and alloy production.",
  img: aluminiumTTImg
},
{
  name: "Aluminium Sheet Scrap",
  desc: "Flat-rolled aluminium sheet offcuts and scrap from manufacturing, construction, and packaging industries. Sorted by alloy grade for quality recycling.",
  img: aluminiumSheetsImg
}];


const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } })
};

const ProductCard = ({ name, desc, img, i }: {name: string;desc: string;img: string;i: number;}) =>
<motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
    <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">{desc}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>;


const Products = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") === "aluminium" ? "aluminium" : "copper";

  return (
<Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg opacity-85 font-sans">Comprehensive range of non ferrous scrap products for industrial recycling and manufacturing.</p>
        </motion.div>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <Tabs defaultValue={defaultTab} key={defaultTab} className="w-full">
        <TabsList className="mb-8 w-full justify-start">
          <TabsTrigger value="copper">Copper Scrap</TabsTrigger>
          <TabsTrigger value="aluminium">Aluminium Scrap</TabsTrigger>
        </TabsList>

        <TabsContent value="copper">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {copperProducts.map((p, i) =>
          <ProductCard key={p.name} {...p} i={i} />
          )}
          </div>
        </TabsContent>

        <TabsContent value="aluminium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumProducts.map((p, i) =>
          <ProductCard key={p.name} {...p} i={i} />
          )}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  </Layout>
  );
};

export default Products;