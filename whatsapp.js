exports.action = (data)=>{const wbm = require('wbm');

// appel via un autre plug
//JarvisIARun(['whatsapp','data.whatsappNumber="3300000000",data.whatsappText="test 123"'])

wbm.start().then(async () => {
    const phones = [data.whatsappNumber];
    const message = data.whatsappText;
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));
}