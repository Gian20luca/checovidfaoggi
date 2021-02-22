export const applicaSeparatore = (numero: any) => {
  return String(numero).replace(/(.)(?=(\d{3})+$)/g, "$1.");
};
