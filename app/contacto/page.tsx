import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <div className="text-center max-w-md">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary mx-auto mb-8">
          <span className="text-4xl font-bold text-primary-foreground">R</span>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Página de Contacto
        </h1>
        
        <p className="text-muted-foreground mb-8">
          [Placeholder: Esta página está en construcción. Próximamente encontrarás aquí un formulario de contacto y toda la información necesaria para comunicarte con el equipo de REDUX.]
        </p>
        
        <div className="inline-flex items-center justify-center rounded-lg bg-secondary/30 px-4 py-2 mb-8">
          <span className="text-sm text-muted-foreground">🚧 En desarrollo</span>
        </div>
        
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
