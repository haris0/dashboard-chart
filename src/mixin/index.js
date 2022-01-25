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

export const getConversionItem = (datas) => {
  const conversionMap = new Map();
  datas.forEach((data) => {
    if (conversionMap.has(data.conversion_item)) {
      conversionMap.set(
        data.conversion_item,
        conversionMap.get(data.conversion_item) + (+data.conversion_revenue),
      );
    } else {
      conversionMap.set(data.conversion_item, +data.conversion_revenue);
    }
  });

  const conversionItem = Array.from(conversionMap.keys());
  const conversionRevenue = Array.from(conversionMap.values());

  return { conversionItem, conversionRevenue };
};

export const getUsers = (datas) => {
  const usersMap = new Map();
  datas.forEach((data) => {
    if (usersMap.has(data.conversion_item)) {
      usersMap.set(
        data.conversion_item,
        usersMap.get(data.conversion_item) + 1,
      );
    } else {
      usersMap.set(data.conversion_item, 1);
    }
  });

  const usersName = Array.from(usersMap.keys());
  const usersCount = Array.from(usersMap.values());

  return { usersName, usersCount };
};
