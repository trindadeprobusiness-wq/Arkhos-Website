import React from "react"
import { ContainerScroll, CardSticky } from "../ui/cards-stack"
import { StackingCards } from "../ui/StackingCards"

const PROCESS_PHASES = [
    {
        id: "process-1",
        title: "Pesquisa e Análise",
        description:
            "Mergulhamos no contexto competitivo da sua marca. Analisamos tendências de mercado, comportamentos do público e dados estratégicos. Esta abordagem fundamental garante que o projeto tenha não só visual impecável, mas precisão cirúrgica no mercado.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "process-2",
        title: "Arquitetura e Prototipagem",
        description:
            "Avançamos para a prototipagem, onde criamos a estrutura neural das suas interfaces. Estes primeiros modelos em baixa e alta fidelidade nos permitem alinhar completamente as expectativas operacionais antes de avançarmos para o código visual.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "process-3",
        title: "Design de Alto Padrão",
        description:
            "A fase onde a estética de classe mundial encontra a inteligência. Nossos designers esculpem toda a interface da sua marca com perfeição milimétrica, unindo a identidade Arkhos com sua essência corporativa, projetando autoridade máxima.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "process-4",
        title: "Engenharia e Testes",
        description:
            "Transformamos o design e as estratégias aprovadas num ambiente funcional imparável. Nossa engenharia foca em performance, responsividade global e testes rigorosos para garantir que cada pixel opere de forma inteligente e veloz.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop"
    },
    {
        id: "process-5",
        title: "Escala e Dominância",
        description:
            "A nossa entrega não acaba no Lançamento. Operamos como seus parceiros tecnológicos, fornecendo suporte avançado, análise de métricas pós-entrega e garantia de que todo o seu ecossistema digital dominará por muito tempo.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop"
    },
]

const WORK_PROJECTS = [
    {
        id: "work-project-1",
        title: "Stridath Ecommerce",
        services: ["E-Commerce", "Branding", "UI UX Design", "Software"],
        imageUrl:
            "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "work-project-2",
        title: "Pulse Agency",
        services: ["Parceria Estratégica", "UI UX Design", "Desenvolvimento"],
        imageUrl:
            "https://images.unsplash.com/photo-1683803055067-1ca1c17cb2b9?q=80&w=2342&auto=format&fit=crop",
    },
    {
        id: "work-project-3",
        title: "Nexus Fintech",
        services: ["Aplicativo", "Analytics", "Dashboards"],
        imageUrl:
            "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2670&auto=format&fit=crop",
    },
]

const ACHIEVEMENTS = [
    {
        id: "achivement-1",
        title: "15M+",
        description: "gerados em faturamento",
        bg: "#040404", // Arkhos base
    },
    {
        id: "achivement-2",
        title: "100%",
        description: "de entregas no prazo acordado",
        bg: "#111111", // Dark gray
    },
    {
        id: "achivement-3",
        title: "3",
        description: "continentes globais atendidos",
        bg: "#00C896", // Emerald Arkhos
    },
    {
        id: "achivement-4",
        title: "40+",
        description: "projetos de alto impacto lançados",
        bg: "#1F1F1F",
    },
]

const Process = () => {
    return (
        <div className="relative border-t border-white/5 bg-black">
            <div className="container mx-auto px-6 xl:px-12 pt-20 pb-10 text-center max-w-4xl">
                <h5 className="text-xs uppercase tracking-widest text-[#00C896] mb-4">nossa metodologia</h5>
                <h2 className="mb-6 text-4xl md:text-5xl font-['Sora'] font-bold tracking-tight text-[#F1F1F1]">
                    Desenhando sua próxima{" "}
                    <span className="text-[#00C896]">jornada tecnológica</span>.
                </h2>
                <p className="max-w-prose mx-auto text-lg text-[#F1F1F1]/70 leading-relaxed">
                    Nossa jornada começa com uma imersão completa em sua visão de negócios.
                    É na fase de descoberta (Discovery) que desenhamos as reais fundações
                    estratégicas do projeto com você, de igual para igual. Role para descobrir.
                </p>
            </div>
            <StackingCards cards={PROCESS_PHASES} />
        </div>
    )
}

const Work = () => {
    return (
        <div className="container min-h-svh place-content-center bg-black p-6 md:p-12 text-[#F1F1F1] border-y border-white/5">
            <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-16 gap-3 max-w-3xl mx-auto">
                <span className="text-[11px] md:text-sm font-mono uppercase tracking-widest text-[#00C896]">
                    Projetos Recentes
                </span>
                <h2 className="text-3xl md:text-5xl font-['Sora'] font-bold text-white leading-tight">
                    Entregas de <span className="text-[#00C896]">autoridade.</span>
                </h2>
                <p className="text-sm md:text-base text-[#F1F1F1]/60 max-w-sm md:max-w-xl mx-auto mt-2 leading-relaxed">
                    Da construção imersiva de e-commerces à engenharia avançada de landing pages e plataformas.
                    Criamos interfaces que ditam tendência e comunicam uma percepção real de valor ao mercado.
                </p>
            </div>
            <ContainerScroll className="min-h-[250vh] py-16">
                {WORK_PROJECTS.map((project, index) => (
                    <CardSticky
                        key={project.id}
                        index={index}
                        className="w-full overflow-hidden rounded-2xl border border-[#00C896]/20 bg-[#111111] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]"
                        incrementY={70}
                        incrementZ={8}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 md:px-10 py-6 md:py-8 bg-gradient-to-t from-black/80 to-[#111]/80 absolute bottom-0 w-full z-10 backdrop-blur-sm border-t border-white/5">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-['Sora']">
                                {project.title}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.services.map((service) => (
                                    <div
                                        key={service}
                                        className="flex rounded-full border border-[#00C896]/30 bg-[#00C896]/10 px-3 py-1.5 backdrop-blur-md"
                                    >
                                        <span className="text-[11px] md:text-xs tracking-wide uppercase text-[#00C896] font-medium">
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] md:h-[600px] w-full group">
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500 z-0"></div>
                            <img
                                className="size-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                width="100%"
                                height="100%"
                                src={project.imageUrl}
                                alt={project.title}
                            />
                        </div>
                    </CardSticky>
                ))}
            </ContainerScroll>
        </div>
    )
}

const Achievements = () => {
    return (
        <div className="bg-[#040404]">
            <ContainerScroll className="min-h-[250vh] place-items-center space-y-8 p-12 text-center text-[#F1F1F1]">
                {ACHIEVEMENTS.map((achievement, index) => (
                    <CardSticky
                        key={achievement.id}
                        incrementY={25}
                        index={index + 2}
                        className="flex h-72 w-full max-w-[420px] flex-col place-content-center justify-evenly rounded-3xl border border-white/10 p-8 shadow-2xl overflow-hidden relative"
                        style={{
                            rotate: index % 2 === 0 ? index + 1 : -(index + 1),
                            background: achievement.bg
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                        <h1 className="text-left text-7xl font-bold font-['Sora']" style={{ color: achievement.bg === '#00C896' ? '#040404' : '#00C896' }}>
                            {achievement.title}
                        </h1>
                        <div className="place-items-end text-right">
                            <h3 className="max-w-[12ch] text-wrap text-2xl font-medium uppercase tracking-tight" style={{ color: achievement.bg === '#00C896' ? 'rgba(0,0,0,0.8)' : 'rgba(241,241,241,0.8)' }}>
                                {achievement.description}
                            </h3>
                        </div>
                    </CardSticky>
                ))}
            </ContainerScroll>
        </div>
    )
}

export { Process, Work, Achievements }
