import test from 'ava'
import * as utils from '../../src/utils'
import * as makerConfig from '../../src/config'

import * as mockDb from '../mock/table'

const tableConfig = makerConfig.schemaConfig

const mockDataList = mockDb.schemaData

test('utils.ts', (t) => {
  const tableLines = utils.transformMarkedTable(mockDataList, tableConfig)
  t.is(tableLines.length, mockDataList.length + 2)
  console.log(tableLines.join('\n'))
  t.pass()
})
