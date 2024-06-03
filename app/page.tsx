"use client"
import Blog from "@/components/home/Blog";
import { Collection } from "@/components/home/Collection";
import Content from "@/components/home/Content";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //  <h1>
    //   sj
    //  </h1>
    // </main>
    <div>
      <Hero />
      <Collection />
      <Content />
      <Testimonials />
      <Blog/>
    </div>
  );
}
