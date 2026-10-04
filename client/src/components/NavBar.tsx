import { Button } from "@/components/ui/button";
import { Activity, ChevronDown, Network } from "lucide-react";
import { Link } from "wouter";

/**
 * Shared site navigation bar.
 * `active` highlights the current top-level section; `onDemoClick`, when
 * provided, renders the "Solicitar Demo" CTA that opens the demo modal.
 */

type NavBarProps = {
  active?: "inicio" | "equipo" | "mantenimiento-predictivo" | "soluciones-agenticas-it-ot";
  onDemoClick?: () => void;
};

export default function NavBar({ active, onDemoClick }: NavBarProps) {
  const basePath = import.meta.env.BASE_URL || "/";
  const linkClass = (isActive: boolean) =>
    `text-xs font-semibold uppercase tracking-widest transition-colors ${
      isActive ? "text-white" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-[2px] w-full bg-black/90 backdrop-blur-md border-b border-white/5 z-40 transition-all">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src={`${basePath}images/kronos-logo.png`}
            alt="KRONOS"
            className="h-10 w-auto max-w-[160px] object-contain"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass(active === "inicio")}>Inicio</Link>

          <div className="relative group">
            <button className={`flex items-center gap-1.5 ${linkClass(active === "mantenimiento-predictivo" || active === "soluciones-agenticas-it-ot")}`}>
              Soluciones
              <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="w-80 bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/60 p-2">
                <Link href="/mantenimiento-predictivo" className="flex items-start gap-4 p-4 hover:bg-white/[0.04] transition-colors group/item">
                  <span className="shrink-0 w-9 h-9 flex items-center justify-center border border-cyan-500/30 text-cyan-500 group-hover/item:border-cyan-500 group-hover/item:bg-cyan-500/10 transition-colors">
                    <Activity className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white tracking-wide">Mantenimiento Predictivo</span>
                    <span className="block text-xs text-gray-500 font-light mt-1 leading-relaxed">Anticipa fallas y anomalías en tus operaciones con IA</span>
                  </span>
                </Link>
                <div className="h-px bg-white/5 my-1" />
                <Link href="/soluciones-agenticas-it-ot" className="flex items-start gap-4 p-4 hover:bg-white/[0.04] transition-colors group/item">
                  <span className="shrink-0 w-9 h-9 flex items-center justify-center border border-purple-500/30 text-purple-500 group-hover/item:border-purple-500 group-hover/item:bg-purple-500/10 transition-colors">
                    <Network className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white tracking-wide">Soluciones Agénticas IT/OT</span>
                    <span className="block text-xs text-gray-500 font-light mt-1 leading-relaxed">Agentes de IA y workflows para automatizar la operación</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/equipo" className={linkClass(active === "equipo")}>Equipo</Link>
          <a href="#contact" className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contacto</a>

          {onDemoClick && (
            <a href="#" onClick={(e) => { e.preventDefault(); onDemoClick(); }}>
              <Button className="bg-white hover:bg-gray-200 text-black rounded-none px-6 py-5 text-xs uppercase tracking-widest font-bold transition-all border border-transparent">
                Solicitar Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
