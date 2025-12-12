import { render, screen } from "@testing-library/react";
import Home from "../app/page";

beforeEach(() => {
  // Reset fetch vor jedem Test
  (global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({ json: async () => ({ message: "" }) })
  );
});

test("zeigt Standardtext beim Laden an", () => {
  render(<Home />);
  expect(screen.getByText("Lade…")).toBeInTheDocument();
});

test("zeigt Backend-Antwort an", async () => {
  // Überschreibe fetch für diesen Test
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    json: async () => ({ message: "Hallo vom Backend" })
  });

  render(<Home />);
  expect(await screen.findByText("Hallo vom Backend")).toBeInTheDocument();
});

test("zeigt Fehlermeldung bei fehlgeschlagenem Fetch", async () => {
  // Überschreibe fetch für diesen Test mit Rejection
  (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Backend down"));

  render(<Home />);
  expect(await screen.findByText("Fehler beim Laden")).toBeInTheDocument();
});
