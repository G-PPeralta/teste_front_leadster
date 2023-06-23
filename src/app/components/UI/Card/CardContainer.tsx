import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
}

export function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-3 md:gap-4 border-y-2 border-lineGrey md:p-10">
      {children}
    </div>
  );
}
