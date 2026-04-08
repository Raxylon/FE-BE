'use client';

import { useEffect, useState } from "react";

interface HealthResponse {
  status: "ok" | string;
  location: string;
}

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.trim() || "http://localhost:8000";

export default function Home() {
  const [text, setText] = useState<string>("Lade…");

  useEffect(() => {
    const controller = new AbortController();

    async function loadHealth() {
      try {
        const res = await fetch(`${API_BASE}/health`, {
          method: "GET",
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        // HTTP-Status explizit behandeln (wichtiger für Doku + Debugging)
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }

        const data = (await res.json()) as HealthResponse;

        // Erwartete Ausgabe für die UI
        setText(`Backend: ${data.status} · Standort: ${data.location}`);
      } catch (err) {
        if ((err as any)?.name === "AbortError") return;
        setText("Backend nicht erreichbar / Fehler beim Laden");
      }
    }

    loadHealth();

    return () => controller.abort();
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Home – Frontend-Backend Test</h1>
      <p>Antwort vom Backend (Health-Check):</p>
      <strong>{text}</strong>
    </main>
  );
}
