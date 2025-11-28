import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { ArrowLeft, Target, Plus, X, TrendingUp } from "lucide-react";

interface SkillsInterestsPageProps {
  onBack: () => void;
}

export function SkillsInterestsPage({ onBack }: SkillsInterestsPageProps) {
  const [newSkill, setNewSkill] = useState("");
  const [newInterest, setNewInterest] = useState("");

  const [skills, setSkills] = useState([
    { name: "JavaScript", level: "Expert", endorsed: 12 },
    { name: "React", level: "Expert", endorsed: 10 },
    { name: "Node.js", level: "Advanced", endorsed: 8 },
    { name: "Python", level: "Intermediate", endorsed: 6 },
    { name: "Leadership", level: "Advanced", endorsed: 15 },
    { name: "Project Management", level: "Advanced", endorsed: 11 },
    { name: "Team Building", level: "Expert", endorsed: 14 },
    { name: "Public Speaking", level: "Intermediate", endorsed: 5 },
  ]);

  const [interests, setInterests] = useState([
    "Artificial Intelligence",
    "Machine Learning",
    "Product Development",
    "Startup Ecosystem",
    "Leadership",
    "Innovation",
    "Technology Trends",
    "Networking",
    "Public Speaking",
    "Entrepreneurship",
  ]);

  const suggestedSkills = [
    "TypeScript",
    "Docker",
    "AWS",
    "GraphQL",
    "Agile Methodology",
  ];

  const suggestedInterests = [
    "Blockchain",
    "Cloud Computing",
    "Data Science",
    "UX Design",
    "DevOps",
  ];

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { name: newSkill, level: "Beginner", endorsed: 0 }]);
      setNewSkill("");
    }
  };

  const handleAddInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  const handleRemoveSkill = (skillName: string) => {
    setSkills(skills.filter((s) => s.name !== skillName));
  };

  const handleRemoveInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-600";
      case "Advanced":
        return "bg-[#1D6FD8]";
      case "Intermediate":
        return "bg-[#FF7A33]";
      default:
        return "bg-gray-600";
    }
  };

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
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="mb-1">Skills & Interests</h1>
              <p className="text-gray-600">
                Manage your professional skills and areas of interest
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#FF7A33]">{skills.length}</div>
            <div className="text-sm text-gray-600">Total Skills</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-[#1D6FD8]">{interests.length}</div>
            <div className="text-sm text-gray-600">Interests</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-green-600">
              {skills.reduce((sum, s) => sum + s.endorsed, 0)}
            </div>
            <div className="text-sm text-gray-600">Endorsements</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl mb-1 text-purple-600">
              {skills.filter((s) => s.level === "Expert").length}
            </div>
            <div className="text-sm text-gray-600">Expert Level</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Section */}
          <div>
            <h2 className="mb-4">Professional Skills</h2>

            {/* Add Skill */}
            <Card className="p-4 mb-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new skill..."
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
                />
                <Button
                  onClick={handleAddSkill}
                  className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Current Skills */}
            <Card className="p-5 mb-4">
              <h3 className="mb-4">Your Skills</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p>{skill.name}</p>
                        <Badge className={`${getLevelColor(skill.level)} text-white border-0`}>
                          {skill.level}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <TrendingUp className="w-3 h-3" />
                        <span>{skill.endorsed} endorsements</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveSkill(skill.name)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Suggested Skills */}
            <Card className="p-5">
              <h3 className="mb-4">Suggested Skills</h3>
              <p className="text-sm text-gray-600 mb-4">
                Based on your profile and industry trends
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.map((skill, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setSkills([...skills, { name: skill, level: "Beginner", endorsed: 0 }])
                    }
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {skill}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Interests Section */}
          <div>
            <h2 className="mb-4">Areas of Interest</h2>

            {/* Add Interest */}
            <Card className="p-4 mb-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new interest..."
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddInterest()}
                />
                <Button
                  onClick={handleAddInterest}
                  className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Current Interests */}
            <Card className="p-5 mb-4">
              <h3 className="mb-4">Your Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-[#1D6FD8] border-[#1D6FD8] px-3 py-1.5 group hover:bg-[#1D6FD8] hover:text-white transition-colors cursor-pointer"
                  >
                    {interest}
                    <button
                      onClick={() => handleRemoveInterest(interest)}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Suggested Interests */}
            <Card className="p-5 mb-4">
              <h3 className="mb-4">Suggested Interests</h3>
              <p className="text-sm text-gray-600 mb-4">
                Popular topics in your network
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedInterests.map((interest, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInterests([...interests, interest])}
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {interest}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Interest Impact */}
            <Card className="p-5 bg-gradient-to-r from-[#FF7A33]/5 to-[#1D6FD8]/5 border-[#FF7A33]/20">
              <h3 className="mb-3">Impact on Your Profile</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p className="text-gray-700">
                    Skills and interests help match you with relevant events
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p className="text-gray-700">
                    More skills increase your profile visibility by up to 40%
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <p className="text-gray-700">
                    Endorsements build credibility and trust in your network
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
