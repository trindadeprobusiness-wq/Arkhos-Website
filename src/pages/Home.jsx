import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Share2, FileText, TrendingUp, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnoAI from '../components/ui/animated-shader-background';
import { Link } from 'react-router-dom';
import { Marquee } from '../components/ui/marquee';
import { Process } from '../components/blocks/demo';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const clientLogos = [
        "/logos/media__1771690540417.jpg",
        "/logos/media__1771690542547.jpg",
        "/logos/media__1771690544300.jpg",
        "/logos/media__1771690549237.jpg",
        "/logos/media__1771690550748.jpg",
        "/logos/media__1771708254415.png"
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
                {/* Background Elements */}
                <AnoAI />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#040404]/60 to-[#040404] pointer-events-none" />

                <div className="container relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center text-center max-w-4xl mx-auto"
                    >
                        {/* Logo Anchor */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <img src="/arkhos-logo.png" alt="ARKHOS Logo" className="w-32 md:w-48 h-auto object-contain mx-auto drop-shadow-[0_0_25px_rgba(0,200,150,0.3)]" />
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-['Sora'] font-bold mb-6 tracking-tight leading-tight"
                        >
                            Inteligência que orienta. <br />
                            <span className="text-[#00C896]">Tecnologia que transforma.</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-[#F1F1F1]/70 max-w-2xl mb-12 leading-relaxed"
                        >
                            ARKHOS reúne análise estratégica, desenvolvimento de alto nível e uma comunidade de mentes que operam no limite do que vem a seguir.
                        </motion.p>

                        {/* Navigation Cards */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                        >
                            <Card className="flex flex-col items-start gap-4 p-8 hover:bg-[#1F1F1F]/80 transition-colors">
                                <div className="p-3 bg-[#00C896]/10 rounded-lg text-[#00C896]">
                                    <Share2 size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-['Sora'] mb-2">Comunidade</h3>
                                    <p className="text-sm text-[#F1F1F1]/60 mb-4">Networking estratégico e insights exclusivos.</p>
                                    <Link to="/comunidade" className="text-[#00C896] text-sm font-medium flex items-center gap-1 group">
                                        Entrar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </Card>

                            <Card className="flex flex-col items-start gap-4 p-8 hover:bg-[#1F1F1F]/80 transition-colors">
                                <div className="p-3 bg-[#00C896]/10 rounded-lg text-[#00C896]">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-['Sora'] mb-2">Aproveitar Oportunidade</h3>
                                    <p className="text-sm text-[#F1F1F1]/60 mb-4">Desenvolvimento e estratégia sob medida.</p>
                                    <Link to="/orcamentos" className="text-[#00C896] text-sm font-medium flex items-center gap-1 group">
                                        Aproveitar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </Card>

                            <Card className="flex flex-col items-start gap-4 p-8 hover:bg-[#1F1F1F]/80 transition-colors">
                                <div className="p-3 bg-[#00C896]/10 rounded-lg text-[#00C896]">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-['Sora'] mb-2">Portfólio</h3>
                                    <p className="text-sm text-[#F1F1F1]/60 mb-4">Cases reais de impacto e transformação.</p>
                                    <Link to="/portfolio" className="text-[#00C896] text-sm font-medium flex items-center gap-1 group">
                                        Ver Cases <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Marquee Clientes */}
            <section className="py-12 bg-black overflow-hidden relative border-b border-white/5">
                <div className="container mx-auto mb-6">
                    <h3 className="text-center text-sm font-['Sora'] text-[#F1F1F1]/50 uppercase tracking-widest">
                        Marcas e Projetos que confiam na Arkhos
                    </h3>
                </div>
                <Marquee speed={60} className="mt-4">
                    {clientLogos.map((logoSrc, index) => (
                        <div
                            key={index}
                            className="relative h-20 w-48 mx-12 flex items-center justify-center transition-all duration-300"
                        >
                            <img
                                src={logoSrc}
                                alt={`Logo Parceiro ${index}`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </section>

            {/* Manifesto Section */}
            <section className="py-24 relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-['Sora'] font-bold mb-6">
                                O contexto é <span className="text-[#00C896]">tudo</span>.
                            </h2>
                            <p className="text-[#F1F1F1]/70 text-lg leading-relaxed mb-6">
                                Vivemos em um momento em que quem entende o contexto — tecnológico, geopolítico, estratégico — opera com vantagem irreversível.
                            </p>
                            <p className="text-[#F1F1F1]/70 text-lg leading-relaxed">
                                ARKHOS existe para esse perfil de pessoa e empresa. Não entregamos apenas código ou relatórios; entregamos clareza executiva e capacidade de ação.
                            </p>
                        </motion.div>

                        {/* Visual Element (Abstract Grid/Dots) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] bg-[#1F1F1F]/30 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center p-8"
                        >
                            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 p-8 opacity-20">
                                {[...Array(36)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-[#00C896] rounded-full w-2 h-2"
                                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
                                        transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
                                    />
                                ))}
                            </div>
                            <div className="z-10 text-center">
                                <div className="text-6xl font-['Sora'] font-bold text-[#F1F1F1] mb-2">+40</div>
                                <div className="text-[#00C896] uppercase tracking-widest text-sm">Projetos Executados</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Metodologia Process Stack */}
            <Process />

            {/* Proof Points */}
            <section className="py-20 border-y border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="py-4 md:py-0 px-4"
                        >
                            <div className="text-5xl font-['Sora'] font-bold text-[#F1F1F1] mb-2">3</div>
                            <div className="text-sm font-mono text-[#F1F1F1]/60 uppercase tracking-wider">Continentes Atendidos</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="py-4 md:py-0 px-4"
                        >
                            <div className="text-5xl font-['Sora'] font-bold text-[#F1F1F1] mb-2">R$ 15M+</div>
                            <div className="text-sm font-mono text-[#F1F1F1]/60 uppercase tracking-wider">Resultado Gerado</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="py-4 md:py-0 px-4"
                        >
                            <div className="text-5xl font-['Sora'] font-bold text-[#F1F1F1] mb-2">100%</div>
                            <div className="text-sm font-mono text-[#F1F1F1]/60 uppercase tracking-wider">Entrega no Prazo</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-['Sora'] font-bold mb-8">
                        Pronto para operar em <br />
                        <span className="text-[#00C896]">outro nível?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/orcamentos">
                            <Button size="lg" className="w-full md:w-auto px-10 py-4 text-lg">
                                Solicitar Orçamento
                            </Button>
                        </Link>
                        <Link to="/portfolio">
                            <Button variant="outline" size="lg" className="w-full md:w-auto px-10 py-4 text-lg">
                                Explorar Portfólio
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
