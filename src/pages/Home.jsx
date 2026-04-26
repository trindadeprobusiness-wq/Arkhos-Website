import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import AnoAI from '../components/ui/animated-shader-background';
import { Link } from 'react-router-dom';
import { Marquee } from '../components/ui/marquee';
import { Process } from '../components/blocks/demo';

// ─── WhatsApp Flutuante ────────────────────────────────────────────────────────
const WhatsAppFloat = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 15000);
        const onScroll = () => {
            if (window.scrollY > window.innerHeight * 0.5) setVisible(true);
        };
        window.addEventListener('scroll', onScroll);
        return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
    }, []);
    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href="https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site%20e%20quero%20entender%20como%20a%20Arkhos%20pode%20ajudar%20meu%20negócio."
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.4)] cursor-pointer"
                >
                    <MessageCircle size={26} className="text-white fill-white" />
                </motion.a>
            )}
        </AnimatePresence>
    );
};

// ─── Números de Autoridade ─────────────────────────────────────────────────────
const AuthorityNumbers = () => {
    const metrics = [
        { value: '90%', label: 'de redução no tempo de consulta', client: 'Tecfil · +200h/mês recuperadas' },
        { value: '70%', label: 'de aumento em comparecimento', client: 'Wittel · Reuniões de vendas' },
        { value: '100%', label: 'da etapa inicial automatizada', client: 'Hunters · Recrutamento com IA' },
    ];

    return (
        <section className="py-24 border-y border-white/5 bg-black/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,150,0.04)_0%,transparent_70%)] pointer-events-none" />
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00C896] mb-4">Resultados reais</p>
                    <h2 className="text-3xl md:text-4xl font-['Sora'] font-bold text-[#F1F1F1]">
                        Números que aparecem em relatórios,{' '}
                        <span className="text-[#00C896]">não em slides.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="text-left p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-[#00C896]/20 transition-all duration-300 group"
                        >
                            <div className="text-6xl md:text-7xl font-['Sora'] font-bold text-[#00C896] mb-3 group-hover:scale-105 transition-transform duration-300 origin-left">
                                {m.value}
                            </div>
                            <div className="text-[#F1F1F1] font-medium text-lg mb-2 leading-snug">{m.label}</div>
                            <div className="text-[#F1F1F1]/40 text-xs font-mono uppercase tracking-wider">{m.client}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Seção de Qualificação ─────────────────────────────────────────────────────
const Qualification = () => {
    const qualifiers = [
        'Operações repetitivas consumindo tempo de profissional sênior',
        'Pipeline de vendas com follow-up manual e inconsistente',
        'Times que perdem leads por falta de resposta rápida e qualificada',
        'Processos críticos dependentes de uma ou duas pessoas específicas',
        'Metas de crescimento que os sistemas atuais não suportam',
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00C896] mb-6">Para quem é</p>
                        <h2 className="text-3xl md:text-4xl font-['Sora'] font-bold text-[#F1F1F1] mb-4 leading-tight">
                            Trabalhamos com empresas que já decidiram crescer.
                        </h2>
                        <p className="text-[#F1F1F1]/60 text-base leading-relaxed">
                            Se você se reconhece em pelo menos um ponto abaixo, vale uma conversa.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-4"
                    >
                        {qualifiers.map((q, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex items-start gap-3 group"
                            >
                                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-[#00C896]/40 bg-[#00C896]/10 flex items-center justify-center group-hover:bg-[#00C896]/20 transition-colors">
                                    <Check size={11} className="text-[#00C896]" />
                                </span>
                                <span className="text-[#F1F1F1]/70 text-sm leading-relaxed group-hover:text-[#F1F1F1] transition-colors">{q}</span>
                            </motion.div>
                        ))}

                        <div className="mt-4 pt-4 border-t border-white/5">
                            <Link to="/orcamentos">
                                <motion.button
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-2 text-[#00C896] text-sm font-medium group"
                                >
                                    Isso descreve sua empresa? Agendar diagnóstico
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// ─── Seção de Garantia ─────────────────────────────────────────────────────────
const Guarantee = () => (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#00C896]/[0.03] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-10 md:p-14 rounded-2xl border border-[#00C896]/20 bg-black/60 backdrop-blur-sm relative"
            >
                <div className="w-12 h-12 rounded-full border border-[#00C896]/30 bg-[#00C896]/10 flex items-center justify-center mx-auto mb-8">
                    <Check size={20} className="text-[#00C896]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-['Sora'] font-bold text-[#F1F1F1] mb-4 leading-tight">
                    Não entregamos o resultado especificado?{' '}
                    <span className="text-[#00C896]">Continuamos trabalhando sem custo adicional</span>{' '}
                    até que o sistema esteja funcionando.
                </h2>
                <p className="text-[#F1F1F1]/50 text-sm leading-relaxed max-w-xl mx-auto">
                    Cada projeto tem escopo, prazo e resultado definidos antes de começar.
                    Você sabe exatamente o que está contratando.
                </p>
            </motion.div>
        </div>
    </section>
);

// ─── Home Page ─────────────────────────────────────────────────────────────────
const Home = () => {
    const clientLogos = [
        "/logos/one-logo-3.png",
        "/logos/media__1771690540417.jpg",
        "/logos/media__1771690542547.jpg",
        "/logos/media__1771690544300.jpg",
        "/logos/media__1771690549237.jpg",
        "/logos/media__1771690550748.jpg",
        "/logos/media__1771708254415.png"
    ];

    return (
        <div className="overflow-hidden">
            <WhatsAppFloat />

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="relative min-h-[95vh] flex items-center justify-center pt-20">
                <AnoAI />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#040404]/60 to-[#040404] pointer-events-none" />

                <div className="container relative z-10 px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                        }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Badge de urgência */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono uppercase tracking-widest text-[#F1F1F1]/50 mb-10"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] animate-pulse" />
                            Apenas 4 novos projetos por mês · 2 vagas disponíveis
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-4xl sm:text-5xl md:text-7xl font-['Sora'] font-bold mb-6 tracking-tight leading-[1.05]"
                        >
                            Operações criadas por humanos,<br />
                            <span className="text-[#00C896]">impulsionadas por IA.</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-base md:text-xl text-[#F1F1F1]/60 max-w-2xl mx-auto mb-12 leading-relaxed"
                        >
                            Implementamos sistemas de inteligência que reduzem custo operacional,
                            aceleram seu ciclo de vendas e eliminam gargalos — com resultado mensurável
                            nas primeiras semanas.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
                        >
                            <a
                                href="#cases"
                                onClick={e => {
                                    e.preventDefault();
                                    document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-8 py-3.5 bg-[#00C896] text-black font-semibold rounded-lg text-sm hover:bg-[#00e6aa] transition-colors"
                                >
                                    Ver como funciona <ArrowRight size={16} />
                                </motion.button>
                            </a>
                            <Link to="/orcamentos">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-8 py-3.5 border border-white/15 text-[#F1F1F1]/80 font-medium rounded-lg text-sm hover:border-[#00C896]/40 hover:text-[#00C896] transition-all"
                                >
                                    Agendar diagnóstico gratuito
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                            className="mt-8"
                        >
                            <ChevronDown size={20} className="text-white/20 mx-auto" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── MARQUEE CLIENTES ─────────────────────────────────────────── */}
            <section className="py-12 bg-black overflow-hidden relative border-b border-white/5">
                <div className="container mx-auto mb-6">
                    <h3 className="text-center text-xs font-mono text-[#F1F1F1]/30 uppercase tracking-[0.3em]">
                        Marcas e Projetos que confiam na Arkhos
                    </h3>
                </div>
                <Marquee speed={60} className="mt-4">
                    {clientLogos.map((logoSrc, index) => (
                        <div
                            key={index}
                            className="relative h-20 w-48 mx-12 flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity duration-300"
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

            {/* ── NÚMEROS DE AUTORIDADE ──────────────────────────────────── */}
            <AuthorityNumbers />

            {/* ── QUALIFICAÇÃO ─────────────────────────────────────────────── */}
            <Qualification />

            {/* ── CASES ────────────────────────────────────────────────────── */}
            <section id="cases" className="py-24 bg-black border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00C896] mb-4">Cases reais</p>
                        <h2 className="text-3xl md:text-4xl font-['Sora'] font-bold text-[#F1F1F1] mb-3">
                            Sistemas entregues. Em produção.{' '}
                            <span className="text-[#00C896]">Gerando resultado.</span>
                        </h2>
                        <p className="text-[#F1F1F1]/40 text-sm max-w-xl mx-auto">
                            Cada projeto entregue com escopo fixo, prazo definido e resultado mensurável.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                sector: 'Indústria',
                                company: 'Tecfil',
                                system: 'Chatbot RAG de Consulta',
                                metric: '90%',
                                metricLabel: 'redução no tempo de consulta',
                                detail: '+200h/mês recuperadas em trabalho manual.',
                                href: '#'
                            },
                            {
                                sector: 'Tecnologia',
                                company: 'Wittel',
                                system: 'Agente IA no WhatsApp',
                                metric: '70%',
                                metricLabel: 'aumento em comparecimento',
                                detail: 'Reuniões de vendas + 85% de resposta NPS.',
                                href: '#'
                            },
                            {
                                sector: 'RH',
                                company: 'Hunters Manpower',
                                system: 'Júlia — AI Embarcadora',
                                metric: '100%',
                                metricLabel: 'da etapa inicial automatizada',
                                detail: 'Entrevistas e recrutamento via WhatsApp.',
                                href: '#'
                            }
                        ].map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 rounded-2xl border border-white/10 bg-[#111111] hover:border-[#00C896]/50 hover:shadow-[0_0_30px_rgba(0,200,150,0.1)] transition-all duration-300 group flex flex-col relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="mb-8 flex items-center justify-between">
                                        <h3 className="text-xl md:text-2xl font-['Sora'] font-bold text-white group-hover:text-[#00C896] transition-colors">{c.company}</h3>
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#00C896] bg-[#00C896]/10 px-2.5 py-1 rounded-md border border-[#00C896]/20">
                                            {c.sector}
                                        </span>
                                    </div>
                                    
                                    <div className="mb-6 flex-1">
                                        <div className="text-5xl md:text-6xl font-['Sora'] font-bold text-[#00C896] mb-3">{c.metric}</div>
                                        <div className="text-[#F1F1F1] text-base font-medium leading-snug mb-3">{c.metricLabel}</div>
                                        <p className="text-[#F1F1F1]/50 text-sm leading-relaxed">{c.detail}</p>
                                    </div>
                                    
                                    <div className="pt-5 border-t border-white/10 mt-auto">
                                        <p className="text-[#F1F1F1]/70 text-sm font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse" />
                                            {c.system}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Depoimento destaque */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12 max-w-3xl mx-auto p-10 rounded-2xl border border-white/8 bg-white/[0.02] text-center"
                    >
                        <p className="text-xl md:text-2xl font-['Sora'] text-[#F1F1F1]/80 leading-relaxed mb-6 italic">
                            "A Arkhos não entregou um produto. Entregou um sistema que funciona. Isso mudou como a gente opera."
                        </p>
                        <div>
                            <div className="text-[#F1F1F1] font-semibold text-sm">Julio Cesar</div>
                            <div className="text-[#F1F1F1]/40 text-xs font-mono uppercase tracking-wider mt-1">Diretor · Hunters Manpower</div>
                        </div>
                    </motion.div>

                    <div className="text-center mt-10">
                        <Link to="/portfolio">
                            <motion.button
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-2 text-[#00C896] text-sm font-medium mx-auto group"
                            >
                                Ver todos os cases <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── METODOLOGIA ──────────────────────────────────────────────── */}
            <Process />

            {/* ── GARANTIA ─────────────────────────────────────────────────── */}
            <Guarantee />

            {/* ── CTA FINAL ────────────────────────────────────────────────── */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,150,0.05)_0%,transparent_70%)] pointer-events-none" />
                <div className="container max-w-3xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00C896] mb-6">Próximo passo</p>
                        <h2 className="text-4xl md:text-5xl font-['Sora'] font-bold mb-4 leading-tight">
                            Pronto para ver onde a IA pode{' '}
                            <span className="text-[#00C896]">atuar no seu negócio?</span>
                        </h2>
                        <p className="text-[#F1F1F1]/50 text-base max-w-xl mx-auto mb-10 leading-relaxed">
                            Agende um diagnóstico gratuito de 30 minutos. Você sai com um mapa claro
                            de oportunidades — independente de contratar ou não.
                        </p>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-widest text-[#F1F1F1]/40 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            Agenda limitada para novos parceiros · 2 vagas disponíveis este mês
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/orcamentos">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-10 py-4 bg-[#00C896] text-black font-bold rounded-lg text-base hover:bg-[#00e6aa] transition-colors"
                                >
                                    Quero meu diagnóstico gratuito <ArrowRight size={18} />
                                </motion.button>
                            </Link>
                            <Link to="/portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-10 py-4 border border-white/15 text-[#F1F1F1]/70 font-medium rounded-lg text-base hover:border-[#00C896]/30 hover:text-[#00C896] transition-all"
                                >
                                    Explorar Portfólio
                                </motion.button>
                            </Link>
                        </div>

                        <p className="text-[#F1F1F1]/25 text-xs mt-6 font-mono">Respondemos em até 24h.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
