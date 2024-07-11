import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de Bancos",
  description: "Una aplicación para mostrar y gestionar una lista de bancos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
