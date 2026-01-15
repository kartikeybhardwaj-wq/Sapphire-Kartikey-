import { ReactNode } from "react";

interface ChapterSectionProps {
  chapter: number;
  title: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export const ChapterSection = ({ chapter, title, children, className = "", id }: ChapterSectionProps) => {
  return (
    <section id={id} className={`space-y-6 ${className}`}>
      <div className="flex items-center gap-3 pb-2 border-b border-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
          {chapter}
        </div>
        <h2 className="font-serif text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};
