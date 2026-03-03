"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { contactInfo } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Separator className="mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Mostafa Nassr. Built with</span>
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 mx-0.5" />
              <span>using Next.js</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
