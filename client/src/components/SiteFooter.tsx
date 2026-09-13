import { Link } from "wouter";
import { GmailIcon, LinkedInIcon } from "@/components/BrandIcons";

/**
 * Shared site footer, present on every page.
 */

export default function SiteFooter() {
  const basePath = import.meta.env.BASE_URL || "/";
  const emailBody = "Hola equipo KRONOS,%0D%0A%0D%0AMe gustaría solicitar una demostración de la plataforma para mi empresa.%0D%0A%0D%0AQuedo atento/a,%0D%0A[Tu Nombre]";
  const mailtoLink = `mailto:rodrigo.urquizo@kronos.org.pe?subject=Solicitud de Demo de KRONOS&body=${emailBody}`;

  return (
    <footer id="contact" className="py-16 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <img
                src={`${basePath}images/logo.png`}
                alt="KRONOS Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm font-light text-gray-500 max-w-sm leading-relaxed">
              Transformando la operación industrial con análisis predictivo y prescriptivo basado en IA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Navegación</h4>
            <div className="space-y-4">
              <Link href="/" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Inicio</Link>
              <Link href="/mantenimiento-predictivo" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Mantenimiento Predictivo</Link>
              <Link href="/consultoria-it-ot" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Consultoría IT/OT</Link>
              <Link href="/equipo" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Equipo</Link>
              <a href="#contact" className="block text-gray-500 hover:text-white transition-colors text-sm font-light">Contacto</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Contacto</h4>
            <div className="space-y-3">
              <a href={mailtoLink} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <GmailIcon className="w-5 h-5 shrink-0 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm font-light">rodrigo.urquizo@kronos.org.pe</span>
              </a>
              <a href="https://www.linkedin.com/company/kronos-predictive-analytics" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon className="w-5 h-5 shrink-0 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm font-light">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-mono tracking-wider">© 2026 KRONOS. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-wider">Privacidad</a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-wider">Términos</a>
            <a href="#" className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-wider">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
