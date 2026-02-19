"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "50+", label: "Years Combined Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-6">
              Building Excellence,
              <br />
              Crafted With Experience
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AE Ultimate Homes was founded with a simple mission: to design and
              build homes that stand the test of time. With over 50 years of
              combined experience in design and construction, our team brings
              a wealth of knowledge from a diverse range of exciting projects
              to every home we create.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team of architects, designers, and builders work together
              seamlessly to bring your vision to life. We believe every home
              should be a masterpiece — a perfect blend of form, function, and
              personal expression.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn more about our story
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern luxury home"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-8 mt-20 pt-12 border-t border-lightgray max-w-md mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-gray-500 mt-1 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Founders Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 bg-offwhite rounded-2xl p-10 sm:p-14"
        >
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              A Message From Our Founders
            </span>
            <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-6 italic">
              &ldquo;We started AE Ultimate Homes because we believe everyone
              deserves a home that truly reflects who they are. There&apos;s
              nothing more rewarding than watching a family walk through their
              finished home for the first time — seeing their faces light up as
              every detail comes together exactly as they envisioned. It&apos;s a
              privilege to be part of that journey, and we pour our hearts into
              every project. Whether you&apos;re dreaming of a brand-new custom
              build or reimagining the home you already love, we&apos;re here to
              make it happen. Your dream home is our mission.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-8">
              <div className="text-center">
                <p className="font-bold text-charcoal">Hector Yanez, P.E., CGC</p>
                <p className="text-sm text-gray-500">President &amp; Co-Founder</p>
              </div>
              <div className="hidden sm:block w-px bg-lightgray" />
              <div className="text-center">
                <p className="font-bold text-charcoal">Adam Nguyen, AIA</p>
                <p className="text-sm text-gray-500">Vice President &amp; Co-Founder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
