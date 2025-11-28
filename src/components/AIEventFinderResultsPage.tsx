import { useState } from "react";
import { EventCard } from "./EventCard";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, Sparkles, Brain } from "lucide-react";

interface AIEventFinderResultsPageProps {
  onBack?: () => void;
  onNavigate?: (page: string, eventId?: string) => void;
}

export function AIEventFinderResultsPage({ onBack, onNavigate }: AIEventFinderResultsPageProps) {
  // Mock user preferences - in a real app, this would come from user profile/signup data
  const userPreferences = {
    eventCategories: ["Networking", "Business & Entrepreneurship", "Technology & Innovation", "Workshops"],
    preferredEventStyles: ["Professional / Formal", "Educational", "Networking-focused"],
    eventGoals: ["Expanding professional network", "Learning new skills", "Career/business development"],
    location: "San Francisco Bay Area",
  };

  // Generate AI-recommended events based on user preferences
  const aiRecommendedEvents = [
    {
      id: "ai-1",
      title: "Tech Leadership & Networking Summit 2025",
      date: "Nov 28, 2025",
      time: "9:00 AM",
      location: "Silicon Valley Conference Center, San Francisco, CA",
      type: "in-person" as const,
      attendees: 420,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1080&q=80",
      tags: ["Leadership", "Networking", "Tech Industry"],
      isFeatured: true,
    },
    {
      id: "ai-2",
      title: "Business Strategy & Entrepreneurship Masterclass",
      date: "Dec 3, 2025",
      time: "10:00 AM",
      location: "Stanford University, Palo Alto, CA",
      type: "in-person" as const,
      attendees: 280,
      category: "Business & Entrepreneurship",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&q=80",
      tags: ["Business Strategy", "Startups", "Entrepreneurship"],
      isFeatured: true,
    },
    {
      id: "ai-3",
      title: "AI Innovation Workshop: Building the Future",
      date: "Dec 6, 2025",
      time: "2:00 PM",
      location: "Google Campus, Mountain View, CA",
      type: "in-person" as const,
      attendees: 350,
      category: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1080&q=80",
      tags: ["Artificial Intelligence", "Innovation", "Technology"],
      isFeatured: true,
    },
    {
      id: "ai-4",
      title: "Professional Networking Mixer: Tech & Business Leaders",
      date: "Dec 8, 2025",
      time: "6:00 PM",
      location: "WeWork Downtown, San Francisco, CA",
      type: "in-person" as const,
      attendees: 195,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1080&q=80",
      tags: ["Networking", "Professional Development", "Connections"],
    },
    {
      id: "ai-5",
      title: "Advanced Leadership Skills Workshop",
      date: "Dec 11, 2025",
      time: "9:30 AM",
      location: "Online via Zoom",
      type: "online" as const,
      attendees: 450,
      category: "Workshops",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080&q=80",
      tags: ["Leadership", "Career Growth", "Workshop"],
    },
    {
      id: "ai-6",
      title: "Startup Founders & Investors Meetup",
      date: "Dec 14, 2025",
      time: "5:30 PM",
      location: "Y Combinator, San Francisco, CA",
      type: "in-person" as const,
      attendees: 150,
      category: "Business & Entrepreneurship",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&q=80",
      tags: ["Startups", "Venture Capital", "Pitching"],
    },
    {
      id: "ai-7",
      title: "Blockchain & Web3 Innovation Conference",
      date: "Dec 17, 2025",
      time: "11:00 AM",
      location: "Moscone Center, San Francisco, CA",
      type: "in-person" as const,
      attendees: 520,
      category: "Technology & Innovation",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1080&q=80",
      tags: ["Blockchain", "Web3", "Innovation"],
      isFeatured: true,
    },
    {
      id: "ai-8",
      title: "Data Science & Machine Learning Workshop",
      date: "Dec 19, 2025",
      time: "1:00 PM",
      location: "UC Berkeley Extension, Berkeley, CA",
      type: "in-person" as const,
      attendees: 240,
      category: "Workshops",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80",
      tags: ["Data Science", "Machine Learning", "Workshop"],
    },
  ];

  const handleViewEvent = (eventId: string) => {
    if (onNavigate) {
      onNavigate("event-detail", eventId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Header */}
        <div className="mb-4 md:mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 text-xs md:text-sm"
            size="sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
            Back
          </Button>

          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">
                AI Event Finder
              </h1>
              <p className="text-gray-600 text-xs md:text-sm">
                Personalized recommendations based on your interests
              </p>
            </div>
          </div>

          {/* AI Generated Badge */}
          <Card className="p-3 md:p-4 mb-6 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <Badge className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white border-0 text-xs">
                    AI Generated
                  </Badge>
                </div>
                <p className="text-xs md:text-sm text-gray-700">
                  These events are intelligently matched to your preferences:{" "}
                  <span className="font-medium">
                    {userPreferences.eventCategories.slice(0, 3).join(", ")}
                  </span>
                  {userPreferences.eventCategories.length > 3 && " and more"}
                </p>
              </div>
            </div>
          </Card>

          {/* User Preferences Summary */}
          <div className="mb-6">
            <p className="text-xs md:text-sm text-gray-600 mb-2">
              Based on your interests:
            </p>
            <div className="flex flex-wrap gap-2">
              {userPreferences.eventCategories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="text-[#FF7A33] border-[#FF7A33] text-xs"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div>
          <h2 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg font-semibold">
            Recommended Events ({aiRecommendedEvents.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {aiRecommendedEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onViewDetails={() => handleViewEvent(event.id)}
              />
            ))}
          </div>
        </div>

        {/* Empty State (if no events) */}
        {aiRecommendedEvents.length === 0 && (
          <Card className="p-8 md:p-12 text-center">
            <Brain className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-base md:text-lg font-semibold mb-2">
              No recommendations yet
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Update your preferences to get personalized event recommendations
            </p>
            <Button
              onClick={() => onNavigate?.("profile-details")}
              className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
            >
              Update Preferences
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}

