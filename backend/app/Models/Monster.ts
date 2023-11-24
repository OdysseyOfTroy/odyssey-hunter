import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Monster extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'name_en' })
  public name: string

  @column({ columnName: 'ecology_en' })
  public ecology: string

  @column()
  public size: string

  @column({ columnName: 'pitfall_trap '})
  public pitfallTrap: boolean

  @column({ columnName: 'shock_trap '})
  public shockTrap: boolean

  @column({ columnName: 'vine_trap '})
  public vineTrap: boolean
}
