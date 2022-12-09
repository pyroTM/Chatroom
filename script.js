const sendButton = document.getElementById("sendMessage")
const messageInput = document.getElementById("messageInput")
const newDiv = document.createElement("div")

sendButton.addEventListener("click", function(){
    alert(`[USERNAME] said: ${messageInput.value.trim()}`)

    let newContent = document.createTextNode(`\n \n${messageInput.value.trim()}`)
    
    newDiv.append(newContent)
    const currentDiv = document.getElementById("div1")
    document.body.insertBefore(newDiv, currentDiv)
})
