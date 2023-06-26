import { Play } from "phosphor-react";

export function CardImageHover() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-hoverCardBlue bg-opacity-50 rounded-t-2xl cursor-pointer h-[180px]">
      <Play size={64} color="#ffffff" weight="fill" />
    </div>
  );
}
