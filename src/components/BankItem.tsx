"use client";

import React from "react";
import { Bank } from "../types/Bank";

interface BankItemProps {
  bank: Bank;
  onDelete: (bankName: string) => void;
}

const BankItem: React.FC<BankItemProps> = ({ bank, onDelete }) => {
  return (
    <li className="bank-item">
      <div className="bank-image-container">
        <img src={bank.url} alt={bank.bankName} className="bank-image" />
      </div>
      <div className="bank-info">
        <h2 className="bank-name">{bank.bankName}</h2>
        <p className="bank-description">{bank.description}</p>
        <p className="bank-age">Edad: {bank.age} años</p>
      </div>
      <button
        onClick={() => onDelete(bank.bankName)}
        className="delete-button2"
        aria-label="Eliminar banco"
      >
        <span className="delete-icon">X</span>
        <span className="delete-text">Eliminar</span>
      </button>
    </li>
  );
};

export default BankItem;
