import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    isTextArea?: boolean;
}

export const Input = ({ label, isTextArea, className, ...props }: InputProps) => {
    const baseClasses = cn(
        "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300",
        className
    );

    return (
        <div className="space-y-2">
            {label && <label className="text-sm font-medium text-white/70 ml-1">{label}</label>}
            {isTextArea ? (
                <textarea className={cn(baseClasses, "min-h-[120px] resize-none")} {...(props as any)} />
            ) : (
                <input className={baseClasses} {...props} />
            )}
        </div>
    );
};
