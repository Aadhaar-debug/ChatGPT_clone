const API_KEY = "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";
const endpoint = "https://api.openai.com/v1/engines/davinci/completions";
const promptInput = document.getElementById("prompt-input");
const submitButton = document.getElementById("submit-button");
const chatContainer = document.getElementById("chat-container");

submitButton.addEventListener("click", async function(e) {
    e.preventDefault();
    const prompt = promptInput.value;
    const response = await generateText(prompt);
    chatContainer.innerHTML += `<p>You: ${prompt}</p><p>ChatGPT: ${response.data.choices[0].text}</p>`;
    promptInput.value = "";
});

async function generateText(prompt) {
    try {
        const response = await axios.post(endpoint, {
            prompt: prompt,
            temperature:0.5
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}
