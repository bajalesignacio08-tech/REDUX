import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">R</span>
          </div>
          <span className="text-xl font-bold text-foreground">REDUX</span>
        </Link>
        
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost" className="text-foreground hover:bg-secondary hover:text-secondary-foreground">
            <a href="#saber-mas">Saber más</a>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
