export function transformMarkedTable(tableData, columnConfig) {
  return tableData.reduce((result, current) => {
    const lineItems = columnConfig.map((item) => {
      if (item.func) {
        return item.func(current[item.column])
      }
      return current[item.column]
    })
    result.push(`| ${lineItems.join(' | ')} |`)
    return result
  }, [
      `| ${columnConfig.map((item) => item.name).join(' | ')} |`,
      `| ${columnConfig.map(() => '--------:').join(' | ')} |`,
    ])
}
