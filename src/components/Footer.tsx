import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "../assets/favicon-32x32.png";

const Footer = () => {
    return (
        <footer className="bg-foreground text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                                <img src={logoImg} alt="Alpa Kombi Logo" className="w-8 h-8 transition-transform duration-300 hover:scale-125"
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Alpa Kombi</h3>
                                <p className="text-xs text-white/70">Isıtma Çözümleri</p>
                            </div>
                        </div>
                        <p className="text-white/80 mb-4">
                            Gaziantep'te 15 yıllık deneyimimizle isıtma sistemleri konusunda
                            güvenilir ve kaliteli hizmet sunuyoruz.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                            <Instagram className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Hizmetlerimiz</h4>
                        <ul className="space-y-2 text-white/80">
                            <li><a href="#" className="hover:text-white transition-colors">Kombi Montajı</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Kombi Bakımı</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Petek Temizliği</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Doğalgaz Tesisatı</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Elektrikli Kombi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Acil Servis</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
                        <ul className="space-y-2 text-white/80">
                            <li><a href="#" className="hover:text-white transition-colors">Ana Sayfa</a></li>
                            <li><a href="#hakkimizda" className="hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><a href="#hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#iletisim" className="hover:text-white transition-colors">İletişim</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">SSS</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">İletişim</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-white/80">+90 5417102113</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="text-white/80">info@alpa-kombi.com</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 text-primary mt-1" />
                                <div className="text-white/80">
                                    <p>Merveşehir Mah.</p>
                                    <p>Gaziantep Teknokent No:42</p>
                                    <p>Şahinbey / Gaziantep</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white/60 text-sm mb-4 md:mb-0">
                        © 2024 Alpa Kombi. Tüm hakları saklıdır.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-white/60 hover:text-white transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors">Kullanım Koşulları</a>
                        <a href="#" className="text-white/60 hover:text-white transition-colors">Çerez Politikası</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;