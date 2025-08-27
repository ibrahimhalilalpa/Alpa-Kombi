import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-white shadow-sm ">
            {/* Top Info Bar */}
            <div className="bg-primary text-white py-2 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <Phone className="w-4 h-4" />
                                <span>+90 534 407 13 66</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Mail className="w-4 h-4" />
                                <span>info@karaca-kombi.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>Konya / Merkez - 7/24 Hizmet</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-foreground">Karaca Kombi</h1>
                                <p className="text-xs text-muted-foreground">Isıtma Çözümleri</p>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#" className="text-foreground hover:text-primary transition-colors">Ana Sayfa</a>
                            <a href="#hizmetler" className="text-foreground hover:text-primary transition-colors">Hizmetlerimiz</a>
                            <a href="#hakkimizda" className="text-foreground hover:text-primary transition-colors">Hakkımızda</a>
                            <a href="#iletisim" className="text-foreground hover:text-primary transition-colors">İletişim</a>
                            <Button
                                variant="hero"
                                size="sm"
                                onClick={() => window.open("https://wa.me/905344071366", "_blank")}
                            >
                                Hemen Ara
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;