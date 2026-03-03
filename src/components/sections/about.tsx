"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { contactInfo } from "@/data/resume";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 sm:py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-1 w-16 bg-primary rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            I&apos;m a Full Stack Developer with over 5 years of experience building
            high-performance web applications. I specialize in{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span>, and{" "}
            <span className="text-foreground font-medium">Node.js</span>, and I&apos;ve
            had the privilege of working at companies like{" "}
            <span className="text-primary font-medium">S&P Global</span>,{" "}
            <span className="text-primary font-medium">Tesla</span>, and{" "}
            <span className="text-primary font-medium">UnitedHealth Group</span>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            I&apos;m passionate about creating elegant, scalable solutions that make a
            real impact — from global dashboards used by hundreds of service centers
            to AI-driven tools that save millions in operational costs. I thrive on
            turning complex problems into intuitive user experiences.
          </motion.p>

          {/* Contact badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            <a href={`mailto:${contactInfo.email}`}>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                {contactInfo.email}
              </Badge>
            </a>
            <a href={`tel:${contactInfo.phone}`}>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                {contactInfo.phone}
              </Badge>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                {contactInfo.linkedinDisplay}
              </Badge>
            </a>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm"
            >
              <MapPin className="h-4 w-4 mr-2" />
              New Jersey, United States
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
