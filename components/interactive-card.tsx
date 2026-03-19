"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  ExternalLink,
  Globe,
  Instagram,
  MapPinned,
  MessageCircleMore,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const cardItems = [
  {
    title: "Site oficial",
    subtitle: "Acesse o canal principal da loja.",
    href: "https://sosnarguile.pedizap.com.br/",
    label: "Site",
    cta: "Abrir site",
    icon: Globe,
  },
  {
    title: "WhatsApp",
    subtitle: "Fale direto com a loja de forma rápida.",
    href: "https://wa.me/5514997705681",
    label: "Contato",
    cta: "Chamar agora",
    icon: MessageCircleMore,
  },
  {
    title: "Horários",
    subtitle: "Confira os dias e horários de atendimento.",
    href: "#horarios",
    label: "Horários",
    cta: "Ver agenda",
    icon: Clock3,
  },
  {
    title: "Localização",
    subtitle: "Veja o endereço e chegue com facilidade.",
    href: "https://maps.google.com/?q=Avenida+Hip%C3%B3dromo+1-13+Jd+Carolina",
    label: "Local",
    cta: "Abrir mapa",
    icon: MapPinned,
  },
  {
    title: "Avaliações",
    subtitle: "Reputação local com nota alta e elogios de clientes.",
    href: "#avaliacoes",
    label: "Avaliações",
    cta: "Ver destaques",
    icon: Star,
  },
  {
    title: "Promoção da semana",
    subtitle: "Espaço visual para destaque rotativo da semana.",
    href: "#destaque",
    label: "Destaque",
    cta: "Ver comunicado",
    icon: Zap,
  },
] as const;

const itemMotion = {
  hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.12 + i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const quickPills = [
  { label: "Em alta", value: "Presença local forte" },
  { label: "Atualizado", value: "Atendimento rápido" },
  { label: "Local", value: "Jd Carolina" },
] as const;

export function InteractiveCard() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-107.5 items-center justify-center px-4 py-8 text-foreground sm:px-5">
      <div className="absolute inset-x-0 top-10 h-40 rounded-full bg-red/20 blur-3xl breathe" />
      <div className="absolute bottom-24 right-0 h-32 w-32 rounded-full bg-red/10 blur-3xl breathe" />

      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel neon-edge relative w-full overflow-hidden rounded-[30px] border border-white/10 px-4 py-4 shadow-2xl sm:px-5"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,20,44,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_22%,transparent_75%,rgba(255,255,255,0.03))]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

        <section className="relative overflow-hidden rounded-[26px] border border-white/8 bg-black/40 px-4 py-5">
          <div className="absolute -left-8 top-4 h-24 w-24 rounded-full bg-red/25 blur-2xl" />
          <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-red/15 blur-3xl" />
          <div className="absolute inset-0 rounded-[26px] border border-red/10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative flex flex-col items-center justify-center text-center"
          >
            <div className="float-soft relative h-40 w-60 overflow-hidden rounded-[22px] border border-white/10 bg-linear-to-br from-[#2a060d] via-[#120507] to-[#070707] p-1 shadow-[0_0_0_1px_rgba(216,20,44,0.12),0_14px_30px_rgba(0,0,0,0.4)]">
              <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[#12070a]">
                <Image
                  src="/sos-mark.png"
                  alt="Logo da S.O.S Narguilé"
                  fill
                  sizes="240px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-red/20 bg-red/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85">
              <Sparkles className="h-3.5 w-3.5 text-red-300" />
              Badge premium
            </div>

            <Link
              href="https://instagram.com/sosnarguile"
              target="_blank"
              className="mt-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:border-red/30 hover:bg-red/10 hover:text-white"
              aria-label="Abrir Instagram da S.O.S Narguilé"
            >
              <Instagram className="h-8 w-8" />
            </Link>
          </motion.div>

          <div className="relative mt-5 grid grid-cols-3 gap-2.5">
            {quickPills.map((pill, index) => (
              <motion.div
                key={pill.label}
                custom={index}
                variants={itemMotion}
                initial="hidden"
                animate="show"
                className="rounded-2xl border border-white/8 bg-white/4.5 px-3 py-2"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-red-200/80">
                  {pill.label}
                </span>
                <span className="mt-1 block text-xs font-medium leading-4 text-white/76">
                  {pill.value}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          id="destaque"
          initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="relative mt-4 overflow-hidden rounded-3xl border border-red/15 bg-linear-to-br from-red/16 via-red/7 to-white/3 px-4 py-4"
        >
          <div className="pointer-events-none absolute inset-0 shimmer opacity-70" />
          <div className="relative flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red/20 bg-black/25 text-red-200">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Em alta
              </span>
              <h2 className="mt-3 text-base font-bold text-white">
                Referência local com presença forte e atendimento confiável.
              </h2>
              <p className="mt-2 text-sm leading-5 text-white/72">
                Um cartão institucional criado para reforçar praticidade,
                reputação e a identidade marcante da marca em cada toque.
              </p>
            </div>
          </div>
        </motion.section>

        <section className="relative mt-4 space-y-3">
          {cardItems.map((item, index) => {
            const Icon = item.icon;
            const isAnchor = item.href.startsWith("#");

            return (
              <motion.div
                key={item.title}
                custom={index}
                variants={itemMotion}
                initial="hidden"
                animate="show"
              >
                <Link
                  href={item.href}
                  target={isAnchor ? undefined : "_blank"}
                  className="group glass-panel neon-edge relative flex overflow-hidden rounded-3xl border border-white/10 px-4 py-4 transition duration-300 active:scale-[0.985]"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 group-active:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(216,20,44,0.08),transparent)]" />
                  <div className="mr-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red/15 bg-linear-to-br from-red/18 via-black/40 to-white/3 text-red-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/38 transition duration-300 group-hover:text-red-200" />
                    </div>
                    <h3 className="mt-3 text-[15px] font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-white/68">
                      {item.subtitle}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-red-100">
                      {item.cta}
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </section>

        <section className="mt-4 grid gap-3 sm:grid-cols-2">
          <motion.article
            id="horarios"
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-panel rounded-3xl border border-white/10 px-4 py-4"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
              Atualizado
            </span>
            <h3 className="mt-3 text-base font-bold text-white">
              Horário de atendimento
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/72">
              <li className="flex items-center justify-between gap-2 rounded-2xl bg-white/3 px-3 py-2">
                <span>Segunda a Sexta</span>
                <strong className="text-white">13:00 às 20:50</strong>
              </li>
              <li className="flex items-center justify-between gap-2 rounded-2xl bg-white/3 px-3 py-2">
                <span>Sábado</span>
                <strong className="text-white">13:00 às 19:00</strong>
              </li>
              <li className="flex items-center justify-between gap-2 rounded-2xl bg-white/3 px-3 py-2">
                <span>Domingo e Feriados</span>
                <strong className="text-white">Fechado</strong>
              </li>
            </ul>
          </motion.article>

          <motion.article
            id="avaliacoes"
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="glass-panel rounded-3xl border border-white/10 px-4 py-4"
          >
            <span className="inline-flex rounded-full border border-red/20 bg-red/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-red-100">
              Avaliações
            </span>
            <div className="mt-3 flex items-end gap-2">
              <strong className="text-3xl font-black tracking-[-0.04em] text-white">
                4,8
              </strong>
              <span className="pb-1 text-sm text-white/55">
                reputação local
              </span>
            </div>
            <div className="mt-3 flex gap-1 text-red-200">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${index === 4 ? "opacity-50" : ""}`}
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="mt-3 text-sm leading-5 text-white/72">
              Elogios recorrentes sobre variedade, preços competitivos e um
              atendimento que transmite confiança no dia a dia.
            </p>
          </motion.article>
        </section>

        <footer className="relative mt-4 flex items-center justify-between rounded-[22px] border border-white/8 bg-black/30 px-4 py-3 text-xs text-white/48">
          <span>Avenida Hipódromo 1-13 Jd Carolina</span>
          <Link
            href="https://instagram.com/seuinstagram"
            target="_blank"
            className="font-medium text-white/58 transition hover:text-white"
          >
            Crafted by @seuinstagram
          </Link>
        </footer>
      </motion.div>
    </main>
  );
}
