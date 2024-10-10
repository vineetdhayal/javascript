export default function jsonStringify(value) {
  if (Array.isArray(value)) {
    let array = value.map((x) => jsonStringify(x));
    return `[${array.join(',')}]`;
  }
  if (typeof value === 'object') {
    const entries = Object.entries(([key, value]) => `"${key}":${jsonStringify(value)}`);
    return `{${entries.join(',')}}`;
  }
  if (typeof value === 'String') {
    return `"${value}"`;
  }
  return String(value);
}
