"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import RevealText from "./RevealText";
import { easeSmooth } from "@/lib/motion";

interface ButtonProps {
  text: string;
  href: string;
}

interface CTAProps {
  title: string;
  description: string;
  primaryButton: ButtonProps;
  secondaryButton: ButtonProps;
  className?: string;
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  className = "",
}: CTAProps) {
  return (
    <section className={`container-custom section-padding my-16 ${className}`}>
      <div className="border-t border-line py-14 sm:py-20">
        <RevealText lines={[title]} className="display-heading max-w-5xl text-5xl sm:text-7xl lg:text-8xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeSmooth }}
          className="mt-10 grid gap-8 lg:grid-cols-2"
        >
          <p className="m-0 max-w-xl text-lg text-muted lg:col-start-2">{description}</p>
          <div className="flex flex-col items-start gap-3 sm:flex-row lg:col-start-2">
            <a href={primaryButton.href} className="btn-primary group">
              {primaryButton.text}
              <ArrowUpRight aria-hidden="true" className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href={secondaryButton.href} className="btn-secondary">
              {secondaryButton.text}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
