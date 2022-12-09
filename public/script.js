const sendButton = document.getElementById("sendMessage")
const messageInput = document.getElementById("messageInput")
const newDiv = document.createElement("div")
const wss = new WebSocket("wss://pyrotm-refactored-yodel-xq45r5gpjjx3v99r-8081.preview.app.github.dev")

sendButton.addEventListener("click", function(){
    wss.send(messageInput.value.trim())

    let newContent = document.createTextNode(`\n \n${messageInput.value.trim()}`)
    
    newDiv.append(newContent)
    const currentDiv = document.getElementById("div1")
    document.body.insertBefore(newDiv, currentDiv)
})



wss.addEventListener("open", () => {
    console.log("We are connected")
})

wss.addEventListener('message', function (event) {
    alert(event.data)
})

