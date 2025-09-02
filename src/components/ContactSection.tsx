import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        emailjs.sendForm(
            "service_ff1tc8f",      // EmailJS servis ID'nizi buraya yazın
            "template_4klwrtb",     // EmailJS template ID'nizi buraya yazın
            formRef.current,
            "xaLOnGmYys9B9OQhG"   // Public Key
        ).then(
            (result) => {
                alert("Mesajınız başarıyla gönderildi!");
                formRef.current?.reset();
            },
            (error) => {
                alert("Mesaj gönderilirken hata oluştu.");
                console.error(error.text);
            }
        );
    };

    return (
        <section id="iletisim" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center my-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">İletişim</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Sorularınız için bize ulaşın. Profesyonel ekibimiz size en kısa sürede yardımcı olmaktan mutluluk duyar.
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
                                        <p className="text-muted-foreground">+90 541 710 2113</p>
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
                                        <p className="text-muted-foreground">+90 541 710 2113</p>
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
                                        <p className="text-muted-foreground">info@alpa-kombi.com</p>
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
                                        <p className="text-muted-foreground">Merveşehir Mah.</p>
                                        <p className="text-muted-foreground">Gaziantep Teknokent No:42</p>
                                        <p className="text-sm text-primary">Şahinbey / Gaziantep</p>
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
                                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Ad Soyad *</label>
                                            <Input name="user_name" placeholder="Adınızı ve soyadınızı girin" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Telefon *</label>
                                            <Input name="user_phone" placeholder="Telefon numaranızı girin" required />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">E-posta</label>
                                            <Input name="user_email" type="email" placeholder="E-posta adresinizi girin" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">Hizmet Türü</label>
                                            <select name="service_type" className="w-full px-3 py-2 border border-input rounded-md bg-background">
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
                                        <label className="block text-sm font-medium text-foreground mb-2">Adres</label>
                                        <Input name="user_address" placeholder="Adresinizi girin (İlçe, Mahalle)" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Mesajınız</label>
                                        <Textarea name="message" placeholder="Detaylarını açıklayın..." className="min-h-[120px]" />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button type="submit" className="flex-1" size="lg">
                                            <Calendar className="w-4 h-4 mr-2" /> Randevu Talep Et
                                        </Button>
                                        <Button type="button" variant="outline" className="flex-1" size="lg">
                                            Ücretsiz Keşif İste
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
