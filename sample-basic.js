import OpenAI from "openai";

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o-mini";

export async function main() {

  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    messages: [
      { role: "system", content: "あなたは優秀なメジャーリーグベースボールのアナリストです。" },
      { role: "user", content: "MLBは現在観客動員数が減少し、人気に陰りが出ています。今後MLBが人気を回復するために取り組むべきことを、理由や具体的な対策を含めて3つ挙げてください。" }
    ],
    model: modelName,
    temperature: 0.5,
    max_tokens: 1000,
    top_p: 1.
  });

  console.log(response.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
