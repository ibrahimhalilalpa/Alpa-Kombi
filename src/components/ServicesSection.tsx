import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Wrench,
    Droplet,
    Settings,
    Zap,
    Flame,
    CheckCircle
} from "lucide-react";

const services = [
    {
        icon: Flame,
        title: "Kombi Montajı",
        description: "Tüm marka kombi montaj işlemlerinizi profesyonel ekibimizle gerçekleştiriyoruz.",
        features: ["Ücretsiz keşif", "Garantili montaj", "Test ve devreye alma"],
        price: "500₺'den başlayan fiyatlar"
    },
    {
        icon: Droplet,
        title: "Petek Temizliği",
        description: "Peteklerinizin verimini artıran profesyonel temizlik hizmeti.",
        features: ["Kimyasal temizlik", "Basınçlı yıkama", "Performans testi"],
        price: "Petek başı 50₺'den başlayan fiyatlar"
    },
    {
        icon: Settings,
        title: "Kombi Bakım & Onarım",
        description: "Düzenli bakım ve arızalı kombilerinizin onarım hizmetleri.",
        features: ["Yıllık bakım paketi", "Anında arıza tespiti", "Orijinal yedek parça"],
        price: "Bakım 200₺"
    },
    {
        icon: Wrench,
        title: "Doğalgaz Tesisatı",
        description: "Doğalgaz boru döşeme ve tesisatı kurulum hizmetleri.",
        features: ["Proje hazırlığı", "İzin işlemleri", "Test ve onay"],
        price: "Metrekare başı fiyatlandırma"
    },
    {
        icon: Zap,
        title: "Elektrikli Kombi",
        description: "Elektrikli kombi satış, montaj ve bakım hizmetleri.",
        features: ["Enerji verimli modeller", "Profesyonel montaj", "Garanti dahil bakım"],
        price: "Cihaz + montaj paket fiyatları"
    },
    {
        icon: CheckCircle,
        title: "Acil Servis",
        description: "7/24 acil durum müdahale hizmetimiz ile yanınızdayız.",
        features: ["Anında müdahale", "Geçici çözümler", "Hızlı arıza giderme"],
        price: "Müdahale ücreti 150₺"
    }
];

const ServicesSection = () => {
    return (
        <section id="hizmetler" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Hizmetlerimiz
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Konya'da isıtma sistemleri konusunda ihtiyacınız olan tüm hizmetleri
                        profesyonel ekibimiz ve kaliteli malzemelerle sunuyoruz.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{service.title}</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <CardDescription className="text-base mb-4">
                                    {service.description}
                                </CardDescription>

                                <div className="space-y-2 mb-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-4">
                                    <div className="text-sm text-muted-foreground mb-3">
                                        {service.price}
                                    </div>
                                    <Button className="w-full">
                                        Detaylı Bilgi Al
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="hero" size="lg">
                        Tüm Hizmetleri Görüntüle
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;