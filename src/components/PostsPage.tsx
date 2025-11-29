import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Plus,
  Image as ImageIcon,
  Calendar,
  MoreVertical,
  Edit,
  Trash2,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  X,
  AlertCircle,
  Filter,
  Bookmark,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Post {
  id: string;
  userId: string;
  userName: string;
  userInitials: string;
  eventName: string;
  eventId: string;
  caption: string;
  image: string;
  timestamp: string;
  likes: number;
  comments: number;
  isOwnPost: boolean;
}

interface PostsPageProps {
  onNavigate?: (page: string, eventId?: string) => void;
}

export function PostsPage({ onNavigate }: PostsPageProps) {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostCaption, setNewPostCaption] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  // New state for event selection / creation
  const [useCreateEvent, setUseCreateEvent] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  const [newEventLocation, setNewEventLocation] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    photo: "",
    caption: "",
    event: "",
  });
  const [eventPopoverOpen, setEventPopoverOpen] = useState(false);

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

  // Mock saved events data - in a real app, this would come from user's saved events
  const savedEvents = [
    {
      id: "1",
      title: "Tech Leaders Summit 2025",
      date: "November 20, 2025",
      time: "9:00 AM",
    },
    {
      id: "2",
      title: "Digital Marketing Conference",
      date: "November 22, 2025",
      time: "2:00 PM",
    },
    {
      id: "3",
      title: "Startup Networking Summit",
      date: "November 25, 2025",
      time: "6:00 PM",
    },
  ];

  // Find the most recently saved upcoming event
  const getMostRecentUpcomingEvent = () => {
    const now = new Date();
    const upcoming = savedEvents
      .map((event) => {
        const eventDate = new Date(event.date);
        return { ...event, eventDate };
      })
      .filter((event) => event.eventDate > now)
      .sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime());

    return upcoming.length > 0 ? upcoming[0] : null;
  };

  // Calculate countdown
  const calculateCountdown = () => {
    const nextEvent = getMostRecentUpcomingEvent();
    if (!nextEvent) {
      setCountdown({ days: 0, hours: 0, minutes: 0 });
      return;
    }

    const now = new Date();
    const eventDate = nextEvent.eventDate;
    const diff = eventDate.getTime() - now.getTime();

    if (diff <= 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0 });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    setCountdown({ days, hours, minutes });
  };

  // Update countdown every minute
  useEffect(() => {
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Mock events data
  const recentEvents = [
    { id: "1", name: "Tech Leaders Summit 2025" },
    { id: "2", name: "Digital Marketing Conference" },
    { id: "3", name: "AI & Innovation Workshop" },
    { id: "4", name: "Startup Pitch Night" },
  ];

  // Saved posts state
  const [savedPostIds, setSavedPostIds] = useState<string[]>([]);

  // Mock posts data
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      userId: "1",
      userName: "John Doe",
      userInitials: "JD",
      eventName: "Tech Leaders Summit 2025",
      eventId: "1",
      caption:
        "Great insights on AI and leadership at today's summit. Met amazing people and learned so much about the future of technology. Looking forward to implementing these strategies.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NjMxNzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
      isOwnPost: true,
    },
    {
      id: "2",
      userId: "2",
      userName: "Sarah Johnson",
      userInitials: "SJ",
      eventName: "Digital Marketing Conference",
      eventId: "2",
      caption:
        "Excellent workshop on data-driven marketing strategies. The speakers shared valuable insights on customer engagement and conversion optimization.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2MzE3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "5 hours ago",
      likes: 42,
      comments: 8,
      isOwnPost: false,
    },
    {
      id: "3",
      userId: "3",
      userName: "Michael Chen",
      userInitials: "MC",
      eventName: "AI & Innovation Workshop",
      eventId: "3",
      caption:
        "Fascinating deep dive into machine learning applications. The hands-on sessions were particularly valuable for understanding practical implementation.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MzE3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "1 day ago",
      likes: 36,
      comments: 12,
      isOwnPost: false,
    },
    {
      id: "4",
      userId: "4",
      userName: "Emily Rodriguez",
      userInitials: "ER",
      eventName: "Startup Pitch Night",
      eventId: "4",
      caption:
        "Inspiring evening watching innovative startups present their ideas. The level of creativity and problem-solving was impressive.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2h8ZW58MXx8fHwxNzYzMTc3Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "2 days ago",
      likes: 28,
      comments: 6,
      isOwnPost: false,
    },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValidationErrors((prev) => ({ ...prev, photo: "" }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {
      photo: "",
      caption: "",
      event: "",
    };

    if (!imagePreview) {
      errors.photo = "Photo is required";
    }

    if (!newPostCaption.trim()) {
      errors.caption = "Caption is required";
    }

    if (useCreateEvent) {
      if (!newEventTitle.trim() || !newEventDate) {
        errors.event = "Please enter a title and date for the new event";
      }
    } else {
      if (!selectedEvent) {
        errors.event = "Please select an event or create a new one";
      }
    }

    setValidationErrors(errors);
    return !errors.photo && !errors.caption && !errors.event;
  };

  const handleCreatePost = () => {
    if (!validateForm()) return;

    let eventName = "";
    let eventId = "";

    if (useCreateEvent) {
      eventName = newEventTitle.trim();
      eventId = `created-${Date.now()}`;
    } else {
      const selectedEventData = recentEvents.find((e) => e.id === selectedEvent);
      if (!selectedEventData) return;
      eventName = selectedEventData.name;
      eventId = selectedEvent;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      userId: "1",
      userName: "John Doe",
      userInitials: "JD",
      eventName: eventName,
      eventId: eventId,
      caption: newPostCaption,
      image: imagePreview,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      isOwnPost: true,
    };

    setPosts([newPost, ...posts]);
    setShowCreatePost(false);
    setNewPostCaption("");
    setSelectedEvent("");
    setImagePreview("");
    setUseCreateEvent(false);
    setNewEventTitle("");
    setNewEventDate("");
    setNewEventTime("");
    setNewEventLocation("");
    setValidationErrors({ photo: "", caption: "", event: "" });
  };

  const handleDialogClose = (open: boolean) => {
    setShowCreatePost(open);
    if (!open) {
      // Reset form when closing
      setNewPostCaption("");
      setSelectedEvent("");
      setImagePreview("");
      setUseCreateEvent(false);
      setNewEventTitle("");
      setNewEventDate("");
      setNewEventTime("");
      setNewEventLocation("");
      setValidationErrors({ photo: "", caption: "", event: "" });
      setEventPopoverOpen(false);
    }
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
    // Remove from saved if it was saved
    setSavedPostIds(savedPostIds.filter((id) => id !== postId));
  };

  const handleToggleSavePost = (postId: string) => {
    setSavedPostIds((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const handleEditPost = (postId: string) => {
    setEditingPostId(postId);
    // In a real app, you would open an edit dialog here
    alert("Edit functionality would open here with the post content");
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSelectedCountry("");
    setSelectedCity("");
  };

  // Check if any filter is selected
  const hasActiveFilters = selectedCategory || selectedCountry || selectedCity;

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Header */}
        <div className="mb-4 md:mb-8">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div>
              <h1 className="mb-2 text-lg md:text-xl lg:text-2xl">Posts</h1>
              <p className="text-gray-600 text-xs md:text-sm">
                Share your event experiences and connect with other attendees
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
          <Dialog open={showCreatePost} onOpenChange={handleDialogClose}>
            <DialogTrigger asChild>
              <button className="floating-create-post-btn">
                <Plus className="w-6 h-6" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-4 md:p-6">
              <DialogHeader>
                <DialogTitle className="text-sm md:text-base">Create New Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 md:space-y-4 mt-3 md:mt-4">
                {/* Image Upload - Required */}
                <div>
                  <label className="text-xs md:text-sm mb-2 block">
                    Upload Photo <span className="text-red-500">*</span>
                  </label>
                  <div className={`border-2 border-dashed rounded-lg p-4 md:p-8 text-center transition-colors cursor-pointer ${
                    validationErrors.photo 
                      ? "border-red-300 bg-red-50" 
                      : imagePreview 
                        ? "border-gray-300" 
                        : "border-gray-300 hover:border-[#FF7A33]"
                  }`}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {imagePreview ? (
                        <div className="relative">
                          <ImageWithFallback
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-32 md:h-48 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setImagePreview("");
                              setValidationErrors((prev) => ({ ...prev, photo: "" }));
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600 text-xs md:text-sm">
                            Click to upload an image
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            PNG, JPG up to 10MB
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                  {validationErrors.photo && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.photo}
                    </p>
                  )}
                </div>

                {/* Caption - Required */}
                <div>
                  <label className="text-xs md:text-sm mb-2 block">
                    Caption <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    placeholder="Share your experience..."
                    value={newPostCaption}
                    onChange={(e) => {
                      setNewPostCaption(e.target.value);
                      if (e.target.value.trim()) {
                        setValidationErrors((prev) => ({ ...prev, caption: "" }));
                      }
                    }}
                    className={`min-h-[80px] md:min-h-[120px] text-xs md:text-sm ${
                      validationErrors.caption ? "border-red-300" : ""
                    }`}
                  />
                  {validationErrors.caption && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {validationErrors.caption}
                    </p>
                  )}
                </div>

                {/* Required: Event (Select existing or create new) */}
                <div>
                  <label className="text-xs md:text-sm mb-2 block">
                    Event <span className="text-red-500">*</span>
                    <span className="text-gray-500 text-xs font-normal ml-1">
                      (Select an event you attended or create a new one)
                    </span>
                  </label>
                  
                  {/* Option Toggle: Select Event vs Create Event */}
                  <div className="flex gap-4 mb-3">
                    <button
                      type="button"
                      onClick={() => {
                        setUseCreateEvent(false);
                        setValidationErrors((prev) => ({ ...prev, event: "" }));
                        setEventPopoverOpen(false);
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg border-2 text-xs md:text-sm font-medium transition-colors ${
                        !useCreateEvent
                          ? "border-[#FF7A33] bg-[#FF7A33]/10 text-[#FF7A33]"
                          : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Select Event
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUseCreateEvent(true);
                        setSelectedEvent("");
                        setValidationErrors((prev) => ({ ...prev, event: "" }));
                      }}
                      className={`flex-1 px-4 py-2 rounded-lg border-2 text-xs md:text-sm font-medium transition-colors ${
                        useCreateEvent
                          ? "border-[#FF7A33] bg-[#FF7A33]/10 text-[#FF7A33]"
                          : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      <Plus className="w-4 h-4 inline mr-2" />
                      Create Event
                    </button>
                  </div>

                  {/* Option A: Event Selection with Search */}
                  {!useCreateEvent && (
                    <div>
                      <Popover open={eventPopoverOpen} onOpenChange={setEventPopoverOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={`w-full justify-between text-left font-normal ${
                              validationErrors.event ? "border-red-300" : ""
                            } ${!selectedEvent ? "text-muted-foreground" : ""}`}
                          >
                            {selectedEvent
                              ? recentEvents.find((event) => event.id === selectedEvent)?.name
                              : "Choose an event you attended..."}
                            <Calendar className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search events..." className="h-9" />
                            <CommandList>
                              <CommandEmpty>No event found.</CommandEmpty>
                              <CommandGroup>
                                {recentEvents.map((event) => (
                                  <CommandItem
                                    key={event.id}
                                    value={event.name}
                                    onSelect={() => {
                                      setSelectedEvent(event.id);
                                      setValidationErrors((prev) => ({ ...prev, event: "" }));
                                      setEventPopoverOpen(false);
                                    }}
                                    className="cursor-pointer"
                                  >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {event.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      {validationErrors.event && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {validationErrors.event}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Option B: Create New Event */}
                  {useCreateEvent && (
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <label className="text-xs md:text-sm font-medium">Event Title</label>
                        <Input
                          placeholder="Enter event title"
                          value={newEventTitle}
                          onChange={(e) => {
                            setNewEventTitle(e.target.value);
                            if (e.target.value.trim()) {
                              setValidationErrors((prev) => ({ ...prev, event: "" }));
                            }
                          }}
                          className="text-xs md:text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-xs md:text-sm font-medium">Date</label>
                          <Input
                            type="date"
                            value={newEventDate}
                            onChange={(e) => {
                              setNewEventDate(e.target.value);
                              if (e.target.value) {
                                setValidationErrors((prev) => ({ ...prev, event: "" }));
                              }
                            }}
                            className="text-xs md:text-sm"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs md:text-sm font-medium">Time</label>
                          <Input
                            type="time"
                            value={newEventTime}
                            onChange={(e) => setNewEventTime(e.target.value)}
                            className="text-xs md:text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs md:text-sm font-medium">Location (optional)</label>
                        <Input
                          placeholder="Enter event location or online platform"
                          value={newEventLocation}
                          onChange={(e) => setNewEventLocation(e.target.value)}
                          className="text-xs md:text-sm"
                        />
                      </div>
                      {validationErrors.event && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {validationErrors.event}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    variant="outline"
                    onClick={() => handleDialogClose(false)}
                    size="sm"
                    className="text-xs md:text-sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCreatePost}
                    className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    size="sm"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Countdown to Next Event */}
        {getMostRecentUpcomingEvent() && (
          <div className="mb-4 md:mb-6 p-4 md:p-6 rounded-xl bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white shadow-lg">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-semibold mb-1 md:mb-2">
                  Upcoming Saved Event
                </h3>
                <p className="text-xs md:text-sm mb-2 md:mb-3 opacity-95">
                  Event: {getMostRecentUpcomingEvent()?.title}
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm">
                  <span className="font-medium">Time Remaining:</span>
                  {countdown.days > 0 && (
                    <span className="bg-white/20 px-2 py-1 rounded-md font-semibold">
                      {countdown.days} {countdown.days === 1 ? "day" : "days"}
                    </span>
                  )}
                  <span className="opacity-75">•</span>
                  <span className="bg-white/20 px-2 py-1 rounded-md font-semibold">
                    {countdown.hours} {countdown.hours === 1 ? "hour" : "hours"}
                  </span>
                  <span className="opacity-75">•</span>
                  <span className="bg-white/20 px-2 py-1 rounded-md font-semibold">
                    {countdown.minutes} {countdown.minutes === 1 ? "minute" : "minutes"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posts Feed with Tabs */}
        <Tabs defaultValue="all" className="space-y-3 md:space-y-6">
          <TabsList className="events-tabs-list flex flex-row flex-nowrap w-full max-w-lg">
            <TabsTrigger value="all" className="events-tabs-trigger">All post</TabsTrigger>
            <TabsTrigger value="saved" className="events-tabs-trigger">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 md:space-y-6">
            {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              {/* Post Header */}
              <div className="p-3 md:p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <Avatar className="w-8 h-8 md:w-10 md:h-10">
                    <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-xs">
                      {post.userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-xs md:text-sm">{post.userName}</p>
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                      <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                      <span>{post.eventName}</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                {post.isOwnPost && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditPost(post.id)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Post
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Post
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>

              {/* Post Image */}
              <div className="w-full h-[250px] md:h-[400px] bg-gray-100">
                <ImageWithFallback
                  src={post.image}
                  alt={post.eventName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Content */}
              <div className="p-3 md:p-4">
                {/* Actions */}
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 text-xs md:text-sm">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 text-xs md:text-sm">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    {post.comments}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1.5 md:gap-2 text-xs md:text-sm"
                    onClick={() => handleToggleSavePost(post.id)}
                  >
                    <Bookmark
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        savedPostIds.includes(post.id)
                          ? "fill-[#FF7A33] text-[#FF7A33]"
                          : "text-gray-600"
                      }`}
                    />
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 ml-auto text-xs md:text-sm">
                    <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>

                {/* Caption */}
                <p className="text-gray-800 text-xs md:text-sm">{post.caption}</p>

                {/* Event Tag */}
                <Badge
                  variant="outline"
                  className="mt-2 md:mt-3 cursor-pointer hover:bg-gray-100 text-xs"
                  onClick={() => onNavigate && onNavigate("event-detail", post.eventId)}
                >
                  <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" />
                  {post.eventName}
                </Badge>
              </div>
            </Card>
            ))}
          </TabsContent>

          <TabsContent value="saved" className="space-y-3 md:space-y-6">
            {posts.filter((post) => savedPostIds.includes(post.id)).length > 0 ? (
              posts
                .filter((post) => savedPostIds.includes(post.id))
                .map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    {/* Post Header */}
                    <div className="p-3 md:p-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Avatar className="w-8 h-8 md:w-10 md:h-10">
                          <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-xs">
                            {post.userInitials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-xs md:text-sm">{post.userName}</p>
                          <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                            <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3" />
                            <span>{post.eventName}</span>
                            <span>•</span>
                            <span>{post.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      {post.isOwnPost && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditPost(post.id)}>
                              <Edit className="w-4 h-4 mr-2" />
                              Edit Post
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDeletePost(post.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete Post
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </div>

                    {/* Post Image */}
                    <div className="w-full h-[250px] md:h-[400px] bg-gray-100">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.eventName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Post Content */}
                    <div className="p-3 md:p-4">
                      {/* Actions */}
                      <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                        <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 text-xs md:text-sm">
                          <Heart className="w-4 h-4 md:w-5 md:h-5" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 text-xs md:text-sm">
                          <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                          {post.comments}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1.5 md:gap-2 text-xs md:text-sm"
                          onClick={() => handleToggleSavePost(post.id)}
                        >
                          <Bookmark
                            className={`w-4 h-4 md:w-5 md:h-5 ${
                              savedPostIds.includes(post.id)
                                ? "fill-[#FF7A33] text-[#FF7A33]"
                                : "text-gray-600"
                            }`}
                          />
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 ml-auto text-xs md:text-sm">
                          <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                      </div>

                      {/* Caption */}
                      <p className="text-gray-800 text-xs md:text-sm">{post.caption}</p>

                      {/* Event Tag */}
                      <Badge
                        variant="outline"
                        className="mt-2 md:mt-3 cursor-pointer hover:bg-gray-100 text-xs"
                        onClick={() => onNavigate && onNavigate("event-detail", post.eventId)}
                      >
                        <Calendar className="w-2.5 h-2.5 md:w-3 md:h-3 mr-1" />
                        {post.eventName}
                      </Badge>
                    </div>
                  </Card>
                ))
            ) : (
              <Card className="p-6 md:p-12 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <h3 className="mb-2 text-sm md:text-base">No Saved Posts</h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm">
                  Start saving posts you're interested in
                </p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}