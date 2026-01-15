import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PageHeader = ({ icon: Icon, title, description }: PageHeaderProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-16 md:py-20">
      {/* Subtle dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 backdrop-blur-sm">
              <Icon className="h-6 w-6" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
