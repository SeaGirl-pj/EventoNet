import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import {
  Calendar,
  MessageCircle,
  Bell,
  UserPlus,
  MapPin,
  CheckCheck,
} from "lucide-react";

interface Notification {
  id: string;
  type: "message" | "event" | "update" | "connection";
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  icon: typeof Calendar;
  color: string;
  bgColor: string;
}

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationCenter({
  isOpen,
  onClose,
}: NotificationCenterProps) {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "message",
      title: "New message from Sarah Johnson",
      description: "Thanks for connecting! Would love to discuss...",
      timestamp: "5 min ago",
      read: false,
      icon: MessageCircle,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
    },
    {
      id: "2",
      type: "event",
      title: "Event added to calendar",
      description: "Tech Leaders Summit 2025 has been added to your calendar",
      timestamp: "1 hour ago",
      read: false,
      icon: Calendar,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
    },
    {
      id: "3",
      type: "update",
      title: "Event location update",
      description:
        "Digital Marketing Conference venue has been changed to Hall B",
      timestamp: "2 hours ago",
      read: false,
      icon: MapPin,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      id: "4",
      type: "connection",
      title: "New connection request",
      description: "Michael Chen wants to connect with you",
      timestamp: "3 hours ago",
      read: false,
      icon: UserPlus,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "5",
      type: "message",
      title: "New message from Emily Rodriguez",
      description: "Great meeting you at the workshop yesterday!",
      timestamp: "5 hours ago",
      read: false,
      icon: MessageCircle,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
    },
    {
      id: "6",
      type: "event",
      title: "Event reminder",
      description: "AI & Innovation Workshop starts in 24 hours",
      timestamp: "6 hours ago",
      read: true,
      icon: Bell,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      id: "7",
      type: "update",
      title: "New speaker announced",
      description: "Tech Leaders Summit added keynote speaker Dr. Jane Smith",
      timestamp: "1 day ago",
      read: true,
      icon: Calendar,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
    },
    {
      id: "8",
      type: "event",
      title: "Event registration confirmed",
      description: "Your registration for Startup Pitch Night is confirmed",
      timestamp: "2 days ago",
      read: true,
      icon: CheckCheck,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllAsRead = () => {
    // In a real app, this would update the backend
    console.log("Mark all as read");
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="mb-4">
          <div className="flex items-center justify-between">
            <SheetTitle>Notifications</SheetTitle>
            {unreadCount > 0 && (
              <Badge className="bg-[#FF7A33] text-white border-0">
                {unreadCount} new
              </Badge>
            )}
          </div>
        </SheetHeader>

        {/* Mark All as Read Button */}
        {unreadCount > 0 && (
          <div className="mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleMarkAllAsRead}
              className="w-full"
            >
              <CheckCheck className="w-4 h-4 mr-2" />
              Mark all as read
            </Button>
          </div>
        )}

        {/* Notifications List */}
        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card
                key={notification.id}
                className={`p-4 cursor-pointer hover:shadow-md transition-all ${
                  !notification.read ? "border-[#FF7A33]/30" : ""
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`w-10 h-10 ${notification.bgColor} rounded-lg flex items-center justify-center ${notification.color} flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-medium text-sm">{notification.title}</p>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-[#FF7A33] rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-gray-400">
                      {notification.timestamp}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty State (shown when no notifications) */}
        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600 mb-1">No notifications</p>
            <p className="text-sm text-gray-400">
              You're all caught up! Check back later for updates.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}