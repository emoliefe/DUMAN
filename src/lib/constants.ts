export const WHATSAPP_NUMBER = '905546471335'
export const WHATSAPP_MESSAGE = 'Merhaba, Duman Detay hizmetleri hakkında bilgi almak istiyorum.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
export const INSTAGRAM_URL = 'https://www.instagram.com/dumandetay'
export const INSTAGRAM_HANDLE = '@dumandetay'
export const BUSINESS_NAME = 'Duman Detay'
export const BUSINESS_LOCATION = 'İzmir / Buca'
export const BUSINESS_PHONE = '+90 554 647 13 35'
export const BUSINESS_ADDRESS = 'Çamlıpınar, 293/4. Sk. No:3/A, 35390 Buca/İzmir'
export const WORKING_HOURS = 'Pzt–Cts 09:00–19:00 | Pazar Kapalı'
export const GOOGLE_MAPS_EMBED = 'https://maps.google.com/maps?q=Çamlıpınar+293/4+Sk+No:3/A+Buca+İzmir+Türkiye&output=embed&hl=tr&z=16'
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Çamlıpınar+293/4+Sk+No:3/A+35390+Buca+İzmir+Türkiye'

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
