const aiButton = document.getElementById("aiButton");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");


aiButton.addEventListener("click", () => {
    chatBox.classList.add("show");
});


closeChat.addEventListener("click", () => {
    chatBox.classList.remove("show");
});


chatForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const message = chatInput.value.trim();

    if (!message) return;

    addMessage(message, "user");

    const reply = getServiceSuggestion(message);

    setTimeout(() => {
        addMessage(reply, "bot");
    }, 400);

    chatInput.value = "";
});


function addMessage(text, type) {

    const message = document.createElement("div");

    message.className =
        type === "user"
        ? "user-message"
        : "bot-message";

    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function getServiceSuggestion(message) {

    const text = message.toLowerCase();

    if (
        text.includes("pipe") ||
        text.includes("water") ||
        text.includes("leak") ||
        text.includes("tap")
    ) {
        return "🔧 I recommend Plumbing. Your request sounds related to water or pipe work.";
    }

    if (
        text.includes("electric") ||
        text.includes("switch") ||
        text.includes("wire") ||
        text.includes("light")
    ) {
        return "⚡ I recommend Electrical Work. An electrician can help with this.";
    }

    if (
        text.includes("clean") ||
        text.includes("dirty") ||
        text.includes("house")
    ) {
        return "🧹 I recommend Home Cleaning. You can browse our cleaning professionals.";
    }

    if (
        text.includes("ac") ||
        text.includes("cool") ||
        text.includes("air conditioner")
    ) {
        return "❄️ I recommend AC Repair. You can book an AC professional.";
    }

    if (
        text.includes("makeup") ||
        text.includes("hair") ||
        text.includes("beauty")
    ) {
        return "💄 I recommend Beauty & Salon services.";
    }

    if (
        text.includes("fridge") ||
        text.includes("washing machine") ||
        text.includes("appliance")
    ) {
        return "🔧 I recommend Appliance Repair.";
    }

    return "✨ I suggest browsing our Services page to find the right professional for your needs.";
}