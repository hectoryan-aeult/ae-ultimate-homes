"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Residential", "Modern", "Luxury"];

const projects = [
  {
    title: "The Parkview Estate",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    description: "5-bedroom luxury estate with panoramic views",
  },
  {
    title: "Modern Lakehouse",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    description: "Contemporary lakefront living at its finest",
  },
  {
    title: "Cedar Hill Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    description: "Family home with sustainable design features",
  },
  {
    title: "Glass Pavilion",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    description: "Award-winning modern glass architecture",
  },
  {
    title: "The Heritage Manor",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    description: "Classic elegance meets modern comfort",
  },
  {
    title: "Sunset Ridge Home",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    description: "Warm family home with mountain backdrop",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mt-3">
            Featured Projects
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our portfolio of completed projects, each one a testament to
            our commitment to quality and design excellence.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? "bg-primary text-white"
                  : "bg-lightgray text-charcoal hover:bg-gray-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
