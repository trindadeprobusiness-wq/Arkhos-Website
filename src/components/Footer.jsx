import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#040404] border-t border-white/5 pt-16 pb-8 mt-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center group mb-4">
                            <img
                                src="/image-removebg-preview.png"
                                alt="ARKHOS"
                                className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,200,150,0.15)] transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-[#F1F1F1]/60 text-sm max-w-xs leading-relaxed">
                            Inteligência estratégica aplicada. Tecnologia, geopolítica e inovação para quem opera no limite do que vem a seguir.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-[#F1F1F1] uppercase tracking-wider">Navegação</h4>
                        <ul className="flex flex-col gap-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Comunidade', path: '/comunidade' },
                                { name: 'Aproveitar Oportunidade', path: '/orcamentos' },
                                { name: 'Portfólio', path: '/portfolio' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-[#F1F1F1]/60 hover:text-[#00C896] text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social / Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-[#F1F1F1] uppercase tracking-wider">Conectar</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-[#1F1F1F] rounded-full text-[#F1F1F1]/80 hover:text-[#00C896] hover:bg-[#00C896]/10 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-[#1F1F1F] rounded-full text-[#F1F1F1]/80 hover:text-[#00C896] hover:bg-[#00C896]/10 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-[#1F1F1F] rounded-full text-[#F1F1F1]/80 hover:text-[#00C896] hover:bg-[#00C896]/10 transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                        <a href="mailto:contato@arkhos.com" className="text-sm text-[#F1F1F1]/60 hover:text-[#00C896] transition-colors mt-2">
                            contato@arkhos.com
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-[#F1F1F1]/40 text-xs">
                        © {new Date().getFullYear()} ARKHOS. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
