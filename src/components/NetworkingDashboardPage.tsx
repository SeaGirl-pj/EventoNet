import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  ArrowLeft,
  Globe,
  Users,
  TrendingUp,
  UserPlus,
  MessageCircle,
  Calendar,
  Target,
  ArrowUp,
} from "lucide-react";

interface NetworkingDashboardPageProps {
  onBack: () => void;
}

export function NetworkingDashboardPage({ onBack }: NetworkingDashboardPageProps) {
  const connections = [
    {
      id: "1",
      name: "Sarah Mitchell",
      initials: "SM",
      role: "Product Manager at TechCorp",
      connectedDate: "2 weeks ago",
      mutualConnections: 12,
      interactions: 24,
    },
    {
      id: "2",
      name: "Alex Kumar",
      initials: "AK",
      role: "Software Engineer at InnovateLabs",
      connectedDate: "1 month ago",
      mutualConnections: 8,
      interactions: 18,
    },
    {
      id: "3",
      name: "Emily Chen",
      initials: "EC",
      role: "UX Designer at DesignHub",
      connectedDate: "2 months ago",
      mutualConnections: 5,
      interactions: 15,
    },
  ];

  const pendingRequests = [
    {
      id: "1",
      name: "Marcus Johnson",
      initials: "MJ",
      role: "Startup Founder at NextGen AI",
      mutualConnections: 15,
    },
    {
      id: "2",
      name: "Lisa Park",
      initials: "LP",
      role: "Marketing Director at BrandCo",
      mutualConnections: 7,
    },
  ];

  const networkGrowth = [
    { month: "Jul", connections: 28 },
    { month: "Aug", connections: 30 },
    { month: "Sep", connections: 31 },
    { month: "Oct", connections: 33 },
    { month: "Nov", connections: 34 },
  ];

  const industries = [
    { name: "Technology", count: 18, percentage: 53 },
    { name: "Business", count: 8, percentage: 24 },
    { name: "Design", count: 5, percentage: 15 },
    { name: "Marketing", count: 3, percentage: 8 },
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
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="mb-1">Networking Dashboard</h1>
              <p className="text-gray-600">
                Your connections and network growth insights
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#FF7A33]">34</div>
            <div className="text-sm text-gray-600">Total Connections</div>
            <div className="flex items-center justify-center gap-1 text-xs text-green-600 mt-1">
              <ArrowUp className="w-3 h-3" />
              <span>+6 this month</span>
            </div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#1D6FD8]">8</div>
            <div className="text-sm text-gray-600">Pending Requests</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-green-600">127</div>
            <div className="text-sm text-gray-600">Network Reach</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-purple-600">92%</div>
            <div className="text-sm text-gray-600">Response Rate</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Network Growth */}
            <Card className="p-6">
              <h2 className="mb-6">Network Growth</h2>
              <div className="flex items-end justify-between h-48 gap-4">
                {networkGrowth.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative">
                      <div
                        className="bg-gradient-to-t from-[#FF7A33] to-[#1D6FD8] rounded-t-lg transition-all"
                        style={{
                          height: `${(item.connections / 34) * 160}px`,
                        }}
                      ></div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm">{item.connections}</p>
                      <p className="text-xs text-gray-600">{item.month}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Connections */}
            <Card className="p-6">
              <h2 className="mb-6">Recent Connections</h2>
              <div className="space-y-4">
                {connections.map((connection) => (
                  <div
                    key={connection.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white">
                        {connection.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="mb-1">{connection.name}</p>
                      <p className="text-sm text-gray-600 mb-2">
                        {connection.role}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span>Connected {connection.connectedDate}</span>
                        <span>•</span>
                        <span>{connection.mutualConnections} mutual connections</span>
                        <span>•</span>
                        <span>{connection.interactions} interactions</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Industry Distribution */}
            <Card className="p-6">
              <h2 className="mb-6">Network by Industry</h2>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{industry.name}</span>
                      <span className="text-sm text-gray-600">
                        {industry.count} connections
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8] rounded-full"
                        style={{ width: `${industry.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Find Connections
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Conversation
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
            </Card>

            {/* Pending Requests */}
            <Card className="p-6">
              <h3 className="mb-4">Pending Requests</h3>
              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-sm">
                          {request.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm mb-1">{request.name}</p>
                        <p className="text-xs text-gray-600">
                          {request.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">
                      {request.mutualConnections} mutual connections
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-[#1D6FD8] hover:bg-[#1D6FD8]/90">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Ignore
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Network Health */}
            <Card className="p-6 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20">
              <h3 className="mb-4">Network Health</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Connection Quality</span>
                    <Badge className="bg-green-600 text-white border-0">Excellent</Badge>
                  </div>
                  <p className="text-xs text-gray-600">
                    Strong engagement with meaningful connections
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Network Diversity</span>
                    <Badge className="bg-[#1D6FD8] text-white border-0">Good</Badge>
                  </div>
                  <p className="text-xs text-gray-600">
                    Connections across 4 different industries
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Growth Rate</span>
                    <Badge className="bg-[#FF7A33] text-white border-0">Strong</Badge>
                  </div>
                  <p className="text-xs text-gray-600">
                    +21% growth in the last 3 months
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
