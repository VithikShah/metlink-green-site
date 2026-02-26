import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Recycle, Leaf, Factory, Award, ArrowDown, Linkedin, Mail } from "lucide-react";
import isoLogo from "@/assets/iso-logo.webp";
import cpcbLogo from "@/assets/cpcb-logo.png";
import prithvicoLogo from "@/assets/prithvico-logo.png";
import shubhamIcon from "@/assets/shubham-icon.png";
import prithvicoIllustration from "@/assets/prithvico-illustration.jpg";

const impactStats = [
  { value: "10,000 MT", label: "Copper Recycled Annually" },
  { value: "30,000+", label: "Tons CO₂ Offset" },
  { value: "95%", label: "Material Recovery Rate" },
  { value: "Zero", label: "Waste to Landfill Goal" },
];

const steps = [
  { icon: Factory, title: "Collection", desc: "We source copper scrap from industrial and commercial partners across India." },
  { icon: Recycle, title: "Sorting & Processing", desc: "Scrap is sorted by grade, cleaned, and prepared for smelting." },
  { icon: Leaf, title: "Smelting & Refining", desc: "Advanced furnace technology recovers 95%+ of copper content." },
  { icon: Award, title: "Quality Output", desc: "Refined copper is tested and certified to meet industry standards." },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const Sustainability = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Sustainability</h1>
          <p className="text-lg opacity-85 font-sans">
            Recycling isn't just what we do — it's who we are. Our commitment to a circular economy drives everything.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Impact Stats */}
    <section className="bg-card border-b py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {impactStats.map((s, i) => (
            <motion.div key={s.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <p className="text-3xl font-bold text-accent font-display">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1 font-sans">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* PrithviCo Section */}
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <img src={prithvicoLogo} alt="PrithviCo Logo" className="h-14 w-auto rounded-lg" />
            <img src={shubhamIcon} alt="Shubham Metlink" className="h-14 w-auto" />
          </div>
          <h2 className="text-3xl font-bold mb-4 font-display">PrithviCo — Shubham Metlink's Decarbonization Vertical</h2>
          <div className="text-muted-foreground font-sans leading-relaxed space-y-4">
            <p>Fifty years in the metals business teaches you to spot where things are heading. And it's clear that how industries source their raw materials is changing fast.</p>
            <p className="font-semibold text-foreground">PrithviCo is our response to that shift.</p>
            <p>Led by Kunal Jain, PrithviCo is Shubham Metlink's dedicated vertical for sustainable copper sourcing. It helps Indian corporates procure copper scrap — both imported and locally available — as a cleaner, more responsible alternative to virgin metal.</p>
            <p>For businesses with ESG commitments or those simply looking to reduce costs through scrap, PrithviCo makes the transition straightforward. And with Shubham Metlink's supply chain and relationships behind it, you're not starting from scratch with a new supplier. You're working with a name that's been in this industry for over five decades.</p>
            <p>
              Reach out to Kunal Jain at{" "}
              <a href="mailto:kunal@prithvico.in" className="text-accent font-medium hover:underline inline-flex items-center gap-1">
                <Mail className="h-4 w-4" /> kunal@prithvico.in
              </a>{" "}
              to explore what this looks like for your business.
            </p>
            <a
              href="https://www.linkedin.com/in/kunal1997/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium mt-2"
            >
              <Linkedin className="h-5 w-5" /> Connect with Kunal on LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:w-80 w-full flex-shrink-0">
          <img src={prithvicoIllustration} alt="PrithviCo sustainability illustration" className="rounded-xl shadow-md w-full" />
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Recycling Process</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <Card className="h-full text-center">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground font-sans uppercase tracking-wider">Step {i + 1}</span>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans">{s.desc}</p>
                  {i < steps.length - 1 && (
                    <ArrowDown className="h-4 w-4 text-muted-foreground lg:hidden mt-2" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications & Standards</h2>
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {["ISO 9001:2015", "ISO 14001:2015", "CPCB Compliance"].map((cert) => {
          const isISO = cert.startsWith("ISO");
          return (
            <Card key={cert} className="text-center">
              <CardContent className="p-6">
                {isISO ? (
                  <img src={isoLogo} alt="ISO Certification" className="h-12 w-auto mx-auto mb-3" />
                ) : (
                  <img src={cpcbLogo} alt="CPCB Compliance" className="h-12 w-auto mx-auto mb-3" />
                )}
                <h3 className="font-semibold font-sans">{cert}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-sans">Certified & Compliant</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  </Layout>
);

export default Sustainability;
