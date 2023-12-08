import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Monster from 'App/Models/Monster';

export default class MonstersController {

    public async index({}: HttpContextContract)
    {
        const monsters = await Monster.query();
        return monsters
    }

    public async show({ params }: HttpContextContract)
    {
        try {
            const monster = await Monster.find(params.id);
            if(monster){
                return monster
            }
        } catch (error) {
            console.log(error)
        }
    }
}
