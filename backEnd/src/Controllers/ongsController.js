const connection = require('../database/connection');
const crypto = require('crypto');


module.exports ={

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id, name});
    },

    async getOngs(req, resp){
        const ongs = await connection('ongs').select('*');
        return resp.json(ongs);
    },


}