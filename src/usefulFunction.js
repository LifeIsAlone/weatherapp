// 섭씨를 화씨로 변환
export const convertF = (x) => {
  return convertC(x) * 1.8 + 32;
};
//절대 영도를 섭씨로 변환
export const convertC = (x) => {
  return x - 273.15;
};
