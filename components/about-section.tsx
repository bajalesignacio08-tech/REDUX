import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="saber-mas" className="scroll-mt-20 bg-primary py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground border-none">
            Contenido en proceso
          </Badge>
          <h2 className="text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Conoce mas sobre REDUX
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            [Placeholder: Subtitulo explicativo que se actualizara proximamente]
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="bg-background border-secondary">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-secondary-foreground">1</span>
              </div>
              <CardTitle className="text-foreground">[Caracteristica 1]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                [Placeholder: Descripcion detallada de la primera caracteristica principal del proyecto REDUX. Este texto sera actualizado proximamente.]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-secondary">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-secondary-foreground">2</span>
              </div>
              <CardTitle className="text-foreground">[Caracteristica 2]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                [Placeholder: Descripcion detallada de la segunda caracteristica principal del proyecto REDUX. Este texto sera actualizado proximamente.]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-secondary">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-secondary-foreground">3</span>
              </div>
              <CardTitle className="text-foreground">[Caracteristica 3]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                [Placeholder: Descripcion detallada de la tercera caracteristica principal del proyecto REDUX. Este texto sera actualizado proximamente.]
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-background rounded-2xl p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground border-none">
                En desarrollo
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                [Titulo de seccion detallada]
              </h3>
              <p className="text-muted-foreground mb-4">
                [Placeholder: Parrafo explicativo mas extenso sobre el proyecto REDUX. Aqui se incluira informacion detallada sobre los objetivos, la vision y el impacto esperado del proyecto. Este contenido esta pendiente de redaccion.]
              </p>
              <p className="text-muted-foreground">
                [Placeholder: Segundo parrafo con informacion adicional sobre metodologia, equipo o tecnologias utilizadas en REDUX. Todo este contenido sera actualizado cuando este disponible.]
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-8">
              <h4 className="text-xl font-semibold text-secondary-foreground mb-6">[Puntos clave]</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                  <span className="text-secondary-foreground">[Placeholder: Punto clave 1 del proyecto]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                  <span className="text-secondary-foreground">[Placeholder: Punto clave 2 del proyecto]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                  <span className="text-secondary-foreground">[Placeholder: Punto clave 3 del proyecto]</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
                  <span className="text-secondary-foreground">[Placeholder: Punto clave 4 del proyecto]</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
