import create from 'zustand';
import { Bank } from '../types/Bank';

interface BankStore {
  banks: Bank[];
  setBanks: (banks: Bank[]) => void;
  deleteBank: (bankName: string) => void;
  searchBanks: (query: string) => Bank[];
}

//CREACION E INICIALIZACION DEL STORE
export const useBankStore = create<BankStore>((set, get) => ({
  banks: [],
  setBanks: (banks) => set({ banks }),
  deleteBank: (bankName) => set((state) => ({
    banks: state.banks.filter((bank) => bank.bankName !== bankName)
  })),
  searchBanks: (query) => {
    const { banks } = get();
    return banks.filter((bank) => 
      bank.bankName.toLowerCase().includes(query.toLowerCase())
    );
  },
}));