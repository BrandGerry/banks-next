import { Bank } from '../types/Bank';

//FUNCION PARA ORDENAR LOS BANKS ALFABETICAMENTE
export const sortBanks = (banks: Bank[]): Bank[] => {
  return [...banks].sort((a, b) => a.bankName.localeCompare(b.bankName));
};