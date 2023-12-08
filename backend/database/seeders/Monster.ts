import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Monster from 'App/Models/Monster'

export default class extends BaseSeeder {
  public async run () {
    await Monster.createMany([
      {
        name: 'Furious Rajang',
        ecology: 'Fanged Beast',
        size: 'large',
        pitfallTrap: true,
        shockTrap: true,
        vineTrap: true,
      },
      {
        name: 'Raging Brachydios',
        ecology: 'Brute Wyvern',
        size: 'large',
        pitfallTrap: true,
        shockTrap: true,
        vineTrap: true,
      },
      {
        name: 'Ruiner Nergigante',
        ecology: 'Elder Dragon',
        size: 'large',
        pitfallTrap: false,
        shockTrap: false,
        vineTrap: false,
      },
      {
        name: 'Zinogre',
        ecology: 'Fanged Wyvern',
        size: 'large',
        pitfallTrap: true,
        shockTrap: true,
        vineTrap: true,
      },
      {
        name: 'Barioth',
        ecology: 'Flying Wyvern',
        size: 'large',
        pitfallTrap: true,
        shockTrap: true,
        vineTrap: true,
      },
    ])
  }
}
