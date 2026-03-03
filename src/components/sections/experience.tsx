"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building2,
} from "lucide-react";
import { experiences } from "@/data/resume";

const cardVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function TimelineCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`flex items-start gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Content card */}
      <motion.div
        custom={isLeft ? -1 : 1}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex-1"
      >
        <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
          {/* Gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <CardHeader className="pb-3">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {experience.company}
                  </span>
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {experience.role}
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="text-xs text-muted-foreground shrink-0"
              >
                {experience.period}
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2">
              {experience.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Timeline dot - visible on md+ */}
      <div className="hidden md:flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-full bg-primary/20 animate-pulse" />
          <div className="relative h-4 w-4 rounded-full bg-primary border-2 border-background" />
        </motion.div>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Work <span className="text-primary">Experience</span>
            </h2>
          </div>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated line - only on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary to-primary/30 rounded-full"
            />
          </div>

          {/* Mobile line */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-[2px] bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary to-primary/30 rounded-full"
            />
          </div>

          <div className="space-y-12 md:space-y-16 ml-6 md:ml-0">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.company} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
