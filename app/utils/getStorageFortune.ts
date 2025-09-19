import { localFortunes, CoderType, Fortune } from "@/types/fortune";

export function getStorageFortune(coderType: CoderType): Fortune {
    const slips = localFortunes[coderType];
    const random = slips[Math.floor(Math.random() * slips.length)];
    const allSlips = Object.values(localFortunes).flat();

    return {
        id: Date.now(),
        type: coderType,
        message: coderType !== "all" ? [random] : allSlips ?? "No local fortune found.",
    };
}

