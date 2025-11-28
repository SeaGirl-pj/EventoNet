import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  TrendingUp,
  Target,
  X,
} from "lucide-react";
import { toast } from "sonner";

interface AIInsightsPageProps {
  onBack: () => void;
  onNavigate?: (page: string) => void;
}

export function AIInsightsPage({ onBack, onNavigate }: AIInsightsPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Step 1: User Interests
  const [eventTypes, setEventTypes] = useState<string[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [atmosphere, setAtmosphere] = useState<string>("");

  // Step 2: Availability & Preferences
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [preferredDistance, setPreferredDistance] = useState<string>("");

  // Step 3: Personal Experience Level
  const [eventFrequency, setEventFrequency] = useState<string>("");
  const [mainGoal, setMainGoal] = useState<string>("");
  const [avoidTypes, setAvoidTypes] = useState<string>("");

  const availableTopics = [
    "Technology",
    "Business",
    "Design",
    "Marketing",
    "AI & Machine Learning",
    "Startups",
    "Networking",
    "Leadership",
    "Innovation",
    "Finance",
  ];

  const availableEventTypes = [
    "Conferences",
    "Workshops",
    "Networking Events",
    "Seminars",
    "Meetups",
    "Hackathons",
    "Webinars",
    "Expos",
  ];

  const toggleTopic = (topic: string) => {
    setTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const toggleEventType = (type: string) => {
    setEventTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleDay = (day: string) => {
    setPreferredDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (eventTypes.length === 0 || topics.length === 0 || !atmosphere) {
        toast.error("Please complete all fields in Step 1");
        return;
      }
    } else if (currentStep === 2) {
      if (
        preferredDays.length === 0 ||
        !preferredTime ||
        !preferredDistance
      ) {
        toast.error("Please complete all fields in Step 2");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinish = () => {
    if (!eventFrequency || !mainGoal) {
      toast.error("Please complete all required fields in Step 3");
      return;
    }

    // Save all responses (in a real app, this would go to a backend)
    const responses = {
      step1: {
        eventTypes,
        topics,
        atmosphere,
      },
      step2: {
        preferredDays,
        preferredTime,
        preferredDistance,
      },
      step3: {
        eventFrequency,
        mainGoal,
        avoidTypes,
      },
    };

    console.log("AI Insights Responses:", responses);
    toast.success("Your preferences have been saved! We'll personalize your recommendations.");
    
    // Redirect to results or back to profile
    if (onNavigate) {
      onNavigate("ai-recommendations");
    } else {
      onBack();
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#FF9966] rounded-xl flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Get AI Insights</h1>
              <p className="text-gray-600">
                Help us personalize your event recommendations
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-[#FF7A33]">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-6 md:p-8">
          {/* Step 1: User Interests */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">User Interests</h2>
                <p className="text-gray-600">
                  Tell us about your event preferences
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium">
                  What type of events are you most interested in?
                </Label>
                <p className="text-sm text-gray-500 mb-3">
                  Select all that apply
                </p>
                <div className="flex flex-wrap gap-2">
                  {availableEventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => toggleEventType(type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        eventTypes.includes(type)
                          ? "bg-[#FF7A33] text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium">
                  Choose your favorite topics or categories
                </Label>
                <p className="text-sm text-gray-500 mb-3">
                  Select all that apply
                </p>
                <div className="flex flex-wrap gap-2">
                  {availableTopics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => toggleTopic(topic)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        topics.includes(topic)
                          ? "bg-[#1D6FD8] text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="atmosphere" className="text-base font-medium">
                  What kind of event atmosphere do you prefer?
                </Label>
                <Select value={atmosphere} onValueChange={setAtmosphere}>
                  <SelectTrigger id="atmosphere">
                    <SelectValue placeholder="Select atmosphere preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 2: Availability & Preferences */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Availability & Preferences
                </h2>
                <p className="text-gray-600">
                  When and where do you prefer to attend events?
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium">
                  Which days do you prefer attending events?
                </Label>
                <p className="text-sm text-gray-500 mb-3">
                  Select all that apply
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        preferredDays.includes(day)
                          ? "bg-[#FF7A33] text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime" className="text-base font-medium">
                  Preferred event time?
                </Label>
                <Select
                  value={preferredTime}
                  onValueChange={setPreferredTime}
                >
                  <SelectTrigger id="preferredTime">
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="preferredDistance"
                  className="text-base font-medium"
                >
                  Preferred event distance?
                </Label>
                <Select
                  value={preferredDistance}
                  onValueChange={setPreferredDistance}
                >
                  <SelectTrigger id="preferredDistance">
                    <SelectValue placeholder="Select preferred distance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nearby">Nearby only</SelectItem>
                    <SelectItem value="city-wide">City-wide</SelectItem>
                    <SelectItem value="national">National</SelectItem>
                    <SelectItem value="no-preference">No preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 3: Personal Experience Level */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Personal Experience Level
                </h2>
                <p className="text-gray-600">
                  Help us understand your event experience
                </p>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="eventFrequency"
                  className="text-base font-medium"
                >
                  How often do you attend events?
                </Label>
                <Select
                  value={eventFrequency}
                  onValueChange={setEventFrequency}
                >
                  <SelectTrigger id="eventFrequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rarely">Rarely</SelectItem>
                    <SelectItem value="sometimes">Sometimes</SelectItem>
                    <SelectItem value="regularly">Regularly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mainGoal" className="text-base font-medium">
                  What is your main goal?
                </Label>
                <Select value={mainGoal} onValueChange={setMainGoal}>
                  <SelectTrigger id="mainGoal">
                    <SelectValue placeholder="Select your main goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="learning">Learning</SelectItem>
                    <SelectItem value="socializing">Socializing</SelectItem>
                    <SelectItem value="career-growth">Career growth</SelectItem>
                    <SelectItem value="fun-entertainment">
                      Fun & entertainment
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="avoidTypes" className="text-base font-medium">
                  Any event types you want to avoid? (Optional)
                </Label>
                <Textarea
                  id="avoidTypes"
                  value={avoidTypes}
                  onChange={(e) => setAvoidTypes(e.target.value)}
                  placeholder="E.g., Large crowds, specific topics, etc."
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8] text-white hover:from-[#FF6A23] hover:to-[#1C5FBC]"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleFinish}
                className="bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8] text-white hover:from-[#FF6A23] hover:to-[#1C5FBC]"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Finish
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

