import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { EventCard } from "./EventCard";
import { EventServicesModal } from "./EventServicesModal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Share2,
  Heart,
  Settings,
  Bookmark,
  ExternalLink,
  Image as ImageIcon,
} from "lucide-react";

interface EventDetailPageProps {
  onBack: () => void;
  onViewEvent?: (id: string) => void;
  onNavigateToPosts?: () => void;
}

export function EventDetailPage({ onBack, onViewEvent, onNavigateToPosts }: EventDetailPageProps) {
  const [showServices, setShowServices] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const event = {
    title: "Tech Leaders Summit 2025",
    date: "November 20, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center",
    address: "747 Howard St, San Francisco, CA 94103",
    type: "in-person" as const,
    attendees: 450,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1592758080692-b6a5dbe9c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxNzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Leadership", "Innovation", "AI", "Networking"],
    description:
      "Join us for the premier technology leadership summit of the year. Connect with industry leaders, learn from expert speakers, and discover the latest innovations shaping the future of technology. This full-day event features keynote presentations, panel discussions, networking sessions, and hands-on workshops.",
  };

  const speakers = [
    {
      id: "1",
      name: "Sarah Chen",
      role: "CEO, TechVision Inc",
      topic: "The Future of AI in Business",
      avatar: "SC",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NjMyMDU2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      role: "CTO, Innovation Labs",
      topic: "Building Scalable Tech Teams",
      avatar: "MR",
    },
    {
      id: "3",
      name: "Emily Watson",
      role: "VP Engineering, CloudTech",
      topic: "Leadership in Remote-First Companies",
      avatar: "EW",
    },
    {
      id: "4",
      name: "David Kim",
      role: "Founder, StartupAccelerator",
      topic: "From Zero to IPO: A Tech Journey",
      avatar: "DK",
    },
  ];

  const schedule = [
    {
      time: "9:00 AM - 9:30 AM",
      title: "Registration & Networking Breakfast",
      description: "Check in and connect with fellow attendees",
    },
    {
      time: "9:30 AM - 10:30 AM",
      title: "Opening Keynote: The Future of AI in Business",
      description: "Sarah Chen, CEO of TechVision Inc",
      speaker: "Sarah Chen",
    },
    {
      time: "10:45 AM - 12:00 PM",
      title: "Panel Discussion: Building Scalable Tech Teams",
      description: "Featuring industry leaders from top tech companies",
    },
    {
      time: "12:00 PM - 1:30 PM",
      title: "Networking Lunch",
      description: "Catered lunch with networking opportunities",
    },
    {
      time: "1:30 PM - 2:30 PM",
      title: "Workshop: Leadership in Remote-First Companies",
      description: "Interactive session with Emily Watson",
      speaker: "Emily Watson",
    },
    {
      time: "2:45 PM - 3:45 PM",
      title: "Fireside Chat: From Zero to IPO",
      description: "David Kim shares his entrepreneurial journey",
      speaker: "David Kim",
    },
    {
      time: "4:00 PM - 5:30 PM",
      title: "Breakout Sessions & Networking",
      description: "Choose from multiple topic-specific sessions",
    },
    {
      time: "5:30 PM - 6:00 PM",
      title: "Closing Remarks & Networking Reception",
      description: "Wrap up and final networking opportunity",
    },
  ];

  const similarEvents = [
    {
      id: "2",
      title: "Digital Marketing Masterclass",
      date: "Nov 22, 2025",
      time: "2:00 PM",
      location: "Online via Zoom",
      type: "online" as const,
      attendees: 320,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzMTUwNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["SEO", "Content", "Strategy"],
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
      image: "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MzEzNTA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["AI", "Python", "Deep Learning"],
      isFeatured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="absolute top-3 md:top-6 left-3 md:left-6 bg-white/90 hover:bg-white text-xs md:text-sm"
          size="sm"
        >
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
          Back to Events
        </Button>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              <Badge className="bg-[#FF7A33] text-white border-0 text-xs">
                {event.category}
              </Badge>
              <Badge className="bg-[#1D6FD8] text-white border-0 text-xs">
                {event.type === "online" ? "Online" : "In-Person"}
              </Badge>
              <Badge className="bg-white/20 text-white border-0 backdrop-blur text-xs">
                {event.attendees} attendees
              </Badge>
            </div>
            <h1 className="text-white mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl">{event.title}</h1>
            <div className="flex flex-wrap gap-3 md:gap-6 text-white/90 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 md:space-y-8">
            {/* Description */}
            <Card className="p-3 md:p-6">
              <h2 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg">About This Event</h2>
              <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-xs md:text-sm">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {event.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-[#1D6FD8] border-[#1D6FD8] text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Speakers */}
            <Card className="p-3 md:p-6">
              <h2 className="mb-3 md:mb-6 text-sm md:text-base lg:text-lg">Featured Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {speakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="flex items-start gap-3 md:gap-4 p-2 md:p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Avatar className="w-12 h-12 md:w-16 md:h-16">
                      <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-sm md:text-base">
                        {speaker.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="mb-1 text-xs md:text-sm">{speaker.name}</h4>
                      <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">{speaker.role}</p>
                      <p className="text-xs md:text-sm text-[#FF7A33]">{speaker.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Schedule */}
            <Card className="p-3 md:p-6">
              <h2 className="mb-3 md:mb-6 text-sm md:text-base lg:text-lg">Event Schedule</h2>
              <div className="space-y-3 md:space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-24 md:w-32 pt-1">
                      <p className="text-xs md:text-sm text-gray-600">{item.time}</p>
                    </div>
                    <div className="flex-1">
                      <div className="relative pl-4 md:pl-6 pb-4 md:pb-6 border-l-2 border-gray-200 last:border-0">
                        <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8]"></div>
                        <h4 className="mb-1 md:mb-2 text-xs md:text-sm">{item.title}</h4>
                        <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
                        {item.speaker && (
                          <Badge variant="outline" className="mt-1 md:mt-2 text-[#FF7A33] border-[#FF7A33] text-xs">
                            {item.speaker}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location Map */}
            <Card className="p-3 md:p-6">
              <h2 className="mb-3 md:mb-4 text-sm md:text-base lg:text-lg">Location</h2>
              <p className="text-gray-600 mb-3 md:mb-4 flex items-center gap-2 text-xs md:text-sm">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#FF7A33]" />
                {event.address}
              </p>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759347171940-d79bc7024948?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwbG9jYXRpb258ZW58MXx8fHwxNzYzMTgzMzk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Event location map"
                  className="w-full h-full object-cover"
                />
              </div>
              <Button variant="outline" className="w-full mt-4">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in Maps
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-3 md:space-y-6">
            {/* Registration Card */}
            <Card className="p-3 md:p-6 sticky top-3 md:top-6">
              <div className="space-y-2 md:space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] text-xs md:text-sm" size="sm">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-xs md:text-sm"
                  size="sm"
                  onClick={() => setShowServices(true)}
                >
                  <Settings className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Event Services
                </Button>
                {onNavigateToPosts && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={onNavigateToPosts}
                  >
                    <ImageIcon className="w-4 h-4 mr-2" />
                    View Posts
                  </Button>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsSaved(!isSaved)}
                    className={isSaved ? "text-[#FF7A33] border-[#FF7A33]" : ""}
                  >
                    <Heart
                      className={`w-4 h-4 mr-2 ${isSaved ? "fill-current" : ""}`}
                    />
                    {isSaved ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              <Separator className="my-3 md:my-6" />

              <div className="space-y-2 md:space-y-3">
                <h4 className="text-xs md:text-sm">What's Included</h4>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Full day access to all sessions</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Networking lunch & coffee breaks</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Event materials & recordings</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Certificate of attendance</span>
                  </li>
                  <li className="flex items-start gap-1.5 md:gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Access to speaker Q&A</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Organizer Info */}
            <Card className="p-3 md:p-6">
              <h4 className="mb-3 md:mb-4 text-xs md:text-sm">Organized By</h4>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Avatar className="w-10 h-10 md:w-12 md:h-12">
                  <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-xs md:text-sm">
                    EC
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs md:text-sm">EventConnect</p>
                  <p className="text-xs md:text-sm text-gray-600">Event Platform</p>
                </div>
              </div>
              <Button variant="outline" className="w-full text-xs md:text-sm" size="sm">
                View Profile
              </Button>
            </Card>
          </div>
        </div>

        {/* Similar Events */}
        <div className="mt-6 md:mt-12">
          <h2 className="mb-3 md:mb-6 text-sm md:text-base lg:text-lg">Similar Events You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {similarEvents.map((similarEvent) => (
              <EventCard key={similarEvent.id} {...similarEvent} onViewDetails={onViewEvent} />
            ))}
          </div>
        </div>
      </div>

      <EventServicesModal
        open={showServices}
        onOpenChange={setShowServices}
        eventTitle={event.title}
      />
    </div>
  );
}