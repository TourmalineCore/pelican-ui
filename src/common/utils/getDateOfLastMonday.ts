/* eslint-disable no-nested-ternary */
export function getLastMondayOfMonth({
  year,
  month,
}: {
  year: number;
  month: number;
}): string {
  const months = [
    `января`,
    `февраля`,
    `марта`,
    `апреля`,
    `мая`,
    `июня`,
    `июля`,
    `августа`,
    `сентября`,
    `октября`,
    `ноября`,
    `декабря`,
  ];

  const lastDay = new Date(year, month + 1, 0);
  const dayOfWeek = lastDay.getDay();
  const offset = dayOfWeek === 1 ? 0 : (dayOfWeek === 0 ? -6 : 1 - dayOfWeek);

  return `${lastDay.getDate() + offset} ${months[month]} зоопарк не работает`;
}
