import { Fare } from "./types";

const STORAGE_KEY = "danfo-tracker:fares";

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadFares(): Fare[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Fare[];
  } catch {
    return [];
  }
}

export function saveFares(fares: Fare[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(fares));
}

export function addFare(fare: Omit<Fare, "id" | "createdAt">): Fare {
  const newFare: Fare = {
    ...fare,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  };
  const current = loadFares();
  const updated = [newFare, ...current];
  saveFares(updated);
  return newFare;
}

export function deleteFare(id: string) {
  const current = loadFares();
  saveFares(current.filter((f) => f.id !== id));
}

export function seedIfEmpty() {
  // Intentionally a no-op — no guessed/placeholder fares.
}
