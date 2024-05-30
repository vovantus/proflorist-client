import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ShowcaseSection from "./ShowcaseSection";
import StatisticsSection from "./StatisticsSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionSection from "./CallToActionSection";
import Footer from "./Footer";

const LandingPage = () => {
  const heroImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fhero3.webp?alt=media&token=638400fb-648e-4c55-af7a-2987cc83215c";

  const showcases = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fshowcase4.jpg?alt=media&token=c0cd935a-f092-4ab1-89b9-f1d628458366",
      title: "Beautiful Blooms",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fshowcase5.jpg?alt=media&token=2da70a25-bdf8-4c19-900c-1057ebfc71ad",
      title: "Floral Fantasies",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fshowcase6.jpg?alt=media&token=0c375207-fa87-47e4-9766-f60e7c17c3e9",
      title: "Petal Perfect",
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
      img: "https://firebasestorage.googleapis.com/v0/b/proflorist-54699.appspot.com/o/platform%2Fimg%2Flanding%2Fflorist1.jpg?alt=media&token=62c51bb2-ef0a-4f60-92e3-fdfca9b1bb93",
      quote:
        "This platform made it so easy for me to create a beautiful website for my floral business. Highly recommend!",
      name: "Jane Doe, Beautiful Blooms",
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
  ];

  return (
    <div>
      <HeroSection heroImageUrl={heroImageUrl} />
      <FeaturesSection features={features} />
      <ShowcaseSection showcases={showcases} />
      <StatisticsSection statistics={statistics} />
      <TestimonialsSection testimonials={testimonials} />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
