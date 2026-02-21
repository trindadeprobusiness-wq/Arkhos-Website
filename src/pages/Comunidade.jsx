import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Zap, CheckCircle, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { LampContainer } from '../components/ui/lamp';

const Comunidade = () => {
    return (
        <div className="w-full">
            {/* Hero com Lamp */}
            <LampContainer className="pt-[80px] mb-20">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="text-4xl md:text-6xl md:leading-[1.2] font-['Sora'] font-bold mb-6 text-center mt-12"
                >
                    Uma comunidade para quem <br />
                    <span className="text-[#00C896]">pensa antes do mercado.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="text-[#F1F1F1]/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto text-center font-['DM_Sans']"
                >
                    Tecnologia, geopolítica e IA — curados para quem toma decisões com base em contexto real.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="w-full flex justify-center"
                >
                    <Button size="lg" className="px-10 py-6 text-lg">Quero Fazer Parte</Button>
                </motion.div>
            </LampContainer>

            {/* Pilares */}
            <section className="py-20 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 hover:bg-[#1F1F1F]">
                            <div className="mb-4 text-[#00C896]"><Zap size={32} /></div>
                            <h3 className="text-xl font-bold font-['Sora'] mb-3">Inteligência de Mercado</h3>
                            <p className="text-[#F1F1F1]/60 text-sm">Análises semanais aprofundadas sobre IA e tecnologias emergentes.</p>
                        </Card>
                        <Card className="p-8 hover:bg-[#1F1F1F]">
                            <div className="mb-4 text-[#00C896]"><Globe size={32} /></div>
                            <h3 className="text-xl font-bold font-['Sora'] mb-3">Contexto Geopolítico</h3>
                            <p className="text-[#F1F1F1]/60 text-sm">O que acontece no mundo e como afeta diretamente seu setor.</p>
                        </Card>
                        <Card className="p-8 hover:bg-[#1F1F1F]">
                            <div className="mb-4 text-[#00C896]"><Users size={32} /></div>
                            <h3 className="text-xl font-bold font-['Sora'] mb-3">Rede Qualificada</h3>
                            <p className="text-[#F1F1F1]/60 text-sm">Acesso a profissionais que operam no nível estratégico.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefícios */}
            <section className="py-20">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-['Sora'] font-bold mb-12 text-center">O que os membros recebem</h2>
                    <ul className="space-y-6">
                        {[
                            "Relatórios exclusivos publicados toda semana",
                            "Acesso antecipado a análises antes da publicação aberta",
                            "Fórum privado com curadoria ativa da equipe ARKHOS",
                            "Sessões ao vivo mensais com especialistas convidados",
                            "Arquivo completo de conteúdos anteriores (Library)"
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 p-4 bg-[#1F1F1F]/50 rounded-lg border border-white/5"
                            >
                                <CheckCircle className="text-[#00C896] flex-shrink-0 mt-1" size={20} />
                                <span className="text-[#F1F1F1]/80">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto max-w-4xl text-center">
                    <MessageSquare size={48} className="text-[#00C896] mx-auto mb-8 opacity-50" />
                    <blockquote className="text-2xl font-['Sora'] italic text-[#F1F1F1]/90 mb-8 leading-relaxed">
                        "O tempo ajeita tudo, mas só pra quem age."
                    </blockquote>
                    <cite className="not-italic text-[#F1F1F1]/60 block font-medium">
                        — Gabriel Trindade
                    </cite>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 text-center">
                <h2 className="text-4xl font-['Sora'] font-bold mb-6">O contexto é vantagem competitiva.</h2>
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="px-12">Entrar na Comunidade</Button>
                </div>
            </section>
        </div>
    );
};

export default Comunidade;
