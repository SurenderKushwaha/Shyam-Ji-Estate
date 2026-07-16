import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: (Option | string)[];
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  icon,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to { value, label }
  const normalizedOptions: Option[] = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full inline-flex items-center justify-between rounded-xl sm:rounded-2xl border border-border/80 bg-background ${icon ? "pl-11" : "pl-4"} pr-4 py-2 text-xs sm:text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all ${className.includes("h-") ? "" : "h-[46px] md:h-[48px]"}`}
      >
        <span className="flex items-center gap-2 truncate">
          {icon && (
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1528]/60">
              {icon}
            </span>
          )}
          <span className={selectedOption ? "text-[#0B1528]" : "text-[#0B1528]/50 font-medium"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#0B1528]/60 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Options List */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full min-w-[200px] rounded-2xl border border-border/40 bg-white py-1.5 shadow-[0_15px_35px_rgba(11,21,40,0.15)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-[220px] overflow-y-auto no-scrollbar">
            {/* Placeholder option (Select/Clear) */}
            <button
              type="button"
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
              className={`w-full text-left px-5 py-2.5 text-xs sm:text-sm font-medium transition-colors hover:bg-[#FAF9F6] hover:text-[#C49545] ${
                value === "" ? "text-[#C49545] bg-[#FAF9F6]/50 font-bold" : "text-[#0B1528]/50"
              }`}
            >
              {placeholder}
            </button>

            {normalizedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-2.5 text-xs sm:text-sm font-semibold transition-colors hover:bg-[#FAF9F6] hover:text-[#C49545] ${
                    isSelected
                      ? "text-[#C49545] bg-[#FAF9F6] font-bold border-l-2 border-[#C49545]"
                      : "text-[#0B1528] border-l-2 border-transparent"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
