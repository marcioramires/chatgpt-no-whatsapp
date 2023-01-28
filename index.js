const { create } = require('venom-bot')

create({
    session: 'chat-gpt',
    multidevice: true
})
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro)
    })

async function start(client) {
    const botText = "🤖 world 🌎"
    client.onAnyMessage((message) => {
        if (message.body.toLowerCase() === "hello") {
            client.sendText(message.to, botText)
            console.log(message)
        }
    })
}