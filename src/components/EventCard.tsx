import { useState } from "react";
import { Calendar, MapPin, Users, Star, Settings, Heart } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { EventServicesModal } from "./EventServicesModal";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "online" | "in-person";
  attendees: number;
  category: string;
  image: string;
  tags: string[];
  isFeatured?: boolean;
  onViewDetails?: () => void;
}

export function EventCard({
  id,
  title,
  date,
  time,
  location,
  type,
  attendees,
  category,
  image,
  tags,
  isFeatured = false,
  onViewDetails,
}: EventCardProps) {
  const [showServices, setShowServices] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-gray-200">
        <div className="relative h-48 overflow-hidden cursor-pointer" onClick={onViewDetails}>
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isFeatured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] border-0 text-white">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3 flex gap-2">
            <Badge
              variant={type === "online" ? "secondary" : "default"}
              className={
                type === "online"
                  ? "bg-[#1D6FD8] text-white border-0"
                  : "bg-white text-gray-800 border-0"
              }
            >
              {type === "online" ? "Online" : "In-Person"}
            </Badge>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
            className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-5 h-5 ${
                isSaved ? "fill-[#FF7A33] text-[#FF7A33]" : "text-gray-600"
              }`}
            />
          </button>
        </div>
        <div className="p-3 md:p-5">
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <Badge variant="outline" className="text-[#FF7A33] border-[#FF7A33] text-xs">
              {category}
            </Badge>
          </div>
          <h3 
            className="mb-2 md:mb-3 line-clamp-2 group-hover:text-[#FF7A33] transition-colors cursor-pointer text-sm md:text-base"
            onClick={onViewDetails}
          >
            {title}
          </h3>
          <div className="space-y-1.5 md:space-y-2 text-gray-600 mb-3 md:mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#1D6FD8]" />
              <span className="text-xs md:text-sm">
                {date} • {time}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FF7A33]" />
              <span className="text-xs md:text-sm truncate">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500" />
              <span className="text-xs md:text-sm">{attendees} attendees</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setShowServices(true);
              }}
              variant="outline"
              className="flex-1 text-xs"
              size="sm"
            >
              <Settings className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="hidden md:inline">Event Services</span>
              <span className="md:hidden">Services</span>
            </Button>
            <Button
              onClick={onViewDetails}
              className="flex-1 bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] text-xs"
              size="sm"
            >
              View Details
            </Button>
          </div>
        </div>
      </Card>

      <EventServicesModal
        open={showServices}
        onOpenChange={setShowServices}
        eventTitle={title}
      />
    </>
  );
}
