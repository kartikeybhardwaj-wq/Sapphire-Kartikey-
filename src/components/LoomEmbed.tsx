interface LoomEmbedProps {
  videoId: string;
  title?: string;
}

export const LoomEmbed = ({ videoId, title = "Loom video" }: LoomEmbedProps) => {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-sm my-4">
      <iframe
        src={`https://www.loom.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};
