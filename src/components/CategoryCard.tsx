interface CategoryCardProps {
  name: string;
  attributes: string[];
}

export const CategoryCard = ({ name, attributes }: CategoryCardProps) => {
  return (
    <div className="rounded-lg border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all">
      <h3 className="font-semibold text-foreground mb-3">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {attributes.map((attr, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-accent text-accent-foreground rounded-md hover:bg-primary/20 transition-colors cursor-default"
          >
            {attr}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3">{attributes.length} attributes</p>
    </div>
  );
};
