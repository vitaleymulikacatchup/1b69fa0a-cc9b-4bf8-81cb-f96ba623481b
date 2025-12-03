"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, ChefHat, Sparkles, UtensilsCrossed, Users, Wine, Crown, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="animatedAurora"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Love"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Love"
          description="An exquisite culinary journey where passion meets perfection. Discover exceptional dishes crafted with the finest ingredients and served in an elegant atmosphere."
          tag="Fine Dining Experience"
          tagIcon={Heart}
          buttons={[
            {
              text: "Reserve Your Table",
              href: "contact"
            },
            {
              text: "View Menu",
              href: "features"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778913796-h6kifu62.jpg"
          imageAlt="Elegant restaurant interior with sophisticated dining setup"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Story"
          tagIcon={ChefHat}
          title="Crafted with Passion"
          description="At Love, we believe every meal tells a story. Our chef-driven menu celebrates fresh, seasonal ingredients prepared with meticulous attention to detail. We create not just food, but memories that linger long after the last bite."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778915118-nfigsqg4.jpg",
            imageAlt: "Restaurant menu showcase with beautifully plated dishes"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778916051-3t5nfx4g.jpg",
            imageAlt: "Restaurant ambiance and elegant dining atmosphere"
          }}
          buttons={[
            {
              text: "Learn More",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="What We Offer"
          description="Experience the finest aspects of our restaurant"
          tag="Our Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Fine Dining",
              icon: UtensilsCrossed
            },
            {
              title: "Private Events",
              icon: Users
            },
            {
              title: "Wine Selection",
              icon: Wine
            },
            {
              title: "Chef's Table",
              icon: Crown
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
          showIconBoxBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Guests Say"
          description="Real experiences from people who dined with us"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Elena",
              handle: "@elegant_eater",
              testimonial: "The most unforgettable dining experience. Every dish was a masterpiece and the service was impeccable. Love is truly a gem.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778917290-cwyef2oi.jpg",
              imageAlt: "Elena smiling"
            },
            {
              id: "2",
              name: "Marcus",
              handle: "@foodie_travels",
              testimonial: "Outstanding culinary artistry. The chef's attention to detail is remarkable. I brought my family and everyone was blown away.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778918381-7n8of4ru.jpg",
              imageAlt: "Marcus smiling"
            },
            {
              id: "3",
              name: "Sophie",
              handle: "@wine_connoisseur",
              testimonial: "The wine pairings are expertly curated. This is fine dining done right. I can't wait to return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778919608-f7t9yecr.jpg",
              imageAlt: "Sophie smiling"
            },
            {
              id: "4",
              name: "James",
              handle: "@dinner_adventures",
              testimonial: "Romantic, refined, and absolutely delicious. Love exceeded every expectation. A must-visit destination.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778920735-fzfi5o6g.jpg",
              imageAlt: "James smiling"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable dining experience. Fill out the form to make your reservation."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Any special requests or dietary preferences?",
            rows: 4,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1764778922377-ok4da9s5.jpg"
          imageAlt="Beautiful restaurant table setting"
          mediaPosition="right"
          buttonText="Reserve Now"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Love"
          columns={[
            {
              title: "Restaurant",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "features"
                },
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Events",
                  href: "hero"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Phone: +1 (555) 123-4567",
                  href: "#"
                },
                {
                  label: "Email: hello@loverestaurant.com",
                  href: "#"
                },
                {
                  label: "Hours: Tue-Sun 6PM-11PM",
                  href: "#"
                },
                {
                  label: "Closed Mondays",
                  href: "#"
                }
              ]
            },
            {
              title: "Follow",
              items: [
                {
                  label: "Instagram",
                  href: "#"
                },
                {
                  label: "Facebook",
                  href: "#"
                },
                {
                  label: "Twitter",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Love Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}