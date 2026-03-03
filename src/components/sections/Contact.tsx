"use client";

import React, { useState, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            vision: formData.get('vision') as string,
        };

        if (!data.name || !data.email || !data.vision) {
            setStatus('error');
            setErrorMessage("Lütfen tüm alanları doldurun.");
            return;
        }

        const result = await submitContactForm(data);

        if (result.success) {
            setStatus('success');
            formRef.current?.reset();
        } else {
            setStatus('error');
            setErrorMessage(result.error || "Bir hata oluştu. Lütfen tabloyu oluşturduğunuzdan emin olun.");
        }
    };

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

                    <div className="relative">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                <CheckCircle2 className="text-primary w-16 h-16 animate-bounce" />
                                <h3 className="text-2xl font-bold font-space">Talep Alındı!</h3>
                                <p className="text-white/60">Mesajınız başarıyla veritabanına kaydedildi. Sizinle en kısa sürede iletişime geçeceğiz.</p>
                                <Button variant="outline" onClick={() => setStatus('idle')}>Yeni Form Gönder</Button>
                            </div>
                        ) : (
                            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                                <Input label="Adınız" name="name" placeholder="Ahmet Yılmaz" required />
                                <Input label="İş E-postanız" name="email" placeholder="ahmet@sirket.com" type="email" required />
                                <Input label="Vizyonunuz" name="vision" placeholder="Bize projenizden bahsedin..." isTextArea required />

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                        <AlertCircle size={16} />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <Button
                                    className="w-full gap-2"
                                    variant="primary"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? "Gönderiliyor..." : "Talebi Gönder"}
                                    {status !== 'loading' && <Send size={16} />}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};
