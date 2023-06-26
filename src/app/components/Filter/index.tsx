import clsx from "clsx";

interface FilterProps {
  onHandleFilter: (value: string) => void;
  filterType: string;
}

export function Filter({ onHandleFilter, filterType }: FilterProps) {
  const filterValues = [
    "Agências",
    "Chatbot",
    "Marketing Digital",
    "Geração de Leads",
    "Mídia Paga",
  ];

  return (
    <div className="flex flex-row flex-wrap gap-4 pb-8">
      {filterValues.map((filterValue) => (
        <button
          className={clsx(
            "flex flex-row items-center justify-center  text-filterText font-semibold border-2 border-filterBorder rounded-full p-2 w-40  hover:text-filterTextHover hover:border-filterBorderHover hover:border-2",
            {
              "bg-filterHoverBackground border-filterHoverBackground border-2 text-white hover:text-white":
                filterType === filterValue,
            }
          )}
          key={filterValue}
          onClick={() => onHandleFilter(filterValue)}
        >
          {filterValue}
        </button>
      ))}
    </div>
  );
}
