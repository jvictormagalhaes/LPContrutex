import capa from "../image/Quem_Somos_Nos.jpg";
import energia_solar from "../image/energiasolar.png";
import pocos from "../image/poco_artesioano.png";
import construcao from "../image/construcao.jpg";
import assessoria from "../image/assessoria.png";
import fachada from "../image/fachada.jpg";
import maquinas from "../image/maquinas.png";
import iluminacao from "../image/iluminacao.png";
import { ArrowRight, HardDriveDownload, Quote } from "lucide-react";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";

import arquivoEnergiaSolar from "../archives/REF 1 - CONSTRUTEX.pdf";
import arquivoGeral from "../archives/REF 14 - CONSTRUTEX.pdf";
import { FaWhatsapp } from "react-icons/fa";

export function Home() {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");

    function mascaraTelefone(valor: string): string {
        valor = valor.replace(/\D/g, '');

        if (valor.length <= 10) {
            // Telefone fixo
            valor = valor.replace(/^(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{4})(\d)/, '$1-$2');
        } else {
            // Celular
            valor = valor.replace(/^(\d{2})(\d)/, '($1) $2');
            valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        }

        return valor.slice(0, 15);
    };

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
            texto: "Depois da energia solar, tivemos uma economia expressiva. Parabéns à Construtex pelo compromisso e pela qualidade dos serviços.",
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
            <section id="inicio" className="relative flex min-h-[135vh] items-center justify-center bg-cover bg-center bg-no-repeat scroll-mt-24" style={{ backgroundImage: `url(${capa})` }}>
                {/* Conteúdo */}
                <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 pt-5">
                    <div className="mx-auto max-w-5xl text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">Experiência, qualidade e soluções que transformam</h1>
                        <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-200 md:text-xl"></p>
                    </div>

                    <div className="grid grid-cols-3 mx-auto w-full text-center">
                        <div className="col-span-1 flex flex-col">
                            <span className="text-2xl font-semibold tracking-tight text-white md:text-4xl">+ 200</span>
                            <p className="font-semibold text-white md:text-2xl">cidades atendidas</p>
                        </div>

                        <div className="col-span-1 flex flex-col">
                            <span className="text-2xl font-semibold tracking-tight text-white md:text-4xl">+ 5</span>
                            <p className="font-semibold text-white md:text-2xl">estados</p>
                        </div>

                        <div className="col-span-1 flex flex-col">
                            <span className="text-2xl font-semibold tracking-tight text-white md:text-4xl">+ 8</span>
                            <p className="font-semibold text-white md:text-2xl">anos no mercado</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUEM SOMOS NÓS */}
            <section id="quem-somos" className="bg-slate-50 py-5 scroll-mt-24">
                <div className="mx-auto max-w-7xl px-6 mb-5">
                    <div className="text-center">
                        <h2 className="mt-3 text-4xl font-bold text-slate-800">Quem somos nós?</h2>
                        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                            Com quase uma década de atuação, entregamos soluções completas
                            em engenharia, energia solar e perfuração de poços artesianos,
                            executando obras com qualidade, inovação e compromisso em
                            diversos estados do Brasil.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-5">
                    <span className="font-semibold uppercase tracking-widest text-red-700">Constru<span className="text-black">tex</span></span>
                </div>

                <div className="justify-center flex mx-auto max-w-7xl px-6">
                    <div className="col-span-1 text-center">
                        <h2 className="mt-10 text-3xl font-bold text-slate-800">Nossa missão</h2>
                        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                            Oferecer soluções completas em engenharia, energia, infraestrutura e recursos hídricos, unindo
                            experiência, tecnologia, qualidade e suporte técnico para transformar projetos em resultados e
                            contribuir para o desenvolvimento dos nossos clientes.
                        </p>

                        <h2 className="mt-10 text-3xl font-bold text-slate-800">Nossa visão</h2>
                        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                            Ser reconhecida como uma empresa referência em soluções integradas de engenharia, energia solar e
                            infraestrutura, destacando-se pela excelência dos serviços, inovação, confiança e compromisso
                            com o cliente em todas as etapas.
                        </p>

                        <h2 className="mt-10 text-3xl font-bold text-slate-800">Nossos valores</h2>
                        <div className="flex gap-3 text-center justify-center mt-5">

                            <button className="group relative inline-flex overflow-hidden rounded-2xl bg-linear-to-br from-red-500 via-red-600 to-black/70 p-0.5 shadow-lg transition-all duration-300">
                                <span className="rounded-[14px] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                                    Ética e transparência
                                </span>
                            </button>

                            <button className="group relative inline-flex overflow-hidden rounded-2xl bg-linear-to-br from-red-500 via-red-600 to-black/70 p-0.5 shadow-lg transition-all duration-300">
                                <span className="rounded-[14px] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                                    Qualidade e excelência
                                </span>
                            </button>

                            <button className="group relative inline-flex overflow-hidden rounded-2xl bg-linear-to-br from-red-500 via-red-600 to-black/70 p-0.5 shadow-lg transition-all duration-300">
                                <span className="rounded-[14px] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                                    Segurança e Credibilidade
                                </span>
                            </button>

                            <button className="group relative inline-flex overflow-hidden rounded-2xl bg-linear-to-br from-red-500 via-red-600 to-black/70 p-0.5 shadow-lg transition-all duration-300">
                                <span className="rounded-[14px] bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                                    Inovação e eficiência
                                </span>
                            </button>

                        </div>
                    </div>

                    <div className="col-span-1 text-center rounded-2xl">
                        <div className="overflow-hidden rounded-2xl">
                            <img src={fachada} alt="Engenharia" className="h-120 w-full object-contain transition-transform duration-700 group-hover:scale-110" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVIÇOS */}
            <section id="servicos" className="bg-slate-50 py-5 scroll-mt-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="mt-3 text-4xl font-bold text-slate-800">Nossos Serviços</h2>
                        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                            Atuamos em diversas áreas da engenharia oferecendo soluções
                            completas para obras públicas e privadas com qualidade,
                            tecnologia e compromisso.
                        </p>
                    </div>

                    <div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-3">

                        {/* Construção */}
                        <div className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                            <div className="overflow-hidden">
                                <img
                                    src={construcao}
                                    alt="Construção"
                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-700">
                                    Construção e Reforma
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Soluções completas para construção, reformas e manutenção de
                                    empreendimentos públicos e privados, garantindo qualidade,
                                    segurança e eficiência.
                                </p>

                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer"
                                    className="group flex gap-1 justify-between rounded-lg bg-red-600 px-4 py-2 mt-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg">
                                    Saiba mais <ArrowRight size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Assessoria */}
                        <div className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                            <div className="overflow-hidden">
                                <img
                                    src={assessoria}
                                    alt="Assessoria de Engenharia"
                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-700">
                                    Assessoria de Engenharia
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Assessoria completa em engenharia com especialistas atuando em todas
                                    as etapas dos projetos, desde o planejamento à finalização, visando
                                    sempre soluções técnicas eficientes, seguras e personalizadas.
                                </p>

                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer"
                                    className="group flex gap-1 justify-between rounded-lg bg-red-600 px-4 py-2 mt-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg">
                                    Conhecer nossos serviços <ArrowRight size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Energia */}
                        <div className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                            <div className="overflow-hidden">
                                <img
                                    src={energia_solar}
                                    alt="Energia Solar"
                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-700">
                                    Energia Solar
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Desenvolvemos e instalamos sistemas fotovoltaicos personalizados
                                    para reduzir custos e gerar energia limpa e sustentável.
                                </p>

                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer"
                                    className="group flex gap-1 justify-between rounded-lg bg-red-600 px-4 py-2 mt-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg">
                                    Conhecer nossos serviços <ArrowRight size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Poços */}
                        <div className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                            <div className="overflow-hidden">
                                <img
                                    src={pocos}
                                    alt="Poços Artesianos"
                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-700">
                                    Poços Artesianos
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Executamos projetos de perfuração e instalação de poços artesianos
                                    com foco em eficiência, sustentabilidade e segurança.
                                </p>

                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer"
                                    className="group flex gap-1 justify-between rounded-lg bg-red-600 px-4 py-2 mt-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg">
                                    Conhecer nossos serviços <ArrowRight size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Locação */}
                        <div className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                            <div className="overflow-hidden">
                                <img
                                    src={maquinas}
                                    alt="Locação de Veículos e Equipamentos"
                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-700">
                                    Locação de Veículos e Equipamentos
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Disponibilizamos veículos e equipamentos para locação em obras e
                                    projetos municipais, aumentando a eficiência e a segurança em
                                    todas as etapas do projeto.
                                </p>

                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer"
                                    className="group flex gap-1 justify-between rounded-lg bg-red-600 px-4 py-2 mt-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg">
                                    Conhecer nossa frota <ArrowRight size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Iluminação */}
                        <div className="group overflow-hidden rounded-2xl border border-red-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                            <div className="overflow-hidden">
                                <img
                                    src={iluminacao}
                                    alt="Iluminação Pública"
                                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-700">
                                    Iluminação Pública
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Soluções completas em iluminação pública, desde o planejamento até
                                    a instalação e manutenção de sistemas modernos e sustentáveis.
                                </p>

                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer"
                                    className="group flex gap-1 justify-between rounded-lg bg-red-600 px-4 py-2 mt-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg">
                                    Saiba mais <ArrowRight size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PORTIFOLIOS */}
            <section id="portifolios" className="bg-slate-50 py-5 scroll-mt-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="mt-3 text-4xl font-bold text-slate-800">Conheça Nossos Portifólios</h2>
                        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                            Atuamos em diversas áreas da engenharia oferecendo soluções
                            completas para obras públicas e privadas com qualidade,
                            tecnologia e compromisso.
                        </p>
                    </div>

                    <div className="my-5 flex flex-wrap justify-center gap-5">
                        <a className="group flex gap-3 justify-between rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-red-700 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                            href={arquivoGeral}
                            download="REF 1 - CONSTRUTEX.pdf">
                            Portfólio Geral
                            <HardDriveDownload size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-y-1" />
                        </a>

                        <a className="group flex gap-3 justify-between rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-red-700 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                            href={arquivoEnergiaSolar}
                            download="REF 1 - CONSTRUTEX.pdf">
                            Portfólio Energia Solar
                            <HardDriveDownload size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-y-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* CLIENTES */}
            <section className="bg-slate-50 py-5">
                <div className="flex flex-col gap-3 mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <span className="bg-red-50 p-2 rounded-lg font-semibold uppercase tracking-widest text-red-700">Quem já usa, <span className="text-black">indica</span></span>
                    </div>

                    <div className="text-center">
                        <h2 className="mt-1 text-4xl font-bold text-slate-800">O que nossos clientes <span className="text-red-500">dizem</span></h2>
                    </div>

                    <p className="mx-auto my-5 max-w-3xl text-lg text-center text-slate-600">
                        A satisfação dos nossos clientes é o reflexo do nosso compromisso
                        com qualidade, responsabilidade e excelência.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {depoimentos.map((item) => (
                            <div key={item.id} className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                                <div className="flex justify-end mb-3 text-5xl text-red-700">
                                    <Quote />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.titulo}</h3>
                                <p className="flex-1 leading-7 text-gray-600">{item.texto}</p>

                                <div className="mt-4 flex items-center">
                                    <div>
                                        <h6 className="text-yellow-400"> ★★★★★★</h6>
                                        <h4 className="font-semibold text-gray-900">{item.nome}</h4>
                                        <p className="text-sm text-gray-500">{item.cargo}</p>
                                        <h3 className="text-xs text-heading text-white text-center bg-red-600 rounded-2xl py-1 px-2 mt-1"> {item.segmento}</h3>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* FALE CONOSCO */}
            <section id="contatos" className="bg-slate-50 py-5 flex flex-col gap-8 scroll-mt-24">
                <div className="text-center">
                        <span className="bg-red-50 p-2 rounded-lg font-semibold uppercase tracking-widest">Torne-se um cliente <span className="text-red-700">Constru</span>tex</span>
                </div>

                <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 gap-3">
                    <div className="text-center col-span-1">
                        <h2 className="mt-3 text-4xl font-bold text-slate-800">Fale Conosco</h2>

                        <div className="text-left">
                            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                                Tem um projeto em mente? Estamos prontos para ajudar a transformá-lo em realidade!
                            </p>
                            <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-600">
                                Conte-nos um pouco sobre o que você deseja construir, reformar ou executar. Quanto mais detalhes, melhor poderemos entender suas necessidades e apresentar a solução ideal para o seu projeto.
                            </p>
                            <p className="mx-auto mt-2 max-w-3xl text-lg text-slate-600">
                                Você pode entrar em contato conosco ou nossa equipe entrará em contato o mais breve possível para esclarecer suas dúvidas e oferecer um atendimento personalizado.
                            </p>
                            <p className="mx-auto mt-2 max-w-3xl text-lg text-center font-semibold text-slate-600">
                                Estamos ansiosos para conhecer o seu projeto!
                            </p>
                        </div>

                        <div className="mt-5 flex flex-wrap justify-center gap-5">
                            <button className="flex gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 cursor-pointer"
                                onClick={() => window.open("https://api.whatsapp.com/send?phone=558899666408", "_blank", "noopener,noreferrer")}>
                                Fale com um atendente <FaWhatsapp size={20} className="mt-1" />
                            </button>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl">
                            <div className="flex flex-col gap-3 p-6">
                                <h2 className="mt-3 text-2xl font-bold text-slate-800">Envie uma mensagem para nós.</h2>

                                <form className="flex flex-col gap-3" onSubmit={EnviarMensagem}>
                                    <input type="text" className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm" placeholder="Seu nome"
                                        onChange={(e) => setNome(e.target.value)}
                                        value={nome}
                                    />
                                    <input type="text" className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm"
                                        value={telefone}
                                        onChange={(e) => setTelefone(mascaraTelefone(e.target.value))}
                                        placeholder="(88) 99999-9999"
                                        maxLength={15}
                                    />
                                    <input type="text" className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm" placeholder="Seu e-mail"
                                        onChange={(e) => setEmail(e.target.value)} value={email}
                                    />
                                    <textarea className="w-full max-h-30 min-h-15 px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm" placeholder="Mensagem"
                                        onChange={(e) => setMensagem(e.target.value)} value={mensagem}
                                    />

                                    <button className="flex justify-between gap-2 font-semibold rounded-xl bg-red-600 py-3 px-5 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 cursor-pointer">
                                        Enviar mensagem <ArrowRight size={20} className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}