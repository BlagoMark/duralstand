export const required = (value) => {
  if (value) return undefined;
  return "Это поле обязательно для заполнения";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Превышен лимит символов: ${maxLength}`;
  return undefined;
};
