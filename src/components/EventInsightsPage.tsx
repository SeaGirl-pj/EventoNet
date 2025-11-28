import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  TrendingUp,
  Users,
  Clock,
  MapPin,
  Target,
  Award,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

interface EventInsightsPageProps {
  onBack: () => void;
}

export function EventInsightsPage({ onBack }: EventInsightsPageProps) {
  const monthlyAttendance = [
    { month: "Jul", events: 2, hours: 12 },
    { month: "Aug", events: 3, hours: 18 },
    { month: "Sep", events: 2, hours: 14 },
    { month: "Oct", events: 3, hours: 20 },
    { month: "Nov", events: 4, hours: 24 },
  ];

  const eventsByCategory = [
    { category: "Technology", count: 6, percentage: 50, color: "bg-[#FF7A33]" },
    { category: "Business", count: 3, percentage: 25, color: "bg-[#1D6FD8]" },
    { category: "Networking", count: 2, percentage: 17, color: "bg-green-600" },
    { category: "Leadership", count: 1, percentage: 8, color: "bg-purple-600" },
  ];

  const eventsByType = [
    { type: "In-Person", count: 8, percentage: 67 },
    { type: "Online", count: 4, percentage: 33 },
  ];

  const topEvents = [
    {
      title: "Tech Leaders Summit 2025",
      date: "Nov 20, 2025",
      category: "Technology",
      connections: 8,
      rating: 5,
      duration: "8 hours",
    },
    {
      title: "AI & Innovation Workshop",
      date: "Oct 15, 2025",
      category: "Technology",
      connections: 5,
      rating: 5,
      duration: "6 hours",
    },
    {
      title: "Startup Pitch Night",
      date: "Sep 28, 2025",
      category: "Business",
      connections: 6,
      rating: 4,
      duration: "3 hours",
    },
  ];

  const patterns = [
    {
      title: "Peak Activity Day",
      value: "Thursday",
      description: "You attend most events on Thursdays",
      icon: Calendar,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
    },
    {
      title: "Preferred Time",
      value: "Evening (6-9 PM)",
      description: "67% of your events are in the evening",
      icon: Clock,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
    },
    {
      title: "Favorite Venue",
      value: "Convention Center",
      description: "Attended 4 events at this location",
      icon: MapPin,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Networking Success",
      value: "5.2 avg",
      description: "New connections per event",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const achievements = [
    {
      title: "Early Adopter",
      description: "Attended 10+ events",
      icon: Award,
      earned: true,
    },
    {
      title: "Super Networker",
      description: "Made 30+ connections",
      icon: Users,
      earned: true,
    },
    {
      title: "Knowledge Seeker",
      description: "50+ hours of learning",
      icon: Target,
      earned: false,
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
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="mb-1">Event Insights</h1>
              <p className="text-gray-600">
                Your event attendance patterns and statistics
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#FF7A33]">12</div>
            <div className="text-sm text-gray-600 mb-2">Events Attended</div>
            <div className="flex items-center justify-center gap-1 text-xs text-green-600">
              <ArrowUp className="w-3 h-3" />
              <span>+25% vs last quarter</span>
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#1D6FD8]">88h</div>
            <div className="text-sm text-gray-600 mb-2">Total Hours</div>
            <div className="flex items-center justify-center gap-1 text-xs text-green-600">
              <ArrowUp className="w-3 h-3" />
              <span>+18% vs last quarter</span>
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-green-600">34</div>
            <div className="text-sm text-gray-600 mb-2">Connections Made</div>
            <div className="flex items-center justify-center gap-1 text-xs text-green-600">
              <ArrowUp className="w-3 h-3" />
              <span>+41% vs last quarter</span>
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-purple-600">4.8</div>
            <div className="text-sm text-gray-600 mb-2">Avg Rating</div>
            <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
              <span>Out of 5.0</span>
            </div>
          </Card>
        </div>

        {/* Attendance Trend */}
        <Card className="p-6 mb-8">
          <h2 className="mb-6">Monthly Attendance Trend</h2>
          <div className="flex items-end justify-between h-64 gap-6">
            {monthlyAttendance.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full relative flex flex-col items-center gap-2">
                  <div className="text-sm text-gray-600">{item.events} events</div>
                  <div
                    className="w-full bg-gradient-to-t from-[#FF7A33] to-[#1D6FD8] rounded-t-lg transition-all"
                    style={{
                      height: `${(item.events / 4) * 160}px`,
                    }}
                  ></div>
                </div>
                <div className="text-center">
                  <p className="text-sm">{item.month}</p>
                  <p className="text-xs text-gray-500">{item.hours}h</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <TrendingUp className="w-5 h-5" />
              <p className="text-sm">
                Your event attendance is trending upward! You attended 33% more events this
                quarter compared to last quarter.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Events by Category */}
          <Card className="p-6">
            <h2 className="mb-6">Events by Category</h2>
            <div className="space-y-4">
              {eventsByCategory.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{item.category}</span>
                    <span className="text-sm text-gray-600">{item.count} events</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Events by Type */}
          <Card className="p-6">
            <h2 className="mb-6">In-Person vs Online</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#E5E7EB"
                    strokeWidth="24"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#FF7A33"
                    strokeWidth="24"
                    fill="none"
                    strokeDasharray={`${(eventsByType[0].percentage / 100) * 502.65} 502.65`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="#1D6FD8"
                    strokeWidth="24"
                    fill="none"
                    strokeDasharray={`${(eventsByType[1].percentage / 100) * 502.65} 502.65`}
                    strokeDashoffset={`-${(eventsByType[0].percentage / 100) * 502.65}`}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              {eventsByType.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index === 0 ? "bg-[#FF7A33]" : "bg-[#1D6FD8]"
                      }`}
                    ></div>
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">{item.count} events</div>
                    <div className="text-xs text-gray-600">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Patterns */}
        <div className="mb-8">
          <h2 className="mb-4">Your Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {patterns.map((pattern, index) => {
              const Icon = pattern.icon;
              return (
                <Card key={index} className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`w-10 h-10 ${pattern.bgColor} rounded-lg flex items-center justify-center ${pattern.color} flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-1">{pattern.title}</p>
                      <p className="mb-2">{pattern.value}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{pattern.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Events */}
          <div>
            <h2 className="mb-4">Top Rated Events</h2>
            <div className="space-y-4">
              {topEvents.map((event, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="mb-2">{event.title}</h4>
                      <Badge className="bg-[#FF7A33] text-white border-0 mb-2">
                        {event.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-500 mb-1">
                        <span>{"★".repeat(event.rating)}</span>
                      </div>
                      <p className="text-xs text-gray-600">{event.rating}.0</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{event.connections} connections</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="mb-4">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card
                    key={index}
                    className={`p-5 ${
                      achievement.earned
                        ? "bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20"
                        : "opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          achievement.earned
                            ? "bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8]"
                            : "bg-gray-300"
                        }`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4>{achievement.title}</h4>
                          {achievement.earned && (
                            <Badge className="bg-green-600 text-white border-0">
                              Earned
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
