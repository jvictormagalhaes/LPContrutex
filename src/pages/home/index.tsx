import capa from "../image/capa.jpeg";
import energia_solar from "../image/energiasolar.png";
import pocos from "../image/poco_artesioano.png";
import construcao from "../image/construcao.jpg";
import assessoria from "../image/assessoria.png";
import fachada from "../image/fachada.jpg";
import maquinas from "../image/maquinas.png";
import iluminacao from "../image/iluminacao.png";
import { ArrowRight, HardDriveDownload, Quote, ChevronLeft, ChevronRight, Star, MessageCircle, Send, Phone, MapPin } from "lucide-react";
import { useState, useEffect, useRef, type FormEvent } from "react";
import toast from "react-hot-toast";
import { motion, useInView } from "framer-motion";

import arquivoEnergiaSolar from "../archives/REF 1 - CONSTRUTEX.pdf";
import arquivoGeral from "../archives/REF 14 - CONSTRUTEX.pdf";
import { FaWhatsapp } from "react-icons/fa";

function AnimateOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function Home() {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        function updateVisible() {
            const w = window.innerWidth;
            if (w >= 1280) setVisibleCount(3);
            else if (w >= 768) setVisibleCount(2);
            else setVisibleCount(1);
        }
        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    useEffect(() => {
        setCurrentSlide(0);
    }, [visibleCount]);

    function mascaraTelefone(valor: string): string {
        valor = valor.replace(/\D/g, '');

        if (valor.length <= 10) {
            valor = valor.replace(/^(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
        } else {
            valor = valor.replace(/^(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        }

        return valor.slice(0, 15);
    };

    const servicos = [
        { id: 1, imagem: construcao, titulo: "Construção e Reforma", texto: "Soluções completas para construção, reformas e manutenção de empreendimentos públicos e privados, garantindo qualidade, segurança e eficiência.", cta: "Saiba mais" },
        { id: 2, imagem: assessoria, titulo: "Assessoria de Engenharia", texto: "Assessoria completa em engenharia com especialistas atuando em todas as etapas dos projetos, desde o planejamento à finalização, visando sempre soluções técnicas eficientes, seguras e personalizadas.", cta: "Conhecer nossos serviços" },
        { id: 3, imagem: energia_solar, titulo: "Energia Solar", texto: "Desenvolvemos e instalamos sistemas fotovoltaicos personalizados para reduzir custos e gerar energia limpa e sustentável.", cta: "Conhecer nossos serviços" },
        { id: 4, imagem: pocos, titulo: "Poços Artesianos", texto: "Executamos projetos de perfuração e instalação de poços artesianos com foco em eficiência, sustentabilidade e segurança.", cta: "Conhecer nossos serviços" },
        { id: 5, imagem: maquinas, titulo: "Locação de Veículos e Equipamentos", texto: "Disponibilizamos veículos e equipamentos para locação em obras e projetos municipais, aumentando a eficiência e a segurança em todas as etapas do projeto.", cta: "Conhecer nossa frota" },
        { id: 6, imagem: iluminacao, titulo: "Iluminação Pública", texto: "Soluções completas em iluminação pública, desde o planejamento até a instalação e manutenção de sistemas modernos e sustentáveis.", cta: "Saiba mais" },
    ];

    const maxSlide = servicos.length - visibleCount;
    const cardPercent = 100 / visibleCount;

    function nextSlide() {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }

    function prevSlide() {
        setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    }

    const depoimentos = [
        {
            id: 1,
            titulo: "Qualidade Prometida.",
            texto: "Um ótimo investimento para economia de energia, com a qualidade prometida.",
            nome: "Carlos",
            cargo: "Engenheiro, Pedreira Brisacet — Caucaia/CE",
            segmento: "Energia Solar"
        },
        {
            id: 2,
            titulo: "Economia Expressiva.",
            texto: "Depois da energia solar, tivemos uma economia expressiva. Parabéns à Construtex pelo compromisso e pela qualidade dos serviços em nosso município.",
            nome: "Sávio Gurgel",
            cargo: "Prefeito, Prefeitura Municipal — Russas/CE",
            segmento: "Energia Solar"
        },
        {
            id: 3,
            titulo: "Indico Muito.",
            texto: "Uma empresa de confiança, completa e que, sempre que preciso, me oferece todo o apoio e suporte. Indico muito!",
            nome: "Ana Vitória",
            cargo: "Empresária, Mercantil Boa Vista — Hidrolândia/CE",
            segmento: "Energia Solar"
        },
        {
            id: 4,
            titulo: "Confiança e Responsabilidade.",
            texto: "Escolhi fazer meu poço com a Construtex porque vi que é uma empresa de confiança e responsabilidade.",
            nome: "Mase Martins",
            cargo: "Funcionária Pública — Hidrolândia/CE",
            segmento: "Poços Profundos"
        },
    ];

    function EnviarMensagem(e: FormEvent) {
        e.preventDefault();

        const novo = {
            nome: nome,
            telefone: telefone,
            email: email,
            mensagem: mensagem
        }

        console.log(novo);

        setNome("");
        setTelefone("");
        setEmail("");
        setMensagem("");

        toast.success('Mensagem enviada com sucesso!')
    }

    return (
        <div className="w-full">

            {/* INICIO */}
            <section id="inicio" className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat scroll-mt-24" style={{ backgroundImage: `url(${capa})` }}>
                <div className="absolute inset-0 hero-overlay" />

                <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pt-5">
                    <div className="mx-auto max-w-5xl text-center">
                        <AnimateOnScroll>
                            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.3em] bg-red-600 rounded-xl text-white mb-6 drop-shadow-lg">
                                Engenharia · Energia Solar · Poços
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.1}>
                            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl leading-tight" style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}>
                                Experiência, qualidade e soluções que <span className="text-red-400">transformam</span>
                            </h1>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.2}>
                            <div className="mx-auto mt-8 h-px w-40 bg-linear-to-r from-transparent to-transparent" />
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.3}>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                                Soluções completas em engenharia, energia solar e poços artesianos para clientes públicos e privados em todo o Brasil.
                            </p>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid grid-cols-3 mx-auto w-full text-center mt-20 max-w-3xl">
                        <AnimateOnScroll delay={0.4}>
                            <div className="flex flex-col items-center gap-3">
                                <div className="group flex flex-col items-center gap-0.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40">
                                    <span className="text-2xl md:text-3xl font-bold text-white">+200</span>
                                    <span className="text-[10px] md:text-xs text-red-300 font-medium mt-0.5">cidades atendidas</span>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.5}>
                            <div className="flex flex-col items-center gap-3">
                                <div className="group flex flex-col items-center gap-0.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40">
                                    <span className="text-2xl md:text-3xl font-bold text-white">+5</span>
                                    <span className="text-[10px] md:text-xs text-red-300 font-medium mt-0.5">estados</span>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.6}>
                            <div className="flex flex-col items-center gap-3">
                                <div className="group flex flex-col items-center gap-0.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/15 hover:border-white/40">
                                    <span className="text-2xl md:text-3xl font-bold text-white">+8</span>
                                    <span className="text-[10px] md:text-xs text-red-300 font-medium mt-0.5">anos no mercado</span>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* QUEM SOMOS NÓS */}
            <section id="quem-somos" className="welcome-bg py-20 scroll-mt-24">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimateOnScroll>
                        <div className="text-center mb-12">
                            <span className="inline-block bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
                                Sobre nós
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Quem somos nós?</h2>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <AnimateOnScroll delay={0.1}>
                            <div>
                                <p className="text-lg leading-relaxed text-slate-600 mb-8">
                                    Com quase uma década de atuação, entregamos soluções completas
                                    em engenharia, energia solar e perfuração de poços artesianos,
                                    executando obras com qualidade, inovação e compromisso em
                                    diversos estados do Brasil.
                                </p>

                                <div className="text-center mb-8">
                                    <span className="font-bold text-2xl uppercase tracking-widest text-red-700">Constru<span className="text-slate-800">tex</span></span>
                                </div>

                                <div className="space-y-8">
                                    <div className="relative pl-6 border-l-2 border-red-500">
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">Nossa missão</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Oferecer soluções completas em engenharia, energia, infraestrutura e recursos hídricos, unindo
                                            experiência, tecnologia, qualidade e suporte técnico para transformar projetos em resultados e
                                            contribuir para o desenvolvimento dos nossos clientes.
                                        </p>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-red-500">
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">Nossa visão</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            Ser reconhecida como uma empresa referência em soluções integradas de engenharia, energia solar e
                                            infraestrutura, destacando-se pela excelência dos serviços, inovação, confiança e compromisso
                                            com o cliente em todas as etapas.
                                        </p>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-red-500">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4">Nossos valores</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Ética e Compromisso
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Qualidade e Excelência
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Segurança
                                            </span>
                                               <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Credibilidade
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Transparência
                                            </span>
                                               <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Eficiência
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Inovação
                                            </span>
                                            <span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-4 py-2 text-sm font-medium text-red-700 transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600 cursor-default">
                                                Foco no Cliente
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.3}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-linear-to-br from-red-500/10 to-red-700/5 rounded-3xl blur-xl" />
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                    <img src={fachada} alt="Engenharia" className="h-120 w-full object-cover transition-transform duration-700 hover:scale-105" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* SERVIÇOS - CAROUSEL */}
            <section id="servicos" className="bg-white py-20 scroll-mt-24">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimateOnScroll>
                        <div className="text-center mb-10">
                            <span className="inline-block bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
                                O que fazemos
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Nossos Serviços</h2>
                            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                                Atuamos em diversas áreas da engenharia oferecendo soluções
                                completas para obras públicas e privadas com qualidade,
                                tecnologia e compromisso.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                style={{ transform: `translateX(-${currentSlide * cardPercent}%)` }}
                            >
                                {servicos.map((servico) => (
                                    <div
                                        key={servico.id}
                                        className="shrink-0 px-3"
                                        style={{ width: `${cardPercent}%` }}
                                    >
                                        <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl h-full">
                                            <div className="overflow-hidden">
                                                <img
                                                    src={servico.imagem}
                                                    alt={servico.titulo}
                                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>

                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-red-700">
                                                    {servico.titulo}
                                                </h3>

                                                <p className="mt-3 text-sm leading-5 text-slate-600">
                                                    {servico.texto}
                                                </p>

                                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer"
                                                    className="group mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg text-sm">
                                                    {servico.cta} <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 cursor-pointer"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 cursor-pointer"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {servicos.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx > maxSlide ? maxSlide : idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    idx >= currentSlide && idx < currentSlide + visibleCount
                                        ? "bg-red-600 w-8"
                                        : "bg-gray-300 w-2.5 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* PORTIFOLIOS */}
            <section id="portifolios" className="bg-slate-50 py-20 scroll-mt-24">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimateOnScroll>
                        <div className="text-center mb-12">
                            <span className="inline-block bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
                                Nossos trabalhos
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Conheça Nossos Portfólios</h2>
                            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                                Atuamos em diversas áreas da engenharia oferecendo soluções
                                completas para obras públicas e privadas com qualidade,
                                tecnologia e compromisso.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-5">
                            <a className="group flex gap-3 items-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-red-700 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                href={arquivoGeral}
                                download="REF 1 - CONSTRUTEX.pdf">
                                Portfólio Geral
                                <HardDriveDownload size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
                            </a>

                            <a className="group flex gap-3 items-center rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-red-700 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                                href={arquivoEnergiaSolar}
                                download="REF 1 - CONSTRUTEX.pdf">
                                Portfólio Energia Solar
                                <HardDriveDownload size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
                            </a>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* CLIENTES / DEPOIMENTOS */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimateOnScroll>
                        <div className="text-center mb-10">
                            <span className="inline-block bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
                                Depoimentos
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                                O que nossos clientes <span className="text-red-600">dizem</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                                A satisfação dos nossos clientes é o reflexo do nosso compromisso
                                com qualidade, responsabilidade e excelência.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid gap-6 md:grid-cols-2">
                        {depoimentos.map((item, index) => (
                            <AnimateOnScroll key={item.id} delay={index * 0.1}>
                                <div className="group relative rounded-2xl border border-gray-100 bg-linear-to-br from-white to-slate-50 p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl testimonial-glow">
                                    <div className="absolute top-4 right-6">
                                        <Quote size={36} className="text-red-100 group-hover:text-red-200 transition-colors duration-300" />
                                    </div>

                                    <div className="relative">
                                        <div className="flex items-center gap-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-800 mb-2">{item.titulo}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">"{item.texto}"</p>

                                        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                                            <div className="w-10 h-10 rounded-full bg-linear-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                                                {item.nome.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm">{item.nome}</h4>
                                                <p className="text-xs text-slate-500">{item.cargo}</p>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <span className="inline-block bg-red-50 text-red-700 text-xs font-medium rounded-full px-2.5 py-0.5">
                                                {item.segmento}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* FALE CONOSCO */}
            <section id="contatos" className="welcome-bg py-16 scroll-mt-24">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimateOnScroll>
                        <div className="text-center mb-10">
                            <span className="inline-block bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
                                Entre em contato
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Fale Conosco</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                                Tem um projeto em mente? Estamos prontos para ajudar a transformá-lo em realidade!
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <AnimateOnScroll delay={0.1}>
                            <div className="flex flex-col gap-5">
                                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                                    <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                                        Conte-nos um pouco sobre o que você deseja construir, reformar ou executar. Quanto mais detalhes, melhor poderemos entender suas necessidades e apresentar a solução ideal para o seu projeto.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                                        Você pode entrar em contato conosco ou nossa equipe entrará em contato o mais breve possível para esclarecer suas dúvidas e oferecer um atendimento personalizado.
                                    </p>
                                    <p className="text-slate-800 font-semibold text-center mt-4 text-sm">
                                        Estamos ansiosos para conhecer o seu projeto!
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-200">
                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                            <Phone size={18} className="text-red-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-800">Telefone</p>
                                            <p className="text-xs text-slate-500">(88) 9 9966-6408</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-200">
                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                            <MapPin size={18} className="text-red-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-800">Fortaleza/CE</p>
                                            <p className="text-xs text-slate-500">BS Design, Av. Desembargador Moreira, 1300</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-200">
                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                                            <MapPin size={18} className="text-red-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-800">Hidrolândia/CE</p>
                                            <p className="text-xs text-slate-500">Av. Cláudio Camelo Timbó, 265 A</p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl cursor-pointer"
                                    onClick={() => window.open("https://api.whatsapp.com/send?phone=558899666408", "_blank", "noopener,noreferrer")}
                                >
                                    <FaWhatsapp size={20} />
                                    Fale com um atendente pelo WhatsApp
                                </button>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.2}>
                            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                                        <MessageCircle size={18} className="text-red-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800">Envie uma mensagem para nós</h3>
                                </div>

                                <form className="flex flex-col gap-3" onSubmit={EnviarMensagem}>
                                    <div>
                                        <label className="block text-xs font-medium text-slate-700 mb-1">Seu nome</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-slate-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white outline-none transition-all duration-300 text-sm"
                                            placeholder="Como podemos chamar você?"
                                            onChange={(e) => setNome(e.target.value)}
                                            value={nome}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-xs font-medium text-slate-700 mb-1">Telefone</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-slate-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white outline-none transition-all duration-300 text-sm"
                                                placeholder="(88) 99999-9999"
                                                value={telefone}
                                                onChange={(e) => setTelefone(mascaraTelefone(e.target.value))}
                                                maxLength={15}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-medium text-slate-700 mb-1">E-mail</label>
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-slate-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white outline-none transition-all duration-300 text-sm"
                                                placeholder="seu@email.com"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-700 mb-1">Mensagem</label>
                                        <textarea
                                            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-slate-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white outline-none transition-all duration-300 text-sm min-h-24 resize-none"
                                            placeholder="Descreva seu projeto ou dúvida..."
                                            onChange={(e) => setMensagem(e.target.value)}
                                            value={mensagem}
                                        />
                                    </div>

                                    <button className="flex items-center justify-center gap-2 font-semibold rounded-xl bg-red-600 py-2.5 px-5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl cursor-pointer text-sm">
                                        Enviar mensagem <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
}
