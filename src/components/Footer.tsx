import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/shubham-metlink-logo.png";

const Footer = () =>
<footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <img src={logo} alt="Shubham Metlink" className="h-12 w-auto mb-2" />
          <h3 className="font-display text-xl font-bold mb-3">Shubham Metlink</h3>
          <p className="text-sm opacity-80 leading-relaxed">Leading importer of copper & aluminium scrap with 10,000 MT annual recycling capacity. Committed to sustainability and quality.

        </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-70 font-sans">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
          { to: "/about", label: "About Us" },
          { to: "/products", label: "Products" },
          { to: "/sustainability", label: "Sustainability" },
          // { to: "/gallery", label: "Gallery" },
          { to: "/contact", label: "Contact" }].
          map((l) =>
          <li key={l.to}>
                <Link to={l.to} className="opacity-80 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-70 font-sans">Products</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link to="/products?tab=copper" className="hover:opacity-100 transition-opacity">Copper Scrap</Link>
            </li>
            <li>
              <Link to="/products?tab=aluminium" className="hover:opacity-100 transition-opacity">Aluminium Scrap</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-70 font-sans">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 opacity-80">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Chennai, Tamil Nadu, India</span>
            </li>
            <li className="flex items-center gap-2 opacity-80">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+91 98402 58400</span>
            </li>
            <li className="flex items-center gap-2 opacity-80">
              <Mail className="h-4 w-4 shrink-0" />
              <span>info@shubhammetlink.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Shubham Metlink. All rights reserved.
      </div>
    </div>
  </footer>;


export default Footer;