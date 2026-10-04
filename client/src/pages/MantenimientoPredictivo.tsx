import { ArrowLeft, ArrowRight, Cloud, Cpu, Factory, Fuel, Layers, Mountain, Network, Server, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import SiteFooter from "@/components/SiteFooter";
import DemoModal from "@/components/DemoModal";

/**
 * KRONOS — Mantenimiento Predictivo
 * Standalone route (/mantenimiento-predictivo) — same visual language as the landing page.
 */

export default function MantenimientoPredictivo() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL || "/";

  // Support deep links like /mantenimiento-predictivo#demo
  useEffect(() => {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-900 selection:text-white flex flex-col"
         style={{
           backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
           backgroundSize: '32px 32px'
         }}>
      {/* Top Accent Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 z-50"></div>

      <NavBar active="mantenimiento-predictivo" onDemoClick={() => setIsDemoModalOpen(true)} />

      {/* SOLUTION INTRO */}
      <section className="pt-40 pb-16 relative bg-[#050505]">
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
                <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">Transformación</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">LA SOLUCIÓN: KRONOS</h1>
              <p className="text-gray-400 font-light border-l border-white/10 pl-6 leading-relaxed">
                Analítica predictiva de próxima generación que transforma datos en decisiones inteligentes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
            {/* Benefit 1 */}
            <div className="group p-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Zap className="w-8 h-8 text-cyan-500 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Procesamiento de datos</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Limpia, estructura y procesa datos provenientes de SCADA
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="group p-10 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <TrendingUp className="w-8 h-8 text-purple-500 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Predicción de Fallas</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Detecta anomalías antes de que ocurran. Reduce downtime con modelos de ML entrenados en datos industriales reales.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="group p-10 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Cpu className="w-8 h-8 text-gray-300 mb-8 stroke-[1.5]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Simulación Inteligente</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Prueba escenarios sin riesgo. Modela caudal, carga, temperatura y más para encontrar la configuración óptima.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-24 border-t border-white/5 relative scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="flex flex-col gap-16">
            {/* Top: Demo Image full width */}
            <div className="w-full relative group">
              <div className="absolute inset-0 border border-white/10 bg-[#0a0a0a] overflow-hidden -z-10"></div>
              <video
                src="https://media.githubusercontent.com/media/rodrigourquizo/kronos-landing/main/client/public/images/video_demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-h-[90vh] object-contain border border-white/5 rounded-lg"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>

            {/* Bottom: Demo Content */}
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center mt-8 gap-12">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-cyan-500"></div>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">Interfaz Integrada</span>
                  <div className="h-px w-8 bg-cyan-500"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">MIRA A KRONOS EN ACCIÓN</h2>
                <p className="text-gray-400 font-light leading-relaxed max-w-2xl text-center">
                  Dashboard intuitivo que convierte datos complejos en insights accionables. Visualiza predicciones y métricas clave en tiempo real.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/5 pt-12">
                {[
                  { title: "Predicciones con ventana de tiempo ajustable", desc: "Planifica con confianza" },
                  { title: "Alertas inteligentes", desc: "Notificaciones antes del problema" },
                  { title: "Recomendaciones automáticas", desc: "Acciones sugeridas basadas en IA" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="mb-4 font-mono text-xs text-gray-400 group-hover:text-cyan-400 transition-colors border border-white/10 px-3 py-1 bg-white/[0.02]">0{idx + 1}</div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-gray-200 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-400 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a href="#" onClick={(e) => { e.preventDefault(); setIsDemoModalOpen(true); }} className="inline-block group">
                  <Button className="bg-white hover:bg-gray-200 text-black rounded-none px-8 py-6 text-sm uppercase tracking-widest font-bold transition-all">
                    Probar Demo
                    <ArrowRight className="ml-3 w-4 h-4 text-black group-hover:translate-x-2 transition-transform inline" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 border-t border-white/5 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20"
             style={{
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '100px 100px'
             }}>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-purple-500"></div>
                <span className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold">Trazabilidad Operativa</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">CÓMO FUNCIONA</h2>
              <p className="text-gray-400 font-light border-l border-white/10 pl-6 leading-relaxed mt-4">
                Cuatro pasos simples para transformar tu operación industrial
              </p>
            </div>
          </div>

          <div className="relative mb-12">
            <img
              src={`${basePath}images/kronos-how-it-works.png`}
              alt="How KRONOS Works"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-b border-white/5">
            {[
              { title: "Ingesta", desc: "Conexión a SCADA en tiempo real" },
              { title: "Procesamiento", desc: "Modelos de machine learning entrenados con datos históricos" },
              { title: "Predicciones", desc: "Dashboard con predicciones en tiempo real" },
              { title: "Recomendaciones", desc: "Brindadas por KRONOS AI" }
            ].map((step, idx) => (
              <div key={idx} className="p-8 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors last:border-r-0">
                <div className="font-mono text-xs text-purple-500 mb-6 border border-purple-500/30 inline-block px-2 py-1">PASO 0{idx + 1}</div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-white mb-3">{step.title}</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-24 border-t border-white/5">
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-cyan-500"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">Alcance</span>
              <div className="h-px w-8 bg-cyan-500"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">Implementación a tu medida</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5">
            {/* Verticales */}
            <div className="group p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 flex items-center justify-center border border-cyan-500/40 text-cyan-500 bg-cyan-500/5">
                  <Factory className="w-5 h-5" />
                </span>
                <span className="font-mono text-[10px] text-gray-600 tracking-widest">01</span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Nuestras Verticales</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Industrias que atendemos</p>
              <ul className="space-y-4">
                {[
                  { icon: <Zap className="w-4 h-4" />, name: "Generación de energía" },
                  { icon: <Mountain className="w-4 h-4" />, name: "Minería" },
                  { icon: <Fuel className="w-4 h-4" />, name: "Hidrocarburos" },
                ].map((v) => (
                  <li key={v.name} className="flex items-center gap-3 p-3 border border-white/5 bg-white/[0.01] group-hover:border-white/10 transition-colors">
                    <span className="text-cyan-500">{v.icon}</span>
                    <span className="text-sm text-gray-200 font-medium tracking-wide">{v.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infraestructura híbrida */}
            <div className="group p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/5 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 flex items-center justify-center border border-purple-500/40 text-purple-500 bg-purple-500/5">
                  <Cloud className="w-5 h-5" />
                </span>
                <span className="font-mono text-[10px] text-gray-600 tracking-widest">02</span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Infraestructura Híbrida</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Cloud y On-Premise</p>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Cloud className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                  <p className="text-sm text-gray-400 font-light">Cloud para escalabilidad y despliegue ágil</p>
                </li>
                <li className="flex items-start gap-3">
                  <Server className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                  <p className="text-sm text-gray-400 font-light">On-premise para datos sensibles dentro de tu planta</p>
                </li>
                <li className="flex items-start gap-3">
                  <Layers className="w-4 h-4 mt-0.5 text-purple-400 shrink-0" />
                  <p className="text-sm text-gray-400 font-light">Combinación según los requerimientos de tu cliente</p>
                </li>
              </ul>
            </div>

            {/* Casos de uso */}
            <div className="group p-10 md:p-12 hover:bg-white/[0.02] transition-colors relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center justify-between mb-8">
                <span className="w-12 h-12 flex items-center justify-center border border-cyan-500/40 text-cyan-500 bg-cyan-500/5">
                  <Network className="w-5 h-5" />
                </span>
                <span className="font-mono text-[10px] text-gray-600 tracking-widest">03</span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Casos de Uso</h3>
              <div className="space-y-7">
                {[
                  {
                    tech: "Térmicas",
                    cases: [
                      { title: "Predicción de fallas", detail: "en turbina a gas" },
                      { title: "Optimización de lavado", detail: "en turbina a gas" },
                    ],
                  },
                  {
                    tech: "Hidroeléctricas",
                    cases: [
                      { title: "Predicción de fallas", detail: "en generadores y turbinas" },
                      { title: "Detección de cavitación", detail: "en turbinas Francis y Pelton" },
                    ],
                  },
                  {
                    tech: "Eólica y Solar",
                    cases: [
                      { title: "Predicción de fallas", detail: "en cajas multiplicadoras de aerogeneradores" },
                      { title: "Detección de bajo rendimiento", detail: "en inversores y paneles solares" },
                    ],
                  },
                ].map((group) => (
                  <div key={group.tech}>
                    <p className="text-[10px] text-cyan-400/80 uppercase tracking-[0.25em] font-semibold mb-3">{group.tech}</p>
                    <ul className="space-y-4">
                      {group.cases.map((c) => (
                        <li key={c.title} className="border-l border-cyan-500/40 pl-4">
                          <p className="text-sm text-gray-200 font-medium">{c.title}</p>
                          <p className="text-sm text-gray-400 font-light mt-0.5">{c.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SiteFooter />

      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  );
}
