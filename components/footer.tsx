import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">R</span>
            </div>
            <span className="text-lg font-bold text-card-foreground">REDUX</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            [Placeholder: © 2026 REDUX. Todos los derechos reservados.]
          </p>
          
          <Button asChild variant="outline" className="border-border text-card-foreground hover:bg-secondary hover:text-secondary-foreground">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
