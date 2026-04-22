import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="saber-mas" className="scroll-mt-20 bg-card py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-none">
            Contenido en proceso
          </Badge>
          <h2 className="text-4xl font-bold text-card-foreground mb-4 text-balance">
            Conoce más sobre REDUX
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            [Placeholder: Subtítulo explicativo que se actualizará próximamente]
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="bg-background border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-card-foreground">[Característica 1]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                [Placeholder: Descripción detallada de la primera característica principal del proyecto REDUX. Este texto será actualizado próximamente.]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <CardTitle className="text-card-foreground">[Característica 2]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                [Placeholder: Descripción detallada de la segunda característica principal del proyecto REDUX. Este texto será actualizado próximamente.]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <CardTitle className="text-card-foreground">[Característica 3]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                [Placeholder: Descripción detallada de la tercera característica principal del proyecto REDUX. Este texto será actualizado próximamente.]
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/20 rounded-2xl p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground border-none">
                En desarrollo
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                [Título de sección detallada]
              </h3>
              <p className="text-muted-foreground mb-4">
                [Placeholder: Párrafo explicativo más extenso sobre el proyecto REDUX. Aquí se incluirá información detallada sobre los objetivos, la visión y el impacto esperado del proyecto. Este contenido está pendiente de redacción.]
              </p>
              <p className="text-muted-foreground">
                [Placeholder: Segundo párrafo con información adicional sobre metodología, equipo o tecnologías utilizadas en REDUX. Todo este contenido será actualizado cuando esté disponible.]
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h4 className="text-xl font-semibold text-card-foreground mb-6">[Puntos clave]</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
                  <span className="text-muted-foreground">[Placeholder: Punto clave 1 del proyecto]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
                  <span className="text-muted-foreground">[Placeholder: Punto clave 2 del proyecto]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
                  <span className="text-muted-foreground">[Placeholder: Punto clave 3 del proyecto]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
                  <span className="text-muted-foreground">[Placeholder: Punto clave 4 del proyecto]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
