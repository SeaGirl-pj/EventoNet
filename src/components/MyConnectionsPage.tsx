import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Input } from "./ui/input";
import {
  ArrowLeft,
  Users,
  Search,
  MessageCircle,
  MoreVertical,
  Filter,
  MapPin,
  Briefcase,
  Calendar,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface MyConnectionsPageProps {
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

export function MyConnectionsPage({ onBack, onNavigate }: MyConnectionsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const connections = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Tech Lead",
      company: "TechCorp",
      location: "San Francisco, CA",
      avatar: "SJ",
      match: 95,
      connectedDate: "2 weeks ago",
      mutualConnections: 12,
      lastInteraction: "3 days ago",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      location: "New York, NY",
      avatar: "MC",
      match: 88,
      connectedDate: "1 month ago",
      mutualConnections: 8,
      lastInteraction: "1 week ago",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "DesignHub",
      location: "Los Angeles, CA",
      avatar: "ER",
      match: 82,
      connectedDate: "2 months ago",
      mutualConnections: 5,
      lastInteraction: "2 weeks ago",
    },
    {
      id: "4",
      name: "David Kim",
      role: "Marketing Director",
      company: "BrandCo",
      location: "Seattle, WA",
      avatar: "DK",
      match: 79,
      connectedDate: "3 months ago",
      mutualConnections: 3,
      lastInteraction: "1 month ago",
    },
    {
      id: "5",
      name: "Jessica Martinez",
      role: "Software Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      avatar: "JM",
      match: 91,
      connectedDate: "1 week ago",
      mutualConnections: 15,
      lastInteraction: "2 days ago",
    },
    {
      id: "6",
      name: "Robert Wilson",
      role: "Data Scientist",
      company: "AI Solutions",
      location: "Boston, MA",
      avatar: "RW",
      match: 87,
      connectedDate: "2 weeks ago",
      mutualConnections: 9,
      lastInteraction: "5 days ago",
    },
    {
      id: "7",
      name: "Amanda Taylor",
      role: "Project Manager",
      company: "DevTeam",
      location: "Chicago, IL",
      avatar: "AT",
      match: 83,
      connectedDate: "1 month ago",
      mutualConnections: 6,
      lastInteraction: "1 week ago",
    },
    {
      id: "8",
      name: "James Brown",
      role: "CEO",
      company: "StartupX",
      location: "Miami, FL",
      avatar: "JB",
      match: 76,
      connectedDate: "2 months ago",
      mutualConnections: 4,
      lastInteraction: "3 weeks ago",
    },
  ];

  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    connection.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    connection.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-semibold mb-1">My Connections</h1>
                <p className="text-gray-600 text-sm md:text-base">
                  {connections.length} connections
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search connections by name, role, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Connections List */}
        <div className="space-y-4">
          {filteredConnections.length > 0 ? (
            filteredConnections.map((connection) => (
              <Card
                key={connection.id}
                className="p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Avatar and Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="w-16 h-16 md:w-20 md:h-20">
                      <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-lg md:text-xl">
                        {connection.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base md:text-lg font-semibold">
                          {connection.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-[#FF7A33] border-[#FF7A33] text-xs"
                        >
                          {connection.match}% Match
                        </Badge>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 mb-1">
                        {connection.role}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 mb-2">
                        {connection.company}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{connection.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{connection.mutualConnections} mutual</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Connected {connection.connectedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 md:gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
                      onClick={() => onNavigate && onNavigate("chat")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span className="hidden md:inline">Message</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Remove Connection</DropdownMenuItem>
                        <DropdownMenuItem>Block User</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold mb-2">No connections found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

