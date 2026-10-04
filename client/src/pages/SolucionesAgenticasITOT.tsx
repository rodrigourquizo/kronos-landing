import { ArrowLeft, ArrowRight, ClipboardList, FileText, UserCheck, Workflow } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import DemoModal from "@/components/DemoModal";

/**
 * KRONOS — Soluciones Agénticas IT/OT
 * Standalone route (/soluciones-agenticas-it-ot) — same visual language as the landing page.
 */

const useCases = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Generación de OTs",
    detail: "Agentes que detectan alertas o desviaciones en planta y generan órdenes de trabajo con la información técnica necesaria, listas para asignar.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Reportes de mantenimiento",
    detail: "Generación automática y centralización de reportes de mantenimiento a partir de múltiples fuentes, sin captura manual.",
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: "Evaluación de personal",
    detail: "Automatización de la evaluación de personal que ingresa a planta, con trazabilidad completa de cada etapa del proceso.",
  },
];

export default function SolucionesAgenticasITOT() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-900 selection:text-white flex flex-col"
         style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
           backgroundSize: '32px 32px'
         }}>
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 z-50"></div>

      <NavBar active="soluciones-agenticas-it-ot" onDemoClick={() => setIsDemoModalOpen(true)} />

      {/* AGENTIC SOLUTIONS SECTION */}
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

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-purple-500"></div>
                <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">Nuestra Otra Solución</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">SOLUCIONES AGÉNTICAS IT/OT</h1>
              <p className="text-gray-400 font-light border-l border-white/10 pl-6 leading-relaxed">
                Desplegamos agentes de IA y workflows que conectan la operación (OT) con los sistemas empresariales (IT), automatizando flujos de punta a punta con datos confiables y bajo control.
              </p>
            </div>
          </div>

          {/* Automatización de Procesos */}
          <div className="group p-10 md:p-14 border border-white/5 hover:bg-white/[0.02] transition-colors relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col md:flex-row md:items-start gap-8 mb-12">
              <span className="shrink-0 w-12 h-12 flex items-center justify-center border border-cyan-500/40 text-cyan-500 bg-cyan-500/5">
                <Workflow className="w-5 h-5" />
              </span>
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Automatización de Procesos</h2>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Diseñamos workflows y agentes de IA que ejecutan tareas operativas y administrativas de punta a punta, reduciendo el trabajo manual y los tiempos de respuesta.
                </p>
              </div>
            </div>

            {/* Casos de uso */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/5">
              {useCases.map((uc, idx) => (
                <div key={uc.title} className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 flex items-center justify-center border border-cyan-500/30 text-cyan-500">
                      {uc.icon}
                    </span>
                    <span className="font-mono text-[10px] text-gray-600 tracking-widest">0{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-3">{uc.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{uc.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 flex justify-center">
            <a href="#" onClick={(e) => { e.preventDefault(); setIsDemoModalOpen(true); }} className="inline-block group">
              <Button className="bg-transparent hover:bg-white hover:text-black text-white border border-white/20 rounded-none px-6 py-5 text-sm uppercase tracking-widest font-bold transition-all">
                Hablemos de tu proyecto
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      <SiteFooter />

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  );
}
