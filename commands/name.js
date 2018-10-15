if (message.author.id != 175877241517899776) {
	message.react("❎");
} else {
	if (args && args != "") {
		console.log("Ändere Bot-Name zu \"" + args.join(" ") + "\".");
		client.user.setUsername(args.join(" "));
	} else {
		message.channel.fetchMessages({
			limit: 2
		}).then(temp => {
			console.log("Ändere Bot-Name zu \"" + temp.last().content + "\".");
			client.user.setUsername(temp.last().content);
		});
	};
	message.react("✅");
};