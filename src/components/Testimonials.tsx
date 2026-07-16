import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote:
      "Excellent service by Shyam Ji Estate. They helped me find a comfortable PG in Old Rajinder Nagar within my budget. The entire process was smooth and transparent.",
    name: "Naira",
    role: "PG Resident",
    stars: 5,
  },
  {
    quote:
      "I had a great experience with Shyam Ji Estate. Their team showed multiple options and helped me finalize the perfect rental property quickly.",
    name: "Sadaf",
    role: "Tenant",
    stars: 5,
  },
  {
    quote:
      "Very professional and trustworthy property consultants. They understand customer requirements and provide genuine property options.",
    name: "Muniraj",
    role: "Client",
    stars: 5,
  },
  {
    quote:
      "As a UPSC aspirant, finding a suitable PG in Old Rajinder Nagar was a challenge. Shyam Ji Estate helped me get the perfect accommodation near my coaching institute. Highly recommended.",
    name: "Arya",
    role: "UPSC Aspirant",
    stars: 5,
  },
  {
    quote:
      "Shyam Ji Estate helped us find a suitable commercial space in a prime location. Very cooperative team and transparent dealings.",
    name: "Krish Nagar",
    role: "Business Owner",
    stars: 5,
  },
  {
    quote:
      "Finding a rental property became so easy with Shyam Ji Estate. The staff was polite, supportive, and guided us throughout the process.",
    name: "Pooja",
    role: "Tenant",
    stars: 5,
  },
  {
    quote:
      "I came to Delhi for UPSC preparation and was looking for a good PG. Shyam Ji Estate showed multiple options and helped me find a clean and comfortable place within my budget.",
    name: "Satvik",
    role: "UPSC Aspirant",
    stars: 5,
  },
  {
    quote:
      "One of the best property consultants in Old Rajinder Nagar. They helped me find a safe PG near my coaching centre. Honest advice and quick response.",
    name: "Vidhi Rajpurohit",
    role: "UPSC Aspirant",
    stars: 5,
  },
  {
    quote:
      "I was looking for a PG near coaching institutes and Shyam Ji Estate found the perfect accommodation for me. Highly recommended!",
    name: "Pooja Kamat",
    role: "UPSC Aspirant",
    stars: 5,
  },
  {
    quote:
      "Being a lawyer relocating from Patna, I was searching for a secure and comfortable accommodation in Old Rajinder Nagar. Shyam Ji Estate helped me find the ideal place quickly. Excellent service.",
    name: "Nandini Jha",
    role: "Lawyer",
    stars: 5,
  },
  {
    quote:
      "Shyam Ji Estate understood my requirements perfectly and helped me find a well-furnished rental property. The entire process was smooth and hassle-free.",
    name: "Shruti Singh",
    role: "Software Engineer",
    stars: 5,
  },
  {
    quote:
      "I moved from Lucknow for work and was worried about finding a suitable accommodation. Thanks to Shyam Ji Estate, I found a clean and secure place within a day.",
    name: "Vanshika Shrivastava",
    role: "Working Professional",
    stars: 5,
  },
  {
    quote:
      "I came from Punjab for UPSC preparation and needed a PG close to coaching institutes. Shyam Ji Estate provided multiple options and helped me choose the best one. Great service and genuine people.",
    name: "Vanshika Mangla",
    role: "UPSC Aspirant",
    stars: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <section className="bg-muted/50 py-14 sm:py-16">
      <div className="container-x">
        <SectionHeading first="WHAT OUR" accent="CLIENTS SAY" />
        <div className="mt-10 mx-auto max-w-3xl text-center relative px-10 sm:px-12">
          <Quote className="mx-auto h-8 w-8 text-accent opacity-60" />

          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: t.stars }).map((_, starIdx) => (
              <Star
                key={starIdx}
                className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="mt-4 text-sm sm:text-base text-foreground md:text-lg italic font-medium leading-relaxed">
            "{t.quote}"
          </p>
          <div className="mt-5 font-bold text-accent">{t.name}</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
            {t.role}
          </div>

          <button
            aria-label="Previous"
            onClick={() => setI((i - 1 + items.length) % items.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border bg-card text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => setI((i + 1) % items.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border bg-card text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-1.5 flex-wrap max-w-xs sm:max-w-md mx-auto">
            {items.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === i ? "bg-accent w-4" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
