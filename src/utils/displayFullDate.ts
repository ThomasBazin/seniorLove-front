export default function displayFullDate(date: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const jsDate = new Date(date);
  return jsDate.toLocaleDateString('fr-FR', options as object);
}
