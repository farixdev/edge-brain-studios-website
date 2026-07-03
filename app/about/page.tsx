import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About — EdgeBrain Studios",
  description:
    "EdgeBrain Studios is a software development studio proudly based in Pakistan, working with clients globally.",
};

export default function AboutPage() {
  return <AboutClient />;
}