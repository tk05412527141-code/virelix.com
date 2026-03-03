'use server';

import { supabase } from '@/lib/supabase';

export async function submitContactForm(formData: { name: string; email: string; vision: string }) {
    try {
        const { data, error } = await supabase
            .from('contacts')
            .insert([
                {
                    name: formData.name,
                    email: formData.email,
                    vision: formData.vision
                }
            ]);

        if (error) {
            console.error('Supabase error:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error: any) {
        console.error('Action error:', error);
        return { success: false, error: error.message || 'Bir hata oluştu.' };
    }
}
