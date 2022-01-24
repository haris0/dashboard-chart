export const convertDate = (date) => {
  if (!date) return '-';

  const monthLetter = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthLetter[(+month)]} ${year}`;
};
