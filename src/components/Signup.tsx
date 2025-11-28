import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { Calendar, ArrowRight, ArrowLeft, Check, Users, Briefcase, GraduationCap, Presentation, Sparkles, Palette, Music, Heart, Globe, Target, TrendingUp, Zap, Coffee, Mountain } from "lucide-react";

interface SignupProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export function Signup({ onSignup, onSwitchToLogin }: SignupProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    eventTypes: [] as string[],
    networkingGoals: [] as string[],
    skillsToLearn: "",
    experienceLevel: "",
    wantsAISuggestions: "",
    eventCategories: [] as string[],
    preferredEventStyles: [] as string[],
    eventGoals: [] as string[],
  });

  const totalSteps = 9;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onSignup();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleArrayItem = (field: "eventTypes" | "networkingGoals" | "eventCategories" | "preferredEventStyles" | "eventGoals", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF7A33]/10 via-white to-[#1D6FD8]/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-xl md:text-3xl">EventConnect</h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            {step === 1
              ? "Create your account"
              : "Help us personalize your experience"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 md:mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-xs md:text-sm text-gray-600">Step {step} of {totalSteps}</span>
            <span className="text-xs md:text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-1.5 md:h-2" />
        </div>

        {/* Form Card */}
        <Card className="p-4 md:p-8 shadow-xl">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4 md:space-y-5">
              <div>
                <h2 className="mb-2 text-lg md:text-xl">Let's get started</h2>
                <p className="text-gray-600 text-sm md:text-base">Create your EventConnect account</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <p className="text-xs text-gray-500">
                  Must be at least 8 characters
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Event Types */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What type of events interest you?</h2>
                <p className="text-gray-600">Select all that apply</p>
              </div>
              <div className="space-y-3">
                {[
                  "Networking Events",
                  "Conferences & Summits",
                  "Workshops & Training",
                  "Webinars & Online Events",
                  "Social & Cultural Events",
                  "Career Fairs",
                  "Hackathons & Competitions",
                  "Panel Discussions",
                ].map((type) => (
                  <div
                    key={type}
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => toggleArrayItem("eventTypes", type)}
                  >
                    <Checkbox
                      id={type}
                      checked={formData.eventTypes.includes(type)}
                      onCheckedChange={() => toggleArrayItem("eventTypes", type)}
                    />
                    <Label htmlFor={type} className="cursor-pointer flex-1">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Networking Goals */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What are your networking goals?</h2>
                <p className="text-gray-600">Select all that apply</p>
              </div>
              <div className="space-y-3">
                {[
                  "Find job opportunities",
                  "Build professional connections",
                  "Learn new skills",
                  "Find mentors or mentees",
                  "Discover business partnerships",
                  "Stay updated with industry trends",
                  "Share my expertise",
                  "Expand my client base",
                ].map((goal) => (
                  <div
                    key={goal}
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => toggleArrayItem("networkingGoals", goal)}
                  >
                    <Checkbox
                      id={goal}
                      checked={formData.networkingGoals.includes(goal)}
                      onCheckedChange={() => toggleArrayItem("networkingGoals", goal)}
                    />
                    <Label htmlFor={goal} className="cursor-pointer flex-1">
                      {goal}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Skills to Learn */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What skills or topics are you trying to learn?</h2>
                <p className="text-gray-600">
                  Help us recommend the right events for you
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills or Topics</Label>
                <textarea
                  id="skills"
                  className="w-full min-h-[120px] px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A33] focus:border-transparent resize-none"
                  placeholder="e.g., Data Science, Public Speaking, Leadership, AI & Machine Learning, Marketing Strategy..."
                  value={formData.skillsToLearn}
                  onChange={(e) =>
                    setFormData({ ...formData, skillsToLearn: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {/* Step 5: Event Experience Level */}
          {step === 5 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What's your event experience level?</h2>
                <p className="text-gray-600">
                  Help us tailor the event recommendations
                </p>
              </div>
              <RadioGroup
                value={formData.experienceLevel}
                onValueChange={(value) =>
                  setFormData({ ...formData, experienceLevel: value })
                }
                className="space-y-3"
              >
                {[
                  {
                    value: "beginner",
                    label: "Just Getting Started",
                    desc: "I'm new to professional events and networking",
                  },
                  {
                    value: "intermediate",
                    label: "Regular Attendee",
                    desc: "I attend events occasionally and have some experience",
                  },
                  {
                    value: "advanced",
                    label: "Event Veteran",
                    desc: "I frequently attend and organize events",
                  },
                  {
                    value: "expert",
                    label: "Industry Expert",
                    desc: "I'm a speaker, organizer, or industry leader",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 6: AI Suggestions */}
          {step === 6 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">Enable AI-powered recommendations?</h2>
                <p className="text-gray-600">
                  Let our AI help you discover the perfect events and connections
                </p>
              </div>
              <RadioGroup
                value={formData.wantsAISuggestions}
                onValueChange={(value) =>
                  setFormData({ ...formData, wantsAISuggestions: value })
                }
                className="space-y-3"
              >
                {[
                  {
                    value: "yes",
                    label: "Yes, enable AI suggestions",
                    desc: "Get personalized event recommendations and connection matches",
                  },
                  {
                    value: "limited",
                    label: "Limited AI assistance",
                    desc: "Use AI for event discovery only, not for connections",
                  },
                  {
                    value: "no",
                    label: "No AI suggestions",
                    desc: "I prefer to browse events manually",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              <div className="p-4 bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10 rounded-lg border border-[#FF7A33]/20 mt-4">
                <p className="text-sm text-gray-700">
                  💡 <strong>Privacy Note:</strong> Your data is used only to improve
                  your experience and is never shared with third parties.
                </p>
              </div>
            </div>
          )}

          {/* Step 7: Choose Event Categories */}
          {step === 7 && (
            <div className="space-y-4 md:space-y-5">
              <div>
                <h2 className="mb-2 text-lg md:text-xl font-bold">Choose Event Categories</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Select the types of events you're most interested in. You can choose multiple categories.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { label: "Networking", icon: Users, color: "from-[#FF7A33] to-[#FF9966]" },
                  { label: "Business & Entrepreneurship", icon: Briefcase, color: "from-[#1D6FD8] to-[#4A90E2]" },
                  { label: "Workshops", icon: GraduationCap, color: "from-[#FF7A33] to-[#FF9966]" },
                  { label: "Technology & Innovation", icon: Sparkles, color: "from-[#1D6FD8] to-[#4A90E2]" },
                  { label: "Arts & Culture", icon: Palette, color: "from-[#FF7A33] to-[#FF9966]" },
                  { label: "Social Events", icon: Users, color: "from-[#1D6FD8] to-[#4A90E2]" },
                  { label: "Wellness", icon: Heart, color: "from-[#FF7A33] to-[#FF9966]" },
                  { label: "Music & Performances", icon: Music, color: "from-[#1D6FD8] to-[#4A90E2]" },
                ].map((category) => {
                  const isSelected = formData.eventCategories.includes(category.label);
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.label}
                      onClick={() => toggleArrayItem("eventCategories", category.label)}
                      className={`
                        group relative p-4 md:p-5 rounded-xl border-2 transition-all duration-300 transform hover:scale-105
                        ${isSelected 
                          ? `border-[#FF7A33] bg-gradient-to-br ${category.color} text-white shadow-lg shadow-[#FF7A33]/30` 
                          : "border-gray-200 bg-white hover:border-[#1D6FD8]/50 hover:shadow-md"
                        }
                      `}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all ${
                          isSelected 
                            ? "bg-white/20 scale-110" 
                            : `bg-gradient-to-br ${category.color} text-white group-hover:scale-110`
                        }`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                        <span className={`font-semibold text-xs md:text-sm text-center leading-tight ${
                          isSelected ? "text-white" : "text-gray-900"
                        }`}>
                          {category.label}
                        </span>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                            <Check className="w-4 h-4 text-[#FF7A33]" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 8: Preferred Event Style */}
          {step === 8 && (
            <div className="space-y-4 md:space-y-5">
              <div>
                <h2 className="mb-2 text-lg md:text-xl font-bold">Preferred Event Style</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  What type of event atmosphere or format do you prefer? Select one or multiple options.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {[
                  { label: "Professional / Formal", icon: Briefcase, color: "from-[#1D6FD8] to-[#4A90E2]", desc: "Business formal events" },
                  { label: "Educational", icon: GraduationCap, color: "from-[#FF7A33] to-[#FF9966]", desc: "Learning-focused sessions" },
                  { label: "Networking-focused", icon: Users, color: "from-[#1D6FD8] to-[#4A90E2]", desc: "Connection-building events" },
                  { label: "Social / Casual", icon: Coffee, color: "from-[#FF7A33] to-[#FF9966]", desc: "Relaxed gatherings" },
                  { label: "Creative / Artistic", icon: Palette, color: "from-[#1D6FD8] to-[#4A90E2]", desc: "Artistic experiences" },
                  { label: "Outdoor / Activity-based", icon: Mountain, color: "from-[#FF7A33] to-[#FF9966]", desc: "Active outdoor events" },
                ].map((style) => {
                  const isSelected = formData.preferredEventStyles.includes(style.label);
                  const Icon = style.icon;
                  return (
                    <button
                      key={style.label}
                      onClick={() => toggleArrayItem("preferredEventStyles", style.label)}
                      className={`
                        group relative p-5 md:p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02]
                        ${isSelected 
                          ? `border-[#FF7A33] bg-gradient-to-br ${style.color} text-white shadow-lg shadow-[#FF7A33]/30` 
                          : "border-gray-200 bg-white hover:border-[#1D6FD8]/50 hover:shadow-lg"
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected 
                            ? "bg-white/20 scale-110" 
                            : `bg-gradient-to-br ${style.color} text-white group-hover:scale-110`
                        }`}>
                          <Icon className="w-7 h-7 md:w-8 md:h-8" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2 mb-1 md:mb-2">
                            <span className={`font-bold text-sm md:text-base ${
                              isSelected ? "text-white" : "text-gray-900"
                            }`}>
                              {style.label}
                            </span>
                            {isSelected && (
                              <Check className="w-5 h-5 md:w-6 md:h-6 text-white ml-auto" />
                            )}
                          </div>
                          <p className={`text-xs md:text-sm ${
                            isSelected ? "text-white/90" : "text-gray-600"
                          }`}>
                            {style.desc}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 9: Event Goals & Motivation */}
          {step === 9 && (
            <div className="space-y-4 md:space-y-5">
              <div>
                <h2 className="mb-2 text-lg md:text-xl font-bold">Event Goals & Motivation</h2>
                <p className="text-gray-600 text-sm md:text-base">
                  What do you want to achieve by attending events? Select all that apply.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {[
                  { label: "Expanding professional network", icon: Users, color: "from-[#FF7A33] to-[#FF9966]", desc: "Build meaningful connections" },
                  { label: "Learning new skills", icon: GraduationCap, color: "from-[#1D6FD8] to-[#4A90E2]", desc: "Develop expertise" },
                  { label: "Career/business development", icon: Target, color: "from-[#FF7A33] to-[#FF9966]", desc: "Advance your career" },
                  { label: "Industry insights", icon: TrendingUp, color: "from-[#1D6FD8] to-[#4A90E2]", desc: "Stay ahead of trends" },
                  { label: "Exploration and personal growth", icon: Sparkles, color: "from-[#FF7A33] to-[#FF9966]", desc: "Discover new opportunities" },
                  { label: "Enjoying entertainment and activities", icon: Music, color: "from-[#1D6FD8] to-[#4A90E2]", desc: "Fun and engaging experiences" },
                ].map((goal) => {
                  const isSelected = formData.eventGoals.includes(goal.label);
                  const Icon = goal.icon;
                  return (
                    <button
                      key={goal.label}
                      onClick={() => toggleArrayItem("eventGoals", goal.label)}
                      className={`
                        group relative p-5 md:p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02]
                        ${isSelected 
                          ? `border-[#FF7A33] bg-gradient-to-br ${goal.color} text-white shadow-lg shadow-[#FF7A33]/30` 
                          : "border-gray-200 bg-white hover:border-[#1D6FD8]/50 hover:shadow-lg"
                        }
                      `}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected 
                            ? "bg-white/20 scale-110" 
                            : `bg-gradient-to-br ${goal.color} text-white group-hover:scale-110`
                        }`}>
                          <Icon className="w-7 h-7 md:w-8 md:h-8" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2 mb-1 md:mb-2">
                            <span className={`font-bold text-sm md:text-base ${
                              isSelected ? "text-white" : "text-gray-900"
                            }`}>
                              {goal.label}
                            </span>
                            {isSelected && (
                              <Check className="w-5 h-5 md:w-6 md:h-6 text-white ml-auto" />
                            )}
                          </div>
                          <p className={`text-xs md:text-sm ${
                            isSelected ? "text-white/90" : "text-gray-600"
                          }`}>
                            {goal.desc}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button
              type="button"
              onClick={handleNext}
              className={`bg-gradient-to-r from-[#FF7A33] to-[#FF9966] hover:from-[#FF6A23] hover:to-[#FF8856] text-white ${
                step === 1 ? "w-full" : "flex-1"
              }`}
            >
              {step === totalSteps ? (
                <>
                  Complete
                  <Check className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          {step === 1 && (
            <p className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={onSwitchToLogin}
                className="text-[#1D6FD8] hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
