import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Heart, Shield, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Sustainability",
    desc: "We believe in recycling and reducing environmental impact through responsible metal processing.",
  },
  {
    icon: Shield,
    title: "Quality",
    desc: "Every product meets rigorous international quality standards before reaching our clients.",
  },
  {
    icon: Target,
    title: "Reliability",
    desc: "Consistent supply chain management ensures on-time delivery every time.",
  },
  {
    icon: Award,
    title: "Integrity",
    desc: "Transparent business practices and fair pricing build lasting partnerships.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">About Shubham Metlink</h1>
          <p className="text-lg opacity-85 font-sans leading-relaxed">
            Pioneering metal imports and copper scrap recycling with a vision for sustainable industry.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
          <p>
            Shubham Metlink was founded with a clear mission: to become India's most trusted source for high-quality
            copper and aluminium while leading the way in sustainable metal recycling.
          </p>
          <p>
            Over the years, we've built strong relationships with global suppliers and developed a state-of-the-art
            recycling facility with an annual capacity of 3500 metric tons. Our integrated approach — combining import
            expertise with recycling capabilities — allows us to serve diverse industrial needs efficiently.
          </p>
          <p>
            Today, we supply industries ranging from electrical and construction to automotive and manufacturing, always
            maintaining our commitment to quality, sustainability, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <Card className="h-full text-center">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className="p-3 rounded-full bg-accent/10">
                    <v.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <ul className="space-y-4 font-sans">
          {[
            "3500 MT annual copper scrap recycling capacity",
            "Direct sourcing from certified global suppliers",
            "Rigorous quality control and testing at every stage",
            "Flexible order quantities to match your needs",
            "Dedicated customer support and logistics management",
            "Commitment to environmental sustainability",
            "Flexible payment terms",
            "Strict documentation for ESG disclosure",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default About;
