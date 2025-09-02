import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Mehmet Özkan",
        location: "Nizip / Gaziantep",
        rating: 5,
        text: "Kombim bozulmuştu, aynı gün gelip tamir ettiler. Çok memnun kaldım, herkese tavsiye ediyorum. Fiyatları da çok uygun.",
        service: "Kombi Onarımı"
    },
    {
        name: "Ayşe Demir",
        location: "Şahinbey / Gaziantep",
        rating: 5,
        text: "Yeni evimize kombi montajı yaptırdık. İşlerini çok temiz ve düzenli yapıyorlar. Kesinlikle profesyonel bir ekip.",
        service: "Kombi Montajı"
    },
    {
        name: "Ali Yılmaz",
        location: "Nurdağı / Gaziantep",
        rating: 5,
        text: "Peteklerin temizliğini yaptırdım, evi çok daha iyi ısıtıyor artık. Teşekkürler Gaziantep Kombi ekibine!",
        service: "Petek Temizliği"
    },
    {
        name: "Fatma Kaya",
        location: "Yavuzeli / Gaziantep",
        rating: 5,
        text: "Gece kombim arızalandı, sabaha kadar üşüdük. Sabah ilk saatte arayıp gelip tamir ettiler. Çok teşekkürler.",
        service: "Acil Servis"
    },
    {
        name: "Hasan Çelik",
        location: "Şehitkamil / Gaziantep",
        rating: 5,
        text: "Doğalgaz tesisatımızı kurdurup kombi montajını yaptırdık. Her şey mükemmeldi, fiyat performans olarak da çok iyi.",
        service: "Doğalgaz Tesisatı"
    },
    {
        name: "Zeynep Şahin",
        location: "İslahiye / Gaziantep",
        rating: 5,
        text: "Elektrikli kombi montajımızı yaptırdık. Gayet titiz çalışıyorlar ve işlerini iyi biliyorlar. Memnun kaldık.",
        service: "Elektrikli Kombi"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Müşteri Yorumları
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Gaziantep'te binlerce mutlu müşterimizin deneyimlerini okuyun ve
                        kaliteli hizmetimizle tanışın.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="group hover:shadow-card transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <Quote className="w-8 h-8 text-primary/30" />
                                </div>

                                <p className="text-foreground mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                <div className="flex items-center mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <div>
                                    <div className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.location}
                                    </div>
                                    <div className="text-sm text-primary font-medium mt-1">
                                        {testimonial.service}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12 p-8 bg-gradient-primary rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4">
                        Sizin de deneyiminizi paylaşın!
                    </h3>
                    <p className="text-white/90 mb-6">
                        Hizmetimizden memnun kaldıysanız, Google ve sosyal medya hesaplarımızdan
                        yorumunuzu paylaşarak diğer müşterilere yardımcı olabilirsiniz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">
                            Google'da Yorum Yap
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
                            Facebook'ta Paylaş
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;