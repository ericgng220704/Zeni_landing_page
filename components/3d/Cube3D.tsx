"use client";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline";

export default function Cube({ containerClass }: { containerClass: string }) {
  return (
    <main className={cn(containerClass)}>
      <Spline scene="https://prod.spline.design/4bSnsyhnep6AgehU/scene.splinecode" />
    </main>
  );
}
