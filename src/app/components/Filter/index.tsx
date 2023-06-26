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
    <div className="flex flex-row flex-wrap justify-between pb-8 w-full max-w-7xl mx-auto gap-4">
      <div className="flex flex-wrap flex-row items-center gap-4">
        {filterValues.map((filterValue) => (
          <button
            className={clsx(
              "flex flex-row items-center justify-center text-filterText font-semibold border-2 border-filterBorder rounded-full p-2 w-40 hover:text-filterTextHover hover:border-filterBorderHover hover:border-2",
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
      <div className="flex flex-row items-center gap-4">
        <span className="text-filterText font-bold">Ordenar por</span>

        <select
          id="publicationDate"
          name="publicationDate"
          className="custom-select flex items-center border-2 border-filterBorder rounded-2xl p-2 bg-white w-48"
        >
          <option className="bg-white font-semibold text-filterText rounded-2xl">
            Data de Publicação
          </option>
        </select>
      </div>
    </div>
  );
}
