export const schemaConfig = [{
  column: 'table_name',
  name: '表名',
  func: (tableName) => {
    return `[${tableName}](#${tableName})`
    // `[${tableName}](#id-${docName}-${tableName})`
  },
}, {
  column: 'table_comment',
  name: '描述',
}, {
  column: 'engine',
  name: '存储引擎',
}]

export const columnConfig = [{
  column: 'column_name',
  name: '列名',
}, {
  column: 'column_comment',
  name: '描述',
}, {
  column: 'column_type',
  name: '类型',
}, {
  column: 'is_nullable',
  name: '允许为空',
}, {
  column: 'column_key',
  name: '键类型',
}, {
  column: 'column_default',
  name: '默认值',
}, {
  column: 'extra',
  name: '额外属性',
}]

export const indexConfig = [{
  column: 'index_name',
  name: '索引名称',
}, {
  column: 'seq_in_index',
  name: '键位置',
}, {
  column: 'column_name',
  name: '列名',
}, {
  column: 'non_unique',
  name: '是否唯一',
}, {
  column: 'cardinality',
  name: '基数',
}]
