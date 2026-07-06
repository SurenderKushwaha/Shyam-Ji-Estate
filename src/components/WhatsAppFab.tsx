import { BRAND, waLink } from "@/lib/brand";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(`Hi ${BRAND.name}, I'd like to know more about your properties.`)}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition hover:scale-110"
    >
      {/* Official WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="h-8 w-8"
        fill="white"
        aria-hidden="true"
      >
        <path d="M24 4C13 4 4 13 4 24c0 3.6 1 6.9 2.7 9.8L4 44l10.5-2.7C17.3 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6-.8-8.6-2.3l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.8-11.7c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.1 1.5-1.4 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-1l.7-.8c.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8l-1.4-3.3c-.4-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6C16.5 18 15 19.5 15 22.1c0 2.5 1.8 5 2.1 5.4.3.4 3.6 5.5 8.7 7.7 1.2.5 2.2.8 2.9 1 1.2.4 2.4.3 3.2.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z" />
      </svg>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </a>
  );
}
