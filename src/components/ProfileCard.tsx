import { motion, type Variants } from "framer-motion";
import { Calendar, Sparkles, MessageCircle } from "lucide-react";
import liviaProfile from "@/assets/livia-profile.jpeg";

const ProfileCard = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const buttons = [
    {
      label: "Agendar Atendimento",
      icon: Calendar,
      href: "#agendar",
      variant: "primary" as const,
    },
    {
      label: "Procedimentos",
      icon: Sparkles,
      href: "/procedimentos",
      variant: "outline" as const,
    },
    {
      label: "Contato via WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/5500000000000",
      variant: "outline" as const,
    },
  ];

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card hover:shadow-hover transition-shadow duration-500">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center mb-6"
          variants={imageVariants}
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-nude-light via-gold-light to-nude opacity-60" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-card">
              <img
                src={liviaProfile}
                alt="Lívia Andrade - Biomédica Esteta"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Lívia Andrade
          </h1>
          <p className="text-muted-foreground font-body text-base md:text-lg tracking-wide">
            Biomédica Esteta
          </p>
          <p className="text-primary/80 font-body text-sm mt-1">
            Especialista em Estética Avançada
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-8"
          variants={itemVariants}
        />

        {/* Action Buttons */}
        <motion.div className="space-y-3" variants={containerVariants}>
          {buttons.map((button) => (
            <motion.a
              key={button.label}
              href={button.href}
              target={button.href.startsWith("http") ? "_blank" : undefined}
              rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex items-center justify-center gap-3 w-full py-4 px-6 rounded-full
                font-body font-medium text-sm md:text-base tracking-wide
                transition-all duration-300 cursor-pointer
                ${
                  button.variant === "primary"
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
                    : "bg-transparent border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/5"
                }
              `}
            >
              <button.icon className="w-5 h-5" />
              <span>{button.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.p
          className="text-center text-muted-foreground/60 text-xs mt-8 font-body"
          variants={itemVariants}
        >
          Realce sua beleza natural com cuidado e expertise
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
