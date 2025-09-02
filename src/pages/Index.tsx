import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
