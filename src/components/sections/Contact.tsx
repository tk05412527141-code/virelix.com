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
                        <h2 className="text-4xl font-bold font-space">Start your <br /> next project.</h2>
                        <p className="text-white/60 leading-relaxed">
                            Have a vision that needs engineering excellence? Fill out the form and our technical team will reach out within 24 hours.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <span className="text-primary text-xs font-bold">EN</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold">Engineering Hub</div>
                                    <div className="text-xs text-white/40">Palo Alto, California</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <Input label="Your Name" placeholder="John Doe" />
                        <Input label="Work Email" placeholder="john@company.com" type="email" />
                        <Input label="Your Vision" placeholder="Tell us about the project..." isTextArea />
                        <Button className="w-full gap-2" variant="primary">
                            Submit Request <Send size={16} />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
