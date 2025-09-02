import React from "react";
import { Award, Shield, Clock, Wrench } from "lucide-react";

const AboutSection = () => {

    return (
        <section id="hakkimizda" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Başlık */}
                <div className="text-center  my-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Hakkımızda</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Gaziantep'te 15 yıllık deneyimimizle isıtma sistemleri konusunda güvenilir ve kaliteli hizmet sunuyoruz.
                        Alpa Kombi olarak kombi montajı, bakım ve onarım hizmetlerinde müşteri memnuniyetini ön planda tutuyoruz.
                        7/24 acil servis desteğimiz ile her zaman yanınızdayız.
                    </p>
                </div>

                {/* Highlight / Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-2">
                            <Award className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold">15+</span>
                        <span className="text-sm text-muted-foreground">Yıl Deneyim</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-2">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold">5000+</span>
                        <span className="text-sm text-muted-foreground">Mutlu Müşteri</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-2">
                            <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold">7/24</span>
                        <span className="text-sm text-muted-foreground">Acil Servis</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-2">
                            <Wrench className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold">%100</span>
                        <span className="text-sm text-muted-foreground">Garanti</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
