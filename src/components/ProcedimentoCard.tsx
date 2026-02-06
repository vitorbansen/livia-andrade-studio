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
    <div className="min-w-0 flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_50%] px-3">
      <motion.div
        className="bg-card rounded-3xl shadow-card overflow-hidden h-full flex flex-col"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image - Retangular */}
        <div className="relative w-full aspect-[3/2] overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          {isIntro && (
            <p className="text-primary font-body text-xs uppercase tracking-widest mb-1">
              Olá
            </p>
          )}

          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
            {title}
          </h2>

          {subtitle && (
            <h3 className="font-display text-lg text-primary mb-3">
              {subtitle}
            </h3>
          )}

          {isInfo && infoItems ? (
            <ul className="space-y-2 mt-3">
              {infoItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground font-body text-sm"
                >
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-6">
              {description}
            </p>
          )}

          {/* Price */}
          {price && (
            <div className="mt-auto pt-4 border-t border-border/50">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                Investimento
              </p>
              <p className="font-display text-lg font-semibold text-primary">
                {price}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProcedimentoCard;
