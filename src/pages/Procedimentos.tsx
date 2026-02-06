import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Wrapper para adicionar sombreamento moderno aos cards
  const EnhancedCard = ({ children }: { children: React.ReactNode }) => (
    <div className="px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)] rounded-3xl overflow-hidden hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-shadow duration-300">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Back Button */}
      <motion.div
        className="fixed top-4 left-4 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </Link>
      </motion.div>

      {/* Card 1 - Apresentação */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card1Image}
          title="Sou a Dra. Lívia"
          description="Sou Biomédica Esteta, com formação complementar e cursos especializados para aperfeiçoamento de técnicas em procedimentos estéticos faciais, sempre prezando pela naturalidade, segurança e bem-estar dos meus pacientes. Meu atendimento é totalmente personalizado, baseado em avaliação individual, respeitando as características e expectativas de cada paciente."
          isIntro
        />
      </EnhancedCard>

      {/* Card 2 - Botox */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card2Image}
          title="Botox"
          description="A toxina botulínica, popularmente conhecida como Botox, é um procedimento estético minimamente invasivo utilizado para suavizar rugas e linhas de expressão, além de prevenir o envelhecimento precoce da pele. O tratamento age relaxando temporariamente a musculatura responsável pela formação das marcas, proporcionando um aspecto mais leve, descansado e natural ao rosto. Os resultados costumam iniciar entre 3 a 7 dias após a aplicação, com duração média de 3 a 6 meses, podendo variar conforme a resposta individual de cada paciente."
        />
      </EnhancedCard>

      {/* Card 3 - Limpeza de Pele */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card3Image}
          title="Limpeza de Pele"
          description="A limpeza de pele é um procedimento estético que tem como objetivo remover impurezas, células mortas, cravos e o excesso de oleosidade, promovendo a renovação e saúde da pele. O tratamento auxilia na prevenção da acne, melhora a textura cutânea e potencializa a absorção de ativos utilizados nos cuidados diários. O procedimento é realizado de forma personalizada, respeitando as necessidades de cada tipo de pele, proporcionando aspecto mais limpo, hidratado e revitalizado."
        />
      </EnhancedCard>

      {/* Card 4 - Preenchimento */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card4Image}
          title="Preenchimento"
          description="O preenchimento facial é um procedimento estético minimamente invasivo realizado, na maioria das vezes, com ácido hialurônico, substância biocompatível e naturalmente presente no organismo. Ele é indicado para restaurar volume, melhorar contornos faciais, suavizar sulcos e rugas, além de promover maior harmonização e rejuvenescimento da face. O tratamento apresenta resultados imediatos, com aspecto natural e seguro quando realizado por profissional habilitado. A durabilidade varia conforme a região tratada, o produto utilizado e as características individuais de cada paciente."
        />
      </EnhancedCard>

      {/* Card 5 - Bioestimulador */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card5Image}
          title="Bioestimulador"
          subtitle="de Colágeno"
          description="O bioestimulador de colágeno é um procedimento estético injetável que estimula o organismo a produzir colágeno de forma natural, promovendo melhora progressiva da firmeza, elasticidade e qualidade da pele. Ele é indicado para tratar a flacidez, melhorar o contorno facial e corporal, além de contribuir para um aspecto mais jovem e saudável da pele. Os resultados surgem gradualmente, tornando o rejuvenescimento natural e duradouro. O tratamento é seguro quando realizado por profissional habilitado, sendo personalizado conforme as necessidades de cada paciente."
        />
      </EnhancedCard>

      {/* Card 6 - Skinbooster */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card6Image}
          title="Skinbooster"
          description="O Skinbooster é um procedimento estético injetável realizado com ácido hialurônico, indicado para promover hidratação profunda, melhorar a textura, elasticidade e luminosidade da pele. Diferente do preenchimento, o Skinbooster não tem como objetivo dar volume, mas sim revitalizar a pele de dentro para fora. O tratamento é indicado para prevenir e tratar sinais de envelhecimento, melhorar linhas finas e devolver o viço natural da pele. Os resultados são progressivos, proporcionando aspecto mais saudável, hidratado e rejuvenescido. O protocolo é personalizado conforme as necessidades de cada paciente."
        />
      </EnhancedCard>

      {/* Card 7 - Microagulhamento */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card7Image}
          title="Microagulhamento"
          description="O microagulhamento é um procedimento estético minimamente invasivo que utiliza microagulhas para estimular a produção natural de colágeno e elastina, promovendo renovação celular e melhora da qualidade da pele. O tratamento é indicado para suavizar cicatrizes de acne, linhas finas, manchas, poros dilatados e flacidez, além de melhorar a textura e uniformidade da pele. Também favorece a absorção de ativos aplicados durante o procedimento, potencializando os resultados. Os resultados são progressivos e o protocolo é personalizado conforme as necessidades e objetivos de cada paciente."
        />
      </EnhancedCard>

      {/* Card 9 - Informações Importantes */}
      <EnhancedCard>
        <ProcedimentoCard
          image={card8Image}
          title="Informações"
          subtitle="Importantes"
          description=""
          isInfo
          infoItems={[
            "Todos os procedimentos são realizados mediante avaliação profissional.",
            "Os resultados podem variar conforme características individuais.",
            "Pode ser necessário mais de uma sessão para atingir o resultado desejado.",
          ]}
        />
      </EnhancedCard>

            {/* Card 8 - Investimentos */}
      <motion.section
        className="py-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden border border-border/50">
            <div className="relative h-64 overflow-hidden">
              <img
                src={card8Image}
                alt="Investimentos"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
            </div>
            
            <div className="p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Investimentos
              </h2>
              
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="bg-muted/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow">
                  <h3 className="font-body text-lg md:text-xl font-semibold text-foreground mb-2">
                    Bioestimulador de Colágeno
                  </h3>
                  <p className="text-muted-foreground font-body">A partir de R$ 850,00</p>
                </div>
                
                <div className="bg-muted/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow">
                  <h3 className="font-body text-lg md:text-xl font-semibold text-foreground mb-2">
                    Skinbooster
                  </h3>
                  <p className="text-muted-foreground font-body">A partir de R$ 250,00</p>
                </div>
                
                <div className="bg-muted/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow">
                  <h3 className="font-body text-lg md:text-xl font-semibold text-foreground mb-2">
                    Microagulhamento
                  </h3>
                  <p className="text-muted-foreground font-body">A partir de R$ 150,00</p>
                </div>
                
                <div className="bg-muted/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow">
                  <h3 className="font-body text-lg md:text-xl font-semibold text-foreground mb-2">
                    Toxina Botulínica (Botox)
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Feminino: a partir de R$ 750,00
                  </p>
                  <p className="text-muted-foreground font-body">
                    Masculino: a partir de R$ 850,00
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow">
                  <h3 className="font-body text-lg md:text-xl font-semibold text-foreground mb-2">
                    Limpeza de Pele
                  </h3>
                  <p className="text-muted-foreground font-body">R$ 200,00</p>
                </div>
                
                <div className="bg-muted/30 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow">
                  <h3 className="font-body text-lg md:text-xl font-semibold text-foreground mb-2">
                    Preenchimento com Ácido Hialurônico
                  </h3>
                  <p className="text-muted-foreground font-body">R$ 550,00 por seringa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* CTA Section */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-b from-background to-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Pronta para começar?
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Agende sua avaliação e descubra o melhor tratamento para você.
          </p>
          <a
            href="https://wa.me/5547996372918?text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-medium hover:bg-primary/90 transition-colors shadow-soft"
          >
            Agendar Consulta
          </a>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-card hover:bg-primary/90 transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default Procedimentos;