import React from "react";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export const Contact = () => {
    return (
        <Section id="contact" className="bg-white/[0.01]">
            <div className="max-w-4xl mx-auto glass rounded-[2rem] p-8 md:p-16 border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold font-space">Sıradaki projenizi <br /> başlatalım.</h2>
                        <p className="text-white/60 leading-relaxed">
                            Mühendislik mükemmeliyetine ihtiyaç duyan bir vizyonunuz mu var? Formu doldurun, teknik ekibimiz 24 saat içinde size ulaşsın.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <span className="text-primary text-xs font-bold">TR</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Mühendislik Merkezi</div>
                                    <div className="text-xs text-white/40">Palo Alto, Kaliforniya</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <Input label="Adınız" placeholder="Ahmet Yılmaz" />
                        <Input label="İş E-postanız" placeholder="ahmet@sirket.com" type="email" />
                        <Input label="Vizyonunuz" placeholder="Bize projenizden bahsedin..." isTextArea />
                        <Button className="w-full gap-2" variant="primary">
                            Talebi Gönder <Send size={16} />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
