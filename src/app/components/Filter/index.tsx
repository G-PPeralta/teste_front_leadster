export function Filter() {
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
          className="flex flex-row items-center justify-center bg-white text-filterText border font-semibold boder-2 border-filterBorder rounded-full p-2 w-40  hover:text-filterTextHover hover:border-filterBorderHover hover:border-2"
          key={filterValue}
        >
          {filterValue}
        </button>
      ))}
    </div>
  );
}
