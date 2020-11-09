
const groups = {
  0: '',
  1: 'k',
  2: 'm',
  3: 'bl',
  4: 't',
};

export default (initNum: number): string => {
  let group = 0;
  let lead = initNum;

  while (lead > 1000) {
    lead = Math.floor(lead / 1000);
    group += 1;
  }

  const num = initNum / (1000 ** group);

  let precision = 1;
  if (lead < 10) precision = 2;
  if (lead >= 100) precision = 0;

  const suffix = 'a';
  console.log(precision);
  return String(Math.round(num)) + suffix;
};
