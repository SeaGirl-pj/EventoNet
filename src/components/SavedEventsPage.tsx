import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { EventCard } from "./EventCard";
import {
  ArrowLeft,
  BookOpen,
  Heart,
  Calendar,
  MapPin,
  Clock,
  Users,
  X,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SavedEventsPageProps {
  onBack: () => void;
}

export function SavedEventsPage({ onBack }: SavedEventsPageProps) {
  const [savedEvents, setSavedEvents] = useState([
    {
      id: "1",
      title: "Tech Leaders Summit 2025",
      date: "Nov 20, 2025",
      time: "9:00 AM",
      location: "San Francisco Convention Center",
      type: "in-person" as const,
      attendees: 450,
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxNzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Leadership", "Innovation", "AI"],
      savedDate: "Nov 10, 2025",
      registered: true,
    },
    {
      id: "2",
      title: "Digital Marketing Masterclass",
      date: "Nov 22, 2025",
      time: "2:00 PM",
      location: "Online via Zoom",
      type: "online" as const,
      attendees: 320,
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzMTUwNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["SEO", "Content", "Strategy"],
      savedDate: "Nov 5, 2025",
      registered: false,
    },
    {
      id: "3",
      title: "Startup Networking Mixer",
      date: "Nov 25, 2025",
      time: "6:00 PM",
      location: "Downtown Tech Hub",
      type: "in-person" as const,
      attendees: 150,
      category: "Networking",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzYzMTc3Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Networking", "Startups", "Investment"],
      savedDate: "Nov 8, 2025",
      registered: false,
    },
    {
      id: "4",
      title: "AI & Machine Learning Workshop",
      date: "Dec 1, 2025",
      time: "10:00 AM",
      location: "Tech Hub Central",
      type: "in-person" as const,
      attendees: 280,
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MzEzNTA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["AI", "Python", "Deep Learning"],
      savedDate: "Nov 12, 2025",
      registered: true,
    },
    {
      id: "5",
      title: "Product Management Essentials",
      date: "Dec 5, 2025",
      time: "1:00 PM",
      location: "Online via Teams",
      type: "online" as const,
      attendees: 200,
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjMxNzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Product", "Strategy", "Leadership"],
      savedDate: "Nov 15, 2025",
      registered: false,
    },
    {
      id: "6",
      title: "Design Thinking Workshop",
      date: "Dec 8, 2025",
      time: "9:00 AM",
      location: "Creative Space Downtown",
      type: "in-person" as const,
      attendees: 100,
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjMxNzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Design", "UX", "Innovation"],
      savedDate: "Nov 3, 2025",
      registered: false,
    },
    {
      id: "7",
      title: "Leadership in Tech Summit",
      date: "Dec 12, 2025",
      time: "8:00 AM",
      location: "Convention Center",
      type: "in-person" as const,
      attendees: 500,
      category: "Leadership",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NjMxNzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Leadership", "Management", "Strategy"],
      savedDate: "Nov 1, 2025",
      registered: true,
    },
    {
      id: "8",
      title: "Blockchain & Web3 Meetup",
      date: "Dec 15, 2025",
      time: "7:00 PM",
      location: "Online via Discord",
      type: "online" as const,
      attendees: 250,
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWlufGVufDF8fHx8MTc2MzE3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Blockchain", "Web3", "Crypto"],
      savedDate: "Nov 14, 2025",
      registered: false,
    },
  ]);

  const handleRemove = (id: string) => {
    setSavedEvents(savedEvents.filter((event) => event.id !== id));
  };

  const registeredCount = savedEvents.filter((e) => e.registered).length;
  const upcomingCount = savedEvents.length;

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="mb-1">Saved Events</h1>
              <p className="text-gray-600">
                Events you're interested in attending
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#FF7A33]">{savedEvents.length}</div>
            <div className="text-sm text-gray-600">Saved Events</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#1D6FD8]">{registeredCount}</div>
            <div className="text-sm text-gray-600">Registered</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-green-600">{upcomingCount}</div>
            <div className="text-sm text-gray-600">Upcoming</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-purple-600">
              {savedEvents.filter((e) => e.type === "in-person").length}
            </div>
            <div className="text-sm text-gray-600">In-Person</div>
          </Card>
        </div>

        {/* Events Grid */}
        {savedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemove(event.id)}
                    className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  {event.registered && (
                    <Badge className="absolute top-2 left-2 bg-green-600 text-white border-0">
                      Registered
                    </Badge>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-[#FF7A33] text-white border-0">
                      {event.category}
                    </Badge>
                    <Badge className="bg-[#1D6FD8] text-white border-0">
                      {event.type === "online" ? "Online" : "In-Person"}
                    </Badge>
                  </div>

                  <h3 className="mb-3 line-clamp-2 group-hover:text-[#FF7A33] transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FF7A33]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1D6FD8]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    Saved on {event.savedDate}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                    {event.registered ? "View Details" : "Register Now"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="mb-2">No Saved Events</h3>
            <p className="text-gray-600 mb-6">
              Start saving events you're interested in to keep track of them here
            </p>
            <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
              Browse Events
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
