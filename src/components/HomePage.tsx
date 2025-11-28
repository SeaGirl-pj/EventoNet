import { EventCard } from "./EventCard";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Sparkles,
  TrendingUp,
  Calendar,
  Search,
  Users,
  Star,
  ArrowRight,
  Zap,
  Target,
  Award,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const recommendedEvents = [
    {
      id: "1",
      title: "Global Tech Innovation Summit 2025",
      date: "Nov 20, 2025",
      time: "9:00 AM",
      location: "San Francisco Convention Center, CA",
      type: "in-person" as const,
      attendees: 450,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080&q=80",
      tags: ["Innovation", "AI", "Leadership"],
      isFeatured: true,
    },
    {
      id: "2",
      title: "Advanced Digital Marketing Bootcamp",
      date: "Nov 22, 2025",
      time: "2:00 PM",
      location: "Online via Zoom",
      type: "online" as const,
      attendees: 320,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80",
      tags: ["SEO", "Content Marketing", "Analytics"],
    },
    {
      id: "3",
      title: "Startup Founders & Investors Mixer",
      date: "Nov 25, 2025",
      time: "6:00 PM",
      location: "WeWork Downtown, New York",
      type: "in-person" as const,
      attendees: 180,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1080&q=80",
      tags: ["Startups", "Venture Capital", "Pitching"],
    },
  ];

  const trendingEvents = [
    {
      id: "4",
      title: "Deep Learning & Neural Networks Workshop",
      date: "Dec 1, 2025",
      time: "10:00 AM",
      location: "MIT Campus, Cambridge, MA",
      type: "in-person" as const,
      attendees: 280,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1080&q=80",
      tags: ["Machine Learning", "Python", "TensorFlow"],
      isFeatured: true,
    },
    {
      id: "5",
      title: "Contemporary Art & Design Exhibition",
      date: "Dec 5, 2025",
      time: "7:00 PM",
      location: "MoMA Gallery, Manhattan",
      type: "in-person" as const,
      attendees: 150,
      category: "Creative",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1080&q=80",
      tags: ["Modern Art", "Design", "Gallery"],
    },
  ];

  const quickActions = [
    {
      icon: Search,
      title: "Explore Events",
      description: "Browse all upcoming events",
      color: "from-[#FF7A33] to-[#FF9966]",
      action: () => onNavigate("events"),
    },
    {
      icon: Sparkles,
      title: "AI Event Finder",
      description: "Get personalized recommendations",
      color: "from-[#1D6FD8] to-[#4A8FE7]",
      action: () => onNavigate("events"),
    },
    {
      icon: Users,
      title: "Find Connections",
      description: "Meet like-minded professionals",
      color: "from-purple-500 to-purple-700",
      action: () => onNavigate("profile"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-6 md:mb-10">
          <h2 className="mb-3 md:mb-6 text-lg md:text-xl">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card
                  key={index}
                  className="p-3 md:p-6 cursor-pointer hover:shadow-lg transition-all group border-gray-200"
                  onClick={action.action}
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-sm md:text-base group-hover:text-[#FF7A33] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">{action.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AI Insights Banner */}
        <Card className="mb-6 md:mb-10 p-3 md:p-6 bg-gradient-to-r from-[#1D6FD8]/5 to-[#FF7A33]/5 border-[#FF7A33]/20">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm md:text-base">AI Insight</h3>
                <Badge className="bg-[#FF7A33] text-white border-0 text-xs">New</Badge>
              </div>
              <p className="text-gray-700 mb-3 text-xs md:text-sm">
                Based on your profile, you're most active on weekdays and prefer
                technology events. We found 3 upcoming tech workshops that match your
                interests in AI and leadership!
              </p>
              <Button
                onClick={() => onNavigate("events")}
                className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] py-2 px-4 md:py-2 md:px-4 text-xs md:text-sm"
                size="sm"
              >
                View Recommendations
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Recommended Events */}
        <div className="mb-6 md:mb-10">
          <div className="flex items-center justify-between mb-3 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3">
              <Target className="w-5 h-5 md:w-6 md:h-6 text-[#FF7A33]" />
              <h2 className="text-lg md:text-xl">Recommended For You</h2>
            </div>
            <Button variant="ghost" onClick={() => onNavigate("events")} size="sm" className="text-xs md:text-sm">
              See All
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {recommendedEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onViewDetails={() => onNavigate("event-detail")}
              />
            ))}
          </div>
        </div>

        {/* Trending Events */}
        <div>
          <div className="flex items-center justify-between mb-3 md:mb-6">
            <div className="flex items-center gap-2 md:gap-3">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#1D6FD8]" />
              <h2 className="text-lg md:text-xl">Trending Events</h2>
            </div>
            <Button variant="ghost" onClick={() => onNavigate("events")} size="sm" className="text-xs md:text-sm">
              See All
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {trendingEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onViewDetails={() => onNavigate("event-detail")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

