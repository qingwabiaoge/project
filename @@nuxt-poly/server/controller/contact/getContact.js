const Contact = require('../../model/Contact');

// 获得产品列表
module.exports = async (ctx) => {



    try {

        const contact = await Contact.findOne()
        ctx.body = {
            code: 0,
            data: {
                contact
            }
        };
    }
    catch (err) {

        console.log(err)
        throw new Error(err)
    }
};
