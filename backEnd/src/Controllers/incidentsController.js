const connection = require('../database/connection');


module.exports ={

    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization

        await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({ title });
    },

    async getIncidents(req, resp){

        const ong_id = req.headers.authorization
        const incidents = await connection('incidents').select('*').where('ong_id', ong_id);
        return resp.json(incidents);
    },

    async deleteIncidents(req, res){
        
        const { id } = req.params;
        const ong_id = req.headers.authorization;
        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        console.log(incident);

        if(incident.ong_id != ong_id){
            return res.status(401).json({ error: 'Operation not permitted' })
        }

        await connection('incidents').where('id', id).delete();
        return res.status(200).json({ msg: 'Register deleted' });
    }


}