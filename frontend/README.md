Next.js Projekt
Dies ist ein Next.js Projekt, initialisiert mit create-next-app.

Erste Schritte
Starten Sie zunächst den Development-Server:

bash
npm run dev
# oder
yarn dev
# oder
pnpm dev
# oder
bun dev
Öffnen Sie http://localhost:3000 in Ihrem Browser, um das Ergebnis zu sehen.

Sie können die Seite bearbeiten, indem Sie app/page.tsx modifizieren. Die Seite aktualisiert sich automatisch während Sie bearbeiten.

Dieses Projekt verwendet next/font, um automatisch Geist zu optimieren und zu laden, eine neue Schriftarten-Familie für Vercel.

Weitere Informationen
Um mehr über Next.js zu lernen, sehen Sie sich die folgenden Ressourcen an:

Next.js Dokumentation - lernen Sie Next.js Features und API kennen.

Learn Next.js - ein interaktives Next.js Tutorial.

Sie können auch das Next.js GitHub Repository besuchen - Ihr Feedback und Ihre Beiträge sind willkommen!

Deployment auf Vercel
Der einfachste Weg, Ihre Next.js App zu deployen, ist die Vercel Platform von den Creatorn von Next.js zu verwenden.

Lesen Sie unsere Next.js Deployment Dokumentation für mehr Details.



Backend-Frontend Integration Project
Dieses Projekt demonstriert eine einfache Full-Stack-Anwendung, die aus einem FastAPI-Backend und einem React-Frontend besteht. Die Anwendung zeigt die grundlegende Kommunikation zwischen Frontend und Backend über HTTP-Requests und eignet sich ideal als Ausgangspunkt für komplexere Full-Stack-Projekte.

Projektübersicht
Das Backend wurde mit FastAPI implementiert und bietet zwei einfache API-Endpoints, die JSON-Antworten zurückgeben. Besonders wichtig ist die Implementierung von CORS (Cross-Origin Resource Sharing), die es dem Frontend ermöglicht, sicher mit dem Backend zu kommunizieren, auch wenn sie auf unterschiedlichen Domains oder Ports laufen. Die CORS-Konfiguration ist derzeit für Entwicklungszwecke offen eingestellt, erlaubt alle Ursprünge, Methoden und Header - in einer Produktionsumgebung sollte diese Konfiguration jedoch entsprechend eingeschränkt werden.

Das Frontend besteht aus einer React-Komponente mit TypeScript-Unterstützung, die beim Laden der Seite automatisch eine HTTP-Anfrage an das Backend sendet. Die Komponente verwendet React Hooks wie useState für die Zustandsverwaltung der API-Antwort und useEffect für das Ausführen des API-Calls beim initialen Rendern. Die Oberfläche zeigt clearly an, ob die Daten erfolgreich geladen wurden oder ob Fehler aufgetreten sind.

Installation und Ausführung
Um das Projekt lokal auszuführen, benötigen Sie Python 3.8+ für das Backend und Node.js 16+ für das Frontend. Starten Sie zunächst das Backend durch Navigieren in das Backend-Verzeichnis und Ausführen von pip install fastapi uvicorn gefolgt von uvicorn main:app --reload --port 8000. Anschließend starten Sie das Frontend in einem separaten Terminal durch Wechseln in das Frontend-Verzeichnis und Ausführen von npm install und npm run dev. Standardmäßig erwartet das Frontend das Backend unter http://localhost:8000 - stellen Sie sicher, dass beide Dienste laufen und die Ports verfügbar sind.

API-Kommunikation und Endpoints
Das Backend bietet zwei einfache Endpoints: Der Root-Endpoint unter GET / antwortet mit einer Begrüßungsnachricht, während der GET /hello-Endpoint die spezifische Nachricht "Hallo aus dem Backend!" zurückgibt. Das Frontend kommuniziert asynchron mit diesen Endpoints und zeigt die empfangenen Daten in der Benutzeroberfläche an. Die Architektur folgt einem klaren Trennungskonzept, bei dem das Frontend nur für die Darstellung zuständig ist und das Backend die Geschäftslogik und Datenbereitstellung übernimmt.
