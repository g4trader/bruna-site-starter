interface YouTubeEmbedProps {
  url: string;
  title?: string;
  startAt?: number;
}

export default function YouTubeEmbed({ url, title, startAt }: YouTubeEmbedProps) {
  // Extract video ID from various YouTube URL formats
  const getVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/live\/)([^&\n?#]+)/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getVideoId(url);
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}${startAt ? `?start=${startAt}` : ""}`;

  return (
    <div className="space-y-2">
      <div className="aspect-video rounded-xl overflow-hidden border border-brand-gold/20 bg-black">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title || "YouTube video"}
        />
      </div>
      {title && <p className="text-sm text-brand-ink">{title}</p>}
    </div>
  );
}

