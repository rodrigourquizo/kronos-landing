import { ArrowLeft, ArrowRight, ShieldCheck, Workflow } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import DemoModal from "@/components/DemoModal";

/**
 * KRONOS — Consultoría IT/OT
 * Standalone route (/consultoria-it-ot) — same visual language as the landing page.
 */

export default function ConsultoriaITOT() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-900 selection:text-white flex flex-col"
         style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
           backgroundSize: '32px 32px'
         }}>
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 z-50"></div>

      <NavBar active="consultoria-it-ot" onDemoClick={() => setIsDemoModalOpen(true)} />

      {/* IT/OT CONSULTING SECTION */}
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
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">CONSULTORÍA IT/OT</h1>
              <p className="text-gray-400 font-light border-l border-white/10 pl-6 leading-relaxed">
                Acompañamos a tu organización en la convergencia entre tecnología operativa (OT) y tecnología de la información (IT), sentando las bases de una operación más inteligente, ágil y segura.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5">
            {/* Point 1: Process Automation */}
            <div className="group p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Workflow className="w-8 h-8 text-cyan-500 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Automatización de Procesos</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                Diseñamos workflows inteligentes y agentes de IA que ejecutan tareas operativas y administrativas, reduciendo el trabajo manual y los tiempos de respuesta.
              </p>
              <ul className="space-y-3 text-sm text-gray-500 font-light">
                <li className="flex items-center gap-2.5"><span className="w-1 h-1 bg-cyan-500 rounded-full shrink-0" /> Workflows a medida</li>
                <li className="flex items-center gap-2.5"><span className="w-1 h-1 bg-cyan-500 rounded-full shrink-0" /> Agentes de IA autónomos</li>
                <li className="flex items-center gap-2.5"><span className="w-1 h-1 bg-cyan-500 rounded-full shrink-0" /> Integración con tus sistemas actuales</li>
              </ul>
            </div>

            {/* Point 2: Data Governance */}
            <div className="group p-10 md:p-14 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <ShieldCheck className="w-8 h-8 text-purple-500 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Gobernanza de Datos</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                Establecemos políticas, estándares y controles para que los datos de IT y OT sean confiables, seguros y estén disponibles para tomar mejores decisiones.
              </p>
              <ul className="space-y-3 text-sm text-gray-500 font-light">
                <li className="flex items-center gap-2.5"><span className="w-1 h-1 bg-purple-500 rounded-full shrink-0" /> Calidad y trazabilidad de datos</li>
                <li className="flex items-center gap-2.5"><span className="w-1 h-1 bg-purple-500 rounded-full shrink-0" /> Políticas de acceso y seguridad</li>
                <li className="flex items-center gap-2.5"><span className="w-1 h-1 bg-purple-500 rounded-full shrink-0" /> Arquitectura de datos escalable</li>
              </ul>
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
