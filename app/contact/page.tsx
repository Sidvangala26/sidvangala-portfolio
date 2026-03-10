import { ContactForm } from "@/components/contact-form";
import { GlassCard } from "@/components/glass-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container-padding pt-32 pb-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something rare."
        description="A modern contact page with form validation, ambient card styling, and a sharp premium finish."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <GlassCard className="h-full p-8">
            <div className="space-y-6 text-sm text-neutral-300">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 text-luxury-gold" />
                <div>
                  <p className="text-white">Email</p>
                  <p>vangalasiddardha@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 text-luxury-gold" />
                <div>
                  <p className="text-white">Phone</p>
                  <p>+1 (817) 965-3142</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-luxury-gold" />
                <div>
                  <p className="text-white">Location</p>
                  <p>Fortworth TX, <br></br>Available worldwide for select collaborations.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.1}>
          <GlassCard className="p-8">
            <ContactForm />
          </GlassCard>
        </Reveal>
      </div>
    </div>
  );
}
