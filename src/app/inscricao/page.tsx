import Link from "next/link";
import { Button } from "@/components/ui/button";

const data = [
  {
    title: "Delegações",
    href: "https://forms.gle/LcoZxPhci9bx8nqR6",
  },
  {
    title: "Performance de Crises",
    href: "https://forms.gle/MkJho8DfvdCktcZ48",
  },
  {
    title: "Imprensa (Press)",
    href: "https://forms.gle/9rEKLuBD9iLj5tot9",
  },
  {
    title: "Mesários / Chairs (Inscrições Fechadas)",
    href: "https://forms.gle/LcoZxPhci9bx8nqR6",
  },
];

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Participe do Evento
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                🚨 AS INSCRIÇÕES PARA O SENAMUN JÁ ESTÃO ABERTAS!!! 🚨
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 h-full">
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col items-start justify-between gap-4 rounded-lg bg-white p-6 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <div className="">
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <Button variant="link" className="border">
                Inscrever-se
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
