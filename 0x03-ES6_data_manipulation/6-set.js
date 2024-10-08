export default function setFromArray(set) {
  return `Set { ${Array.from(set).join(', ')} }`;
}
