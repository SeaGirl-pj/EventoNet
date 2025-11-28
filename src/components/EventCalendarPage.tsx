import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar } from "./ui/calendar";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Video,
  ChevronRight,
  Plus,
} from "lucide-react";


interface EventCalendarPageProps {
  onBack: () => void;
}

export function EventCalendarPage({ onBack }: EventCalendarPageProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingEvents = [
    {
      id: "1",
      title: "Tech Leaders Summit 2025",
      date: "November 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center",
      type: "in-person" as const,
      status: "confirmed" as const,
      category: "Technology",
      color: "bg-[#FF7A33]",
    },
    {
      id: "2",
      title: "Digital Marketing Conference",
      date: "November 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Online via Zoom",
      type: "online" as const,
      status: "confirmed" as const,
      category: "Marketing",
      color: "bg-[#1D6FD8]",
    },
    {
      id: "3",
      title: "AI & Innovation Workshop",
      date: "December 1, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Tech Hub Central",
      type: "in-person" as const,
      status: "pending" as const,
      category: "Technology",
      color: "bg-purple-600",
    },
    {
      id: "4",
      title: "Startup Pitch Night",
      date: "December 5, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Space",
      type: "in-person" as const,
      status: "confirmed" as const,
      category: "Entrepreneurship",
      color: "bg-green-600",
    },
    {
      id: "5",
      title: "Product Management Masterclass",
      date: "December 10, 2025",
      time: "1:00 PM - 6:00 PM",
      location: "Online via Teams",
      type: "online" as const,
      status: "confirmed" as const,
      category: "Business",
      color: "bg-pink-600",
    },
  ];

  const pastEvents = [
    {
      id: "6",
      title: "Leadership Summit 2024",
      date: "October 15, 2025",
      attended: true,
    },
    {
      id: "7",
      title: "Design Thinking Workshop",
      date: "October 8, 2025",
      attended: true,
    },
    {
      id: "8",
      title: "Tech Networking Mixer",
      date: "September 28, 2025",
      attended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="mb-1">Event Calendar</h1>
                <p className="text-gray-600">
                  Your upcoming events and schedule
                </p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#FF7A33]">5</div>
            <div className="text-sm text-gray-600">Upcoming</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#1D6FD8]">3</div>
            <div className="text-sm text-gray-600">This Month</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-green-600">12</div>
            <div className="text-sm text-gray-600">Attended</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-purple-600">2</div>
            <div className="text-sm text-gray-600">Pending</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <Card className="p-6 lg:col-span-1">
            <h3 className="mb-4">Calendar View</h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-[#FF7A33] rounded-full"></div>
                <span className="text-gray-600">In-Person Events</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-[#1D6FD8] rounded-full"></div>
                <span className="text-gray-600">Online Events</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-gray-600">Pending Events</span>
              </div>
            </div>
          </Card>

          {/* Event List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Events */}
            <div>
              <h2 className="mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="p-5 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-2 h-full ${event.color} rounded-full`}></div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="mb-2 group-hover:text-[#FF7A33] transition-colors">
                              {event.title}
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge className={`${event.color} text-white border-0`}>
                                {event.category}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={
                                  event.status === "confirmed"
                                    ? "text-green-600 border-green-600"
                                    : "text-gray-600 border-gray-600"
                                }
                              >
                                {event.status === "confirmed" ? "Confirmed" : "Pending"}
                              </Badge>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#FF7A33] group-hover:translate-x-1 transition-all" />
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="w-4 h-4 text-[#FF7A33]" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#1D6FD8]" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {event.type === "online" ? (
                              <Video className="w-4 h-4 text-purple-600" />
                            ) : (
                              <MapPin className="w-4 h-4 text-green-600" />
                            )}
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Events */}
            <div>
              <h3 className="mb-4">Past Events</h3>
              <Card className="p-5">
                <div className="space-y-3">
                  {pastEvents.map((event, index) => (
                    <div key={event.id}>
                      <div className="flex items-center justify-between py-2">
                        <div>
                          <p className="mb-1">{event.title}</p>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                        <Badge
                          variant={event.attended ? "default" : "outline"}
                          className={
                            event.attended
                              ? "bg-green-600 text-white border-0"
                              : "text-gray-600"
                          }
                        >
                          {event.attended ? "Attended" : "Missed"}
                        </Badge>
                      </div>
                      {index < pastEvents.length - 1 && (
                        <div className="border-b border-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
