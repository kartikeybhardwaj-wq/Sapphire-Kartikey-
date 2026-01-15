import { useState } from "react";
import { Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface VideoTimestamp {
  time: string;
  seconds: number;
  title: string;
}

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  timestamps?: VideoTimestamp[];
}

export const YouTubeEmbed = ({ videoId, title = "YouTube video", timestamps = [] }: YouTubeEmbedProps) => {
  const [currentStartTime, setCurrentStartTime] = useState<number | null>(null);

  const handleTimestampClick = (seconds: number) => {
    setCurrentStartTime(seconds);
  };

  const videoSrc = currentStartTime !== null
    ? `https://www.youtube.com/embed/${videoId}?start=${currentStartTime}&autoplay=1`
    : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="space-y-3">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
        <iframe
          key={currentStartTime}
          src={videoSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
      
      {timestamps.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Jump to section:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {timestamps.map((ts, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs gap-1.5"
                onClick={() => handleTimestampClick(ts.seconds)}
              >
                <Play className="h-3 w-3" />
                <span className="font-mono">{ts.time}</span>
                <span className="text-muted-foreground">—</span>
                <span>{ts.title}</span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
