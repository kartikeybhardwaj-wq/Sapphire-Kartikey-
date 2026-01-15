interface StepCardProps {
  step: number;
  title: string;
  children: React.ReactNode;
}

export const StepCard = ({ step, title, children }: StepCardProps) => {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
          {step}
        </div>
        <div className="w-0.5 flex-1 bg-border mt-4" />
      </div>
      <div className="pb-12">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{title}</h3>
        <div className="text-muted-foreground space-y-4">{children}</div>
      </div>
    </div>
  );
};
