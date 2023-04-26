import { Asset } from '@chain-registry/types';
export const getShuffledArr = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  return arr;
};
export const allTokens = (arr: Asset[]) => {
  return arr.map(({ name, logo_URIs }) => ({
    name: name,
    imgSrc: logo_URIs.png,
  }));
};
// export const poolOptionToken1 = getShuffledArr([...(allTokens as any)]);
// export const poolOptionToken2 = getShuffledArr([...(allTokens as any)]).filter(
//   (v, i) => v !== poolOptionToken1[i],
// );
export const getRandomId = getShuffledArr([...Array(500)].map((v, i) => (v = i + 1))).slice(0, 4);
// export const getRandomPoolLiquidity = [...Array(4)].fill(undefined).map((_) => {
//   return parseInt(getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().replaceAll(',', ''));
// });
// export const getRandomMyLiquidity = [...Array(4)].fill(undefined).map((_) => {
//   return parseInt(
//     getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().slice(0, 5).replaceAll(',', ''),
//   );
// });
// export const getRandomAPR = [...Array(4)].fill(undefined).map((_) => {
//   return (
//     parseInt(
//       getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().slice(0, 7).replaceAll(',', ''),
//     ) / 100
//   );
// });
// export const getDefaultData = [...Array(4)].fill(undefined).map((_, i) => ({
//   id: getRandomId[i],
//   token1: poolOptionToken1[i],
//   token2: poolOptionToken2[i],
//   poolLiquidity: getRandomPoolLiquidity[i],
//   apr: getRandomAPR[i],
//   myLiquidity: getRandomMyLiquidity[i],
//   myBoundedAmount: getRandomMyLiquidity[i],
//   longestDaysUnbonding: Math.random() < 0.5,
// }));

export function generateUniqueId(): string {
  const randomId = Math.random().toString(36).substring(2);
  const timestamp = Date.now().toString(36);
  return `${randomId}${timestamp}`;
}

export function getRandomPoolLiquidity(): number {
  return parseInt(getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().replaceAll(',', ''));
}

export function getRandomAPR(): number {
  return (
    parseInt(
      getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().slice(0, 7).replaceAll(',', ''),
    ) / 100
  );
}

export function generateMyLiquidity() {
  return parseInt(
    getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().slice(0, 5).replaceAll(',', ''),
  );
}

export const getRandomIdInit = getShuffledArr([...Array(500)].map((v, i) => (v = i + 1))).slice(
  0,
  4,
);
export const getRandomPoolLiquidityInit = [...Array(4)].fill(undefined).map((_) => {
  return parseInt(getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().replaceAll(',', ''));
});
export const getRandomMyLiquidityInit = [...Array(4)].fill(undefined).map((_) => {
  return parseInt(
    getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().slice(0, 5).replaceAll(',', ''),
  );
});
export const getRandomAPRInit = [...Array(4)].fill(undefined).map((_) => {
  return (
    parseInt(
      getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).toString().slice(0, 7).replaceAll(',', ''),
    ) / 100
  );
});
