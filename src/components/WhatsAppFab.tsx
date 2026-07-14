import { BRAND, waLink } from "@/lib/brand";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(`Hi ${BRAND.name}, I'd like to know more about your properties.`)}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 lg:bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 transition hover:scale-110"
    >
      <img
        src="/whatsapp.png"
        alt="Chat on WhatsApp"
        className="h-10 w-10 object-contain"
      />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/20" />
    </a>
  );
}
