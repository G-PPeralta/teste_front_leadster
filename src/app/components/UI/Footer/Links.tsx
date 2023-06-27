interface LinksProps {
  title: string;
  info: {
    id: number;
    description: string;
    path: string;
  }[];
}

export function Links({ title, info }: LinksProps) {
  return (
    <div className="flex flex-col md:w-1/4">
      <h2 className="font-semibold text-linkTitleSection p-4 md:pb-8">
        {title}
      </h2>
      <nav className="flex flex-col gap-2">
        {info.map((item) => (
          <a
            className="text-zinc-500 hover:text-zinc-400 font-semibold"
            href={item.path}
            key={item.id}
          >
            {item.description}
          </a>
        ))}
      </nav>
    </div>
  );
}
