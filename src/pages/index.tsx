import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from '@/components/HeaderSection/Header';
import HeroSection from "@/components/HeroSection/HeroSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import MissionStatement from "@/components/MissionStatement/MissionStatement";
import SecurityCheck from "@/components/SecurityCheck/SecurityCheck";
import OurStory from "@/components/OurStory/OurStory";
import BlueSection from "@/components/BlueSection/BlueSection";
import LatestInsights from "@/components/LatestInsights/LatestInsights";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Testimonials />
      <MissionStatement />
      <SecurityCheck />
      <OurStory />
      <BlueSection />
      <LatestInsights />
      <Footer />
    </>
  );
}
