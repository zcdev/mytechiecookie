import { localFortunes, CoderType, Fortune } from "@/types/fortune";

export function getStorageFortune(coderType: CoderType): Fortune {
    const slips = localFortunes[coderType];
    const random = slips[Math.floor(Math.random() * slips.length)];
    const allSlips = Object.values(localFortunes).flat();

    return {
        id: Date.now(),
        type: coderType,
        message: coderType !== "fullstackMaster" ? [random] : allSlips ?? "No local fortune found.",
    };
}

