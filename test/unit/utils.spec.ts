import test from 'ava'
import * as utils from '../../src/utils'

const schemaConfig = [{
  column: 'table_name',
  name: '表名',
  func: (tableName) => {
    return `[${tableName}](#${tableName})`
  },
}, {
  column: 'table_comment',
  name: '描述',
}, {
  column: 'engine',
  name: '存储引擎',
}]

const mockSchema = [{
  table_name: 'tb_mock',
  table_comment: 'mock',
  engine: 'InnoDB',
}]

test('utils.ts', (t) => {
  const markdLines = utils.transformMarkedTable(mockSchema, schemaConfig)
  t.is(markdLines.length, mockSchema.length + 2)
  console.log(markdLines)
  t.pass()
})
