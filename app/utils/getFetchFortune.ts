import { Fortune } from "@/types/fortune";

export function getFetchFortune(apiResponse: any, coderType: string): Fortune {
    return {
        id: apiResponse.slip?.id ?? Date.now(),
        type: coderType,
        message: apiResponse.slip?.message, // assume route provided a string
    };
}
