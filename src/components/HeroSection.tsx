import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wrench, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-light/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Isıtma Çözümlerinde
                            <span className="block text-yellow-300">Güvenilir Adresiniz</span>
                        </h1>
                        <p className="text-xl mb-8 text-white/90 leading-relaxed">
                            Konya'da 15 yıllık deneyimimizle kombi montajı, bakım ve onarım hizmetlerinde
                            kaliteli ve güvenilir çözümler sunuyoruz. 7/24 acil servis desteği ile yanınızdayız.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                                Ücretsiz Keşif
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-blue-500 hover:bg-white hover:text-primary">
                                Hizmetlerimiz
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm text-white/80">Yıl Deneyim</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold">5000+</div>
                                <div className="text-sm text-white/80">Mutlu Müşteri</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold">7/24</div>
                                <div className="text-sm text-white/80">Acil Servis</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-2 mx-auto">
                                    <Wrench className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-bold">%100</div>
                                <div className="text-sm text-white/80">Garanti</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Service Card */}
                    <div className="lg:flex justify-end">
                        <Card className="bg-white/95 backdrop-blur-sm p-8 shadow-card max-w-md">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Hızlı Servis Talebi
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Acil durumlarınızda hemen bizimle iletişime geçin. Profesyonel ekibimiz en kısa sürede yanınızda!
                            </p>
                            <div className="space-y-4">
                                <Button className="w-full" size="lg">
                                    Hemen Ara: 0 534 407 13 66
                                </Button>
                                <Button variant="outline" className="w-full" size="lg">
                                    WhatsApp ile İletişim
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;