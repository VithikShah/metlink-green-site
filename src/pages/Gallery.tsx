import { useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Recycling Plant",
    images: Array.from({ length: 4 }, (_, i) => ({
      id: `plant-${i}`,
      alt: `Recycling plant view ${i + 1}`,
    })),
  },
  {
    title: "Warehouse & Storage",
    images: Array.from({ length: 4 }, (_, i) => ({
      id: `warehouse-${i}`,
      alt: `Warehouse view ${i + 1}`,
    })),
  },
  {
    title: "Operations",
    images: Array.from({ length: 4 }, (_, i) => ({
      id: `ops-${i}`,
      alt: `Operations view ${i + 1}`,
    })),
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Gallery & Facilities</h1>
            <p className="text-lg opacity-85 font-sans">
              Take a look inside our operations — from recycling plant to warehouse.
            </p>
          </motion.div>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {section.images.map((img, i) => (
              <motion.button
                key={img.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                onClick={() => setLightbox(img.id)}
                className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center hover:ring-2 hover:ring-accent transition-all cursor-pointer"
              >
                <span className="text-muted-foreground text-xs font-sans">{img.alt}</span>
              </motion.button>
            ))}
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-lg max-w-2xl w-full aspect-video flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-muted-foreground font-sans">Image Placeholder — {lightbox}</span>
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
