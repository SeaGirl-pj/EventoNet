import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar } from "./ui/calendar";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  Edit,
  Calendar as CalendarIcon,
  Users,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  Heart,
  Star,
  Activity,
  BookMarked,
  Settings,
  UserPlus,
  UserMinus,
  UserCheck,
} from "lucide-react";
import { toast } from "sonner";

export function ProfilePage() {
  const [followedUsers, setFollowedUsers] = useState<Set<string>>(new Set());
  const upcomingEvents = [
    {
      id: "1",
      title: "Tech Leaders Summit",
      date: "Nov 20",
      time: "9:00 AM",
      color: "bg-[#FF7A33]",
    },
    {
      id: "2",
      title: "Marketing Masterclass",
      date: "Nov 22",
      time: "2:00 PM",
      color: "bg-[#1D6FD8]",
    },
    {
      id: "3",
      title: "Networking Mixer",
      date: "Nov 25",
      time: "6:00 PM",
      color: "bg-purple-600",
    },
  ];

  const connections = [
    { id: "1", name: "Sarah Johnson", role: "Tech Lead", match: 95, avatar: "SJ" },
    { id: "2", name: "Michael Chen", role: "Product Manager", match: 88, avatar: "MC" },
    { id: "3", name: "Emily Rodriguez", role: "UX Designer", match: 82, avatar: "ER" },
    { id: "4", name: "David Kim", role: "Marketing Director", match: 79, avatar: "DK" },
  ];

  const handleFollow = (userId: string, userName: string) => {
    setFollowedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
        toast.success(`Unfollowed ${userName}`);
      } else {
        newSet.add(userId);
        toast.success(`Following ${userName}`);
      }
      return newSet;
    });
  };

  const followedUsersList = connections.filter((conn) => followedUsers.has(conn.id));

  const badges = [
    { id: "1", name: "Early Adopter", icon: Star, color: "text-yellow-600" },
    { id: "2", name: "Networking Pro", icon: Users, color: "text-[#FF7A33]" },
    { id: "3", name: "Event Explorer", icon: CalendarIcon, color: "text-[#1D6FD8]" },
    { id: "4", name: "Active Learner", icon: Award, color: "text-purple-600" },
  ];

  const eventStats = [
    { label: "Technology", value: 45, color: "bg-[#1D6FD8]" },
    { label: "Networking", value: 30, color: "bg-[#FF7A33]" },
    { label: "Marketing", value: 15, color: "bg-purple-600" },
    { label: "Creative", value: 10, color: "bg-pink-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8]"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
              <div className="flex items-end gap-4 mb-4 md:mb-0">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-3xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="mb-2">
                  <h1 className="mb-1">John Doe</h1>
                  <div className="flex flex-wrap gap-3 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>Software Engineer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>john@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
                <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Profile Completeness */}
            <Card className="p-4 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20">
              <div className="flex items-center justify-between mb-2">
                <span>Profile Completeness</span>
                <span className="text-[#FF7A33]">85%</span>
              </div>
              <Progress value={85} className="h-2 mb-2" />
              <p className="text-sm text-gray-600">
                Add your skills and networking goals to complete your profile
              </p>
            </Card>
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-[#FF7A33]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CalendarIcon className="w-6 h-6 text-[#FF7A33]" />
                </div>
                <div className="text-2xl mb-1">12</div>
                <div className="text-sm text-gray-600">Events Attended</div>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-[#1D6FD8]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-[#1D6FD8]" />
                </div>
                <div className="text-2xl mb-1">34</div>
                <div className="text-sm text-gray-600">Connections</div>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl mb-1">8</div>
                <div className="text-sm text-gray-600">Badges Earned</div>
              </Card>
            </div>

            {/* Matchmaking Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3>Recommended Connections</h3>
                    <p className="text-sm text-gray-600">
                      Based on your interests and goals
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {connections.map((connection) => (
                  <div
                    key={connection.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gray-200 text-gray-700">
                          {connection.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p>{connection.name}</p>
                        <p className="text-sm text-gray-600">{connection.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className="text-[#FF7A33] border-[#FF7A33]"
                        >
                          {connection.match}% Match
                        </Badge>
                      </div>
                      <Button 
                        size="sm" 
                        className={followedUsers.has(connection.id) 
                          ? "bg-gray-500 hover:bg-gray-600 text-white" 
                          : "bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white"
                        }
                        onClick={() => handleFollow(connection.id, connection.name)}
                      >
                        {followedUsers.has(connection.id) ? (
                          <>
                            <UserCheck className="w-4 h-4 mr-1" />
                            Following
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 mr-1" />
                            Follow
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Profile Analysis */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1D6FD8]/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#1D6FD8]" />
                </div>
                <div>
                  <h3>Profile Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Insights about your networking activity
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Networking Skills</span>
                    <span className="text-sm text-[#FF7A33]">Excellent</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Event Engagement</span>
                    <span className="text-sm text-[#1D6FD8]">Very Good</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Profile Visibility</span>
                    <span className="text-sm text-purple-600">Good</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#1D6FD8] mt-0.5" />
                  <div>
                    <p className="mb-2">Recommendation</p>
                    <p className="text-sm text-gray-700">
                      Attend 2 more events this month to reach your networking goal
                      and unlock the "Super Connector" badge!
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Event Insights */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3>Event Attendance Insights</h3>
                  <p className="text-sm text-gray-600">Your event preferences</p>
                </div>
              </div>
              <div className="space-y-3">
                {eventStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">{stat.label}</span>
                      <span className="text-sm">{stat.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${stat.color} h-2 rounded-full transition-all`}
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Following Section */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3>People You Follow</h3>
                    <p className="text-sm text-gray-600">
                      {followedUsersList.length} {followedUsersList.length === 1 ? 'person' : 'people'}
                    </p>
                  </div>
                </div>
              </div>
              {followedUsersList.length > 0 ? (
                <div className="space-y-4">
                  {followedUsersList.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gray-200 text-gray-700">
                            {user.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p>{user.name}</p>
                          <p className="text-sm text-gray-600">{user.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className="text-green-600 border-green-600"
                        >
                          Following
                        </Badge>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleFollow(user.id, user.name)}
                        >
                          <UserMinus className="w-4 h-4 mr-1" />
                          Unfollow
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <UserCheck className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>You're not following anyone yet</p>
                  <p className="text-sm mt-1">Start following people to see them here</p>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card className="p-6">
              <h3 className="mb-4">Upcoming Events</h3>
              <Calendar mode="single" className="rounded-md border" />
              <div className="mt-4 space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className={`w-2 h-12 ${event.color} rounded-full`}></div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{event.title}</p>
                      <p className="text-xs text-gray-600">
                        {event.date} • {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Badges */}
            <Card className="p-6">
              <h3 className="mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.id}
                      className="p-4 border rounded-lg text-center hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className={`w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center ${badge.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-xs">{badge.name}</p>
                    </div>
                  );
                })}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Badges
              </Button>
            </Card>

            {/* Interests & Skills */}
            <Card className="p-6">
              <h3 className="mb-4">Interests & Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "AI",
                  "Leadership",
                  "Public Speaking",
                  "Marketing",
                  "Design Thinking",
                  "Data Science",
                  "Networking",
                ].map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-[#1D6FD8] border-[#1D6FD8]"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                <Edit className="w-4 h-4 mr-2" />
                Edit Skills
              </Button>
            </Card>

            {/* Saved Events */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3>Saved Events</h3>
                <Badge className="bg-[#FF7A33] text-white border-0">5</Badge>
              </div>
              <div className="space-y-2">
                {["AI Workshop", "Design Summit", "Startup Pitch Night"].map(
                  (event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-[#FF7A33]" />
                        <span className="text-sm">{event}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Saved
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
