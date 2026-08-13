import { Bus } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b-4 border-[#111111] bg-[#F7C548]">
      <div className="mx-auto max-w-3xl px-5 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-md bg-[#111111] flex items-center justify-center shrink-0">
            <Bus size={20} className="text-[#F7C548]" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold leading-none tracking-tight text-[#1A1A1A]">
              Waka
            </h1>
            <p className="text-[11px] text-[#1A1A1A]/70 leading-none mt-1">
              Know the fare before you board
            </p>
          </div>
        </div>
      </div>
      {/* Placard stripe, like the black band on a danfo route board */}
      <div className="h-2 bg-[#111111]" />
    </header>
  );
}
