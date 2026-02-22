import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Recycle, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "10,000 MT", label: "Annual Recycling Capacity" },
  { value: "100+", label: "Clients Served" },
  { value: "50+", label: "Years of Experience" },
  { value: "3", label: "Core Materials" },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "Copper Products",
    desc: "Copper pipes, milberry, birch, and cupro-nickel scrap — sourced and processed to the highest standards.",
  },
  {
    icon: Shield,
    title: "Aluminium Products",
    desc: "Aluminium 6063, taint tabor, and sheet scrap for diverse industrial recycling applications.",
  },
  {
    icon: Recycle,
    title: "Recycling Facility",
    desc: "State-of-the-art recycling facility with 10,000 MT annual capacity, turning scrap into premium material.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-steel-dark opacity-90" />
      <div className="relative container mx-auto px-4 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-primary-foreground font-semibold text-sm uppercase tracking-wider mb-3 font-sans">
            Trusted Metal Partner
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Importing Metals. Recycling Futures.
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed font-sans">
            Shubham Metlink is a leading importer of copper and aluminium, with a 10,000 MT annual copper scrap recycling capacity. We power industries while championing sustainability.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/products">Our Products <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card border-b">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <p className="text-3xl lg:text-4xl font-bold text-accent font-display">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1 font-sans">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-3">What We Offer</h2>
        <p className="text-muted-foreground font-sans">
          From premium copper and aluminium scrap to responsible recycling — we deliver quality metals at every step.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold font-display">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">{s.desc}</p>
                <Link to="/products" className="text-accent text-sm font-medium hover:underline mt-auto font-sans">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Sustainability CTA */}
    <section className="bg-secondary">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Committed to a Greener Tomorrow</h2>
            <p className="text-foreground/70 leading-relaxed font-sans mb-6">
              With our 10,000 MT copper scrap recycling facility, we're reducing waste and contributing to a circular economy. Sustainability isn't just a value — it's our business model.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/sustainability">Explore Sustainability <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-accent/10 flex items-center justify-center">
              <Recycle className="h-24 w-24 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
