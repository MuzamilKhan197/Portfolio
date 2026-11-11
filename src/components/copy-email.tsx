"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { developer } from "@/data/portfolio";

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(developer.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 4500);
  }

  return (
    <div className="copy-wrap">
      <button
        className="icon-button copy-button"
        type="button"
        onClick={copyEmail}
        aria-label="Copy email address"
      >
        {status === "copied" ? <Check size={20} /> : <Copy size={19} />}
      </button>
      <span className="copy-feedback" role="status" aria-live="polite">
        {status === "copied"
          ? "Email copied"
          : status === "failed"
            ? "Please select and copy the email address."
            : ""}
      </span>
    </div>
  );
}
