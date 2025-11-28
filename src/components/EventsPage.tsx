import { useState } from "react";
import { EventCard } from "./EventCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Search,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Filter,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface EventsPageProps {
  onViewEvent?: () => void;
  onNavigate?: (page: string) => void;
}

export function EventsPage({ onViewEvent, onNavigate }: EventsPageProps) {
  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Categories list
  const categories = [
    "Technology",
    "Marketing",
    "Networking",
    "Creative",
    "Entertainment",
    "Business",
    "Design",
    "Finance",
    "Healthcare",
    "Education",
    "Startups",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "Blockchain",
  ];

  // Countries and cities data
  const countriesWithCities: Record<string, string[]> = {
    "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
    "United Kingdom": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
    "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
    "France": ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    "Japan": ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo"],
    "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity(""); // Reset city when country changes
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedCountry("");
    setSelectedCity("");
  };

  // Check if any filter is selected
  const hasActiveFilters = selectedCategory || selectedCountry || selectedCity;

  const allEvents = [
    {
      id: "1",
      title: "Global Tech Innovation Summit 2025",
      date: "Nov 20, 2025",
      time: "9:00 AM",
      location: "San Francisco Convention Center, CA",
      type: "in-person" as const,
      attendees: 450,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080&q=80",
      tags: ["Innovation", "AI", "Leadership"],
      isFeatured: true,
    },
    {
      id: "2",
      title: "Advanced Digital Marketing Bootcamp",
      date: "Nov 22, 2025",
      time: "2:00 PM",
      location: "Online via Zoom",
      type: "online" as const,
      attendees: 320,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80",
      tags: ["SEO", "Content Marketing", "Analytics"],
    },
    {
      id: "3",
      title: "Startup Founders & Investors Mixer",
      date: "Nov 25, 2025",
      time: "6:00 PM",
      location: "WeWork Downtown, New York",
      type: "in-person" as const,
      attendees: 180,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1080&q=80",
      tags: ["Startups", "Venture Capital", "Pitching"],
    },
    {
      id: "4",
      title: "Deep Learning & Neural Networks Workshop",
      date: "Dec 1, 2025",
      time: "10:00 AM",
      location: "MIT Campus, Cambridge, MA",
      type: "in-person" as const,
      attendees: 280,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1080&q=80",
      tags: ["Machine Learning", "Python", "TensorFlow"],
      isFeatured: true,
    },
    {
      id: "5",
      title: "Contemporary Art & Design Exhibition",
      date: "Dec 5, 2025",
      time: "7:00 PM",
      location: "MoMA Gallery, Manhattan",
      type: "in-person" as const,
      attendees: 150,
      category: "Creative",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1080&q=80",
      tags: ["Modern Art", "Design", "Gallery"],
    },
    {
      id: "6",
      title: "Jazz & Blues Music Festival",
      date: "Dec 10, 2025",
      time: "1:00 PM",
      location: "Lincoln Center, New York",
      type: "in-person" as const,
      attendees: 220,
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1080&q=80",
      tags: ["Jazz", "Live Music", "Festival"],
    },
    {
      id: "7",
      title: "Blockchain & Cryptocurrency Conference",
      date: "Dec 12, 2025",
      time: "11:00 AM",
      location: "Austin Convention Center, TX",
      type: "in-person" as const,
      attendees: 380,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1080&q=80",
      tags: ["Blockchain", "Crypto", "Web3"],
    },
    {
      id: "8",
      title: "Sustainable Business Practices Forum",
      date: "Dec 15, 2025",
      time: "3:00 PM",
      location: "Seattle Conference Center, WA",
      type: "in-person" as const,
      attendees: 195,
      category: "Business",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&q=80",
      tags: ["Sustainability", "ESG", "Green Business"],
    },
    {
      id: "9",
      title: "UX/UI Design Masterclass",
      date: "Dec 18, 2025",
      time: "9:30 AM",
      location: "Online via Microsoft Teams",
      type: "online" as const,
      attendees: 275,
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80",
      tags: ["UX Design", "UI", "User Research"],
    },
    {
      id: "10",
      title: "Women in Tech Leadership Summit",
      date: "Dec 20, 2025",
      time: "8:00 AM",
      location: "Silicon Valley Tech Park, CA",
      type: "in-person" as const,
      attendees: 320,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&q=80",
      tags: ["Diversity", "Leadership", "Women in Tech"],
    },
  ];

  // Trending events - same as shown on Home page Trending section
  const trendingEvents = [
    {
      id: "4",
      title: "Deep Learning & Neural Networks Workshop",
      date: "Dec 1, 2025",
      time: "10:00 AM",
      location: "MIT Campus, Cambridge, MA",
      type: "in-person" as const,
      attendees: 280,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1080&q=80",
      tags: ["Machine Learning", "Python", "TensorFlow"],
      isFeatured: true,
    },
    {
      id: "5",
      title: "Contemporary Art & Design Exhibition",
      date: "Dec 5, 2025",
      time: "7:00 PM",
      location: "MoMA Gallery, Manhattan",
      type: "in-person" as const,
      attendees: 150,
      category: "Creative",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1080&q=80",
      tags: ["Modern Art", "Design", "Gallery"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      {/* Hero Section relocated from Home */}
      <div className="bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-start p-4 md:p-6 lg:p-8">
            <h1 className="text-lg md:text-2xl lg:text-3xl mb-2">Curated Events For You</h1>
            <p className="text-white/90 text-xs md:text-sm lg:text-base mb-3">
            You have 5 recommended events this week based on your interests
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              <Button
                onClick={() => onNavigate?.("events")}
                className="hero-buttons-mobile bg-white text-[#FF7A33] hover:bg-gray-100"
                size="sm"
              >
                <Sparkles />
                Discover Events
              </Button>
              <Button
                variant="outline"
                className="hero-buttons-mobile bg-white/10 border-white text-white hover:bg-white/20"
                size="sm"
                onClick={() => onNavigate?.("event-calendar")}
              >
                <Calendar />
                View Calendar
              </Button>
              <Button
                variant="outline"
                className="hero-buttons-mobile bg-white/10 border-white text-white hover:bg-white/20"
                size="sm"
                onClick={() => onNavigate?.("connection-matchmaking")}
              >
                <Users />
                Matchmaking
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Header */}
        <div className="mt-4 md:mt-6 mb-4 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div>
              <h1 className="mb-2 text-lg md:text-xl lg:text-2xl">Discover Events</h1>
              <p className="text-gray-600 text-sm md:text-base">
                Find and join events that match your interests
              </p>
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className={`posts-filter-btn ${hasActiveFilters ? "posts-filter-btn-active" : ""}`}
              size="sm"
            >
              <Filter className="w-3 h-3" />
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <Card className="p-3 md:p-4 mb-4 md:mb-6">
              <div className="space-y-4 md:space-y-6">
                {/* Categories */}
                <div>
                  <label className="text-xs md:text-sm font-medium mb-2 block">Categories</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="text-xs md:text-sm h-8 md:h-10">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="text-xs md:text-sm">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Country */}
                <div>
                  <label className="text-xs md:text-sm font-medium mb-2 block">Country</label>
                  <Select value={selectedCountry} onValueChange={handleCountryChange}>
                    <SelectTrigger className="text-xs md:text-sm h-8 md:h-10">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(countriesWithCities).map((country) => (
                        <SelectItem key={country} value={country} className="text-xs md:text-sm">
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* City - Only show when country is selected */}
                {selectedCountry && (
                  <div>
                    <label className="text-xs md:text-sm font-medium mb-2 block">City</label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger className="text-xs md:text-sm h-8 md:h-10">
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                      <SelectContent>
                        {countriesWithCities[selectedCountry]?.map((city) => (
                          <SelectItem key={city} value={city} className="text-xs md:text-sm">
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Clear Filters Button */}
                {hasActiveFilters && (
                  <div className="pt-2 border-t">
                    <Button
                      onClick={handleClearFilters}
                      variant="outline"
                      className="w-full text-xs md:text-sm h-8 md:h-10"
                      size="sm"
                    >
                      <X className="w-3 h-3 md:w-4 md:h-4 mr-1.5" />
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Search and AI Finder */}
        <div className="mb-4 md:mb-8 space-y-3 md:space-y-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="w-full max-w-lg relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 z-10 pointer-events-none" />
              <Input
                type="search"
                placeholder="Search events, topics, speakers..."
                className="pl-10 md:pl-12 h-10 md:h-12 w-full text-sm pr-3"
              />
            </div>
          </div>

        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="all" className="space-y-3 md:space-y-6">
          <TabsList className="events-tabs-list flex flex-row flex-nowrap w-full max-w-lg">
            <TabsTrigger value="all" className="events-tabs-trigger">All Events</TabsTrigger>
            <TabsTrigger value="trending" className="events-tabs-trigger">Trending</TabsTrigger>
            <TabsTrigger value="upcoming" className="events-tabs-trigger">Upcoming</TabsTrigger>
            <TabsTrigger value="saved" className="events-tabs-trigger">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 md:space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs md:text-sm">
                Showing {allEvents.length} events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {allEvents.map((event) => (
                <EventCard key={event.id} {...event} onViewDetails={onViewEvent} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="space-y-3 md:space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs md:text-sm">
                Showing {trendingEvents.length} trending events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {trendingEvents.map((event) => (
                <EventCard key={event.id} {...event} onViewDetails={onViewEvent} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-3 md:space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs md:text-sm">
                Showing {allEvents.filter((e) => e.date.includes("Nov")).length}{" "}
                upcoming events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {allEvents
                .filter((e) => e.date.includes("Nov"))
                .map((event) => (
                  <EventCard key={event.id} {...event} onViewDetails={onViewEvent} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <Card className="p-6 md:p-12 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-sm md:text-base">No Saved Events</h3>
              <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm">
                Start saving events you're interested in
              </p>
              <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white text-xs md:text-sm" size="sm">
                Explore Events
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
