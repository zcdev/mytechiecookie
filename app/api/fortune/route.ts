import { NextResponse } from "next/server";
import { queryHF } from "@/lib/huggingface";
import { getFetchFortune } from "@/utils/getFetchFortune";
import { getStorageFortune } from "@/utils/getStorageFortune";
import { CoderType } from "@/types/fortune";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const coderType = searchParams.get("coderType") as CoderType | null;

    if (!coderType) {
        return NextResponse.json({
            id: Date.now(),
            type: "mystery",
            message: "You forgot to tell what type of coder you are… defaulting to Debug Logger 😏",
        });
    }

    // 🎲 Decide source
    const roll = Math.random(); // 0–1
    const useHF = roll < 0.7;   // 70% HF, 30% local

    try {
        if (useHF) {
            const hfResponse = await queryHF([
                {
                    role: "user",
                    content: `Give me a short fortune cookie message for a ${coderType} coder.`,
                },
            ]);
            const message =
                hfResponse.choices?.[0]?.message?.content ?? "No fortune found.";
            const fortune = getFetchFortune({ slip: { message } }, coderType);
            return NextResponse.json(fortune);
        } else {
            const fallback = getStorageFortune(coderType);
            return NextResponse.json(fallback);
        }
    } catch (error) {
        console.error("HF API failed, falling back to local fortune:", error);
        const fallback = getStorageFortune(coderType);
        return NextResponse.json(fallback);
    }
}
