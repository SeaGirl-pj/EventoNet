import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import {
  Languages,
  Car,
  Star,
  UserCheck,
  Accessibility,
  Hotel,
  Check,
} from "lucide-react";

interface EventServicesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventTitle: string;
}

export function EventServicesModal({
  open,
  onOpenChange,
  eventTitle,
}: EventServicesModalProps) {
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Event Services</DialogTitle>
          <DialogDescription>
            Enhance your experience at "{eventTitle}" with our premium services
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="p-5 hover:shadow-lg transition-all cursor-pointer group border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-3">
                    <Checkbox id={service.id} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className={`${service.color} border-current`}
                        >
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    <label htmlFor={service.id} className="cursor-pointer">
                      <h4 className="mb-2 group-hover:text-[#FF7A33] transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </label>
                    {service.available && (
                      <div className="flex items-center gap-2 mt-3">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-green-600">
                          Available for this event
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10 rounded-lg border border-[#FF7A33]/20">
          <p className="text-sm text-gray-700 mb-3">
            💡 <strong>Pro Tip:</strong> Book services in advance to guarantee
            availability and get early-bird discounts!
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
            Add Selected Services
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
