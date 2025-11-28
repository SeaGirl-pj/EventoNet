import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Link2,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Calendar,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowLeft,
  Save,
} from "lucide-react";
import { toast } from "sonner";

interface ProfileDetailsPageProps {
  onBack: () => void;
}

export function ProfileDetailsPage({ onBack }: ProfileDetailsPageProps) {
  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "John Doe",
    age: "28",
    gender: "Male",
    dateOfBirth: "1996-05-15",
    country: "United States",
    city: "San Francisco",
  });

  // Social & Professional Links State
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "linkedin.com/in/johndoe",
    instagram: "@johndoe",
    website: "johndoe.dev",
    github: "github.com/johndoe",
    twitter: "@johndoe",
  });

  // Professional Background State
  const [professionalBackground, setProfessionalBackground] = useState({
    education: "Bachelor's in Computer Science, Stanford University (2018)",
    workExperience: "Senior Software Engineer at Tech Corp (2020 - Present)",
    skills: "React, TypeScript, Node.js, Python, AWS",
    certifications: "AWS Certified Solutions Architect, Google Cloud Professional",
  });

  // Contact Information State
  const [contactInfo, setContactInfo] = useState({
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, San Francisco, CA 94102",
  });

  // Interests & Topics State
  const [interests, setInterests] = useState({
    userInterests: "Technology, AI, Machine Learning, Web Development",
    hobbies: "Photography, Hiking, Reading, Gaming",
    categories: "Tech, Innovation, Startups, Leadership",
  });

  // Event Preferences State
  const [eventPreferences, setEventPreferences] = useState({
    preferredEventTypes: "Conferences, Workshops, Networking Events",
    preferredLocation: "San Francisco Bay Area",
    preferredTime: "Weekends, Evening",
    engagementLevel: "Active",
  });

  const handleSave = () => {
    // Here you would typically save to a database or state management system
    toast.success("Profile updated successfully!");
    // Optionally navigate back after save
    // onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>
          <h1 className="text-3xl font-bold mb-2">Edit Profile Details</h1>
          <p className="text-gray-600">
            Complete and update your profile information
          </p>
        </div>

        {/* Personal Information */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FF7A33]/10 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-[#FF7A33]" />
            </div>
            <h2 className="text-xl font-semibold">Personal Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={personalInfo.fullName}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, fullName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={personalInfo.age}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, age: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                value={personalInfo.gender}
                onValueChange={(value) =>
                  setPersonalInfo({ ...personalInfo, gender: value })
                }
              >
                <SelectTrigger id="gender">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                  <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={personalInfo.dateOfBirth}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, dateOfBirth: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={personalInfo.country}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, country: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={personalInfo.city}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, city: e.target.value })
                }
              />
            </div>
          </div>
        </Card>

        {/* Social & Professional Links */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#1D6FD8]/10 rounded-lg flex items-center justify-center">
              <Link2 className="w-5 h-5 text-[#1D6FD8]" />
            </div>
            <h2 className="text-xl font-semibold">Social & Professional Links</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Label>
              <Input
                id="linkedin"
                value={socialLinks.linkedin}
                onChange={(e) =>
                  setSocialLinks({ ...socialLinks, linkedin: e.target.value })
                }
                placeholder="linkedin.com/in/username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram" className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                Instagram
              </Label>
              <Input
                id="instagram"
                value={socialLinks.instagram}
                onChange={(e) =>
                  setSocialLinks({ ...socialLinks, instagram: e.target.value })
                }
                placeholder="@username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Website / Portfolio
              </Label>
              <Input
                id="website"
                value={socialLinks.website}
                onChange={(e) =>
                  setSocialLinks({ ...socialLinks, website: e.target.value })
                }
                placeholder="yourwebsite.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="github" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Label>
              <Input
                id="github"
                value={socialLinks.github}
                onChange={(e) =>
                  setSocialLinks({ ...socialLinks, github: e.target.value })
                }
                placeholder="github.com/username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter" className="flex items-center gap-2">
                <Twitter className="w-4 h-4" />
                X (Twitter)
              </Label>
              <Input
                id="twitter"
                value={socialLinks.twitter}
                onChange={(e) =>
                  setSocialLinks({ ...socialLinks, twitter: e.target.value })
                }
                placeholder="@username"
              />
            </div>
          </div>
        </Card>

        {/* Professional Background */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold">Professional Background</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="education" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </Label>
              <Textarea
                id="education"
                value={professionalBackground.education}
                onChange={(e) =>
                  setProfessionalBackground({
                    ...professionalBackground,
                    education: e.target.value,
                  })
                }
                placeholder="Enter your educational background"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workExperience" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </Label>
              <Textarea
                id="workExperience"
                value={professionalBackground.workExperience}
                onChange={(e) =>
                  setProfessionalBackground({
                    ...professionalBackground,
                    workExperience: e.target.value,
                  })
                }
                placeholder="Enter your work experience"
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                id="skills"
                value={professionalBackground.skills}
                onChange={(e) =>
                  setProfessionalBackground({
                    ...professionalBackground,
                    skills: e.target.value,
                  })
                }
                placeholder="Enter your skills (comma-separated)"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="certifications" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </Label>
              <Textarea
                id="certifications"
                value={professionalBackground.certifications}
                onChange={(e) =>
                  setProfessionalBackground({
                    ...professionalBackground,
                    certifications: e.target.value,
                  })
                }
                placeholder="Enter your certifications"
                rows={2}
              />
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold">Contact Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={contactInfo.email}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={contactInfo.phone}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, phone: e.target.value })
                }
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address
              </Label>
              <Textarea
                id="address"
                value={contactInfo.address}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, address: e.target.value })
                }
                rows={2}
              />
            </div>
          </div>
        </Card>

        {/* Interests & Topics */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-pink-600" />
            </div>
            <h2 className="text-xl font-semibold">Interests & Topics</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userInterests">User-Selected Interests</Label>
              <Textarea
                id="userInterests"
                value={interests.userInterests}
                onChange={(e) =>
                  setInterests({ ...interests, userInterests: e.target.value })
                }
                placeholder="Enter your interests"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hobbies">Hobbies</Label>
              <Textarea
                id="hobbies"
                value={interests.hobbies}
                onChange={(e) =>
                  setInterests({ ...interests, hobbies: e.target.value })
                }
                placeholder="Enter your hobbies"
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="categories">Categories</Label>
              <Textarea
                id="categories"
                value={interests.categories}
                onChange={(e) =>
                  setInterests({ ...interests, categories: e.target.value })
                }
                placeholder="Enter categories of interest"
                rows={2}
              />
            </div>
          </div>
        </Card>

        {/* Event Preferences */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold">Event Preferences</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="preferredEventTypes">Preferred Event Types</Label>
              <Textarea
                id="preferredEventTypes"
                value={eventPreferences.preferredEventTypes}
                onChange={(e) =>
                  setEventPreferences({
                    ...eventPreferences,
                    preferredEventTypes: e.target.value,
                  })
                }
                placeholder="Conferences, Workshops, Networking Events"
                rows={2}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredLocation">Preferred Location</Label>
                <Input
                  id="preferredLocation"
                  value={eventPreferences.preferredLocation}
                  onChange={(e) =>
                    setEventPreferences({
                      ...eventPreferences,
                      preferredLocation: e.target.value,
                    })
                  }
                  placeholder="City or Region"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Input
                  id="preferredTime"
                  value={eventPreferences.preferredTime}
                  onChange={(e) =>
                    setEventPreferences({
                      ...eventPreferences,
                      preferredTime: e.target.value,
                    })
                  }
                  placeholder="Weekdays, Weekends, Evening"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="engagementLevel">Engagement Level</Label>
              <Select
                value={eventPreferences.engagementLevel}
                onValueChange={(value) =>
                  setEventPreferences({
                    ...eventPreferences,
                    engagementLevel: value,
                  })
                }
              >
                <SelectTrigger id="engagementLevel">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Casual">Casual</SelectItem>
                  <SelectItem value="Observer">Observer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-4 mb-8">
          <Button variant="outline" onClick={onBack}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8] text-white hover:from-[#FF6A23] hover:to-[#1C5FBC]"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

