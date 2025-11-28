import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  TrendingUp,
  Target,
  Users,
  Calendar,
  Award,
  Zap,
  CheckCircle2,
  AlertCircle,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

interface ProfileAnalysisPageProps {
  onBack: () => void;
}

export function ProfileAnalysisPage({ onBack }: ProfileAnalysisPageProps) {
  const profileScore = 85;

  const metrics = [
    {
      label: "Profile Completeness",
      value: 85,
      change: +5,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]",
    },
    {
      label: "Networking Activity",
      value: 72,
      change: +12,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]",
    },
    {
      label: "Event Engagement",
      value: 68,
      change: -3,
      color: "text-purple-600",
      bgColor: "bg-purple-600",
    },
    {
      label: "Profile Visibility",
      value: 91,
      change: +8,
      color: "text-green-600",
      bgColor: "bg-green-600",
    },
  ];

  const strengths = [
    {
      title: "Strong Professional Network",
      description: "You have 34 quality connections with diverse backgrounds",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Active Event Participation",
      description: "Attended 12 events this year, above average for your industry",
      icon: Calendar,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
    },
    {
      title: "High-Quality Profile Content",
      description: "Your profile has comprehensive information and recent updates",
      icon: Award,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
    },
  ];

  const improvements = [
    {
      title: "Add Skills & Certifications",
      description: "Adding 5-10 relevant skills can increase your profile visibility by 40%",
      priority: "high" as const,
      impact: "High visibility boost",
    },
    {
      title: "Update Professional Experience",
      description: "Your work experience section is missing recent achievements",
      priority: "medium" as const,
      impact: "Better matching with opportunities",
    },
    {
      title: "Engage with Posts",
      description: "Commenting on and sharing posts increases your network reach",
      priority: "medium" as const,
      impact: "Increased engagement",
    },
    {
      title: "Set Networking Goals",
      description: "Define clear networking objectives for better recommendations",
      priority: "low" as const,
      impact: "More relevant suggestions",
    },
  ];

  const insights = [
    {
      metric: "Connection Growth",
      value: "+15%",
      period: "Last 30 days",
      trend: "up" as const,
    },
    {
      metric: "Profile Views",
      value: "247",
      period: "Last 30 days",
      trend: "up" as const,
    },
    {
      metric: "Event Attendance",
      value: "4",
      period: "Last 30 days",
      trend: "down" as const,
    },
    {
      metric: "Average Response Time",
      value: "2.5h",
      period: "Average",
      trend: "up" as const,
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
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="mb-1">Profile Analysis</h1>
              <p className="text-gray-600">
                Insights and recommendations to improve your profile
              </p>
            </div>
          </div>
        </div>

        {/* Overall Score */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(profileScore / 100) * 352} 352`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A33" />
                    <stop offset="100%" stopColor="#1D6FD8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-1">{profileScore}</div>
                  <div className="text-xs text-gray-600">Score</div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="mb-2">Overall Profile Score</h2>
              <p className="text-gray-600 mb-4">
                Your profile is performing well! You're in the top 15% of users in your industry.
                Complete the recommended improvements to reach the next level.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-600 text-white border-0">
                  Top 15% in your field
                </Badge>
                <Badge className="bg-[#FF7A33] text-white border-0">
                  +5 points this month
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-600">{metric.label}</p>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    metric.change > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change > 0 ? (
                    <ArrowUp className="w-3 h-3" />
                  ) : (
                    <ArrowDown className="w-3 h-3" />
                  )}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
              <div className="text-2xl mb-3 ${metric.color}">{metric.value}%</div>
              <Progress value={metric.value} className="h-2" />
            </Card>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {insights.map((insight, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">{insight.metric}</p>
                {insight.trend === "up" ? (
                  <ArrowUp className="w-4 h-4 text-green-600" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-600" />
                )}
              </div>
              <div className="text-xl mb-1">{insight.value}</div>
              <p className="text-xs text-gray-500">{insight.period}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strengths */}
          <div>
            <h2 className="mb-4">Your Strengths</h2>
            <div className="space-y-4">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <Card key={index} className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 ${strength.bgColor} rounded-lg flex items-center justify-center ${strength.color} flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <h4>{strength.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{strength.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h2 className="mb-4">Recommended Improvements</h2>
            <div className="space-y-4">
              {improvements.map((improvement, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-2 flex-1">
                      <AlertCircle className="w-5 h-5 text-[#FF7A33] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="mb-2 group-hover:text-[#FF7A33] transition-colors">
                          {improvement.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {improvement.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={
                              improvement.priority === "high"
                                ? "text-red-600 border-red-600"
                                : improvement.priority === "medium"
                                ? "text-[#FF7A33] border-[#FF7A33]"
                                : "text-gray-600 border-gray-600"
                            }
                          >
                            {improvement.priority} priority
                          </Badge>
                          <Badge variant="outline" className="text-[#1D6FD8] border-[#1D6FD8]">
                            <Zap className="w-3 h-3 mr-1" />
                            {improvement.impact}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
                  >
                    Take Action
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
