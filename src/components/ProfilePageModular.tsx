import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  Edit,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Target,
  Sparkles,
  Heart,
  Settings,
  Link2,
  ChevronRight,
  Zap,
  BarChart3,
  BookOpen,
  Globe,
  Phone,
  UserPlus,
} from "lucide-react";

interface ProfilePageModularProps {
  onNavigate?: (page: string) => void;
}

// Calculate profile completion percentage based on completed sections
function calculateProfileCompletion(): number {
  // Mock profile data - in a real app, this would come from state/API
  // You can replace this with actual profile data from props or context
  const profileData = {
    // Personal Information
    personalInfo: {
      fullName: "John Doe",
      age: "28",
      gender: "Male",
      dateOfBirth: "1996-05-15",
      country: "United States",
      city: "San Francisco",
    },
    // Social & Professional Links
    socialLinks: {
      linkedin: "linkedin.com/in/johndoe",
      instagram: "@johndoe",
      website: "johndoe.dev",
      github: "github.com/johndoe",
      twitter: "@johndoe",
    },
    // Professional Background
    professionalBackground: {
      education: "Bachelor's in Computer Science, Stanford University (2018)",
      workExperience: "Senior Software Engineer at Tech Corp (2020 - Present)",
      skills: "React, TypeScript, Node.js, Python, AWS",
      certifications: "AWS Certified Solutions Architect, Google Cloud Professional",
    },
    // Contact Information
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main Street, San Francisco, CA 94102",
    },
    // Interests & Topics
    interests: {
      userInterests: "Technology, AI, Machine Learning, Web Development",
      hobbies: "Photography, Hiking, Reading, Gaming",
      categories: "Tech, Innovation, Startups, Leadership",
    },
    // Event Preferences
    eventPreferences: {
      preferredEventTypes: "Conferences, Workshops, Networking Events",
      preferredLocation: "San Francisco Bay Area",
      preferredTime: "Weekends, Evening",
      engagementLevel: "Active",
    },
  };

  // Check each section completion
  const sections = [
    // Personal Information (20% weight)
    {
      weight: 20,
      isComplete: !!(
        profileData.personalInfo.fullName &&
        profileData.personalInfo.age &&
        profileData.personalInfo.city
      ),
    },
    // Social & Professional Links (15% weight)
    {
      weight: 15,
      isComplete: !!(
        profileData.socialLinks.linkedin || profileData.socialLinks.website
      ),
    },
    // Professional Background (25% weight)
    {
      weight: 25,
      isComplete: !!(
        profileData.professionalBackground.education ||
        profileData.professionalBackground.workExperience ||
        profileData.professionalBackground.skills
      ),
    },
    // Contact Information (15% weight)
    {
      weight: 15,
      isComplete: !!(profileData.contactInfo.email || profileData.contactInfo.phone),
    },
    // Interests & Topics (15% weight)
    {
      weight: 15,
      isComplete: !!(
        profileData.interests.userInterests || profileData.interests.categories
      ),
    },
    // Event Preferences (10% weight)
    {
      weight: 10,
      isComplete: !!(profileData.eventPreferences.preferredEventTypes),
    },
  ];

  // Calculate total completion
  const totalCompletion = sections.reduce((total, section) => {
    return total + (section.isComplete ? section.weight : 0);
  }, 0);

  return Math.round(totalCompletion);
}

export function ProfilePageModular({ onNavigate }: ProfilePageModularProps) {
  // Calculate profile completion
  const profileCompletion = calculateProfileCompletion();

  const profileSections = [
    {
      id: "social-links",
      title: "Social & Professional Links",
      description: "LinkedIn, Twitter, portfolio, website",
      icon: Link2,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
      action: "Manage",
    },
    {
      id: "professional-background",
      title: "Professional Background",
      description: "Work experience, education, certifications",
      icon: Briefcase,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      action: "Update",
    },
    {
      id: "contact-info",
      title: "Contact Information",
      description: "Email, phone, location preferences",
      icon: Phone,
      color: "text-green-600",
      bgColor: "bg-green-100",
      action: "Edit",
    },
    {
      id: "interests",
      title: "Interests & Topics",
      description: "Your areas of interest and expertise",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      action: "Customize",
    },
    {
      id: "event-preferences",
      title: "Event Preferences",
      description: "Types, formats, and scheduling preferences",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      action: "Set",
    },
  ];

  const dashboardModules = [
    {
      id: "matchmaking",
      title: "Connection Matchmaking",
      description: "AI-powered connection recommendations",
      icon: Users,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
      badge: "3 New",
      badgeColor: "bg-[#FF7A33]",
      page: "connection-matchmaking",
    },
    {
      id: "calendar",
      title: "Event Calendar",
      description: "Your upcoming events and schedule",
      icon: Calendar,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
      badge: "5 Events",
      badgeColor: "bg-[#1D6FD8]",
      page: "event-calendar",
    },
    {
      id: "analysis",
      title: "Profile Analysis",
      description: "Insights and improvement suggestions",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      badge: "85%",
      badgeColor: "bg-purple-600",
      page: "profile-analysis",
    },
    {
      id: "skills",
      title: "Skills & Interests",
      description: "Manage your professional skills",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
      badge: "12 Skills",
      badgeColor: "bg-green-600",
      page: "skills-interests",
    },
    {
      id: "saved-events",
      title: "Saved Events",
      description: "Events you're interested in",
      icon: BookOpen,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      badge: "8 Saved",
      badgeColor: "bg-pink-600",
      page: "saved-events",
    },
    {
      id: "networking",
      title: "Networking Dashboard",
      description: "Your connections and network growth",
      icon: Globe,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      badge: "34 Connections",
      badgeColor: "bg-yellow-600",
      page: "networking-dashboard",
    },
    {
      id: "ai-recommendations",
      title: "AI Recommendations",
      description: "Personalized event and connection suggestions",
      icon: Sparkles,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
      badge: "New",
      badgeColor: "bg-indigo-600",
      page: "ai-recommendations",
    },
    {
      id: "event-insights",
      title: "Event Insights",
      description: "Your event attendance patterns and stats",
      icon: BarChart3,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      badge: "View",
      badgeColor: "bg-cyan-600",
      page: "event-insights",
    },
  ];

  const stats = [
    { label: "Events Attended", value: "12", icon: Calendar, color: "text-[#FF7A33]" },
    { label: "Badges Earned", value: "8", icon: Award, color: "text-purple-600" },
    { label: "Profile Score", value: "85%", icon: TrendingUp, color: "text-green-600" },
  ];

  const recommendedConnections = [
    { id: "1", name: "Sarah Johnson", role: "Tech Lead", match: 95, avatar: "SJ" },
    { id: "2", name: "Michael Chen", role: "Product Manager", match: 88, avatar: "MC" },
    { id: "3", name: "Emily Rodriguez", role: "UX Designer", match: 82, avatar: "ER" },
    { id: "4", name: "David Kim", role: "Marketing Director", match: 79, avatar: "DK" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8]"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
              <div className="flex items-end gap-4 mb-4 md:mb-0">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-base md:text-xl lg:text-2xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="mb-2">
                  <h1 className="mt-12 md:mt-8 mb-1 text-sm md:text-base lg:text-lg">John Doe</h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-gray-600 text-xs">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>Software Engineer</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  <Settings className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Settings
                </Button>
                <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] text-xs" size="sm">
                  <Edit className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Edit Profile
                </Button>
                <Button 
                  className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] text-xs" 
                  size="sm"
                  onClick={() => onNavigate && onNavigate("my-connections")}
                >
                  <Users className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                  Connections
                </Button>
              </div>
            </div>

            {/* Profile Completeness and Stats Row */}
            <div className="flex flex-row gap-3 md:gap-4 items-center justify-between">
              {/* Profile Completeness - Small Round Button with Colored Border - Left Side */}
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Button
                  onClick={() => onNavigate && onNavigate("profile-details")}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-[#FF7A33] hover:bg-gray-50 p-0 flex flex-col items-center justify-center gap-1 shadow-lg hover:shadow-xl transition-all hover:scale-105 relative z-10 border-0"
                  size="sm"
                >
                  <Zap className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs md:text-sm font-semibold">{profileCompletion}%</span>
                </Button>
                {/* Colored Border Circle based on percentage - Mobile */}
                <svg 
                  className="absolute inset-0 w-16 h-16 transform -rotate-90 pointer-events-none md:hidden"
                  viewBox="0 0 64 64"
                >
                  <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="4" fill="none" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="url(#profile-gradient-mobile)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${(profileCompletion / 100) * 175.93} 175.93`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient id="profile-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF7A33" />
                      <stop offset="100%" stopColor="#1D6FD8" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Colored Border Circle based on percentage - Desktop */}
                <svg 
                  className="hidden md:block absolute inset-0 w-20 h-20 transform -rotate-90 pointer-events-none"
                  viewBox="0 0 80 80"
                >
                  <circle cx="40" cy="40" r="36" stroke="#E5E7EB" strokeWidth="4" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="url(#profile-gradient-desktop)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${(profileCompletion / 100) * 226.19} 226.19`}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient id="profile-gradient-desktop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF7A33" />
                      <stop offset="100%" stopColor="#1D6FD8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Stats Round Buttons - Right Side */}
              <div className="flex flex-row gap-3 md:gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const borderColor = stat.color === "text-[#FF7A33]" ? "#FF7A33" : 
                                     stat.color === "text-[#1D6FD8]" ? "#1D6FD8" :
                                     stat.color === "text-purple-600" ? "#9333EA" :
                                     "#16A34A";
                  const iconColor = stat.color === "text-[#FF7A33]" ? "text-[#FF7A33]" : 
                                   stat.color === "text-[#1D6FD8]" ? "text-[#1D6FD8]" :
                                   stat.color === "text-purple-600" ? "text-purple-600" :
                                   "text-green-600";
                  return (
                    <div key={index} className="relative w-16 h-16 md:w-20 md:h-20">
                      <Button
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white ${iconColor} hover:bg-gray-50 p-0 flex flex-col items-center justify-center gap-1 shadow-lg hover:shadow-xl transition-all hover:scale-105 relative z-10 border-2`}
                        style={{ borderColor }}
                        size="sm"
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-xs md:text-sm font-semibold">{stat.value}</span>
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        

        {/* Quick Actions */}
        <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Card
            className="p-3 md:p-6 bg-gradient-to-br from-[#FF7A33]/10 to-[#FF9966]/10 border-[#FF7A33]/20 hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => onNavigate && onNavigate("ai-insights")}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF7A33] to-[#FF9966] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-xs">Get AI Insights</h4>
                <p className="text-xs text-gray-600">
                  Personalized profile recommendations
                </p>
              </div>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            </div>
          </Card>
        </div>

        {/* Recommended Connections */}
        <Card className="mt-6 md:mt-8 p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm md:text-base">Recommended Connections</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Based on your interests and goals
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-xs" onClick={() => onNavigate && onNavigate("connection-matchmaking")}>
              View All
            </Button>
          </div>
          <div className="space-y-3 md:space-y-4">
            {recommendedConnections.map((connection) => (
              <div
                key={connection.id}
                className="flex items-center justify-between p-3 md:p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 md:w-12 md:h-12">
                    <AvatarFallback className="bg-gray-200 text-gray-700 text-xs md:text-sm">
                      {connection.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm md:text-base">{connection.name}</p>
                    <p className="text-xs md:text-sm text-gray-600">{connection.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Badge
                    variant="outline"
                    className="text-[#FF7A33] border-[#FF7A33] text-xs"
                  >
                    {connection.match}% Match
                  </Badge>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white text-xs"
                    onClick={() => onNavigate && onNavigate("connection-matchmaking")}
                  >
                    <UserPlus className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}