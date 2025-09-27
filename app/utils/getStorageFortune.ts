import { localFortunes, CoderType, Fortune } from "@/types/fortune";

export function getStorageFortune(coderType: CoderType): Fortune {
    const allSlips = Object.values(localFortunes).flat();

    return {
        id: Date.now(),
        type: coderType,
        message: coderType === "fullstackMaster" ? allSlips : localFortunes[coderType] ?? "No local fortune found.",
    };
}

