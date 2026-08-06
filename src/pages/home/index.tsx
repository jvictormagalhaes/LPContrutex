import capa from "../image/Quem_Somos_Nos.jpg";
import energia_solar from "../image/energiasolar.png";
import pocos from "../image/poco_artesioano.png";
import construcao from "../image/construcao.jpg";
import assessoria from "../image/assessoria.png";
import fachada from "../image/fachada.jpg";
import maquinas from "../image/maquinas.png";
import iluminacao from "../image/iluminacao.png";
import { FaWhatsapp } from "react-icons/fa";
import { HardDriveDownload, Quote } from "lucide-react";

export function Home() {

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
            texto: "Depois da energia solar, tivemos uma economia expressiva. Parabéns à Construtex pelo compromisso e pela qualidade dos serviços prestados em nosso município.",
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

    return (
        <div className="w-full">
            <section className="relative flex min-h-[135vh] items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${capa})` }}>
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

            <section className="bg-slate-50 py-5">
                <div className="mx-auto max-w-7xl px-6">
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
            </section>

            <section className="bg-slate-50 py-10">
                <div className="text-center mb-5">
                    <span className="font-semibold uppercase tracking-widest text-red-600">Constru<span className="text-black">tex</span></span>
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

            <section className="bg-slate-50 py-5">
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
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-600">
                                    Construção e Reforma
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Soluções completas para construção, reformas e manutenção de
                                    empreendimentos públicos e privados, garantindo qualidade,
                                    segurança e eficiência.
                                </p>
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
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-600">
                                    Assessoria de Engenharia
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Assessoria completa em engenharia com especialistas atuando em todas
                                    as etapas dos projetos, desde o planejamento à finalização, visando
                                    sempre soluções técnicas eficientes, seguras e personalizadas.
                                </p>
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
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-600">
                                    Energia Solar
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Desenvolvemos e instalamos sistemas fotovoltaicos personalizados
                                    para reduzir custos e gerar energia limpa e sustentável.
                                </p>
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
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-600">
                                    Poços Artesianos
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Executamos projetos de perfuração e instalação de poços artesianos
                                    com foco em eficiência, sustentabilidade e segurança.
                                </p>
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
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-600">
                                    Locação de Veículos e Equipamentos
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Disponibilizamos veículos e equipamentos para locação em obras e
                                    projetos municipais, aumentando a eficiência e a segurança em
                                    todas as etapas do projeto.
                                </p>
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
                                <h3 className="text-2xl font-bold text-slate-800 transition-colors group-hover:text-red-600">
                                    Iluminação Pública
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    Soluções completas em iluminação pública, desde o planejamento até
                                    a instalação e manutenção de sistemas modernos e sustentáveis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-5">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="mt-3 text-4xl font-bold text-slate-800">Conheça Nosso Portifólio</h2>
                        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                            Atuamos em diversas áreas da engenharia oferecendo soluções
                            completas para obras públicas e privadas com qualidade,
                            tecnologia e compromisso.
                        </p>
                    </div>

                    <div className="my-5 flex flex-wrap justify-center gap-5">
                        <button className="flex gap-3 justify-between rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 cursor-pointer">
                            Portifólio <HardDriveDownload size={20} className="mt-0.5" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-5">
                <div className="flex flex-col gap-3 mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <span className="font-semibold uppercase tracking-widest text-red-600">Quem já usa, <span className="text-black">indica</span></span>
                    </div>
                    <div className="text-center">
                        <h2 className="mt-1 text-4xl font-bold text-slate-800">O que nossos clientes <span className="text-red-500">dizem</span></h2>
                    </div>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        A satisfação dos nossos clientes é o reflexo do nosso compromisso
                        com qualidade, responsabilidade e excelência.
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {depoimentos.map((item) => (
                            <div key={item.id} className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl">
                                <div className="flex justify-end mb-6 text-5xl text-red-600">
                                    <Quote />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.titulo}</h3>
                                <p className="flex-1 leading-7 text-gray-600">{item.texto}</p>

                                <div className="mt-4 flex items-center">
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-900">{item.nome}</h4>
                                        <p className="text-sm text-gray-500">{item.cargo}</p>
                                        <h3 className= "text-xs text-heading text-white text-center bg-red-600 rounded-2xl py-1 px-2 mt-1"> {item.segmento}</h3>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            <section className="bg-slate-50 py-5">
                <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 gap-3">

                    <div className="text-center col-span-1">
                        <h2 className="mt-3 text-4xl font-bold text-slate-800">Fale Conosco</h2>

                        <div className="text-left">
                            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                                Tem um projeto em mente? Estamos prontos para ajudar a transformá-lo em realidade!
                            </p>
                            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                                Conte-nos um pouco sobre o que você deseja construir, reformar ou executar. Quanto mais detalhes você compartilhar, melhor poderemos entender suas necessidades e apresentar a solução ideal para o seu projeto.
                            </p>
                            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                                Você pode entrar em contato conosco ou nossa equipe entrará em contato o mais breve possível para esclarecer suas dúvidas e oferecer um atendimento personalizado.
                            </p>
                            <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold text-slate-600">
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
                                <input type="text" className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm" placeholder="Seu nome" />
                                <input type="text" className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm" placeholder="Seu telefone" />
                                <input type="text" className="w-full px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm" placeholder="Seu e-mail" />
                                <textarea className="w-full max-h-30 min-h-15 px-2 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-sm" placeholder="Mensagem" />

                                <button className="flex gap-2 font-semibold rounded-xl bg-red-600 py-3 px-5 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 cursor-pointer">
                                    Enviar mensagem
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}