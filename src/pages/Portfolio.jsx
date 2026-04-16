import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Work } from '../components/blocks/demo';

const Portfolio = () => {
    const cases = [
        {
            category: "IA Aplicada",
            title: "Automação Jurídica Enterprise",
            client: "Escritório Full-Service Top Tier",
            result: "70% redução em triagem",
            desc: "Implementação de LLMs locais para análise preliminar de contratos e processos judiciais."
        },
        {
            category: "Estratégia Digital",
            title: "Rebranding & Posicionamento",
            client: "Consultoria de M&A",
            result: "3x leads qualificados",
            desc: "Nova identidade visual e verbal alinhada com tese de investimento global."
        },
        {
            category: "Produto",
            title: "Dashboard de Inteligência",
            client: "Agrotech Series A",
            result: "Retenção +40%",
            desc: "Interface de visualização de dados climáticos e de mercado em tempo real."
        },
        {
            category: "Infraestrutura",
            title: "Migração Cloud Native",
            client: "E-commerce de Luxo",
            result: "Uptime 99.99%",
            desc: "Reaquitertura completa para microsserviços com foco em escalabilidade para Black Friday."
        }
    ];

    return (
        <div className="pt-10">
            <section className="py-20 text-center container mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-['Sora'] font-bold mb-6"
                >
                    Resultados que <br /><span className="text-[#00C896]">falam por si.</span>
                </motion.h1>
                <p className="text-[#F1F1F1]/70 text-lg max-w-2xl mx-auto">
                    Cada projeto representa uma decisão estratégica que mudou a trajetória de quem confiou no processo.
                </p>
            </section>

            {/* Showcase Interativo de Projetos */}
            <Work />

            <section className="py-10 pb-32 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {cases.map((project, index) => (
                        <Card key={index} className="p-6 md:p-10 hover:bg-[#1F1F1F] group cursor-pointer transition-all duration-300 flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-6 gap-2">
                                <span className="font-mono text-[11px] md:text-xs text-[#00C896] uppercase tracking-wider border border-[#00C896]/30 px-3 py-1.5 rounded-full inline-block">
                                    {project.category}
                                </span>
                                <ArrowRight className="text-[#F1F1F1]/20 group-hover:text-[#00C896] group-hover:translate-x-2 transition-all duration-300" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-['Sora'] font-bold mb-2 group-hover:text-[#00C896] transition-colors leading-tight">{project.title}</h3>
                            <p className="text-[#F1F1F1]/50 text-xs md:text-sm mb-6 max-w-[90%]">{project.client}</p>

                            <div className="mb-6">
                                <span className="block text-4xl font-['Sora'] font-bold text-[#F1F1F1] mb-1">{project.result}</span>
                                <span className="text-[#F1F1F1]/40 text-xs uppercase tracking-wider">Impacto Principal</span>
                            </div>

                            <p className="text-[#F1F1F1]/70 leading-relaxed">
                                {project.desc}
                            </p>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 sm:mt-32 bg-[#111111] p-8 md:p-12 text-center rounded-2xl border border-white/5 flex flex-col items-center max-w-3xl mx-auto shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold font-['Sora'] text-white mb-3">Viu o que é possível?</h2>
                    <p className="text-[#F1F1F1]/60 text-sm md:text-base mb-8 leading-relaxed max-w-xl">
                        Vamos falar sobre o seu projeto e desenhar juntos o próximo grande case de sucesso da sua empresa.
                    </p>
                    <div className="w-full sm:w-auto">
                        <Link to="/orcamentos" className="block w-full sm:w-auto">
                            <Button className="w-full md:w-auto px-8 md:px-12 py-4" size="lg">Solicitar Orçamento</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
