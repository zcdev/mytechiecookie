import fortunes from "@/data/fortunes.json";

export const coderTypes = ["grasshopper", "debugLogger", "futureBuilder", "epicEngineer", "all"] as const;
export type CoderType = typeof coderTypes[number];

export function getFortune(coderType: CoderType): string[] {
    const windfall = Object.values(fortunes).flat();
    const randomIndex = Math.floor(Math.random() * windfall.length);
    const fortune: string = windfall[randomIndex];
    return coderType === "all" ? windfall : [fortune];
}
