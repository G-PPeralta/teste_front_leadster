import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
}

export function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="flex flex-row flex-wrap w-full  items-center justify-center max-w-7xl gap-4 p-4 border-y-2 border-lineGrey md:p-10">
      {children}
    </div>
  );
}
