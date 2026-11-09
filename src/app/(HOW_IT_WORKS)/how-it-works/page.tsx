"use client";

import { useEffect } from "react";

export default function HowItWorksPage() {
  useEffect(() => {
    window.location.replace("/#how-it-works");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-sm text-muted">
      Taking you to How it works…
    </div>
  );
}
