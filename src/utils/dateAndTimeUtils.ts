/**
 * Returns date in french, with day month and year
 * @param {string} date // string date YYYY-MM-DD
 * @returns {string} // 3 décembre 2024
 */

export function displayFullDate(date: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const jsDate = new Date(date);
  return jsDate.toLocaleDateString('fr-FR', options as object);
}

/**
 * Returns date in french, with day month and year
 * @param {string} time // string time HH:MM:SS
 * @returns {string} // formatted time 17h30
 */
export function formatTime(time: string) {
  return time.replace(/(\d{2}):(\d{2}):\d{2}/, '$1h$2');
}

/**
 * Returns an object with abbreviated month in french and day
 * @param {string} date // string date YYYY-MM-DD
 * @returns {object} // an object {day: number, month: string}
 */

export function extractDayMonth(date: string) {
  const jsDate = new Date(date);
  const options = {
    month: 'short',
  };
  const shortMonth = jsDate
    .toLocaleDateString('fr-FR', options as object)
    .split('.')[0]
    .toUpperCase();
  const day = jsDate.getDate();
  return { day, month: shortMonth };
}
