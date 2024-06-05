import messages from "./convs/demo/messages.js"; // IMPORTANT change this line to match the name of your convs folder
const conv_path = "./convs/demo/"; // IMPORTANT change this line to match the name of your. End this in trailing slash

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

var waitingUnit = 20;



// created a new chat-blob inside the message-container and writes `text` into it
// the text is written word by word, with a small delay between each word
async function writeText(text, role, wait = waitingUnit * 10) {
    var messageContainer = document.getElementById("messageHistory");
    var chatBlob = document.createElement("div");


    //className is "user-class" if the role is "user" othersie "bot-class"
    var className = role === "user" ? "user-class message" : "bot-class message";
    var emoji = role === "user" ? "🙂" : "🤖";
    chatBlob.className = className;
    messageContainer.appendChild(chatBlob);

    chatBlob.scrollIntoView();

    var text = emoji + " " + text;
    var words = text.split(" ");
    //iterate over the words, add them to the innerhtml and call sleep between each word
    for (var j = 0; j < words.length; j++) {
        chatBlob.innerHTML += words[j] + " ";
        await sleep(wait);
        //wait for 50 ms

    }
}

// creates a new chat-blob inside message container and writes an image into it
async function writeImage(image, role) {
    var messageContainer = document.getElementById("messageHistory");
    var chatBlob = document.createElement("div");

    //className is "user-class" if the role is "user" othersie "bot-class"
    chatBlob.className = "bot-class message";
    messageContainer.appendChild(chatBlob);

    chatBlob.innerHTML = "<img src=" + conv_path + image + ">";
    chatBlob.scrollIntoView();
    await sleep(waitingUnit * 20);
}


// writeInput recieves a text paramter as input and simulates that the user typed the text
// when the text is done, it adds a new line to the chat-container and erases the input field
async function simulateInput(text) {
    var input = document.getElementById("userInput");
    input.focus();
    input.value = " ";

    for(var j  = 1; j <= text.length; j++){
        input.value = text.slice(0, j);
        await sleep(waitingUnit);
    }

    await writeText(text, "user", 0);
    input.value = "";

}


async function main() {
    // iterate over the list of messages and writes them into the chat-container
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        if (message.role === "user") {
            await simulateInput(message.message);
        } else {
            if (message.data === "text") {
                await writeText(message.message, message.role);
            } else if (message.data === "img") {
                await writeImage(message.message, message.role);
            } else {
                console.log("unknown data type: " + message.data);
            }
        }

        await sleep(waitingUnit * 20);
    }
}

main();
