import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Zap,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";

interface AIRecommendationsPageProps {
  onBack: () => void;
}

export function AIRecommendationsPage({ onBack }: AIRecommendationsPageProps) {
  const recommendedEvents = [
    {
      id: "1",
      title: "Advanced AI Product Development",
      date: "December 18, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Innovation Center, SF",
      type: "in-person" as const,
      matchScore: 96,
      reason: "Matches your interests in AI and product development",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MzE3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      attendees: 150,
      tags: ["AI", "Product", "Innovation"],
    },
    {
      id: "2",
      title: "Tech Leadership Masterclass",
      date: "December 20, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Online via Zoom",
      type: "online" as const,
      matchScore: 94,
      reason: "Aligns with your leadership and technology background",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NjMyMDU2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      attendees: 200,
      tags: ["Leadership", "Management", "Strategy"],
    },
    {
      id: "3",
      title: "Networking for Tech Professionals",
      date: "December 22, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Tech Hub Downtown",
      type: "in-person" as const,
      matchScore: 89,
      reason: "Perfect for expanding your professional network",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzYzMTc3Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      attendees: 100,
      tags: ["Networking", "Tech", "Community"],
    },
  ];

  const recommendedConnections = [
    {
      id: "1",
      name: "Dr. Jennifer Lee",
      initials: "JL",
      role: "AI Research Lead",
      company: "TechInnovate",
      matchScore: 93,
      reason: "Shared interest in AI and machine learning",
      mutualConnections: 8,
    },
    {
      id: "2",
      name: "Robert Williams",
      initials: "RW",
      role: "VP of Engineering",
      company: "CloudScale Inc",
      matchScore: 88,
      reason: "Similar leadership role in technology sector",
      mutualConnections: 12,
    },
    {
      id: "3",
      name: "Amanda Foster",
      initials: "AF",
      role: "Product Strategy Director",
      company: "StartupHub",
      matchScore: 85,
      reason: "Complementary skills in product and engineering",
      mutualConnections: 6,
    },
  ];

  const skillRecommendations = [
    {
      skill: "Kubernetes",
      reason: "In demand in your industry",
      impact: "High",
      learningTime: "2-3 months",
    },
    {
      skill: "System Design",
      reason: "Complement your current expertise",
      impact: "High",
      learningTime: "1-2 months",
    },
    {
      skill: "Data Analytics",
      reason: "Growing trend in your field",
      impact: "Medium",
      learningTime: "2-4 months",
    },
  ];

  const insights = [
    {
      title: "Peak Networking Opportunity",
      description:
        "December 18-22 shows high concentration of relevant events in your area. Consider attending multiple events during this period.",
      icon: TrendingUp,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
    },
    {
      title: "Expand Your Network",
      description:
        "You have strong connections in Technology but limited in Business and Marketing. Consider diversifying.",
      icon: Users,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
    },
    {
      title: "Skill Gap Analysis",
      description:
        "Adding cloud infrastructure skills could increase your event relevance score by 25%.",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

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
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="mb-1">AI Recommendations</h1>
              <p className="text-gray-600">
                Personalized suggestions powered by artificial intelligence
              </p>
            </div>
          </div>
        </div>

        {/* AI Insights Banner */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="mb-2">AI-Powered Intelligence</h3>
              <p className="text-sm text-gray-600 mb-3">
                Our recommendation engine analyzes your profile, interests, event history, network
                connections, and industry trends to provide personalized suggestions. Updated daily
                based on your activity.
              </p>
              <Badge className="bg-[#FF7A33] text-white border-0">
                Last updated: Today at 9:00 AM
              </Badge>
            </div>
          </div>
        </Card>

        {/* Key Insights */}
        <div className="mb-8">
          <h2 className="mb-4">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index} className="p-5">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 ${insight.bgColor} rounded-lg flex items-center justify-center ${insight.color} flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="mb-2">{insight.title}</h4>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recommended Events */}
        <div className="mb-8">
          <h2 className="mb-4">Recommended Events</h2>
          <div className="space-y-4">
            {recommendedEvents.map((event) => (
              <Card key={event.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="mb-2">{event.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {event.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-[#1D6FD8] border-[#1D6FD8]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-[#FF7A33] mb-1">{event.matchScore}%</div>
                        <p className="text-xs text-gray-600">Match</p>
                      </div>
                    </div>

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
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-lg mb-4">
                      <p className="text-sm text-gray-700">
                        <span className="text-[#FF7A33]">Why recommended:</span> {event.reason}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                        View Event
                      </Button>
                      <Button variant="outline">Save for Later</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recommended Connections */}
          <div>
            <h2 className="mb-4">Recommended Connections</h2>
            <div className="space-y-4">
              {recommendedConnections.map((person) => (
                <Card key={person.id} className="p-5">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white">
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="mb-1">{person.name}</p>
                          <p className="text-sm text-gray-600">
                            {person.role} at {person.company}
                          </p>
                        </div>
                        <Badge className="bg-green-600 text-white border-0">
                          {person.matchScore}%
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {person.mutualConnections} mutual connections
                      </p>
                      <p className="text-sm text-[#FF7A33] mb-4">{person.reason}</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
                        >
                          Connect
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Skill Recommendations */}
          <div>
            <h2 className="mb-4">Recommended Skills to Learn</h2>
            <div className="space-y-4">
              {skillRecommendations.map((skill, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4>{skill.skill}</h4>
                    <Badge
                      className={
                        skill.impact === "High"
                          ? "bg-green-600 text-white border-0"
                          : "bg-[#FF7A33] text-white border-0"
                      }
                    >
                      {skill.impact} Impact
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{skill.reason}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{skill.learningTime}</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Find Resources
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
