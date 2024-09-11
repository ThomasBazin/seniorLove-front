/**
 * Compute age, returns age
 * @param {string} birthDate // string date YYYY-MM-DD
 */

export default function computeAge(birthDate: string) {
  const now = new Date().getTime();
  return Math.floor((now - new Date(birthDate).getTime()) / 3.15576e10);
}
