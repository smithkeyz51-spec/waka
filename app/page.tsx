"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import CitySelector from "@/components/CitySelector";
import LogFareForm from "@/components/LogFareForm";
import FareCard from "@/components/FareCard";
import SearchBar from "@/components/SearchBar";
import EmptyState from "@/components/EmptyState";
import { addFare, deleteFare, loadFares, seedIfEmpty } from "@/lib/storage";
import { CITIES, Fare } from "@/lib/types";

export default function Home() {
  const [city, setCity] = useState<string>(CITIES[0]);
  const [fares, setFares] = useState<Fare[]>([]);
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    seedIfEmpty();
    setFares(loadFares());
    setLoaded(true);
  }, []);

  function handleAddFare(fare: Omit<Fare, "id" | "createdAt">) {
    addFare(fare);
    setFares(loadFares());
  }

  function handleDelete(id: string) {
    deleteFare(id);
    setFares(loadFares());
  }

  const cityFares = useMemo(
    () => fares.filter((f) => f.city === city),
    [fares, city]
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return cityFares;
    const q = query.trim().toLowerCase();
    return cityFares.filter(
      (f) =>
        f.from.toLowerCase().includes(q) || f.to.toLowerCase().includes(q)
    );
  }, [cityFares, query]);

  const sorted = useMemo(
    () => [...filtered].sort((a, b) => b.createdAt - a.createdAt),
    [filtered]
  );

  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-3xl w-full px-5 py-6 space-y-5">
        <CitySelector selected={city} onSelect={setCity} />
        <LogFareForm city={city} onSubmit={handleAddFare} />
        <SearchBar value={query} onChange={setQuery} />
        <div className="space-y-2.5">
          {loaded && sorted.length === 0 && (
            <EmptyState city={city} hasSearch={query.trim().length > 0} />
          )}
          {sorted.map((fare) => (
            <FareCard key={fare.id} fare={fare} onDelete={handleDelete} />
          ))}
        </div>
      </main>
      <footer className="border-t-2 border-[#1A1A1A]/8 py-5 text-center">
        <p className="text-xs text-[#1A1A1A]/40">
          Fares are crowdsourced and may vary with traffic, weather and time.
          Waka am with sense.
        </p>
      </footer>
    </div>
  );
}
