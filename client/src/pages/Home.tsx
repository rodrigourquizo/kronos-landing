import { ArrowRight, Activity, ExternalLink, Network, Trophy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import DemoModal from "@/components/DemoModal";

/**
 * KRONOS Landing Page
 * Style: Palantir-inspired, sharp geometry, high contrast, minimalist.
 * Only the hero (intro + the two solution entry points) lives here — each
 * solution is detailed on its own route (see MantenimientoPredictivo /
 * SolucionesAgenticasITOT), reached via the "Soluciones" nav or the cards below.
 */

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL || "/";

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-900 selection:text-white flex flex-col"
         style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
           backgroundSize: '32px 32px'
         }}>
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 z-50"></div>

      <NavBar active="inicio" onDemoClick={() => setIsDemoModalOpen(true)} />

      {/* HERO SECTION */}
      <section className="flex-1 flex items-center pt-24 pb-12 relative bg-black overflow-hidden">
        {/* energia_simbolos background */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${basePath}images/energia_simbolos.png`}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Problem Statement */}
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white uppercase">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Conectando IT y OT</span>
                  <span className="block">a través de la IA</span>
                </h1>
                <p className="text-base lg:text-lg text-gray-400 max-w-lg font-light leading-relaxed border-l border-white/10 pl-6">
                  Sistemas aislados, datos dispersos y decisiones reactivas frenan la eficiencia operativa. Unificamos IT y OT con inteligencia artificial para anticiparte al problema y automatizar tu operación.
                </p>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-cyan-500"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">Nuestras Soluciones</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Activity className="w-5 h-5" />,
                      title: "Mantenimiento Predictivo",
                      desc: "Anticipa fallas y anomalías en tus operaciones con IA",
                      href: "/mantenimiento-predictivo",
                      accent: "cyan",
                    },
                    {
                      icon: <Network className="w-5 h-5" />,
                      title: "Soluciones Agénticas IT/OT",
                      desc: "Agentes de IA y workflows para automatizar la operación",
                      href: "/soluciones-agenticas-it-ot",
                      accent: "purple",
                    },
                  ].map((sol) => (
                    <Link key={sol.title} href={sol.href} className="group block h-full">
                      <motion.div
                        className={`h-full flex flex-col gap-5 p-6 border ${
                          sol.accent === "cyan" ? "border-cyan-500/20 hover:border-cyan-500/60" : "border-purple-500/20 hover:border-purple-500/60"
                        } bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-300`}
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`w-11 h-11 flex items-center justify-center border ${
                            sol.accent === "cyan" ? "border-cyan-500/40 text-cyan-500" : "border-purple-500/40 text-purple-500"
                          }`}>
                            {sol.icon}
                          </span>
                          <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ${
                            sol.accent === "cyan" ? "text-cyan-500" : "text-purple-500"
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-base tracking-wide mb-1.5">{sol.title}</h3>
                          <p className="text-gray-400 text-sm font-light leading-relaxed">{sol.desc}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col items-start gap-3">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsDemoModalOpen(true); }} className="inline-block group">
                  <Button className="bg-transparent hover:bg-white hover:text-black text-white border border-white/20 rounded-none px-6 py-5 text-sm uppercase tracking-widest font-bold transition-all">
                    Solicitar Demo
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Contacta con nosotros para una demo personalizada</p>
              </div>
            </div>

            {/* Right: Hero Logo */}
            <div className="relative flex items-center justify-center w-full py-8 lg:py-0">
              <img
                src={`${basePath}images/KRONOS_fondo_trans.png`}
                alt="KRONOS"
                className="relative z-10 w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* AWARD SECTION */}
      <section className="relative border-t border-white/5 bg-[#050505] py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-white/5 bg-white/[0.01] p-8 md:p-12">
            {/* Text */}
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-5">
                <Trophy className="w-4 h-4 text-cyan-400" />
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">Reconocimiento 2026</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 uppercase">
                Ganadores de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Energízate Perú</span>
              </h2>
              <p className="text-gray-400 font-light leading-relaxed max-w-xl border-l border-white/10 pl-6">
                KRONOS fue reconocido en el concurso Energízate Perú, impulsado por Perú Energía, como una de las soluciones más innovadoras en inteligencia artificial aplicada al sector energético e industrial.
              </p>
              <div className="pt-6">
                <a
                  href="https://digital.energiminas.com/edicion/128#kronos-la-ia-que-previene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white hover:text-cyan-400 transition-colors group"
                >
                  Leer la nota en Energiminas
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Logos */}
            <div className="flex items-center justify-center gap-8 md:gap-10 lg:pl-16 lg:border-l border-white/10 shrink-0">
              <a href="https://peruenergia.com.pe/energizate/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                <img src={`${basePath}images/peru-energia.png`} alt="Perú Energía" className="h-20 md:h-22 w-auto object-contain opacity-90" />
              </a>
              <div className="h-12 w-px bg-white/10 shrink-0" />
              <a href="https://peruenergia.com.pe/energizate/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                <img src={`${basePath}images/energizate.png`} alt="Energízate Perú" className="h-22 md:h-26 w-auto object-contain opacity-90" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <SiteFooter />

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  );
}
