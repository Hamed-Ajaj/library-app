"use client"
import Books from "@/components/Books";
import Hero from "@/components/Hero";
import { Suspense } from "react";
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return(
      <>
        <Hero />
        <Books />
      </>
      )

}
