import React from "react";

export function Button({ children, variant = "default", onClick }) {
  const base = "p-2 mt-1 mb-1 mx-1 rounded-full transition-all duration-200 "; 
  const styles = {
    default: "text-white hover:bg-gray-200",
    ghost: "text-white", 
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
