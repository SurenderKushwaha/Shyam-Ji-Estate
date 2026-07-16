import { useEffect, useState } from "react";
import loaderIcon from "@/assets/loader-icon.webp";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const finishLoading = () => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 600); // Wait for fade transition
    };

    if (document.readyState === "complete") {
      // If already loaded before component mounted
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);

      // Safety fallback: if network takes too long, hide loader after 8s max
      const fallbackTimer = setTimeout(finishLoading, 8000);

      return () => {
        window.removeEventListener("load", finishLoading);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease-in-out",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Radial gold glow behind icon */}
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,149,69,0.1) 0%, transparent 70%)",
          animation: "loaderPulse 2s ease-in-out infinite",
        }}
      />

      {/* Icon + spinning rings */}
      <div
        style={{
          position: "relative",
          width: 160,
          height: 160,
        }}
      >
        {/* Outer spinning ring */}
        <svg
          viewBox="0 0 160 160"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            animation: "loaderSpin 2s linear infinite",
          }}
        >
          <circle
            cx="80"
            cy="80"
            r="74"
            fill="none"
            stroke="#C49545"
            strokeWidth="2"
            strokeDasharray="120 360"
            strokeLinecap="round"
          />
        </svg>

        {/* Inner slower ring */}
        <svg
          viewBox="0 0 160 160"
          style={{
            position: "absolute",
            inset: 10,
            width: "calc(100% - 20px)",
            height: "calc(100% - 20px)",
            animation: "loaderSpinReverse 3s linear infinite",
          }}
        >
          <circle
            cx="70"
            cy="70"
            r="65"
            fill="none"
            stroke="rgba(196,149,69,0.3)"
            strokeWidth="1.5"
            strokeDasharray="60 360"
            strokeLinecap="round"
          />
        </svg>

        {/* Icon */}
        <img
          src={loaderIcon}
          alt="Shyam Ji Estate"
          style={{
            position: "absolute",
            inset: 18,
            width: "calc(100% - 36px)",
            height: "calc(100% - 36px)",
            objectFit: "contain",
          }}
        />
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.12); opacity: 1; }
        }
        @keyframes loaderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes loaderSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
