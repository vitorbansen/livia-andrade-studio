import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Procedimentos = () => {
  const procedimentos = [
    {
      title: "Harmonização Facial",
      description: "Técnicas avançadas para realçar a beleza natural do rosto.",
    },
    {
      title: "Bioestimuladores",
      description: "Estímulo natural da produção de colágeno para rejuvenescimento.",
    },
    {
      title: "Skincare Avançado",
      description: "Protocolos personalizados para cuidados com a pele.",
    },
    {
      title: "Preenchimento Labial",
      description: "Volumização e contorno labial com resultados naturais.",
    },
    {
      title: "Toxina Botulínica",
      description: "Suavização de linhas de expressão e prevenção de rugas.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-body"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Procedimentos
          </h1>
          <p className="text-muted-foreground font-body">
            Conheça os tratamentos disponíveis
          </p>
        </motion.div>

        {/* Procedures list */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {procedimentos.map((proc) => (
            <motion.div
              key={proc.title}
              variants={itemVariants}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {proc.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {proc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://wa.me/5547996372918?text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium hover:bg-primary/90 transition-colors shadow-soft"
          >
            Agendar Consulta
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Procedimentos;
