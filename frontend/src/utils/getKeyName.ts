const PATTERN = /\W+/g;

function getKeyName(name: string, index: number): string {
  return name.replace(PATTERN, '-').toLowerCase() + '-' + index;
}

export default getKeyName;
