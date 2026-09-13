import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { LinkedInIcon } from "@/components/BrandIcons";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";

/**
 * KRONOS Team Page
 * Standalone route (/equipo) — same visual language as the landing page.
 */

export default function Team() {
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);
  const basePath = import.meta.env.BASE_URL || "/";

  const team = [
    {
      name: "Rodrigo Urquizo",
      role: "CEO",
      bg: "border-purple-500/50 hover:border-purple-400",
      photo: "Rodrigo.png",
      linkedin: "https://www.linkedin.com/in/rodrigo-urquizo-ab7a3220b/",
    },
    {
      name: "Stefano Nuñez",
      role: "CTO",
      bg: "border-cyan-500/50 hover:border-cyan-400",
      photo: "Stefano.png",
      linkedin: "https://pe.linkedin.com/in/stefano-andre-nu%C3%B1ez-cueva-7b136b22a",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-900 selection:text-white flex flex-col"
         style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
           backgroundSize: '32px 32px'
         }}>
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 z-50"></div>

      <NavBar active="equipo" />

      {/* TEAM SECTION */}
      <section className="flex-1 pt-40 pb-24 relative bg-[#050505]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-16 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-widest font-semibold">Volver al inicio</span>
          </Link>

          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-500"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">Liderazgo</span>
              <div className="h-px w-8 bg-cyan-500"></div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">NUESTRO EQUIPO</h1>
            <p className="text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              El equipo detrás de KRONOS, combinando visión estratégica y excelencia técnica en analítica industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group cursor-pointer relative flex flex-col items-center text-center"
                onMouseEnter={() => setHoveredTeamMember(idx)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <div className={`w-48 h-48 border ${member.bg} bg-black/50 mb-6 overflow-hidden transition-all duration-500`}>
                  <img
                    src={`${basePath}images/${member.photo}`}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <h3 className="font-bold text-lg uppercase tracking-widest text-white">{member.name}</h3>
                <p className="text-xs text-gray-400 tracking-[0.2em] font-semibold mt-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-gray-500 hover:text-[#0a66c2] transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span className="text-xs tracking-widest uppercase font-semibold">LinkedIn</span>
                </a>
                <div className={`h-[1px] w-0 bg-white mt-3 transition-all duration-500 ${hoveredTeamMember === idx ? 'w-full' : ''}`}></div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
