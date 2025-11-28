import { Home, Calendar, MessageCircle, User, Search, Bell, LogOut, Image, Settings } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { NotificationCenter } from "./NotificationCenter";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Navigation({ currentPage, onNavigate, onLogout }: NavigationProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const navItems = [
    { id: "posts", label: "Home", icon: Home },
    { id: "events", label: "Events", icon: Calendar },
    { id: "services", label: "Services", icon: Settings },
    { id: "chat", label: "Chat", icon: MessageCircle, badge: 3 },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("posts")}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-base md:text-xl hidden sm:block">EventConnect</span>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search events, people, topics..."
                  className="pl-10 bg-gray-50 border-0"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`relative flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors text-sm ${
                        isActive
                          ? "bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10 text-[#FF7A33]"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{item.label}</span>
                      {item.badge && item.badge > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center bg-[#FF7A33] border-0 text-white p-0 px-1.5">
                          {item.badge}
                        </Badge>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Calendar */}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onNavigate("event-calendar")}
              >
                <Calendar className="w-5 h-5" />
              </Button>

              {/* Notifications */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => setShowNotifications(true)}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF7A33] rounded-full"></span>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white">
                        JD
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div>
                      <p>John Doe</p>
                      <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onNavigate("profile")}>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Fixed Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center py-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative flex flex-col items-center gap-0.5 px-3 py-2 min-h-[60px] min-w-[60px] rounded-lg transition-colors ${
                  isActive ? "text-[#FF7A33]" : "text-gray-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
                {item.badge && item.badge > 0 && (
                  <Badge className="absolute top-1 right-1 h-4 min-w-4 flex items-center justify-center bg-[#FF7A33] border-0 text-white p-0 px-1 text-xs">
                    {item.badge}
                  </Badge>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Notification Center */}
      <NotificationCenter 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
    </>
  );
}