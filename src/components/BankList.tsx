"use client";

import React, { useState, useEffect } from "react";
//COMPONENTES
import BankItem from "./BankItem";
import SearchBar from "./SearchBar";
//FUNCIONES
import { useBankStore } from "../store/bankStore";
import { sortBanks } from "../utils/sortBanks";

const BankList: React.FC = () => {
  const { banks, setBanks, deleteBank, searchBanks } = useBankStore();
  const [sortedBanks, setSortedBanks] = useState(banks);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //PETICION FETCH Y GUARDAR EN EL STORE DEL ESTADO
    const fetchBanks = async () => {
      const response = await fetch("/api/banks");
      const data = await response.json();
      setBanks(data);
    };

    if (banks.length === 0) {
      fetchBanks();
    }
  }, [banks, setBanks]);

  //ACTUALIZAR LA LISTA Y ORDENARLA DEPENDE DEL QUERY
  useEffect(() => {
    const sorted = sortBanks(searchQuery ? searchBanks(searchQuery) : banks);
    setSortedBanks(sorted);
  }, [banks, searchQuery, searchBanks]);

  //FUNCION ELIMINAR PASANDOLE EL NOMBRE AL STORE
  const handleDelete = (bankName: string) => {
    deleteBank(bankName);
  };

  //FUNCION BUSCAR
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="bank-list-container">
      <SearchBar onSearch={handleSearch} />
      <ul className="bank-list">
        {sortedBanks.map((bank) => (
          <BankItem key={bank.bankName} bank={bank} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default BankList;
