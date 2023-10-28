const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "döviz",
    description: "Dolar ve euro bilgileri gösterir.",
    type: 1,
    options: [],
    run:async(client,interaction) => {
        const x = await fetch(`https://api.metehanstudio.xyz/api/euro?api_key=metehanfreekey`);
        const x2 = await fetch(`https://api.metehanstudio.xyz/api/dolar?api_key=metehanfreekey`);
        const data = await x.json();
        const data2 = await x2.json();
        const euro = data.euro;
        const dolar = data2.dolar;

        const embed = new EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: "Döviz 💸", iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`Aşağıda güncel döviz bilgilerini gönderdim!\n\nEuro: **${euro}**₺\nDolar: **${dolar}**₺`)

        interaction.reply({ 
            embeds: [embed]
        })
    }
}