import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    Calendar
} from "lucide-react";

const ContactSection = () => {
    return (
        <section id="iletisim" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        İletişim
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Sorularınız için bize ulaşın. Profesyonel ekibimiz size en kısa sürede
                        yardımcı olmaktan mutluluk duyar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <Card className="hover:shadow-card transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Telefon</h3>
                                        <p className="text-muted-foreground">+90 534 407 13 66</p>
                                        <p className="text-sm text-primary">7/24 Acil Servis</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-card transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">WhatsApp</h3>
                                        <p className="text-muted-foreground">+90 534 407 13 66</p>
                                        <p className="text-sm text-primary">Hızlı destek</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-card transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">E-posta</h3>
                                        <p className="text-muted-foreground">info@karaca-kombi.com</p>
                                        <p className="text-sm text-primary">Teklif ve bilgi</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-card transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Adres</h3>
                                        <p className="text-muted-foreground">Fevzi Çakmak Mah.</p>
                                        <p className="text-muted-foreground">Konya Teknokent No:42</p>
                                        <p className="text-sm text-primary">Selçuklu / Konya</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="text-2xl">Hizmet Talep Formu</CardTitle>
                                <p className="text-muted-foreground">
                                    Aşağıdaki formu doldurarak bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Ad Soyad *
                                            </label>
                                            <Input placeholder="Adınızı ve soyadınızı girin" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Telefon *
                                            </label>
                                            <Input placeholder="Telefon numaranızı girin" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                E-posta
                                            </label>
                                            <Input type="email" placeholder="E-posta adresinizi girin" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Hizmet Türü
                                            </label>
                                            <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                                                <option>Kombi Montajı</option>
                                                <option>Kombi Onarımı</option>
                                                <option>Petek Temizliği</option>
                                                <option>Doğalgaz Tesisatı</option>
                                                <option>Elektrikli Kombi</option>
                                                <option>Acil Servis</option>
                                                <option>Diğer</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Adres
                                        </label>
                                        <Input placeholder="Adresinizi girin (İlçe, Mahalle)" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Mesajınız
                                        </label>
                                        <Textarea
                                            placeholder="Detaylarını açıklayın..."
                                            className="min-h-[120px]"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button className="flex-1" size="lg">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Randevu Talep Et
                                        </Button>
                                        <Button variant="outline" className="flex-1" size="lg">
                                            Ücretsiz Keşif İste
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Working Hours */}
                        <Card className="mt-6 bg-gradient-primary text-white">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <Clock className="w-8 h-8" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Çalışma Saatleri</h3>
                                        <div className="text-white/90">
                                            <p>Pazartesi - Cumartesi: 08:00 - 18:00</p>
                                            <p>Pazar: 09:00 - 17:00</p>
                                            <p className="font-semibold mt-2">Acil Servis: 7/24 Hizmet</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;