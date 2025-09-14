"use client";

export default function FortuneCard(message: []) {
    return (
        <div className="p-4 shadow-sm bg-white">
            <p className="text-lg">{message}</p>
        </div>
    );
}
