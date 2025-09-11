import fortunes from "@/data/fortune.json";
import { Fortune } from "@/lib/types";
import FortuneCard from "@/components/fortuneCard";

export default function HomePage() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🥠 My Techie Cookie</h1>
      {fortunes.map((fortune: Fortune) => (
        <FortuneCard key={fortune.id} fortune={fortune} />
      ))}
    </main>
  );
}
