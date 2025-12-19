import React from "react";

export function Button({ children, variant = "default", onClick }) {
  const base = "p-1.5 mb-1 mx-1 rounded transition-all duration-200 text-white"; 
  const styles = {
    default: "",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function Card({ children }) {
  return <div className="bg-white shadow-lg rounded-2xl p-6">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
