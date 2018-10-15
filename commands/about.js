message.channel.send({
	embed: {
		author: {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		url: "https://rsch.neocities.org",
		fields: [
			{
				name: "Website",
				value: "https://rsch.neocities.org",
				inline: true
			},
			{
				name: "Discord",
				value: "https://discord.gg/VmPbt3B",
				inline: true
			},
			{
				name: "GitHub",
				value: "https://github.com/TheLastZombie/ich_iel",
				inline: true
			},
			{
				name: "Wiki",
				value: "https://github.com/TheLastZombie/ich_iel/wiki",
				inline: true
			},
			{
				name: "Invite (Neccessary)",
				value: "https://discordapp.com/oauth2/authorize?client_id=405408491969314826&permissions=70372416&scope=bot",
				inline: true
			},
			{
				name: "Invite (Future-Proof)",
				value: "https://discordapp.com/oauth2/authorize?client_id=405408491969314826&permissions=8&scope=bot",
				inline: true
			}
		],
		footer: {
			icon_url: client.user.avatarURL,
			text: "v2.0 Pre-Beta | " + client.guilds.size + "G, " + client.channels.size + "C, " + client.users.size + "U | Commit " + commid + " | by @roesch#0611 using discord.js"
		}
	}
});