import { Fortune } from "@/types/fortune";

type HFResponse = {
    slip?: {
        id?: number;
        message?: string[];
    };
};

export function getFetchFortune(apiResponse: HFResponse, coderType: string): Fortune {
    return {
        id: apiResponse.slip?.id ?? Date.now(),
        type: coderType,
        message: apiResponse.slip?.message ?? []
    };
}
