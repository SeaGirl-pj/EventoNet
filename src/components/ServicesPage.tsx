import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import {
  Languages,
  Car,
  Star,
  UserCheck,
  Accessibility,
  Hotel,
  ArrowLeft,
} from "lucide-react";

interface ServicesPageProps {
  onBack?: () => void;
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onBack, onNavigate }: ServicesPageProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    {
      id: "translator",
      name: "Translator Services",
      description: "Professional translation services in multiple languages",
      icon: Languages,
      color: "text-[#FF7A33]",
      bgColor: "bg-[#FF7A33]/10",
      price: "$50/hour",
      available: true,
    },
    {
      id: "transfer",
      name: "Transfer & Shuttle",
      description: "Private or shared transportation to and from the venue",
      icon: Car,
      color: "text-[#1D6FD8]",
      bgColor: "bg-[#1D6FD8]/10",
      price: "$30",
      available: true,
    },
    {
      id: "vip",
      name: "VIP Access",
      description: "Exclusive seating, networking lounge, and premium perks",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      price: "$200",
      available: true,
    },
    {
      id: "assistant",
      name: "Personal Assistant",
      description: "Dedicated support throughout the event",
      icon: UserCheck,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      price: "$100/day",
      available: true,
    },
    {
      id: "accessibility",
      name: "Accessibility Services",
      description: "Wheelchair access, sign language, and special accommodations",
      icon: Accessibility,
      color: "text-green-600",
      bgColor: "bg-green-100",
      price: "Free",
      available: true,
    },
    {
      id: "accommodation",
      name: "Accommodation Suggestions",
      description: "Curated hotel recommendations near the venue",
      icon: Hotel,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
      price: "From $120/night",
      available: true,
    },
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleBookServices = () => {
    if (selectedServices.length === 0) {
      alert("Please select at least one service");
      return;
    }
    alert(`Booking ${selectedServices.length} service(s)...`);
    // In a real app, this would handle the booking
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-safe md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Header */}
        <div className="mb-4 md:mb-8">
          {onBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-4 text-xs md:text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}
          <h1 className="mb-2 text-lg md:text-xl lg:text-2xl">Event Services</h1>
          <p className="text-gray-600 text-xs md:text-sm">
            Enhance your event experience with our premium services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedServices.includes(service.id);
            return (
              <Card
                key={service.id}
                className={`p-4 md:p-6 hover:shadow-lg transition-all cursor-pointer group border-gray-200 ${
                  isSelected ? "ring-2 ring-[#FF7A33] bg-[#FF7A33]/5" : ""
                }`}
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={service.id}
                      checked={isSelected}
                      onCheckedChange={() => toggleService(service.id)}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <Badge
                        variant="outline"
                        className={`ml-2 ${
                          service.price === "Free"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-gray-50 text-gray-700 border-gray-200"
                        }`}
                      >
                        {service.price}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-sm md:text-base mb-1">
                      {service.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Booking Section */}
        {selectedServices.length > 0 && (
          <Card className="p-4 md:p-6 bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10 border-[#FF7A33]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-sm md:text-base mb-1">
                  Selected Services ({selectedServices.length})
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Ready to book your selected services
                </p>
              </div>
              <Button
                onClick={handleBookServices}
                className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] text-xs md:text-sm w-full md:w-auto"
              >
                Book Selected Services
              </Button>
            </div>
          </Card>
        )}

        {/* Info Section */}
        <Card className="mt-4 md:mt-6 p-4 md:p-6 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 text-lg">💡</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm md:text-base mb-1">
                Pro Tip
              </h4>
              <p className="text-xs md:text-sm text-gray-700">
                Book services in advance to guarantee availability and get the best rates. 
                Our team will confirm your bookings within 24 hours.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

