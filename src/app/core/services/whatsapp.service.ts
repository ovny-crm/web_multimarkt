import { Injectable } from '@angular/core';

/**
 * Datos del lead para telecomunicaciones
 */
export interface LeadData {
    name: string;
    currentOperator: string;  // Operador actual del cliente
    phone: string;
    service?: string;         // Fibra, Móvil, Pack, Energía
}

@Injectable({
    providedIn: 'root'
})
export class WhatsappService {
    // Número real de Multi Markt
    private readonly phoneNumber = '34621660580';

    /**
     * Abre WhatsApp con un mensaje personalizado para comparar tarifas
     * @param lead Datos del formulario del usuario
     */
    openWhatsappWithLead(lead: LeadData): void {
        const message = this.buildTelecomMessage(lead);
        const url = this.buildWhatsappUrl(message);
        window.open(url, '_blank');
    }

    /**
     * Abre WhatsApp con un mensaje genérico
     */
    openWhatsapp(): void {
        const message = '¡Hola! Me gustaría comparar tarifas de telecomunicaciones y ver cuánto puedo ahorrar en mi factura.';
        const url = this.buildWhatsappUrl(message);
        window.open(url, '_blank');
    }

    /**
     * Construye el mensaje para telecomunicaciones
     * Formato: "Hola, actualmente estoy con [Operador] y quiero ver si podéis mejorar mi precio. Mi teléfono es [Teléfono]."
     */
    private buildTelecomMessage(lead: LeadData): string {
        let message = `Hola, soy ${lead.name}.`;
        message += `\n\nActualmente estoy con *${lead.currentOperator}* y quiero ver si podéis mejorar mi precio.`;

        if (lead.service) {
            message += `\n\nMe interesa: ${lead.service}`;
        }

        message += `\n\nMi teléfono es: ${lead.phone}`;

        return message;
    }

    /**
     * Construye la URL de WhatsApp con el mensaje codificado
     */
    private buildWhatsappUrl(message: string): string {
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    }

    /**
     * Actualiza el número de teléfono (para configuración dinámica)
     */
    setPhoneNumber(phone: string): void {
        (this as any).phoneNumber = phone.replace(/\D/g, '');
    }
}
