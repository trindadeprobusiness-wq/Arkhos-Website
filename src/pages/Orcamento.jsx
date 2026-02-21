import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, ChevronLeft } from 'lucide-react';

// ─── EmailJS config ────────────────────────────────────────────────────────────
// Para ativar o envio de e-mail, crie uma conta em https://emailjs.com
// e preencha as 3 constantes abaixo.
const EMAILJS_SERVICE_ID = 'service_ury7xqb';
const EMAILJS_TEMPLATE_ID = 'template_64qi42s';
const EMAILJS_PUBLIC_KEY = 'JcJ3gFHmmpM-YSRFy';
const RECIPIENT_EMAIL = 'trindadeprobusiness@gmail.com';
const WHATSAPP_NUMBER = '5511999999999'; // número no formato internacional sem +

// ─── Helpers ───────────────────────────────────────────────────────────────────
const sendEmail = async (subject, body) => {
    try {
        if (
            EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
            EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
            EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
        ) {
            console.log('[EMAIL SIMULADO]', subject, body);
            return;
        }
        const emailjs = await import('https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js');
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            { to_email: RECIPIENT_EMAIL, subject, body },
            EMAILJS_PUBLIC_KEY
        );
    } catch (err) {
        console.error('Erro ao enviar e-mail:', err);
    }
};

const formatDate = () => {
    const now = new Date();
    return now.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
};

const arr = (val) => (Array.isArray(val) ? val : val ? [val] : []);
const join = (val) => arr(val).join(', ') || '—';

// LogoWatermark removido a pedido do usuário (estava atrapalhando a leitura e contraste)

// ─── Progress Bar ──────────────────────────────────────────────────────────────
const ProgressBar = ({ current, total }) => {
    const pct = Math.round((current / total) * 100);
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="h-[3px] bg-white/5 w-full">
                <motion.div
                    className="h-full bg-[#00e676]"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
};

// ─── Option Card (single / multiple) ──────────────────────────────────────────
const OptionCard = ({ label, selected, onClick, multi = false }) => (
    <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 text-sm font-['DM_Sans'] leading-snug
      ${selected
                ? 'border-[#00e676] bg-[#00e676]/10 text-[#f0f7f3]'
                : 'border-white/10 bg-white/[0.03] text-[#f0f7f3]/70 hover:border-white/20 hover:bg-white/[0.06]'
            }`}
    >
        <div className="flex items-center gap-3">
            {multi && (
                <span className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all
          ${selected ? 'border-[#00e676] bg-[#00e676]' : 'border-white/20'}`}>
                    {selected && <Check size={12} className="text-black" />}
                </span>
            )}
            {!multi && (
                <span className={`flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center transition-all
          ${selected ? 'border-[#00e676]' : 'border-white/20'}`}>
                    {selected && <span className="w-2 h-2 rounded-full bg-[#00e676] block" />}
                </span>
            )}
            <span>{label}</span>
        </div>
    </motion.button>
);

// ─── Tag Button (múltipla seleção compacta) ───────────────────────────────────
const Tag = ({ label, selected, onClick }) => (
    <motion.button
        type="button"
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 rounded-full text-xs font-['DM_Sans'] border transition-all duration-150
      ${selected
                ? 'border-[#00e676] bg-[#00e676]/15 text-[#00e676]'
                : 'border-white/10 bg-white/[0.03] text-[#f0f7f3]/60 hover:border-white/20'
            }`}
    >
        {label}
    </motion.button>
);

// ─── Text Input ────────────────────────────────────────────────────────────────
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
            className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#00e676] outline-none text-[#f0f7f3] text-xl py-3 placeholder-white/20 transition-all duration-300 font-['DM_Sans']"
        />
    );
};

// ─── Textarea ─────────────────────────────────────────────────────────────────
const StepTextarea = ({ placeholder, value, onChange }) => {
    const ref = useRef();
    useEffect(() => { if (ref.current) ref.current.focus(); }, []);
    return (
        <textarea
            ref={ref}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            rows={4}
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl focus:border-[#00e676] outline-none text-[#f0f7f3] text-base p-4 placeholder-white/20 transition-all duration-300 resize-none font-['DM_Sans'] leading-relaxed"
        />
    );
};

// ─── Continue Button ───────────────────────────────────────────────────────────
const ContinueBtn = ({ onClick, disabled = false, label = 'Continuar' }) => (
    <motion.button
        type="button"
        onClick={onClick}
        disabled={disabled}
        whileHover={!disabled ? { scale: 1.03 } : {}}
        whileTap={!disabled ? { scale: 0.97 } : {}}
        className={`flex items-center gap-2 px-7 py-3 rounded-lg font-['DM_Sans'] font-semibold text-sm transition-all duration-200
      ${disabled
                ? 'bg-white/5 text-white/20 cursor-not-allowed'
                : 'bg-[#00e676] text-black hover:bg-[#00ff84] cursor-pointer'
            }`}
    >
        {label} <ArrowRight size={16} />
    </motion.button>
);

// ─── Step wrapper animation ────────────────────────────────────────────────────
const StepWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col gap-6"
    >
        {children}
    </motion.div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
const TOTAL_STEPS = 10;

const SEGMENTS = [
    'Saúde / Clínicas', 'Varejo / Loja', 'Serviços / Consultório',
    'Indústria / Fábrica', 'Tecnologia / SaaS', 'Educação',
    'Financeiro / Contabilidade', 'Imobiliário', 'Agronegócio',
    'Alimentação / Restaurante', 'Logística / Transporte', 'Outro',
];

const TEAM_SIZES = ['Só eu', '2 a 10', '11 a 50', '51 a 200', '200+'];

const BOTTLENECKS = [
    '😤 Perdendo clientes para a concorrência — minha oferta não aparece ou não convence',
    '🐢 Processos internos lentos e manuais — time faz tudo na mão, planilha ou WhatsApp',
    '📉 Vendendo mas não retendo — clientes somem depois da primeira compra',
    '🌐 Invisível no digital — poucos leads chegando, presença fraca online',
    '🤯 Time sobrecarregado — muita gente fazendo pouca coisa por falta de sistema',
    '💸 Alto custo para adquirir cliente — gasto muito para fechar pouco',
];

const CURRENT_TOOLS = [
    'Planilhas Excel / Google Sheets', 'WhatsApp', 'Papel e anotações',
    'Sistema antigo que não atende mais', 'Ferramentas desconectadas entre si',
    'Não tem processo definido', 'Muita gente fazendo manualmente',
];

const URGENCY = [
    '🔴 Crítico — está me custando dinheiro ou clientes todo mês',
    '🟡 Relevante — me atrasa mas ainda funciona precariamente',
    '🟢 Melhoria — quero evoluir antes que vire um problema',
];

const SOLUTIONS = [
    '🎯 Landing Page — página de alta conversão para uma oferta, produto ou serviço',
    '🌐 Site Institucional — presença digital completa da empresa',
    '🤝 Sistema Front Office — vendas, CRM, atendimento, relacionamento com cliente',
    '🖥️ Sistema Back Office — financeiro, RH, operações, controle interno',
    '📱 Plataforma / App — produto digital, SaaS, marketplace',
];

const PROCESSES_FRONT = [
    'Pipeline de vendas', 'CRM / gestão de clientes', 'Atendimento / suporte',
    'Contratos e propostas', 'Agendamento', 'Pós-venda / fidelização',
    'Integração com WhatsApp', 'Portal do cliente',
];

const PROCESSES_BACK = [
    'Financeiro / fluxo de caixa', 'Emissão de notas fiscais', 'Gestão de estoque',
    'RH / controle de ponto', 'Compras / fornecedores', 'Relatórios gerenciais',
    'Aprovações internas', 'Integração com ERP',
];

const PROCESSES_WEB = [
    'Formulário de captura', 'Botão WhatsApp', 'Checkout / pagamento',
    'Blog / conteúdo', 'SEO', 'Área de membros', 'Analytics',
];

const VISUAL_ID = [
    '✅ Sim, tenho tudo — logo, cores e fontes definidas',
    '⚡ Tenho só o básico — só logo ou só as cores',
    '❌ Não tenho nada — precisa ser criada do zero',
];

const VISUAL_TONES = [
    'Sóbrio e profissional', 'Tecnológico', 'Minimalista', 'Luxo / Premium',
    'Escuro e impactante', 'Claro e clean', 'Humano e próximo', 'Ousado e diferente',
    'Corporativo', 'Colorido e vibrante',
];

const FATURAMENTO = [
    'Ainda não faturo (ou menos de 10k/mês)',
    '10k a 50k / mês',
    '50k a 100k / mês',
    '100k a 300k / mês',
    'Mais de 300k / mês',
];

const PRAZO = [
    '🔴 Urgente — preciso em até 2 semanas',
    '🟡 Normal — 1 a 2 meses',
    '🟢 Flexível — sem prazo fixo',
];

// Sub-steps within each stage (for counting progress granularly)
// We'll treat each field within stage 1 as a "sub-step"
// Internal sub-step tracking for stage 1 (4 fields) and stage 6 (conditional)
const Orcamento = () => {
    // stage 1 has 4 sub-fields; we track them individually
    const [stage1Field, setStage1Field] = useState(0); // 0=nome,1=email,2=whatsapp,3=empresa
    const [globalStep, setGlobalStep] = useState(1);
    const [formData, setFormData] = useState({
        // Stage 1
        nome: '', email: '', whatsapp: '', empresa: '',
        // Stage 2
        segmento: '', teamSize: '', faturamento: '',
        // Stage 3
        gargalo: '',
        // Stage 4
        ferramentas: [],
        // Stage 5
        urgencia: '',
        // Stage 6
        solucoes: [], processosFront: [], processosBack: [], processosWeb: [],
        // Stage 7
        temIdentidade: '', tomsVisuais: [],
        // Stage 8
        prazo: '',
        // Stage 9 (antigo 8)
        observacoes: '',
    });
    const [isComplete, setIsComplete] = useState(false);
    const [partialSentUpTo, setPartialSentUpTo] = useState(0);

    // Helper to update form field
    const setField = useCallback((key, val) => {
        setFormData(prev => ({ ...prev, [key]: val }));
    }, []);

    const toggleMulti = useCallback((key, val) => {
        setFormData(prev => {
            const arr = prev[key] || [];
            const exists = arr.includes(val);
            return { ...prev, [key]: exists ? arr.filter(v => v !== val) : [...arr, val] };
        });
    }, []);

    // Build email body for partial
    const buildPartialBody = useCallback((data, upToStep, upToField = null) => {
        const name = data.nome || 'Lead Anônimo';
        let body = `ARKHOS — BRIEFING PARCIAL\nData: ${formatDate()}\n`;
        body += `─────────────────────────\n`;
        if (upToStep >= 1) {
            body += `ETAPA 1 — IDENTIFICAÇÃO\n`;
            body += `Nome: ${data.nome || '—'}\nE-mail: ${data.email || '—'}\nWhatsApp: ${data.whatsapp || '—'}\nEmpresa: ${data.empresa || '—'}\n`;
            body += `─────────────────────────\n`;
        }
        if (upToStep >= 2) {
            body += `ETAPA 2 — SOBRE A EMPRESA\nSegmento: ${data.segmento || '—'}\nTamanho do time: ${data.teamSize || '—'}\nFaturamento: ${data.faturamento || '—'}\n`;
            body += `─────────────────────────\n`;
        }
        if (upToStep >= 3) {
            body += `ETAPA 3 — GARGALO PRINCIPAL\nOnde está perdendo mais: ${data.gargalo || '—'}\n`;
            body += `─────────────────────────\n`;
        }
        if (upToStep >= 4) {
            body += `ETAPA 4 — COMO RESOLVE HOJE\nFerramentas: ${join(data.ferramentas)}\n`;
            body += `─────────────────────────\n`;
        }
        if (upToStep >= 5) {
            body += `ETAPA 5 — URGÊNCIA\nImpacto: ${data.urgencia || '—'}\n`;
            body += `─────────────────────────\n`;
        }
        body += `STATUS: Abandonou na etapa ${upToStep} de ${TOTAL_STEPS} ⚠️`;
        return { name, body };
    }, []);

    // Send partial on step advance
    const sendPartialIfNeeded = useCallback(async (data, step) => {
        if (step <= partialSentUpTo) return;
        setPartialSentUpTo(step);
        const { name, body } = buildPartialBody(data, step);
        const etapa = step;
        const subject = `[ARKHOS] Lead Parcial — ${name} — etapa ${etapa} de ${TOTAL_STEPS}`;
        await sendEmail(subject, body);
    }, [partialSentUpTo, buildPartialBody]);

    // Build final email
    const buildFinalBody = (data) => {
        const name = data.nome || 'Lead Anônimo';
        const empresa = data.empresa || 'Empresa não informada';
        let body = `ARKHOS — BRIEFING COMPLETO\nData: ${formatDate()}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 1 — IDENTIFICAÇÃO\nNome: ${data.nome}\nE-mail: ${data.email}\nWhatsApp: ${data.whatsapp}\nEmpresa: ${data.empresa || '—'}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 2 — SOBRE A EMPRESA\nSegmento: ${data.segmento}\nTamanho do time: ${data.teamSize}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 3 — GARGALO PRINCIPAL\nOnde está perdendo mais: ${data.gargalo}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 4 — COMO RESOLVE HOJE\nFerramentas atuais: ${join(data.ferramentas)}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 5 — IMPACTO\nNível de urgência: ${data.urgencia}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 6 — SOLUÇÃO DESEJADA\nO que precisa: ${join(data.solucoes)}\n`;
        if (data.processosFront.length) body += `Processos Front Office: ${join(data.processosFront)}\n`;
        if (data.processosBack.length) body += `Processos Back Office: ${join(data.processosBack)}\n`;
        if (data.processosWeb.length) body += `Recursos web/landing: ${join(data.processosWeb)}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 7 — IDENTIDADE VISUAL\nTem identidade visual: ${data.temIdentidade}\nTom visual desejado: ${join(data.tomsVisuais)}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 8 — PRAZO IDEAL\nUrgência do projeto: ${data.prazo}\n`;
        body += `─────────────────────────────\n`;
        body += `ETAPA 9 — CONTEXTO FINAL\nObservações: ${data.observacoes || 'Prefere explicar na call'}\n`;
        body += `─────────────────────────────\n`;
        body += `STATUS: Formulário completo ✅`;
        return { name, empresa, body };
    };

    // Compute needs for conditional stage 6
    const needsFront = formData.solucoes.includes('🤝 Sistema Front Office — vendas, CRM, atendimento, relacionamento com cliente');
    const needsBack = formData.solucoes.includes('🖥️ Sistema Back Office — financeiro, RH, operações, controle interno');
    const needsWeb = formData.solucoes.some(s => s.startsWith('🎯') || s.startsWith('🌐'));

    // Compute sub-steps in stage 1
    // Stage 1 internal sub-steps: nome(0), email(1), whatsapp(2), empresa(3)
    // progress: we treat stage 1 as steps 1-4 of a total that includes sub-steps
    // Total "internal" steps: 4 (stage1) + 2 (stage2) + 1(3) + 1(4) + 1(5) + 1+cond(6) + 2(7) + 1(8)
    // For progress bar: use globalStep from 1 to TOTAL_STEPS
    const advance = () => {
        if (globalStep < TOTAL_STEPS) {
            const next = globalStep + 1;
            sendPartialIfNeeded(formData, globalStep);
            setGlobalStep(next);
        } else {
            handleSubmit();
        }
    };

    const goBack = () => {
        if (globalStep > 1) setGlobalStep(g => g - 1);
    };

    const handleSubmit = async () => {
        const { name, empresa, body } = buildFinalBody(formData);
        const subject = `[ARKHOS] Novo Briefing — ${name} — ${empresa}`;
        await sendEmail(subject, body);
        setIsComplete(true);
    };

    // Stage 1 is special: 4 sub-fields one-at-a-time
    // We handle it as a sub-step within globalStep===1
    const s1Labels = [
        { key: 'nome', label: 'Como você se chama?', placeholder: 'Ex: João Silva', type: 'text', required: true },
        { key: 'email', label: 'Qual o seu e-mail?', placeholder: 'Ex: joao@suaempresa.com.br', type: 'email', required: true },
        { key: 'whatsapp', label: 'Qual o seu WhatsApp?', placeholder: 'Ex: (11) 99999-9999', type: 'tel', required: true },
        { key: 'empresa', label: 'Nome da empresa ou projeto?', placeholder: 'Ex: Distribuidora Silva, Startup X...', type: 'text', required: false },
    ];

    const advanceStage1 = () => {
        const current = s1Labels[stage1Field];
        if (current.required && !formData[current.key]) return;
        if (stage1Field < 3) {
            setStage1Field(f => f + 1);
        } else {
            sendPartialIfNeeded(formData, 1);
            setGlobalStep(2);
            setStage1Field(0);
        }
    };

    const backStage1 = () => {
        if (stage1Field > 0) setStage1Field(f => f - 1);
    };

    // Stage 6 sub-step logic: after selecting solutions, show conditional process questions
    const [stage6Sub, setStage6Sub] = useState('main'); // 'main' | 'front' | 'back' | 'web' | 'done'
    const advanceStage6 = () => {
        if (stage6Sub === 'main') {
            if (formData.solucoes.length === 0) return;
            if (needsFront) { setStage6Sub('front'); return; }
            if (needsBack) { setStage6Sub('back'); return; }
            if (needsWeb) { setStage6Sub('web'); return; }
            sendPartialIfNeeded(formData, 6);
            setGlobalStep(7);
            setStage6Sub('main');
        } else if (stage6Sub === 'front') {
            if (needsBack) { setStage6Sub('back'); return; }
            if (needsWeb) { setStage6Sub('web'); return; }
            sendPartialIfNeeded(formData, 6);
            setGlobalStep(7);
            setStage6Sub('main');
        } else if (stage6Sub === 'back') {
            if (needsWeb) { setStage6Sub('web'); return; }
            sendPartialIfNeeded(formData, 6);
            setGlobalStep(7);
            setStage6Sub('main');
        } else if (stage6Sub === 'web') {
            sendPartialIfNeeded(formData, 6);
            setGlobalStep(7);
            setStage6Sub('main');
        }
    };
    const backStage6 = () => {
        if (stage6Sub !== 'main') {
            // go back to main selection of stage6
            setStage6Sub('main');
        } else {
            setGlobalStep(5);
        }
    };

    // Stage 2 has 3 sub-fields
    const [stage2Sub, setStage2Sub] = useState(0); // 0=segmento, 1=teamSize, 2=faturamento
    const advanceStage2 = () => {
        if (stage2Sub === 0) {
            if (!formData.segmento) return;
            setStage2Sub(1);
        } else if (stage2Sub === 1) {
            if (!formData.teamSize) return;
            setStage2Sub(2);
        } else {
            if (!formData.faturamento) return;
            sendPartialIfNeeded(formData, 2);
            setGlobalStep(3);
            setStage2Sub(0);
        }
    };
    const backStage2 = () => {
        if (stage2Sub > 0) { setStage2Sub(s => s - 1); }
        else { setGlobalStep(1); setStage1Field(3); }
    };

    // Stage 7 has 2 sub-fields
    const [stage7Sub, setStage7Sub] = useState(0); // 0=identidade, 1=tom
    const advanceStage7 = () => {
        if (stage7Sub === 0) {
            if (!formData.temIdentidade) return;
            setStage7Sub(1);
        } else {
            sendPartialIfNeeded(formData, 7);
            setGlobalStep(8);
            setStage7Sub(0);
        }
    };
    const backStage7 = () => {
        if (stage7Sub === 1) { setStage7Sub(0); }
        else { setGlobalStep(6); }
    };

    // ── FINAL SCREEN ─────────────────────────────────────────────────────────────
    if (isComplete) {
        const nome = formData.nome || 'você';
        const empresa = formData.empresa || 'sua empresa';
        const solStr = join(formData.solucoes.map(s => s.split('—')[0].trim()));
        const procStr = [
            ...formData.processosFront,
            ...formData.processosBack,
            ...formData.processosWeb
        ].join(', ') || 'processos selecionados';
        const waMsgRaw = `Olá, acabei de preencher o briefing da Arkhos. Meu nome é ${formData.nome}, da empresa ${empresa}. Meu principal gargalo é ${formData.gargalo}. Preciso de ${solStr}. Gostaria de conversar.`;
        const waMsg = encodeURIComponent(waMsgRaw);

        return (
            <div className="min-h-screen w-full flex items-center justify-center px-4 py-20 relative overflow-hidden font-['DM_Sans']">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 max-w-xl w-full text-center"
                >
                    <div className="w-16 h-16 bg-[#00e676]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#00e676]/30">
                        <Check size={32} className="text-[#00e676]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-['Syne'] font-bold text-[#f0f7f3] mb-6">
                        Briefing recebido.
                    </h2>
                    <p className="text-[#f0f7f3]/70 text-base leading-relaxed mb-10">
                        Com base no que você compartilhou, identificamos que a <strong className="text-[#f0f7f3]">{empresa}</strong> está com gargalo em{' '}
                        <span className="text-[#00e676]">{formData.gargalo?.split('—')[0]?.trim()}</span>, resolve hoje com{' '}
                        <span className="text-[#f0f7f3]">{join(formData.ferramentas)}</span>, e precisa de{' '}
                        <span className="text-[#f0f7f3]">{solStr}</span> com foco em{' '}
                        <span className="text-[#f0f7f3]">{procStr}</span>. O impacto atual é{' '}
                        <span className="text-[#f0f7f3]">{formData.urgencia?.split('—')[0]?.trim()}</span>.{' '}
                        Nossa equipe vai analisar e entrar em contato em até <strong className="text-[#00e676]">48 horas úteis</strong>.
                    </p>
                    <div className="flex flex-col gap-4">
                        <motion.button
                            onClick={() => window.location.href = '/'}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-4 bg-[#00e676] text-black font-semibold rounded-xl hover:bg-[#00ff84] transition-all"
                        >
                            Confirmar e aguardar contato
                        </motion.button>
                        <motion.a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="w-full py-4 border border-white/15 text-[#f0f7f3] font-semibold rounded-xl hover:border-[#00e676]/40 hover:text-[#00e676] transition-all flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} /> Prefiro já falar com a equipe
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        );
    }

    // ── RENDER EACH STEP ──────────────────────────────────────────────────────────
    const renderStep = () => {
        // ── STEP 1 ─────────────────────────────────────────────────────────────────
        if (globalStep === 1) {
            const field = s1Labels[stage1Field];
            const isOptional = !field.required;
            const canContinue = !field.required || !!formData[field.key];
            return (
                <StepWrapper key={`s1-${stage1Field}`}>
                    {stage1Field === 0 && (
                        <p className="text-[#f0f7f3]/40 text-sm font-['DM_Sans'] uppercase tracking-widest">
                            Etapa 1 de 8 — Identificação
                        </p>
                    )}
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3] leading-tight">
                        {field.label}
                        {isOptional && <span className="text-xs text-white/30 ml-3 font-['DM_Sans'] font-normal normal-case tracking-normal">(opcional)</span>}
                    </h2>
                    <StepInput
                        placeholder={field.placeholder}
                        value={formData[field.key]}
                        onChange={v => setField(field.key, v)}
                        type={field.type}
                        onEnter={canContinue ? advanceStage1 : undefined}
                    />
                    <div className="flex items-center gap-4 pt-2">
                        <ContinueBtn onClick={advanceStage1} disabled={!canContinue} />
                        {stage1Field > 0 && (
                            <button type="button" onClick={backStage1} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                                <ChevronLeft size={14} /> Voltar
                            </button>
                        )}
                    </div>
                    <p className="text-xs text-white/20 font-['DM_Sans']">Pressione Enter para continuar</p>
                </StepWrapper>
            );
        }

        // ── STEP 2 ─────────────────────────────────────────────────────────────────
        if (globalStep === 2) {
            if (stage2Sub === 0) {
                return (
                    <StepWrapper key="s2-segmento">
                        <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 2 de 10 — Sobre a Empresa</p>
                        <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Qual é o segmento da sua empresa?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {SEGMENTS.map(s => (
                                <OptionCard key={s} label={s} selected={formData.segmento === s}
                                    onClick={() => { setField('segmento', s); setTimeout(advanceStage2, 350); }} />
                            ))}
                        </div>
                        <button type="button" onClick={backStage2} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                            <ChevronLeft size={14} /> Voltar
                        </button>
                    </StepWrapper>
                );
            }
            if (stage2Sub === 1) {
                return (
                    <StepWrapper key="s2-team">
                        <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 2 de 10 — Sobre a Empresa</p>
                        <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Quantas pessoas trabalham na empresa?</h2>
                        <div className="flex flex-col gap-2">
                            {TEAM_SIZES.map(s => (
                                <OptionCard key={s} label={s} selected={formData.teamSize === s}
                                    onClick={() => { setField('teamSize', s); setTimeout(advanceStage2, 350); }} />
                            ))}
                        </div>
                        <button type="button" onClick={backStage2} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                            <ChevronLeft size={14} /> Voltar
                        </button>
                    </StepWrapper>
                );
            }
            return (
                <StepWrapper key="s2-faturamento">
                    <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 2 de 10 — Sobre a Empresa</p>
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Qual o faturamento médio mensal?</h2>
                    <div className="flex flex-col gap-2">
                        {FATURAMENTO.map(s => (
                            <OptionCard key={s} label={s} selected={formData.faturamento === s}
                                onClick={() => { setField('faturamento', s); setTimeout(advanceStage2, 350); }} />
                        ))}
                    </div>
                    <button type="button" onClick={backStage2} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                        <ChevronLeft size={14} /> Voltar
                    </button>
                </StepWrapper>
            );
        }

        // ── STEP 3 ─────────────────────────────────────────────────────────────────
        if (globalStep === 3) {
            return (
                <StepWrapper key="s3">
                    <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 3 de 9 — Diagnóstico</p>
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#00e676]">Onde a empresa está perdendo mais hoje?</h2>
                    <div className="flex flex-col gap-2">
                        {BOTTLENECKS.map(b => (
                            <OptionCard key={b} label={b} selected={formData.gargalo === b}
                                onClick={() => { setField('gargalo', b); setTimeout(() => { sendPartialIfNeeded(formData, 3); setGlobalStep(4); }, 350); }} />
                        ))}
                    </div>
                    <button type="button" onClick={() => { setGlobalStep(2); setStage2Sub(1); }} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                        <ChevronLeft size={14} /> Voltar
                    </button>
                </StepWrapper>
            );
        }

        // ── STEP 4 ─────────────────────────────────────────────────────────────────
        if (globalStep === 4) {
            return (
                <StepWrapper key="s4">
                    <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 4 de 9 — Como resolve hoje</p>
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Como você lida com esse problema atualmente?</h2>
                    <p className="text-white/40 text-sm">Selecione todas que se aplicam</p>
                    <div className="flex flex-wrap gap-2">
                        {CURRENT_TOOLS.map(t => (
                            <Tag key={t} label={t} selected={formData.ferramentas.includes(t)}
                                onClick={() => toggleMulti('ferramentas', t)} />
                        ))}
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                        <ContinueBtn onClick={() => { sendPartialIfNeeded(formData, 4); setGlobalStep(5); }} disabled={formData.ferramentas.length === 0} />
                        <button type="button" onClick={() => setGlobalStep(3)} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                            <ChevronLeft size={14} /> Voltar
                        </button>
                    </div>
                </StepWrapper>
            );
        }

        // ── STEP 5 ─────────────────────────────────────────────────────────────────
        if (globalStep === 5) {
            return (
                <StepWrapper key="s5">
                    <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 5 de 9 — Impacto e Urgência</p>
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Qual é o impacto disso no negócio hoje?</h2>
                    <div className="flex flex-col gap-2">
                        {URGENCY.map(u => (
                            <OptionCard key={u} label={u} selected={formData.urgencia === u}
                                onClick={() => { setField('urgencia', u); setTimeout(() => { sendPartialIfNeeded(formData, 5); setGlobalStep(6); setStage6Sub('main'); }, 350); }} />
                        ))}
                    </div>
                    <button type="button" onClick={() => setGlobalStep(4)} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                        <ChevronLeft size={14} /> Voltar
                    </button>
                </StepWrapper>
            );
        }

        // ── STEP 6 ─────────────────────────────────────────────────────────────────
        if (globalStep === 6) {
            if (stage6Sub === 'main') {
                return (
                    <StepWrapper key="s6-main">
                        <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 6 de 9 — Solução Desejada</p>
                        <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">O que você precisa desenvolver?</h2>
                        <p className="text-white/40 text-sm">Selecione uma ou mais opções</p>
                        <div className="flex flex-col gap-2">
                            {SOLUTIONS.map(s => (
                                <OptionCard key={s} label={s} selected={formData.solucoes.includes(s)} multi
                                    onClick={() => toggleMulti('solucoes', s)} />
                            ))}
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <ContinueBtn onClick={advanceStage6} disabled={formData.solucoes.length === 0} />
                            <button type="button" onClick={backStage6} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                                <ChevronLeft size={14} /> Voltar
                            </button>
                        </div>
                    </StepWrapper>
                );
            }
            if (stage6Sub === 'front') {
                return (
                    <StepWrapper key="s6-front">
                        <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 6 de 9 — Front Office</p>
                        <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Quais processos precisam ser cobertos?</h2>
                        <p className="text-white/40 text-sm">Front Office — selecione todos que se aplicam</p>
                        <div className="flex flex-wrap gap-2">
                            {PROCESSES_FRONT.map(p => (
                                <Tag key={p} label={p} selected={formData.processosFront.includes(p)}
                                    onClick={() => toggleMulti('processosFront', p)} />
                            ))}
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <ContinueBtn onClick={advanceStage6} />
                            <button type="button" onClick={() => setStage6Sub('main')} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                                <ChevronLeft size={14} /> Voltar
                            </button>
                        </div>
                    </StepWrapper>
                );
            }
            if (stage6Sub === 'back') {
                return (
                    <StepWrapper key="s6-back">
                        <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 6 de 9 — Back Office</p>
                        <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Quais processos precisam ser cobertos?</h2>
                        <p className="text-white/40 text-sm">Back Office — selecione todos que se aplicam</p>
                        <div className="flex flex-wrap gap-2">
                            {PROCESSES_BACK.map(p => (
                                <Tag key={p} label={p} selected={formData.processosBack.includes(p)}
                                    onClick={() => toggleMulti('processosBack', p)} />
                            ))}
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <ContinueBtn onClick={advanceStage6} />
                            <button type="button" onClick={() => needsFront ? setStage6Sub('front') : setStage6Sub('main')} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                                <ChevronLeft size={14} /> Voltar
                            </button>
                        </div>
                    </StepWrapper>
                );
            }
            if (stage6Sub === 'web') {
                return (
                    <StepWrapper key="s6-web">
                        <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 6 de 9 — Landing Page / Site</p>
                        <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">O que precisa ter?</h2>
                        <p className="text-white/40 text-sm">Selecione todos que se aplicam</p>
                        <div className="flex flex-wrap gap-2">
                            {PROCESSES_WEB.map(p => (
                                <Tag key={p} label={p} selected={formData.processosWeb.includes(p)}
                                    onClick={() => toggleMulti('processosWeb', p)} />
                            ))}
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <ContinueBtn onClick={advanceStage6} />
                            <button type="button" onClick={() => needsBack ? setStage6Sub('back') : needsFront ? setStage6Sub('front') : setStage6Sub('main')} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                                <ChevronLeft size={14} /> Voltar
                            </button>
                        </div>
                    </StepWrapper>
                );
            }
        }

        // ── STEP 7 ─────────────────────────────────────────────────────────────────
        if (globalStep === 7) {
            if (stage7Sub === 0) {
                return (
                    <StepWrapper key="s7-identidade">
                        <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 7 de 9 — Identidade Visual</p>
                        <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Já tem identidade visual?</h2>
                        <div className="flex flex-col gap-2">
                            {VISUAL_ID.map(v => (
                                <OptionCard key={v} label={v} selected={formData.temIdentidade === v}
                                    onClick={() => { setField('temIdentidade', v); setTimeout(advanceStage7, 350); }} />
                            ))}
                        </div>
                        <button type="button" onClick={backStage7} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                            <ChevronLeft size={14} /> Voltar
                        </button>
                    </StepWrapper>
                );
            }
            return (
                <StepWrapper key="s7-tom">
                    <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 7 de 9 — Tom Visual</p>
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Como o projeto precisa parecer?</h2>
                    <p className="text-white/40 text-sm">Selecione todos que combinam com sua visão</p>
                    <div className="flex flex-wrap gap-2">
                        {VISUAL_TONES.map(t => (
                            <Tag key={t} label={t} selected={formData.tomsVisuais.includes(t)}
                                onClick={() => toggleMulti('tomsVisuais', t)} />
                        ))}
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                        <ContinueBtn onClick={advanceStage7} />
                        <button type="button" onClick={() => setStage7Sub(0)} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                            <ChevronLeft size={14} /> Voltar
                        </button>
                    </div>
                </StepWrapper>
            );
        }

        // ── STEP 8 (NOVO) ────────────────────────────────────────────────────────
        if (globalStep === 8) {
            return (
                <StepWrapper key="s8">
                    <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 8 de 9 — Prazo Ideal</p>
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">Qual é o prazo ideal para esse projeto?</h2>
                    <div className="flex flex-col gap-2">
                        {PRAZO.map(p => (
                            <OptionCard key={p} label={p} selected={formData.prazo === p}
                                onClick={() => { setField('prazo', p); setTimeout(() => { sendPartialIfNeeded(formData, 8); setGlobalStep(9); }, 350); }} />
                        ))}
                    </div>
                    <button type="button" onClick={() => setGlobalStep(7)} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                        <ChevronLeft size={14} /> Voltar
                    </button>
                </StepWrapper>
            );
        }
        // ── STEP 9 (NOVO CONTEXTO) ───────────────────────────────────────────────
        if (globalStep === 9) {
            return (
                <StepWrapper key="s9">
                    <p className="text-[#f0f7f3]/40 text-sm uppercase tracking-widest">Etapa 9 de 9 — Contexto Final</p>
                    <h2 className="text-2xl md:text-3xl font-['Syne'] font-bold text-[#f0f7f3]">
                        Tem algo que a Arkhos precisa saber antes de montar a solução?
                    </h2>
                    <StepTextarea
                        placeholder="Ex: já tentamos isso antes e não funcionou porque o sistema era muito complicado pro time usar... / precisamos integrar com o Totvs que já usamos..."
                        value={formData.observacoes}
                        onChange={v => setField('observacoes', v)}
                    />
                    <div className="flex flex-col gap-3 pt-2">
                        <div className="flex items-center gap-4">
                            <ContinueBtn onClick={handleSubmit} label="Enviar briefing" />
                            <button type="button" onClick={() => setGlobalStep(8)} className="text-white/30 hover:text-white/60 text-sm flex items-center gap-1 transition-colors">
                                <ChevronLeft size={14} /> Voltar
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white/30 hover:text-[#00e676] text-sm transition-colors underline underline-offset-4 text-left w-fit"
                        >
                            Prefiro explicar na call →
                        </button>
                    </div>
                </StepWrapper>
            );
        }

        return null;
    };

    return (
        <div
            className="min-h-screen w-full flex flex-col font-['DM_Sans'] pt-4 md:pt-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

            <ProgressBar current={globalStep} total={TOTAL_STEPS} />

            <div className="flex-1 flex items-center justify-center px-4 py-8 relative overflow-hidden z-10">
                <div className="relative z-10 w-full max-w-2xl">
                    {/* Logo topo do form (Esquerda) integrada */}
                    <div className="flex items-center justify-start mb-12 w-full pl-0">
                        <img
                            src="/image-removebg-preview.png"
                            alt="ARKHOS"
                            className="h-8 md:h-10 w-auto object-contain opacity-70 transition-transform hover:scale-105 duration-300"
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {renderStep()}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Orcamento;
