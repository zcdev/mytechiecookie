export interface Fortune {
    id: number;
    type: string; // coderType
    message: string[];
}

export type CoderType = "grasshopper" | "debugLogger" | "futureBuilder" | "epicEngineer" | "fullstackMaster";

export const localFortunes: Record<CoderType, string[]> = {
    "grasshopper": [
        "Console.log is your spirit animal.",
        "You will find the missing semicolon today."
    ],
    "debugLogger": [
        "Where others see errors, you see destiny. Nothing is impossible.",
        "Your stack traces are love letters from the compiler."
    ],
    "futureBuilder": [
        "The future is async, and so are you.",
        "Promises will resolve in your favor."
    ],
    "epicEngineer": [
        "Your refactor will be legendary.",
        "You shall scale apps beyond imagination."
    ],
    "fullstackMaster": []
};