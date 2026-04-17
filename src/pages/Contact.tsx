import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    try {
      // TODO: Replace with edge function call once Cloud is enabled
      console.log("Contact form submission:", data);
      toast.success("Thank you! We'll get back to you shortly.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-85 font-sans">
              Ready to discuss your metal requirements? Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl><Input placeholder="+91 XXXXX XXXXX" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl><Input placeholder="Company name" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl><Textarea rows={5} placeholder="Tell us about your requirements..." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" disabled={submitting} size="lg">
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-5">
                <h3 className="font-display text-lg font-semibold">Get in Touch</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm font-sans">Address</p>
                    <p className="text-sm text-muted-foreground font-sans">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm font-sans">Phone</p>
                    <p className="text-sm text-muted-foreground font-sans">+91 63823 89585</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm font-sans">Email</p>
                    <p className="text-sm text-muted-foreground font-sans">info@shubhammetlink.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm font-sans">Business Hours</p>
                    <p className="text-sm text-muted-foreground font-sans">Mon–Sat: 9:00 AM – 6:00 PM</p>
                    <p className="text-sm text-muted-foreground font-sans">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d80.1610713!3d13.0973228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52633b258be617%3A0xac5e6008acb641b9!2sSHUBHAM%20METLINK%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shubham Metlink Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
