'use server';

import { supabase } from '@/lib/supabase';

export async function submitContactForm(formData: { name: string; email: string; vision: string }) {
    try {
        // 1. Parse name into first and last
        const nameParts = (formData.name || "").trim().split(/\s+/);
        const firstName = nameParts.slice(0, nameParts.length - 1).join(" ") || nameParts[0] || "";
        const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";

        // 2. Parse selected area from vision if present (formatted as "[Area] Details...")
        let area = "";
        let details = formData.vision || "";
        const match = details.match(/^\[(.*?)\] (.*)$/s);
        if (match) {
            area = match[1];
            details = match[2];
        }

        // 3. Post to Jotform public submission endpoint (matches ID: 261546177010047)
        const params = new URLSearchParams();
        params.append("q2_fullname0[first]", firstName);
        params.append("q2_fullname0[last]", lastName);
        params.append("q3_email1", formData.email || "");
        if (area) {
            params.append("q4_checkbox2[]", area);
        }
        params.append("q5_textarea3", details);

        const jotformUrl = "https://submit.jotform.com/submit/261546177010047/";
        const jotformResponse = await fetch(jotformUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        });

        if (!jotformResponse.ok) {
            const errorText = await jotformResponse.text();
            console.error("Jotform submission failed:", errorText);
            throw new Error("Jotform submission failed");
        }

        // 4. Save to Supabase (as a backup / log)
        try {
            await supabase
                .from('contacts')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        vision: formData.vision
                    }
                ]);
        } catch (dbError) {
            console.error("Supabase insert error (continuing anyway):", dbError);
        }

        return { success: true };
    } catch (error: any) {
        console.error('Action error:', error);
        return { success: false, error: error.message || 'Bir hata oluştu.' };
    }
}
