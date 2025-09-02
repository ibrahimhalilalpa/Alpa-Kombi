import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import logoImg from "../assets/favicon-32x32.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Ana Sayfa", href: "#" },
        { name: "Hizmetlerimiz", href: "#hizmetler" },
        { name: "Hakkımızda", href: "#hakkimizda" },
        { name: "İletişim", href: "#iletisim" },
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            {/* Top Info Bar */}
            <div className="bg-primary text-white py-2 hidden sm:flex">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <Phone className="w-4 h-4" />
                                <span>+90 541 710 2113</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Mail className="w-4 h-4" />
                                <span>info@alpa-kombi.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>Gaziantep / Şahinbey - 7/24 Hizmet</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                                <img src={logoImg} alt="Alpa Kombi Logo" className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-foreground">Alpa Kombi</h1>
                                <p className="text-xs text-muted-foreground">Isıtma Çözümleri</p>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <Button
                                variant="hero"
                                size="sm"
                                onClick={() => window.open("https://wa.me/905417102113", "_blank")}
                            >
                                Hemen Ara
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden mt-2 bg-white shadow-md rounded-lg">
                            <div className="flex flex-col space-y-2 px-4 py-3">
                                {navigation.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="block text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)} // Tıklayınca menüyü kapat
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <Button
                                    variant="hero"
                                    size="sm"
                                    onClick={() => window.open("https://wa.me/905417102113", "_blank")}
                                >
                                    Hemen Ara
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
