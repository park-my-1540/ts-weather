export function isEmpty(value: unknown): boolean {
  if (value == null) return true;            // null 또는 undefined
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;  // 객체 또는 배열이 비어있는지 확인
  }
  if (typeof value === 'string') {
    return value.trim().length === 0;        // 빈 문자열 확인
  }
  return false;
}

export function currentDate(): string {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  return `${month}.${day}.${year}`
}