import { NextResponse } from "next/server";
import { queryHF } from "@/lib/huggingface";
import { getFetchFortune } from "@/utils/getFetchFortune";
import { getStorageFortune } from "@/utils/getStorageFortune";
import { CoderType } from "@/types/fortune";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const coderType = searchParams.get("coderType") as CoderType;

    if (coderType === "fullstackMaster") {
        const fallback = getStorageFortune(coderType);
        return NextResponse.json(fallback);
    } else {
        try {
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
        } catch (error) {
            console.error("HF API failed, falling back to local fortune:", error);
            return NextResponse.json({
                id: Date.now(),
                type: "mystery",
                message: "You just discovered unexpected fortunes! Try again for another windfall. 😏",
            });
        }
    }
}
