'use client';

import { useEffect, useState } from "react";

interface BackendResponse {
  message: string;
}

export default function Home() {
  const [text, setText] = useState<string>("Lade…");

  useEffect(() => {
    fetch("http://localhost:8000/hello")
      .then((res) => res.json())
      .then((data: BackendResponse) => setText(data.message))
      .catch(() => setText("Fehler beim Laden"));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Frontend-Backend Test</h1>
      <p>Antwort vom Backend:</p>
      <strong>{text}</strong>
    </main>
  );
}
