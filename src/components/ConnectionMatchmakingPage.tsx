import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  Users,
  Briefcase,
  MapPin,
  Target,
  MessageCircle,
  UserPlus,
  Sparkles,
} from "lucide-react";

interface ConnectionMatchmakingPageProps {
  onBack: () => void;
}

export function ConnectionMatchmakingPage({ onBack }: ConnectionMatchmakingPageProps) {
  const recommendations = [
    {
      id: "1",
      name: "Sarah Mitchell",
      initials: "SM",
      role: "Product Manager",
      company: "TechCorp",
      location: "San Francisco, CA",
      matchScore: 95,
      commonInterests: ["AI", "Product Strategy", "Innovation"],
      mutualConnections: 12,
      reason: "Both interested in AI product development and attending Tech Leaders Summit",
      attending: "Tech Leaders Summit 2025",
    },
    {
      id: "2",
      name: "Alex Kumar",
      initials: "AK",
      role: "Software Engineer",
      company: "InnovateLabs",
      location: "San Francisco, CA",
      matchScore: 92,
      commonInterests: ["Machine Learning", "Python", "Open Source"],
      mutualConnections: 8,
      reason: "Shared expertise in machine learning and similar career trajectory",
      attending: "AI & Innovation Workshop",
    },
    {
      id: "3",
      name: "Emily Chen",
      initials: "EC",
      role: "UX Designer",
      company: "DesignHub",
      location: "Oakland, CA",
      matchScore: 88,
      commonInterests: ["Design Systems", "User Research", "Accessibility"],
      mutualConnections: 5,
      reason: "Complementary skills in design and development",
      attending: "Digital Marketing Conference",
    },
    {
      id: "4",
      name: "Marcus Johnson",
      initials: "MJ",
      role: "Startup Founder",
      company: "NextGen AI",
      location: "Palo Alto, CA",
      matchScore: 85,
      commonInterests: ["Entrepreneurship", "AI", "Venture Capital"],
      mutualConnections: 15,
      reason: "Both founders in AI space with similar funding stage",
      attending: "Startup Pitch Night",
    },
  ];

  const getMatchColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-[#FF7A33]";
    return "text-gray-600";
  };

  const getMatchBgColor = (score: number) => {
    if (score >= 90) return "bg-green-100";
    if (score >= 80) return "bg-[#FF7A33]/10";
    return "bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="mb-1">Connection Matchmaking</h1>
              <p className="text-gray-600">
                AI-powered recommendations based on your profile and interests
              </p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#FF7A33]">12</div>
            <div className="text-sm text-gray-600">New Matches</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#1D6FD8]">34</div>
            <div className="text-sm text-gray-600">Total Connections</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-green-600">8</div>
            <div className="text-sm text-gray-600">Pending Requests</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-purple-600">95%</div>
            <div className="text-sm text-gray-600">Match Quality</div>
          </Card>
        </div>

        {/* AI Matching Info */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="mb-2">AI-Powered Matching</h3>
              <p className="text-sm text-gray-600">
                Our intelligent algorithm analyzes your profile, interests, event attendance, and
                networking goals to suggest the most relevant connections. Match scores are
                calculated based on shared interests, complementary skills, and mutual connections.
              </p>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <div>
          <h2 className="mb-6">Recommended Connections</h2>
          <div className="space-y-6">
            {recommendations.map((person) => (
              <Card key={person.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Section */}
                  <div className="flex items-start gap-4 flex-1">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-lg">
                        {person.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="mb-1">{person.name}</h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" />
                              <span>{person.role}</span>
                            </div>
                            <span>•</span>
                            <span>{person.company}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="w-3 h-3" />
                            <span>{person.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Match Score */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-[#FF7A33]" />
                            <span className="text-sm">Match Score</span>
                          </div>
                          <span className={`${getMatchColor(person.matchScore)}`}>
                            {person.matchScore}%
                          </span>
                        </div>
                        <Progress value={person.matchScore} className="h-2" />
                      </div>

                      {/* Match Reason */}
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">{person.reason}</p>
                      </div>

                      {/* Common Interests */}
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Common Interests</p>
                        <div className="flex flex-wrap gap-2">
                          {person.commonInterests.map((interest, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-[#1D6FD8] border-[#1D6FD8]"
                            >
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Mutual Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-[#FF7A33]" />
                          <span>{person.mutualConnections} mutual connections</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="w-4 h-4 text-[#1D6FD8]" />
                          <span>Attending: {person.attending}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex md:flex-col gap-2 md:w-40">
                    <Button className="flex-1 bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
}
