import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
}

export function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="grid grid-cols-3 gap-4 border-y-2 border-lineGrey p-10">
      {children}
    </div>
  );
}
