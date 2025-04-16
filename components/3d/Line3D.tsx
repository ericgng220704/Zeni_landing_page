"use client";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";

export default function Line({ containerClass }: { containerClass: string }) {
  return (
    <main className={cn(containerClass)}>
      <Spline scene="https://prod.spline.design/fP6emocpZJ086I-o/scene.splinecode" />
    </main>
  );
}
