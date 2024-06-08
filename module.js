import { GoogleGenerativeAI } from "@google/generative-ai";

document.querySelector("#ai_answer_generate_button").addEventListener('click', run);

// Access your API key (see "Set up your API key" above)
const API_KEY = API_key;
const genAI = new GoogleGenerativeAI(API_KEY);
// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function run() {
    const prompt = userquestion();

    let result = await model.generateContentStream(prompt);

    let text = '';

    let formatted;
    let original_text;
    for await (const chunk of result.stream) {
        let chunkTest = chunk.text();
        original_text += chunkTest;
        const resposeArray = chunkTest.split("**");
        let newArray;
        for (let i = 0; i < resposeArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newArray += resposeArray[i];
            } else {
                newArray += "<br>";
                newArray += "<b>" + resposeArray[i] + "</b>";
            }
        }
        let newArray2 = newArray.split("*").join("<br>&nbsp;");
        text += newArray2;

        document.querySelector("#ai_output_answer").innerHTML = text;
    }

    document.querySelector("#ai_output_answer").innerHTML = text;
}
run();