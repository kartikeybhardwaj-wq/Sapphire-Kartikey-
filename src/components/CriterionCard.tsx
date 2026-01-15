import { WeightBadge } from "./WeightBadge";
interface CriterionCardProps {
  item: number;
  weight: number;
  criterion: string;
}
export const CriterionCard = ({
  item,
  weight,
  criterion
}: CriterionCardProps) => {
  return <div className="flex gap-4 p-4 rounded-lg border border-border bg-card transition-colors hover:shadow-sm hover:border-primary/30">
      <div className="flex flex-col items-center gap-2 flex-shrink-0">
        <span className="text-xs font-medium text-black">#{item}</span>
        <WeightBadge weight={weight} />
      </div>
      <p className="text-sm text-foreground leading-relaxed">{criterion}</p>
    </div>;
};