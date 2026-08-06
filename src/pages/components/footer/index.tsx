import { MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../image/logo.jpeg"
import { Link } from "react-router-dom";

export function Footer() {
    const ano = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Empresa */}
                    <div>
                        <img src={logo} alt="Construtex" className="mb-5 h-20 w-auto rounded-lg bg-white p-2" />
                        <p className="leading-7 text-slate-400">
                            Especialistas em Engenharia, Energia Solar e Poços
                            Artesianos, oferecendo soluções completas para clientes
                            públicos e privados em todo o Brasil.
                        </p>
                    </div>

                    {/* Navegação */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Navegação</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="transition hover:text-red-500">Início</Link>
                            </li>
                            <li>
                                <Link to="#" className="transition hover:text-red-500">Quem Somos</Link>
                            </li>
                            <li>
                                <Link to="#" className="transition hover:text-red-500">Serviços</Link>
                            </li>
                            <li>
                                <Link to="#" className="transition hover:text-red-500">Portifólio</Link>
                            </li>
                            <li>
                                <Link to="#" className="transition hover:text-red-500">Contatos</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Serviços */}
                    <div>

                        <h3 className="mb-5 text-lg font-semibold text-white">
                            Soluções
                        </h3>

                        <ul className="space-y-3">
                            <li>Engenharia</li>
                            <li>Assessoria em Engenharia</li>
                            <li>Energia Solar</li>
                            <li>Poços Artesianos</li>
                            <li>Locação de Equipamentos e Veículos</li>
                            <li>Iluminação Pública</li>
                        </ul>

                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="mb-5 text-lg font-semibold text-white">Contatos</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin size={40} className="mt-1 text-red-500" />
                                <span>Fortaleza/CE - BS Design, Av. Desembargador Moreira, 1300, Aldeota</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin size={40} className="mt-1 text-red-500" />
                                <span>Hidrolândia/CE - Av. Cláudio Camelo Timbó, 265 A, Nova Hidrolândia</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={20} className="text-red-500" />
                                <span>(88) 98821-1858</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span>rotex@construtexengenharia.com.br</span>
                            </div>
                        </div>

                        {/* Redes */}
                        <div className="mt-8 flex items-center justify-center gap-4 text-center">
                            <span className="font-medium text-gray-300">Siga-nos:</span>
                            {/* Facebook */}
                            <Link to="https://www.facebook.com/p/Construtex-Cear%C3%A1-61578672876263/" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#166FE5]">
                                <FaFacebookF size={20} />
                            </Link>

                            {/* Instagram */}
                            <Link to="https://www.instagram.com/construtexoficial/" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110"
                                style={{ background: "linear-gradient(45deg, #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4)", }}                            >
                                <FaInstagram size={20} />
                            </Link>

                            {/* WhatsApp */}
                            <Link to="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#1EBE5D]">
                                <FaWhatsapp size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="my-10 h-px bg-slate-800"></div>

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
                    <span>© {ano} Construtex Engenharia · Todos os direitos reservados. </span>
                    <span>Desenvolvido por <span className="text-red-800">Constru</span>tex</span>
                </div>
            </div>
        </footer>
    )
}