import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { EventsPage } from "./components/EventsPage";
import { ChatPage } from "./components/ChatPage";
import { ProfilePageModular } from "./components/ProfilePageModular";
import { EventDetailPage } from "./components/EventDetailPage";
import { PostsPage } from "./components/PostsPage";
import { ConnectionMatchmakingPage } from "./components/ConnectionMatchmakingPage";
import { EventCalendarPage } from "./components/EventCalendarPage";
import { ProfileAnalysisPage } from "./components/ProfileAnalysisPage";
import { SkillsInterestsPage } from "./components/SkillsInterestsPage";
import { SavedEventsPage } from "./components/SavedEventsPage";
import { NetworkingDashboardPage } from "./components/NetworkingDashboardPage";
import { AIRecommendationsPage } from "./components/AIRecommendationsPage";
import { EventInsightsPage } from "./components/EventInsightsPage";
import { Toaster } from "./components/ui/sonner";
import { ProfileDetailsPage } from "./components/ProfileDetailsPage";
import { AIInsightsPage } from "./components/AIInsightsPage";
import { AIEventFinderResultsPage } from "./components/AIEventFinderResultsPage";
import { ServicesPage } from "./components/ServicesPage";
import { MyConnectionsPage } from "./components/MyConnectionsPage";

type AppState = "login" | "signup" | "app";
type AppPage = 
  | "home" 
  | "events" 
  | "services"
  | "posts" 
  | "chat" 
  | "profile" 
  | "event-detail"
  | "connection-matchmaking"
  | "event-calendar"
  | "profile-analysis"
  | "skills-interests"
  | "saved-events"
  | "networking-dashboard"
  | "ai-recommendations"
  | "event-insights"
  | "profile-details"
  | "ai-insights"
  | "ai-event-finder"
  | "my-connections";

export default function App() {
  const [appState, setAppState] = useState<AppState>("login");
  const [currentPage, setCurrentPage] = useState<AppPage>("posts");
  const [selectedEventId, setSelectedEventId] = useState<string>("");

  const handleLogin = () => {
    setAppState("app");
    setCurrentPage("posts");
  };

  const handleSignup = () => {
    setAppState("app");
    setCurrentPage("posts");
  };

  const handleLogout = () => {
    setAppState("login");
    setCurrentPage("posts");
  };

  const handleNavigate = (page: string, eventId?: string) => {
    setCurrentPage(page as AppPage);
    if (eventId) {
      setSelectedEventId(eventId);
    }
  };

  if (appState === "login") {
    return (
      <>
        <Login onLogin={handleLogin} onSwitchToSignup={() => setAppState("signup")} />
        <Toaster />
      </>
    );
  }

  if (appState === "signup") {
    return (
      <>
        <Signup onSignup={handleSignup} onSwitchToLogin={() => setAppState("login")} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      {currentPage !== "event-detail" && (
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      )}
      {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
      {currentPage === "events" && (
        <EventsPage
          onViewEvent={() => setCurrentPage("event-detail")}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "services" && (
        <ServicesPage
          onBack={() => setCurrentPage("events")}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "posts" && <PostsPage onNavigate={handleNavigate} />}
      {currentPage === "chat" && <ChatPage />}
      {currentPage === "profile" && <ProfilePageModular onNavigate={handleNavigate} />}
      {currentPage === "event-detail" && (
        <EventDetailPage
          onBack={() => setCurrentPage("events")}
          onViewEvent={() => setCurrentPage("event-detail")}
          onNavigateToPosts={() => setCurrentPage("posts")}
        />
      )}
      {currentPage === "connection-matchmaking" && <ConnectionMatchmakingPage onBack={() => setCurrentPage("events")} />}
      {currentPage === "event-calendar" && <EventCalendarPage onBack={() => setCurrentPage("events")} />}
      {currentPage === "profile-analysis" && <ProfileAnalysisPage onBack={() => setCurrentPage("profile")} />}
      {currentPage === "skills-interests" && <SkillsInterestsPage onBack={() => setCurrentPage("profile")} />}
      {currentPage === "saved-events" && <SavedEventsPage onBack={() => setCurrentPage("profile")} />}
      {currentPage === "networking-dashboard" && <NetworkingDashboardPage onBack={() => setCurrentPage("profile")} />}
      {currentPage === "ai-recommendations" && <AIRecommendationsPage onBack={() => setCurrentPage("profile")} />}
      {currentPage === "event-insights" && <EventInsightsPage onBack={() => setCurrentPage("profile")} />}
      {currentPage === "profile-details" && <ProfileDetailsPage onBack={() => setCurrentPage("profile")} />}
      {currentPage === "ai-insights" && (
        <AIInsightsPage
          onBack={() => setCurrentPage("profile")}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "ai-event-finder" && (
        <AIEventFinderResultsPage
          onBack={() => setCurrentPage("events")}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === "my-connections" && (
        <MyConnectionsPage
          onBack={() => setCurrentPage("profile")}
          onNavigate={handleNavigate}
        />
      )}
      <Toaster />
    </div>
  );
}