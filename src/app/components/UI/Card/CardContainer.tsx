import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
}

export function CardContainer({ children }: CardContainerProps) {
  return <div>{children}</div>;
}
