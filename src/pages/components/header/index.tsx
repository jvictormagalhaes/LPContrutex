import { Link } from "react-router-dom"
import logo from "../../image/logo.jpeg";
import { FaWhatsapp } from "react-icons/fa";

export function Header() {
    return (
        <header>
            <nav className="bg-neutral-secondary-soft fixed w-full z-20 top-0 inset-s-0">
                <div className="flex items-center justify-between mx-auto px-25 h-22 bg-white text-gray-700">
                    <a href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
                        <img src={logo} className="w-fit h-20 object-cover" alt="logo" />
                    </a>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-2 font-medium">
                            <li>
                                <Link to="/" className="rounded-lg px-4 py-2 text-slate-700 transition-all duration-300 hover:bg-red-500 hover:text-white">Início</Link>
                            </li>

                            <li>
                                <Link to="#" className="rounded-lg px-4 py-2 text-slate-700 transition-all duration-300 hover:bg-red-500 hover:text-white">Quem Somos</Link>
                            </li>

                            <li>
                                <Link to="#" className="rounded-lg px-4 py-2 text-slate-700 transition-all duration-300 hover:bg-red-500 hover:text-white">Serviços</Link>
                            </li>

                            <li>
                                <Link to="#" className="rounded-lg px-4 py-2 text-slate-700 transition-all duration-300 hover:bg-red-500 hover:text-white">Portifólio</Link>
                            </li>

                            <li>
                                <Link to="#" className="rounded-lg px-4 py-2 text-slate-700 transition-all duration-300 hover:bg-red-500 hover:text-white">Contatos</Link>
                            </li>

                            <li className="ml-4">
                                <a href="https://api.whatsapp.com/send?phone=558899666408" target="_blank" rel="noopener noreferrer" className="flex gap-1 rounded-xl bg-red-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg">
                                    Fale Conosco <FaWhatsapp size={20} className="mt-0.5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}