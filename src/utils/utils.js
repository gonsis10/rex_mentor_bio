export function getValueByPartialKey(row, keyword) {
    for (const key in row) {
      if (key.includes(keyword)) {
        return row[key];
      }
    }
    return null;
  }
  