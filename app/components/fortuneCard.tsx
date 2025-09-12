"use client";

import { Fortune } from "@/lib/types";

type Props = {
    fortune: Fortune;
};

export default function FortuneCard({ fortune }: Props) {
    return (
        <div className="p-4 shadow-sm bg-white">
            <p className="text-lg">{fortune.message}</p>
        </div>
    );
}
