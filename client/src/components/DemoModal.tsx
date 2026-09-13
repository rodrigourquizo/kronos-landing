import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

/**
 * Shared "Solicitar Demo" modal, opened from the nav CTA or in-page CTAs.
 */

type DemoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#050505] border-white/10 text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold uppercase tracking-widest text-white">Solicitar Demo</DialogTitle>
          <DialogDescription className="text-gray-400 font-light mt-2">
            Déjanos tus datos y nos pondremos en contacto contigo para coordinar una demostración personalizada.
          </DialogDescription>
        </DialogHeader>

        <form action="https://formspree.io/f/maqvoegd" method="POST" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombres" className="text-xs uppercase tracking-widest text-gray-400">Nombres *</Label>
              <Input id="nombres" name="Nombres" required className="bg-black border-white/10 text-white focus-visible:ring-cyan-500 focus-visible:border-cyan-500 rounded-none h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400">Email *</Label>
              <Input id="email" name="email" type="email" required className="bg-black border-white/10 text-white focus-visible:ring-cyan-500 focus-visible:border-cyan-500 rounded-none h-11" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-xs uppercase tracking-widest text-gray-400">Teléfono</Label>
              <Input id="telefono" name="Telefono" type="tel" className="bg-black border-white/10 text-white focus-visible:ring-cyan-500 focus-visible:border-cyan-500 rounded-none h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="empresa" className="text-xs uppercase tracking-widest text-gray-400">Empresa</Label>
              <Input id="empresa" name="Empresa" className="bg-black border-white/10 text-white focus-visible:ring-cyan-500 focus-visible:border-cyan-500 rounded-none h-11" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website" className="text-xs uppercase tracking-widest text-gray-400">Página Web</Label>
              <Input id="website" name="Website" type="url" className="bg-black border-white/10 text-white focus-visible:ring-cyan-500 focus-visible:border-cyan-500 rounded-none h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-xs uppercase tracking-widest text-gray-400">LinkedIn</Label>
              <Input id="linkedin" name="Linkedin" type="url" className="bg-black border-white/10 text-white focus-visible:ring-cyan-500 focus-visible:border-cyan-500 rounded-none h-11" />
            </div>
          </div>

          <div className="pt-6">
            <Button type="submit" className="w-full bg-white hover:bg-gray-200 text-black rounded-none py-6 text-sm uppercase tracking-widest font-bold transition-all">
              Enviar Solicitud
              <ArrowRight className="ml-3 w-4 h-4" />
            </Button>
            <p className="text-center text-xs text-cyan-400 font-light mt-4 tracking-wide uppercase">
              Te contactaremos en los siguientes días
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
