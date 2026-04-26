import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, Calendar } from 'lucide-react';

// ─── Configurações ────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '5511999999999';

// ─── Fluxo do Formulário Inteligente (Decision Tree) ───────────────────────────
const QUESTIONS = {
    DADOS_NOME: {
        id: 'DADOS_NOME',
        title: "Como podemos te chamar?",
        subtitle: "VAMOS COMEÇAR!",
        inputType: "text",
        placeholder: "Ex: João Silva",
        key: "nome",
        next: "DADOS_EMAIL"
    },
    DADOS_EMAIL: {
        id: 'DADOS_EMAIL',
        title: "Qual é o seu melhor e-mail?",
        subtitle: "Para enviar o resumo do diagnóstico",
        inputType: "email",
        placeholder: "joao@empresa.com.br",
        key: "email",
        next: "DADOS_WHATSAPP"
    },
    DADOS_WHATSAPP: {
        id: 'DADOS_WHATSAPP',
        title: "E o seu WhatsApp?",
        subtitle: "Para contato rápido (prometemos não fazer spam)",
        inputType: "tel",
        placeholder: "(11) 99999-9999",
        key: "whatsapp",
        next: "DADOS_EMPRESA"
    },
    DADOS_EMPRESA: {
        id: 'DADOS_EMPRESA',
        title: "Qual é o nome da sua empresa?",
        subtitle: "Opcional, mas ajuda no diagnóstico",
        inputType: "text",
        placeholder: "Ex: Arkhos Tech",
        key: "empresa",
        next: "P1"
    },
    P1: {
        id: 'P1',
        title: "Qual é o maior desafio do seu negócio hoje?",
        subtitle: "Antes de qualquer coisa, quero entender o que te trouxe até aqui.",
        options: [
            { label: "🌐 Não tenho (ou tenho um site ruim) e preciso de presença online", branch: "A", next: "A_P2" },
            { label: "⚙️ Minha equipe perde tempo com processos manuais e repetitivos", branch: "B", next: "B_P2" },
            { label: "📉 Estou perdendo clientes ou não consigo atrair novos", branch: "C", next: "C_P2" },
            { label: "🖥️ Preciso de um sistema interno para organizar minha operação", branch: "D", next: "D_P2" },
            { label: "🚀 Quero escalar o negócio, mas a tecnologia não acompanha", branch: "E", next: "E_P2" },
            { label: "🤔 Não sei exatamente, mas sei que algo precisa mudar", branch: "F", next: "F_P2" }
        ]
    },

    // Ramo A: Site
    A_P2: {
        id: 'A_P2',
        title: "Você já tem um site hoje, ou está começando do zero?",
        options: [
            { label: "Já tenho um site, mas precisa melhorar", next: "A_P2b" },
            { label: "Não tenho site, começando do zero", next: "A_P3" }
        ]
    },
    A_P2b: {
        id: 'A_P2b',
        title: "O que não funciona no seu site atual?",
        options: [
            { label: "Lentidão", next: "A_P3" },
            { label: "Visual desatualizado", next: "A_P3" },
            { label: "Não gera contatos", next: "A_P3" },
            { label: "Não aparece no Google", next: "A_P3" },
            { label: "Outro", next: "A_P3" }
        ]
    },
    A_P3: {
        id: 'A_P3',
        title: "Qual seria o principal objetivo do seu novo site?",
        options: [
            { label: "Gerar contatos e leads qualificados", next: "A_P4" },
            { label: "Ser encontrado no Google (SEO)", next: "A_P4" },
            { label: "Vender produtos diretamente (e-commerce)", next: "A_P4" },
            { label: "Credibilidade institucional", next: "A_P4" },
            { label: "Tudo isso ao mesmo tempo", next: "A_P4" }
        ]
    },
    A_P4: {
        id: 'A_P4',
        title: "Você atende clientes B2B (empresas), B2C (consumidores finais) ou os dois?",
        options: [
            { label: "B2B (Empresas)", next: "A_P5" },
            { label: "B2C (Consumidores finais)", next: "A_P5" },
            { label: "Atendo ambos", next: "A_P5" }
        ]
    },
    A_P5: {
        id: 'A_P5',
        title: "Como você conquista clientes hoje — antes de ter um site funcionando perfeitamente?",
        options: [
            { label: "WhatsApp e Contatos Pessoais", next: "P6" },
            { label: "Indicações de clientes atuais", next: "P6" },
            { label: "Redes sociais (Instagram/LinkedIn)", next: "P6" },
            { label: "Eventos e feiras", next: "P6" },
            { label: "Ainda não tenho clientes", next: "P6" },
            { label: "Outros canais", next: "P6" }
        ]
    },

    // Ramo B: Automação
    B_P2: {
        id: 'B_P2',
        title: "Em qual área da sua empresa você sente mais esse gargalo?",
        options: [
            { label: "Vendas e Comercial", next: "B_P3" },
            { label: "Atendimento ao cliente", next: "B_P3" },
            { label: "Operações e logística", next: "B_P3" },
            { label: "Financeiro", next: "B_P3" },
            { label: "RH", next: "B_P3" },
            { label: "Comunicação interna", next: "B_P3" }
        ]
    },
    B_P3: {
        id: 'B_P3',
        title: "Me diz uma coisa: hoje, quantas pessoas da sua equipe ficam presas nesse processo manual?",
        options: [
            { label: "Só eu mesmo", next: "B_P4" },
            { label: "2 a 5 pessoas", next: "B_P4" },
            { label: "6 a 15 pessoas", next: "B_P4" },
            { label: "Mais de 15 pessoas", next: "B_P4" }
        ]
    },
    B_P4: {
        id: 'B_P4',
        title: "Que ferramenta você usa hoje para gerenciar isso (mesmo que de forma incompleta)?",
        options: [
            { label: "Planilha Excel ou Google Sheets", next: "B_P5" },
            { label: "Apenas WhatsApp", next: "B_P5" },
            { label: "Papel e caneta", next: "B_P5" },
            { label: "Sistema antigo que não atende", next: "B_P5" },
            { label: "Nenhuma ferramenta", next: "B_P5" }
        ]
    },
    B_P5: {
        id: 'B_P5',
        title: "Se esse processo fosse automatizado, o que mudaria de verdade no seu negócio?",
        options: [
            { label: "Economizaria horas por dia", next: "P6" },
            { label: "Reduziria erros e retrabalho", next: "P6" },
            { label: "Conseguiria atender mais clientes", next: "P6" },
            { label: "Teria dados para tomar decisões", next: "P6" },
            { label: "Dormiria melhor à noite", next: "P6" }
        ]
    },

    // Ramo C: Conversão
    C_P2: {
        id: 'C_P2',
        title: "Onde você sente que está perdendo mais clientes?",
        options: [
            { label: "Antes do primeiro contato (ninguém me encontra)", next: "C_P3" },
            { label: "Na proposta ou orçamento", next: "C_P3" },
            { label: "No fechamento da venda", next: "C_P3" },
            { label: "Após a venda (churn/cancelamento)", next: "C_P3" },
            { label: "Sinto que perco em todos os pontos", next: "C_P3" }
        ]
    },
    C_P3: {
        id: 'C_P3',
        title: "Você sabe hoje de onde vêm seus melhores clientes?",
        options: [
            { label: "Sim, sei exatamente a origem", next: "C_P4" },
            { label: "Tenho uma ideia aproximada", next: "C_P4" },
            { label: "Não faço ideia", next: "C_P4" },
            { label: "Quase todos vêm de indicação", next: "C_P4" }
        ]
    },
    C_P4: {
        id: 'C_P4',
        title: "Qual é o ticket médio do seu serviço ou produto?",
        options: [
            { label: "Até R$ 500", next: "C_P5" },
            { label: "R$ 500 a R$ 2.000", next: "C_P5" },
            { label: "R$ 2.000 a R$ 10.000", next: "C_P5" },
            { label: "Acima de R$ 10.000", next: "C_P5" }
        ]
    },
    C_P5: {
        id: 'C_P5',
        title: "Você já tem algum funil de vendas estruturado ou está começando do zero?",
        options: [
            { label: "Já tenho um funil bem estruturado", next: "P6" },
            { label: "Tenho processos básicos, mas falta estrutura", next: "P6" },
            { label: "Estou começando do zero nessa parte", next: "P6" }
        ]
    },

    // Ramo D: Sistema
    D_P2: {
        id: 'D_P2',
        title: "Quem vai usar esse sistema no dia a dia?",
        options: [
            { label: "Apenas minha equipe interna", next: "D_P3" },
            { label: "Meus clientes terão acesso", next: "D_P3" },
            { label: "Parceiros e fornecedores", next: "D_P3" },
            { label: "Todos esses perfis", next: "D_P3" }
        ]
    },
    D_P3: {
        id: 'D_P3',
        title: "Esse sistema precisa se integrar com algo que você já usa?",
        options: [
            { label: "ERP (SAP, Totvs, Omie, etc.)", next: "D_P4" },
            { label: "CRM (Salesforce, HubSpot, etc.)", next: "D_P4" },
            { label: "Plataforma de E-commerce", next: "D_P4" },
            { label: "Outras APIs externas", next: "D_P4" },
            { label: "Não precisa integrar, funcionará isolado", next: "D_P4" }
        ]
    },
    D_P4: {
        id: 'D_P4',
        title: "Você tem o processo que esse sistema vai automatizar já desenhado e documentado?",
        options: [
            { label: "Sim, está tudo documentado", next: "D_P5" },
            { label: "Temos uma ideia, mas não está formalizado", next: "D_P5" },
            { label: "Precisamos mapear e desenhar junto com vocês", next: "D_P5" }
        ]
    },
    D_P5: {
        id: 'D_P5',
        title: "Quantas pessoas usariam esse sistema simultaneamente na sua empresa?",
        options: [
            { label: "1 a 5 pessoas", next: "P6" },
            { label: "6 a 20 pessoas", next: "P6" },
            { label: "21 a 100 pessoas", next: "P6" },
            { label: "Mais de 100 pessoas", next: "P6" }
        ]
    },

    // Ramo E: Escala
    E_P2: {
        id: 'E_P2',
        title: "O que está segurando seu crescimento hoje — no fundo, qual é a raiz do problema?",
        options: [
            { label: "Falta de visibilidade (ninguém me conhece)", next: "E_P3" },
            { label: "Não consigo atender a demanda operacional atual", next: "E_P3" },
            { label: "Minha equipe não tem as ferramentas certas", next: "E_P3" },
            { label: "Não tenho dados claros para tomar decisões", next: "E_P3" },
            { label: "Meu produto/serviço não está posicionado corretamente", next: "E_P3" }
        ]
    },
    E_P3: {
        id: 'E_P3',
        title: "Você já investiu em tecnologia antes? Como foi a experiência?",
        options: [
            { label: "Sim, com ótimos resultados", next: "E_P4" },
            { label: "Sim, mas não deu o retorno esperado", next: "E_P4" },
            { label: "Sim, foi uma experiência ruim", next: "E_P4" },
            { label: "Não, esta seria a primeira vez investindo pesado", next: "E_P4" }
        ]
    },
    E_P4: {
        id: 'E_P4',
        title: "Como está seu faturamento mensal hoje? (Isso nos ajuda a entender a escala da solução)",
        options: [
            { label: "Até R$ 30k", next: "P6" },
            { label: "R$ 30k a R$ 100k", next: "P6" },
            { label: "R$ 100k a R$ 500k", next: "P6" },
            { label: "Acima de R$ 500k", next: "P6" },
            { label: "Prefiro não informar agora", next: "P6" }
        ]
    },

    // Ramo F: Indeciso
    F_P2: {
        id: 'F_P2',
        title: "Certo, vou te ajudar a descobrir. Me conta: qual é a situação que mais te frustra no seu negócio hoje?",
        options: [
            { label: "Perco muito tempo em tarefas manuais e repetitivas", next: "B_P3" },
            { label: "Não consigo novos clientes e as vendas estão travadas", next: "C_P3" },
            { label: "Minha equipe não trabalha de forma organizada", next: "D_P3" },
            { label: "Não tenho visibilidade do que está acontecendo na empresa", next: "E_P3" },
            { label: "Meu site ou sistema está muito atrasado em relação ao mercado", next: "A_P3" }
        ]
    },

    // Qualificação Final Comum
    P6: {
        id: 'P6',
        title: "Qual é a sua expectativa de prazo para ter isso funcionando?",
        options: [
            { label: "Preciso disso ontem — é urgente", next: "P7" },
            { label: "No próximo mês (30 dias)", next: "P7" },
            { label: "Em 2 a 3 meses", next: "P7" },
            { label: "Não tenho prazo definido ainda, estou pesquisando", next: "P7" }
        ]
    },
    P7: {
        id: 'P7',
        title: "Para planejar uma solução que realmente faça sentido para você, qual faixa de investimento está no seu horizonte?",
        options: [
            { label: "Ainda estou pesquisando valores", next: "P8" },
            { label: "R$ 3.000 a R$ 8.000", next: "P8" },
            { label: "R$ 8.000 a R$ 20.000", next: "P8" },
            { label: "R$ 20.000 a R$ 50.000", next: "P8" },
            { label: "Acima de R$ 50.000", next: "P8" }
        ]
    },
    P8: {
        id: 'P8',
        title: "Por último: como você prefere que a Arkhos entre em contato para apresentar um diagnóstico personalizado?",
        options: [
            { label: "Reunião em vídeo via Google Meet (30 min)", next: "FINAL" },
            { label: "Ligação telefônica", next: "FINAL" },
            { label: "Mensagem no WhatsApp", next: "FINAL" },
            { label: "E-mail detalhado primeiro", next: "FINAL" }
        ]
    }
};

// ─── Componentes ──────────────────────────────────────────────────────────────
const OptionCard = ({ label, selected, onClick }) => (
    <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full text-left px-6 py-5 rounded-xl border transition-all duration-300 text-base md:text-lg font-['Sora'] leading-snug flex items-center gap-4
      ${selected
                ? 'border-[#00C896] bg-[#00C896]/10 text-white shadow-[0_0_20px_rgba(0,200,150,0.15)]'
                : 'border-white/10 bg-[#111] text-[#F1F1F1]/70 hover:border-[#00C896]/50 hover:bg-[#1a1a1a] hover:text-white'
            }`}
    >
        <span className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all
          ${selected ? 'border-[#00C896]' : 'border-white/20'}`}>
            {selected && <span className="w-2.5 h-2.5 rounded-full bg-[#00C896] block" />}
        </span>
        <span>{label}</span>
    </motion.button>
);

const StepInput = ({ placeholder, value, onChange, type = 'text', onEnter }) => {
    const ref = useRef();
    useEffect(() => { if (ref.current) ref.current.focus(); }, []);
    return (
        <input
            ref={ref}
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            onKeyDown={e => { if (e.key === 'Enter' && onEnter) onEnter(); }}
            className="w-full bg-transparent border-b border-white/20 focus:border-[#00C896] outline-none text-white text-xl py-3 placeholder-white/20 transition-all duration-300 font-['Sora'] mb-4"
        />
    );
};

// ─── Formulário Inteligente Principal ─────────────────────────────────────────
const Orcamento = () => {
    // History para poder voltar passos
    const [history, setHistory] = useState([]);
    const [currentStepId, setCurrentStepId] = useState('DADOS_NOME');
    const [answers, setAnswers] = useState({});

    // Etapa final (Dados)
    const [dadosForm, setDadosForm] = useState({ nome: '', email: '', whatsapp: '', empresa: '' });
    const [isComplete, setIsComplete] = useState(false);

    // Progresso simulado
    const progress = Math.min(((history.length + 1) / 8) * 100, 100);

    const handleOptionSelect = (option) => {
        // Salva a resposta e avança no fluxo
        setAnswers(prev => ({ ...prev, [currentStepId]: option.label }));

        setTimeout(() => {
            if (option.next === 'FINAL') {
                console.log('Briefing Finalizado:', { ...answers, [currentStepId]: option.label, ...dadosForm });
                setIsComplete(true);
            } else {
                setHistory(prev => [...prev, currentStepId]);
                setCurrentStepId(option.next);
            }
        }, 300); // pequeno delay para mostrar a seleção visualmente
    };

    const handleBack = () => {
        if (history.length > 0) {
            const newHistory = [...history];
            const previousStep = newHistory.pop();
            setHistory(newHistory);
            setCurrentStepId(previousStep);
        }
    };

    const isValidInput = (q) => {
        const val = dadosForm[q.key] || '';
        if (q.key === 'nome') return val.length > 2;
        if (q.key === 'email') return val.includes('@') && val.length > 5;
        if (q.key === 'whatsapp') return val.length > 8;
        if (q.key === 'empresa') return true; // Opcional
        return true;
    };

    const handleInputNext = (q) => {
        if (!isValidInput(q)) return;
        setHistory(prev => [...prev, currentStepId]);
        setCurrentStepId(q.next);
    };

    // ── TELA DE CONFIRMAÇÃO (THANK YOU PAGE) ──────────────────────────────────
    if (isComplete) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center px-4 py-20 relative bg-[#040404]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,150,0.05)_0%,transparent_70%)] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="relative z-10 max-w-xl w-full text-center bg-[#111] p-10 rounded-2xl border border-white/5 shadow-2xl"
                >
                    <div className="w-20 h-20 bg-[#00C896]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#00C896]/30">
                        <Check size={40} className="text-[#00C896]" />
                    </div>
                    <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#00C896] mb-4">Diagnóstico recebido</p>
                    <h2 className="text-3xl md:text-4xl font-['Sora'] font-bold text-white mb-6">
                        Você vai adorar o que estamos preparando.
                    </h2>
                    <p className="text-[#F1F1F1]/70 text-base leading-relaxed mb-10">
                        Um especialista da Arkhos já recebeu suas informações e está analisando o contexto da <strong className="text-white">{dadosForm.empresa || 'sua empresa'}</strong>. Entraremos em contato em até <strong className="text-[#00C896]">4 horas úteis</strong>.
                    </p>

                    <div className="pt-8 border-t border-white/10">
                        <p className="text-sm text-white/50 mb-6">Se preferir não esperar, agende seu horário direto na agenda do especialista:</p>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-4 bg-[#00C896] text-black font-bold rounded-xl hover:bg-[#00e6aa] transition-all flex items-center justify-center gap-2"
                        >
                            <Calendar size={18} /> Agendar no Calendly
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        );
    }

    // (Removido tela DADOS consolidada)

    // ── TELA DE PERGUNTAS (DECISION TREE) ─────────────────────────────────────
    const question = QUESTIONS[currentStepId];

    if (!question) return null; // Fallback

    return (
        <div className="min-h-screen w-full flex flex-col pt-24 pb-12 px-6 bg-[#040404]">
            {/* Barra de Progresso */}
            <div className="fixed top-[80px] left-0 right-0 z-40 h-1 bg-white/5">
                <motion.div
                    className="h-full bg-[#00C896]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <div className="flex-1 max-w-3xl mx-auto w-full flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStepId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {question.subtitle && (
                            <p className="text-[#00C896] text-sm font-mono uppercase tracking-widest mb-4">
                                {question.subtitle}
                            </p>
                        )}
                        <h2 className="text-3xl md:text-5xl font-['Sora'] font-bold text-white mb-12 leading-tight">
                            {question.title}
                        </h2>

                        {question.options ? (
                            <div className="flex flex-col gap-3">
                                {question.options.map((opt, idx) => (
                                    <OptionCard
                                        key={idx}
                                        label={opt.label}
                                        selected={answers[currentStepId] === opt.label}
                                        onClick={() => handleOptionSelect(opt)}
                                    />
                                ))}
                            </div>
                        ) : question.inputType ? (
                            <div className="flex flex-col gap-6">
                                <StepInput
                                    type={question.inputType}
                                    placeholder={question.placeholder}
                                    value={dadosForm[question.key] || ''}
                                    onChange={v => setDadosForm({ ...dadosForm, [question.key]: v })}
                                    onEnter={() => handleInputNext(question)}
                                />
                                <motion.button
                                    onClick={() => handleInputNext(question)}
                                    disabled={!isValidInput(question)}
                                    className={`py-4 font-bold rounded-xl text-base transition-all flex justify-center items-center gap-2 ${isValidInput(question) ? 'bg-[#00C896] text-black hover:bg-[#00e6aa]' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
                                >
                                    Continuar <ArrowRight size={18} />
                                </motion.button>
                            </div>
                        ) : null}

                        {history.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-2 text-white/30 hover:text-white/80 transition-colors text-sm font-['Sora']"
                                >
                                    <ChevronLeft size={16} /> Voltar para pergunta anterior
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="max-w-3xl mx-auto w-full text-center mt-12">
                <p className="text-white/20 text-xs font-mono">
                    Este diagnóstico leva menos de 2 minutos. Suas respostas são sigilosas.
                </p>
            </div>
        </div>
    );
};

export default Orcamento;
