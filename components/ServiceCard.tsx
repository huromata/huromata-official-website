type ServiceCardProps = {
  title: string;
  description: string;
  items?: string[];
  variant?: "default" | "featured";
};

export default function ServiceCard({
  title,
  description,
  items = [],
  variant = "default"
}: ServiceCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group rounded-2xl border p-8 transition-all duration-200 hover:shadow-md ${
        isFeatured
          ? "border-black bg-black text-white"
          : "border-zinc-200 bg-white hover:border-zinc-400"
      }`}
    >
      <h3
        className={`text-xl font-bold tracking-tight ${
          isFeatured ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          isFeatured ? "text-zinc-300" : "text-zinc-500"
        }`}
      >
        {description}
      </p>

      {items.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isFeatured ? "bg-zinc-400" : "bg-black"
                }`}
                aria-hidden="true"
              />
              <span
                className={`text-sm font-medium ${
                  isFeatured ? "text-zinc-200" : "text-zinc-700"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
