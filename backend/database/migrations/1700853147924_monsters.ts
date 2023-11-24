import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'monsters'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name_en')
      table.string('ecology_en')
      table.enum('size', ['small', 'large'], {
        useNative: true,
        enumName: 'monster_size',
        existingType: false,
      })
      table.boolean('pitfall_trap')
      table.boolean('shock_trap')
      table.boolean('vine_trap')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
