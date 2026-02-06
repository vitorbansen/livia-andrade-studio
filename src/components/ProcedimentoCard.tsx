import { motion } from "framer-motion";

interface ProcedimentoCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  price?: string;
  isIntro?: boolean;
  isInfo?: boolean;
  infoItems?: string[];
}

const ProcedimentoCard = ({
  image,
  title,
  subtitle,
  description,
  price,
  isIntro = false,
  isInfo = false,
  infoItems,
}: ProcedimentoCardProps) => {
  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center bg-background py-8 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <div
          className={`flex flex-col ${
            isIntro ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-8 lg:gap-12 items-center`}
        >
          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: isIntro ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-card max-w-md lg:max-w-lg w-full">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: isIntro ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isIntro && (
              <p className="text-primary font-body text-sm uppercase tracking-widest mb-2">
                Olá
              </p>
            )}

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-2">
              {title}
            </h2>

            {subtitle && (
              <h3 className="font-display text-xl md:text-2xl text-primary mb-6">
                {subtitle}
              </h3>
            )}

            {isInfo && infoItems ? (
              <ul className="space-y-4 mt-6">
                {infoItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground font-body"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8">
                {description}
              </p>
            )}

            {/* Price */}
            {price && (
              <motion.div
                className="mt-8 inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-card rounded-2xl px-8 py-4 shadow-soft border border-border/50">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                    Investimento
                  </p>
                  <p className="font-display text-xl md:text-2xl font-semibold text-primary">
                    {price}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProcedimentoCard;
