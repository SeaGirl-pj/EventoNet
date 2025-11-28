import { Sparkles } from "lucide-react";

interface AiEventFinderButtonProps {
  onNavigate?: (page: string) => void;
}

export default function AiEventFinderButton({ onNavigate }: AiEventFinderButtonProps) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate("ai-event-finder");
    } else {
      window.location.href = "/ai-event-finder";
    }
  };

  return (
    <button
      onClick={handleClick}
      className="ai-event-finder-btn"
      title="AI Event Finder"
    >
      <Sparkles className="w-6 h-6" />
    </button>
  );
}

