
export async function queryHF(messages: { role: string; content: string; }[]) {
    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
        headers: {
            Authorization: `Bearer ${process.env.HF_TOKEN}`,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            messages,
            model: "openai/gpt-oss-20b:novita",
        }),
    });

    console.log("HF token prefix:", process.env.HF_TOKEN?.slice(0, 6));

    if (!response.ok) {
        throw new Error(`HF API error: ${response.statusText}`);
    }

    return response.json();
}
