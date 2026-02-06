import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import ProcedimentoCard from "@/components/ProcedimentoCard";

// Images
import card1Image from "@/assets/procedimentos/card-1-dra-livia.jpeg";
import card2Image from "@/assets/procedimentos/card-2-botox.jpeg";
import card3Image from "@/assets/procedimentos/card-3-limpeza.jpeg";
import card4Image from "@/assets/procedimentos/card-4-preenchimento.jpeg";
import card5Image from "@/assets/procedimentos/card-5-bioestimulador.jpeg";
import card6Image from "@/assets/procedimentos/card-6-skinbooster.jpeg";
import card7Image from "@/assets/procedimentos/card-7-microagulhamento.jpeg";
import card8Image from "@/assets/procedimentos/card-8-info.jpeg";

const Procedimentos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const cards = [
    {
      image: card1Image,
      title: "Sou a Dra. Lívia",
      description:
        "Sou Biomédica Esteta, com formação complementar e cursos especializados para aperfeiçoamento de técnicas em procedimentos estéticos faciais, sempre prezando pela naturalidade, segurança e bem-estar dos meus pacientes. Meu atendimento é totalmente personalizado, baseado em avaliação individual, respeitando as características e expectativas de cada paciente.",
      isIntro: true,
    },
    {
      image: card2Image,
      title: "Botox",
      description:
        "A toxina botulínica, popularmente conhecida como Botox, é um procedimento estético minimamente invasivo utilizado para suavizar rugas e linhas de expressão, além de prevenir o envelhecimento precoce da pele. O tratamento age relaxando temporariamente a musculatura responsável pela formação das marcas, proporcionando um aspecto mais leve, descansado e natural ao rosto.",
      price: "R$ 750 (fem) | R$ 850 (masc)",
    },
    {
      image: card3Image,
      title: "Limpeza de Pele",
      description:
        "A limpeza de pele é um procedimento estético que tem como objetivo remover impurezas, células mortas, cravos e o excesso de oleosidade, promovendo a renovação e saúde da pele. O tratamento auxilia na prevenção da acne, melhora a textura cutânea e potencializa a absorção de ativos utilizados nos cuidados diários.",
      price: "R$ 200",
    },
    {
      image: card4Image,
      title: "Preenchimento",
      description:
        "O preenchimento facial é um procedimento estético minimamente invasivo realizado, na maioria das vezes, com ácido hialurônico, substância biocompatível e naturalmente presente no organismo. Ele é indicado para restaurar volume, melhorar contornos faciais, suavizar sulcos e rugas, além de promover maior harmonização.",
      price: "R$ 550",
    },
    {
      image: card5Image,
      title: "Bioestimulador",
      subtitle: "de Colágeno",
      description:
        "O bioestimulador de colágeno é um procedimento estético injetável que estimula o organismo a produzir colágeno de forma natural, promovendo melhora progressiva da firmeza, elasticidade e qualidade da pele. Ele é indicado para tratar a flacidez, melhorar o contorno facial e corporal.",
      price: "A partir de R$ 890",
    },
    {
      image: card6Image,
      title: "Skinbooster",
      description:
        "O Skinbooster é um procedimento estético injetável realizado com ácido hialurônico, indicado para promover hidratação profunda, melhorar a textura, elasticidade e luminosidade da pele. Diferente do preenchimento, o Skinbooster não tem como objetivo dar volume, mas sim revitalizar a pele de dentro para fora.",
      price: "R$ 250",
    },
    {
      image: card7Image,
      title: "Microagulhamento",
      description:
        "O microagulhamento é um procedimento estético minimamente invasivo que utiliza microagulhas para estimular a produção natural de colágeno e elastina, promovendo renovação celular e melhora da qualidade da pele. O tratamento é indicado para suavizar cicatrizes de acne, linhas finas, manchas e flacidez.",
      price: "A partir de R$ 150",
    },
    {
      image: card8Image,
      title: "Informações",
      subtitle: "Importantes",
      description: "",
      isInfo: true,
      infoItems: [
        "Todos os procedimentos são realizados mediante avaliação profissional.",
        "Os resultados podem variar conforme características individuais.",
        "Pode ser necessário mais de uma sessão para atingir o resultado desejado.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        className="p-4 md:p-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Link>

        <div className="text-center">
          <h1 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            Procedimentos
          </h1>
        </div>

        <div className="w-16" />
      </motion.header>

      {/* Carousel */}
      <div className="flex-1 flex flex-col justify-center py-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cards.map((card, index) => (
              <ProcedimentoCard
                key={index}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                price={card.price}
                isIntro={card.isIntro}
                isInfo={card.isInfo}
                infoItems={card.infoItems}
              />
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-6 px-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="p-3 rounded-full bg-card shadow-soft text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="p-3 rounded-full bg-card shadow-soft text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Swipe hint */}
        <motion.p
          className="text-center text-muted-foreground/60 text-xs font-body mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Deslize para ver mais →
        </motion.p>
      </div>

      {/* CTA Footer */}
      <motion.footer
        className="p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="https://wa.me/5547996372918?text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-md mx-auto text-center bg-primary text-primary-foreground px-6 py-4 rounded-full font-body font-medium hover:bg-primary/90 transition-colors shadow-soft"
        >
          Agendar Consulta
        </a>
      </motion.footer>
    </div>
  );
};

export default Procedimentos;
