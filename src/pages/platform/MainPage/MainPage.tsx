import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ShowcaseSection from "./ShowcaseSection";
import StatisticsSection from "./StatisticsSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionSection from "./CallToActionSection";
import Footer from "./Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { RefObject, useRef } from "react";

const LandingPage = () => {
  const theme = useTheme();
  const isSmallerThanLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fhero3.webp?alt=media&token=638400fb-648e-4c55-af7a-2987cc83215c";

  const showcases = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fshowcase4.jpg?alt=media&token=c0cd935a-f092-4ab1-89b9-f1d628458366",
      title: "Montefleur",
      link: "https://montefleur.proflorist.app",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fshowcase5.jpg?alt=media&token=2da70a25-bdf8-4c19-900c-1057ebfc71ad",
      title: "Floral Fantasies",
      link: "https://rozaexpress.proflorist.app",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fshowcase6.jpg?alt=media&token=0c375207-fa87-47e4-9766-f60e7c17c3e9",
      title: "Petal Perfect",
      link: "https://bloom.proflorist.app",
    },
  ];

  const features = [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2F10minIcon.png?alt=media&token=37e84b6d-c3a2-436e-959a-ee745f3b1677",
      header: "Get Started in Just 10 Minutes",
      text: "No complex settings or prolonged development – your website will be up and running quickly and effortlessly.",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2FappIcon.png?alt=media&token=35e557db-813d-408b-a4c8-d62dbd004eb3",
      header: "All-in-One Management App",
      text: "Control every aspect of your website from a single, intuitive admin app. All the tools you need are right at your fingertips.",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fautomate.png?alt=media&token=abc1109a-5873-4456-ab02-476639278899",
      header: "Automate Your Website Management",
      text: "Focus on your floral creations, not on website maintenance. Set your site to autopilot and let us handle the rest.",
    },
  ];

  const statistics = [
    {
      value: "10K+",
      text: "Satisfied Customers",
    },
    {
      value: "24/7",
      text: "Customer Support",
    },
    {
      value: "99.9%",
      text: "Uptime Guarantee",
    },
  ];

  const testimonials = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fflorist4.jpg?alt=media&token=f6c8c195-abd7-4096-9be9-7747df810740",
      quote:
        "Proflorist has revolutionized how I manage my floral business online. The ease of use and the beautiful templates have saved me so much time.",
      name: "Anna Lee, Montefleur",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fflorist2.jpg?alt=media&token=d73f99f6-1bf2-4ee8-9e25-fdda083d4f2e",
      quote:
        "I love how customizable everything is. My website truly reflects my brand now.",
      name: "John Smith, Floral Fantasies",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fflorist3.jpg?alt=media&token=351147e5-124e-4a3c-b757-c5f5375c6aea",
      quote:
        "My customers find it so easy to browse my arrangements on my new site. It's been a game-changer for my business.",
      name: "Mary Johnson, Petal Perfect",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fflorist1.jpg?alt=media&token=62c51bb2-ef0a-4f60-92e3-fdfca9b1bb93",
      quote:
        "This platform made it so easy for me to create a beautiful website for my floral business. Highly recommend!",
      name: "Jane Doe, Flower Haven",
    },
  ];

  return (
    <div>
      <div ref={heroRef}>
        <HeroSection
          heroImageUrl={heroImageUrl}
          isSmallerThanLg={isSmallerThanLg}
        />
      </div>
      <div ref={featuresRef}>
        <FeaturesSection
          features={features}
          isSmallerThanMd={isSmallerThanMd}
        />
      </div>
      <div ref={showcaseRef}>
        <ShowcaseSection showcases={showcases} />
      </div>
      <div ref={testimonialsRef}>
        <StatisticsSection statistics={statistics} />
        <TestimonialsSection testimonials={testimonials} />
      </div>
      <CallToActionSection />
      <Footer
        onFeaturesClick={() => scrollToSection(featuresRef)}
        onShowcaseClick={() => scrollToSection(showcaseRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
      />
    </div>
  );
};

export default LandingPage;
