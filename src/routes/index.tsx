import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Armchair,
  Brush,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import logoReviver from "@/assets/logo-reviver.jpg";
import trabalhoCadeira from "@/assets/trabalho-cadeira.jpg";
import trabalhoBanquetaFrente from "@/assets/trabalho-banqueta-frente.jpg";
import trabalhoBanquetaCima from "@/assets/trabalho-banqueta-cima.jpg";
import trabalhoBanquetaOficina from "@/assets/trabalho-banqueta-oficina.jpg";
import trabalhoSofa from "@/assets/trabalho-sofa.jpg";
import trabalhoPoltronaCouro from "@/assets/trabalho-poltrona-couro.jpg";
import trabalhoPoltronaPufe from "@/assets/trabalho-poltrona-pufe.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Reviver Estofados — Reforma e fabricação de estofados em BH" },
      {
        name: "description",
        content:
          "Fabricação sob medida, reformas e limpeza de estofados. Sofás, poltronas e cadeiras com cara de nova. Orçamento pelo WhatsApp: (31) 9650-3533.",
      },
      { property: "og:title", content: "Reviver Estofados" },
      {
        property: "og:description",
        content:
          "Fabricação sob medida, reformas e limpeza de estofados em Belo Horizonte e região. Peça seu orçamento pelo WhatsApp.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WHATSAPP_URL = `https://wa.me/553196503533?text=${encodeURIComponent(
  "Olá, Vanderlei! Vi o site da Reviver Estofados e gostaria de um orçamento."
)}`;

const TELEFONES = [
  { display: "(31) 9650-3533", href: "tel:+553196503533" },
  { display: "(31) 8808-7809", href: "tel:+553188087809" },
];

const SERVICOS = [
  {
    icon: Armchair,
    titulo: "Fabricação sob medida",
    texto:
      "Sofás, poltronas e pufes feitos do zero, no tamanho, tecido e formato que o seu ambiente pede.",
  },
  {
    icon: Brush,
    titulo: "Reformas em geral",
    texto:
      "Troca de tecido, espuma nova, molas e madeira restaurada: seu estofado volta com cara de novo.",
  },
  {
    icon: Sparkles,
    titulo: "Limpeza de estofados",
    texto:
      "Higienização completa de sofás e poltronas, removendo manchas, ácaros e odores de dentro da sua casa.",
  },
];

const TRABALHOS = [
  {
    src: trabalhoCadeira,
    alt: "Cadeira de madeira estofada com tecido jacquard vinho com estampas de letras",
    legenda: "Cadeira com tecido jacquard",
  },
  {
    src: trabalhoBanquetaFrente,
    alt: "Banqueta antiga restaurada com tecido floral cinza e branco, pernas de madeira envernizadas",
    legenda: "Banqueta antiga restaurada",
  },
  {
    src: trabalhoBanquetaCima,
    alt: "Banqueta vista de cima com tecido floral cinza e acabamento caprichado",
    legenda: "Detalhe do acabamento",
  },
  {
    src: trabalhoBanquetaOficina,
    alt: "Banqueta finalizada no ateliê, com espuma nova e pernas de madeira curvadas",
    legenda: "No ateliê da Reviver",
  },
  {
    src: trabalhoPoltronaCouro,
    alt: "Poltrona em couro cinza com detalhes de madeira e base giratória, restaurada",
    legenda: "Poltrona em couro",
  },
  {
    src: trabalhoPoltronaPufe,
    alt: "Poltrona em couro cinza com pufe e almofadas estampadas na sala",
    legenda: "Poltrona com pufe",
  },
];

const FOTOS_CADEIRAS = [
  "/estofados/poltronas-cadeiras/20151218_185951.jpg",
  "/estofados/poltronas-cadeiras/20161015_100859.jpg",
  "/estofados/poltronas-cadeiras/FB_IMG_1460647665437.jpg",
  "/estofados/poltronas-cadeiras/FB_IMG_1460647678528.jpg",
  "/estofados/poltronas-cadeiras/IMG-20161009-WA0014.jpg",
  "/estofados/poltronas-cadeiras/IMG-20180707-WA0014.jpg",
  "/estofados/poltronas-cadeiras/IMG-20180715-WA0005.jpg",
  "/estofados/poltronas-cadeiras/WhatsApp Image 2026-09-30 at 22.36.51.jpeg",
];

const FOTOS_SOFAS = [
  "/estofados/sofas/20161015_100921.jpg",
  "/estofados/sofas/FB_IMG_1460647529297.jpg",
  "/estofados/sofas/FB_IMG_1460647698021.jpg",
  "/estofados/sofas/IMG-20160809-WA0007.jpg",
  "/estofados/sofas/IMG-20161021-WA0040.jpeg",
  "/estofados/sofas/IMG-20161123-WA0057.jpg",
  "/estofados/sofas/IMG-20170320-WA0032.jpg",
  "/estofados/sofas/IMG-20190903-WA0013.jpg",
  "/estofados/sofas/IMG-20190917-WA0002.jpg",
  "/estofados/sofas/IMG-20191105-WA0004.jpg",
  "/estofados/sofas/IMG-20191125-WA0007.jpg",
];

function WhatsAppBotao({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-6 py-3 text-sm font-semibold text-leaf-foreground shadow-lg shadow-leaf/25 transition-transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-leaf/30 " +
        className
      }
    >
      <MessageCircle className="h-5 w-5 fill-current" strokeWidth={1.5} />
      {children}
    </a>
  );
}

function SectionTitulo({
  eyebrow,
  titulo,
}: {
  eyebrow: string;
  titulo: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {titulo}
      </h2>
    </div>
  );
}

function TrabalhosCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <div className="relative mt-12">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="-ml-5">
          {TRABALHOS.map((trabalho) => (
            <CarouselItem
              key={trabalho.legenda}
              className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
            >
              <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <img
                    src={trabalho.src}
                    alt={trabalho.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-medium text-muted-foreground">
                  {trabalho.legenda}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Foto anterior"
          className="left-2 h-10 w-10 rounded-full border-border bg-card/90 shadow-md hover:bg-card"
        />
        <CarouselNext
          aria-label="Próxima foto"
          className="right-2 h-10 w-10 rounded-full border-border bg-card/90 shadow-md hover:bg-card"
        />
      </Carousel>
      <div className="mt-6 flex justify-center gap-2">
        {TRABALHOS.map((trabalho, i) => (
          <button
            key={trabalho.legenda}
            type="button"
            aria-label={`Ir para a foto ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={
              "h-2.5 rounded-full transition-all " +
              (current === i
                ? "w-6 bg-primary"
                : "w-2.5 bg-foreground/20 hover:bg-foreground/30")
            }
          />
        ))}
      </div>
    </div>
  );
}

function GaleriaCarousel({ fotos }: { fotos: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <div className="relative mt-8">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="-ml-5">
          {fotos.map((src, i) => (
            <CarouselItem
              key={i}
              className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3"
            >
              <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[4/3] sm:aspect-[16/10]">
                  <img
                    src={src}
                    alt="Foto da galeria"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Foto anterior"
          className="left-2 h-10 w-10 rounded-full border-border bg-card/90 shadow-md hover:bg-card"
        />
        <CarouselNext
          aria-label="Próxima foto"
          className="right-2 h-10 w-10 rounded-full border-border bg-card/90 shadow-md hover:bg-card"
        />
      </Carousel>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {fotos.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para a foto ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={
              "h-2.5 rounded-full transition-all " +
              (current === i
                ? "w-6 bg-primary"
                : "w-2.5 bg-foreground/20 hover:bg-foreground/30")
            }
          />
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Cabeçalho */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoReviver}
              alt="Reviver Estofados"
              className="h-10 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-foreground">
              Serviços
            </a>
            <a href="#trabalhos" className="transition-colors hover:text-foreground">
              Trabalhos
            </a>
            <a href="#galeria" className="transition-colors hover:text-foreground">
              Galeria
            </a>
            <a href="#sobre" className="transition-colors hover:text-foreground">
              Sobre
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground">
              Contato
            </a>
          </nav>
          <a
            href="tel:+553196503533"
            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            (31) 9650-3533
          </a>
          <WhatsAppBotao className="px-4 py-2 text-xs sm:hidden">Orçamento</WhatsAppBotao>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-sand),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Belo Horizonte e região
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Seu sofá velho com{" "}
              <span className="text-primary">cara de novo</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Reformamos, fabricamos sob medida e limpamos estofados com acabamento
              caprichado. Cadeira, poltrona, banqueta ou sofá inteiro: o móvel que
              você já ama, renovado.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppBotao>Pedir orçamento no WhatsApp</WhatsAppBotao>
              <a
                href="tel:+553196503533"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Phone className="h-4 w-4 text-primary" />
                (31) 9650-3533
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Fabricação sob medida
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-wine" />
                Reformas em geral
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                Limpeza de estofados
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-foreground/10">
              <img
                src={trabalhoSofa}
                alt="Sofá de canto grande com tecido cinza claro e capitonê, em sala com tapete persa"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-xl sm:block">
              <p className="font-display text-lg font-semibold text-foreground">
                Sob medida
              </p>
              <p className="text-xs text-muted-foreground">
                do tecido à madeira
              </p>
            </div>
          </div>
        </div>
        <a
          href="#servicos"
          aria-label="Rolar para serviços"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground lg:block"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      {/* Serviços */}
      <section id="servicos" className="scroll-mt-20 bg-card py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitulo eyebrow="O que fazemos" titulo="Serviços completos de estofaria" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {SERVICOS.map((servico) => (
              <div
                key={servico.titulo}
                className="group rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                  <servico.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {servico.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {servico.texto}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <WhatsAppBotao>Consultar preço do meu serviço</WhatsAppBotao>
          </div>
        </div>
      </section>

      {/* Trabalhos */}
      <section id="trabalhos" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitulo
            eyebrow="Trabalhos reais"
            titulo="Móveis que passaram pela nossa mão"
          />
          <TrabalhosCarousel />
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Tem um móvel parecido? Mande uma foto pelo WhatsApp que a gente avalia a
            reforma.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="scroll-mt-20 bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitulo
            eyebrow="Nossa Galeria"
            titulo="Cadeiras, Poltronas e Sofás"
          />
          
          <div className="mt-16">
            <h3 className="font-display text-2xl font-semibold text-foreground text-center">Cadeiras e Poltronas</h3>
            <GaleriaCarousel fotos={FOTOS_CADEIRAS} />
          </div>

          <div className="mt-20">
            <h3 className="font-display text-2xl font-semibold text-foreground text-center">Sofás</h3>
            <GaleriaCarousel fotos={FOTOS_SOFAS} />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-20 bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-display text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            "Cada estofado sai daqui como se fosse novo — e cada cliente sai
            contente."
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Vanderlei Rodrigues
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Atendimento direto com o dono, do orçamento à entrega. A Reviver
            Estofados cuida da sua cadeira, poltrona, banqueta ou sofá — fabricação
            sob medida, reformas em geral e limpeza de estofados.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-xl shadow-foreground/5">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <SectionTitulo eyebrow="Fale com a gente" titulo="Peça seu orçamento" />
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Mande uma foto ou descreva o móvel — respondemos com um orçamento
                  sem compromisso.
                </p>
                <div className="mt-8 flex justify-center">
                  <WhatsAppBotao className="w-full max-w-xs">
                    Chamar no WhatsApp
                  </WhatsAppBotao>
                </div>
              </div>
              <div className="border-t border-border bg-cream p-8 sm:p-12 lg:border-l lg:border-t-0">
                <ul className="space-y-5 text-sm">
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card">
                      <Phone className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Telefones</p>
                      {TELEFONES.map((tel) => (
                        <a
                          key={tel.href}
                          href={tel.href}
                          className="block text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {tel.display}
                        </a>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card">
                      <Mail className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">E-mail</p>
                      <a
                        href="mailto:reviverestofados@yahoo.com.br"
                        className="break-all text-muted-foreground transition-colors hover:text-foreground"
                      >
                        reviverestofados@yahoo.com.br
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card">
                      <Armchair className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Atendimento</p>
                      <p className="text-muted-foreground">
                        Belo Horizonte e região
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border bg-foreground py-10 text-background/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <img
            src={logoReviver}
            alt="Reviver Estofados"
            className="h-12 w-auto rounded-lg bg-background p-2"
          />
          <p className="text-xs">
            Fabricação sob medida · Reformas em geral · Limpeza de estofados
          </p>
          <p className="text-xs text-background/60">
            Reviver Estofados — Vanderlei Rodrigues. Belo Horizonte e região.
          </p>
        </div>
      </footer>

      {/* Botão fixo de WhatsApp no celular */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-leaf py-3.5 text-sm font-semibold text-leaf-foreground shadow-[0_-4px_20px_rgba(0,0,0,0.15)] sm:hidden"
      >
        <MessageCircle className="h-5 w-5 fill-current" strokeWidth={1.5} />
        Orçamento rápido no WhatsApp
      </a>
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}
