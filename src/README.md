# EventConnect - Event Discovery & Networking Platform

A modern, full-featured event discovery and networking web application built with React, Tailwind CSS, and shadcn/ui components.

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#FF7A33` - Warm, energetic accent color
- **Primary Blue**: `#1D6FD8` - Professional, trustworthy main color
- **Gradients**: Smooth transitions between orange and blue for CTAs and highlights

### Design Principles
- Modern, clean, and minimal aesthetic
- Rounded corners and soft shadows throughout
- Smooth hover effects and transitions
- Mobile-responsive design
- Component-based modular architecture

## ✨ Features

### 🔐 Authentication Flow

#### Login Page
- Clean, modern login form
- Social authentication options (Google, Facebook)
- Password recovery
- "Remember me" functionality
- Branded hero section with value propositions

#### Signup with Onboarding (9 Steps)
1. **Basic Information**: Name, email, password
2. **Industry Selection**: 8+ industry options
3. **Event Type Interests**: Multiple event categories (Networking, Conferences, Workshops, etc.)
4. **Event Format Preference**: Online, In-Person, or Both
5. **Networking Goals**: Multiple selectable goals (Find jobs, build connections, learn skills, etc.)
6. **Skills to Learn**: Free-text area for topics and skills
7. **Preferred Days**: Select available days for events
8. **Event Experience Level**: From beginner to expert (NEW)
9. **AI Suggestions Preference**: Enable/disable AI recommendations (NEW)

### 🏠 Home Dashboard
- Personalized welcome with user statistics
- Quick action cards:
  - Explore Events
  - AI Event Finder
  - Find Connections
- AI-powered insights banner with personalized recommendations
- Recommended events section based on user preferences
- Trending events showcase
- Stats overview (Events Attended, Connections, Badges)

### 📅 Events Section

#### Event Discovery
- Advanced search functionality
- Comprehensive filtering system:
  - Event type (Online/In-Person)
  - Price (Free/Paid)
  - Date range
  - Location
  - Category
- Sort options (Date, Popularity, Relevance)

#### AI Event Finder ⭐
- Intelligent event recommendations
- Custom search parameters:
  - Interest-based matching
  - Date range selection
  - Location preferences
  - Event size preferences

#### Event Categories
- Visual category cards with counts
- Multiple categories:
  - Technology
  - Marketing
  - Networking
  - Creative
  - Entertainment

#### Event Cards
Each event card includes:
- High-quality event image
- Featured badge for premium events
- Event type indicator (Online/In-Person)
- Category badge
- Date, time, and location
- Attendee count
- Related tags
- **Save/Heart button** to bookmark events
- **Event Services button** ⭐
- **View Details button**

#### Event Services Modal ⭐ (NEW)
Available services with pricing:
1. **Translator Services** - Professional multilingual support
2. **Transfer & Shuttle** - Transportation to/from venue
3. **VIP Access** - Premium seating and networking lounge
4. **Personal Assistant** - Dedicated event support
5. **Accessibility Services** - Wheelchair access, sign language, accommodations
6. **Accommodation Suggestions** - Curated hotel recommendations

### 📄 Event Detail Page ⭐ (NEW)

Comprehensive event information including:

#### Hero Section
- Full-width event image with gradient overlay
- Event title, category, and type badges
- Date, time, and location details
- Back to Events button

#### Main Content
- **About Section**: Detailed event description with tags
- **Featured Speakers**: Grid of speaker cards with:
  - Profile avatars
  - Name and role
  - Topic they're presenting
  
- **Event Schedule**: Timeline view with:
  - Session times
  - Session titles and descriptions
  - Speaker assignments
  - Visual timeline indicator

- **Location Map**: 
  - Event address
  - Map visualization
  - Link to open in maps app

#### Registration Sidebar
- Ticket pricing with early-bird info
- "Register Now" CTA
- **Event Services button**
- Save and Share buttons
- What's included list:
  - Session access
  - Networking opportunities
  - Materials and recordings
  - Certificate of attendance
  - Speaker Q&A access

#### Similar Events
- Recommended events based on category and interests

### 💬 Chat Section

#### Conversation List
- Tabs for All, Direct, and Groups
- Search functionality
- Conversation cards showing:
  - Avatar with online status
  - Last message preview
  - Timestamp
  - Unread count badges
  - Member count for groups

#### Chat Interface
- Real-time messaging UI
- Message bubbles with timestamps
- Support for:
  - Direct messages (1-on-1)
  - Group chats (event communities)
  - System messages (reminders, matches, suggestions)
- Message input with:
  - File attachments
  - Emoji picker
  - Send button
- Header with:
  - Contact info
  - Voice/Video call buttons
  - More options menu

#### System Messages
Special notification cards for:
- Event reminders
- Connection match suggestions
- AI recommendations

### 👤 Profile Section - Modular Design ⭐ (NEW)

#### Profile Header
- Cover photo with gradient
- Large profile avatar (clickable)
- Name and basic info (Job title, Location)
- Edit Profile and Settings buttons
- **Profile Completeness Card** with progress bar

#### Stats Dashboard
Quick-view cards showing:
- Events Attended (12)
- Connections (34)
- Badges Earned (8)
- Profile Score (85%)

#### Personal Information Cards
Each section as an **individual clickable component**:

1. **Personal Information**
   - Icon: UserCircle
   - Name, contact details, bio
   - "Edit" action button

2. **Social & Professional Links**
   - Icon: Link
   - LinkedIn, Twitter, portfolio, website
   - "Manage" action button

3. **Professional Background**
   - Icon: Briefcase
   - Work experience, education, certifications
   - "Update" action button

4. **Contact Information**
   - Icon: Phone
   - Email, phone, location preferences
   - "Edit" action button

5. **Interests & Topics**
   - Icon: Heart
   - Areas of interest and expertise
   - "Customize" action button

6. **Event Preferences**
   - Icon: Calendar
   - Types, formats, scheduling preferences
   - "Set" action button

#### Dashboard Modules
Each module as a **clickable card** with badge indicators:

1. **Connection Matchmaking** ⭐
   - AI-powered recommendations
   - Badge: "3 New"
   
2. **Event Calendar**
   - Upcoming events schedule
   - Badge: "5 Events"
   
3. **Profile Analysis**
   - Insights and suggestions
   - Badge: "85%"
   
4. **Skills & Interests**
   - Manage professional skills
   - Badge: "12 Skills"
   
5. **Saved Events**
   - Bookmarked events
   - Badge: "8 Saved"
   
6. **Networking Dashboard**
   - Connections and network growth
   - Badge: "34 Connections"
   
7. **AI Recommendations** ⭐
   - Personalized suggestions
   - Badge: "New"
   
8. **Event Insights**
   - Attendance patterns and stats
   - Badge: "View"

#### Quick Actions
Large action cards for:
- Get AI Insights
- Find Connections
- View Achievements

## 🎯 Key Highlights

### ⭐ New Features Added
1. **Event Services Modal** - Complete service booking system
2. **Event Detail Page** - Full event information view with schedule, speakers, map
3. **Enhanced Signup Flow** - 2 additional onboarding questions (Experience Level, AI Preferences)
4. **Modular Profile** - Every section is a separate, clickable component
5. **Save/Heart Events** - Bookmark functionality on all event cards

### 🤖 AI-Powered Features
- Event recommendations based on user preferences
- Connection matchmaking
- Profile insights and improvement suggestions
- Smart event discovery

### 🎨 Gamification
- Achievement badges
- Profile completeness tracking
- Event attendance milestones
- Networking level system

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for tablet and desktop
- Touch-friendly interactions
- Mobile bottom navigation

## 🛠️ Technical Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icon system
- **Recharts** - Data visualization
- **Sonner** - Toast notifications

## 📁 Component Structure

```
/components
├── Login.tsx                    - Authentication login page
├── Signup.tsx                   - Multi-step signup with onboarding
├── Navigation.tsx               - Top navigation bar
├── HomePage.tsx                 - Dashboard homepage
├── EventsPage.tsx               - Event discovery and search
├── EventCard.tsx                - Reusable event card component
├── EventDetailPage.tsx          - Full event details view ⭐
├── EventServicesModal.tsx       - Service booking modal ⭐
├── ChatPage.tsx                 - Messaging interface
├── ProfilePageModular.tsx       - Modular profile components ⭐
└── ui/                          - shadcn/ui components
```

## 🎨 Component Design Philosophy

### Modularity
Every UI element is designed as a reusable, self-contained component:
- Separate cards for each profile section
- Individual dashboard modules
- Standalone action buttons
- Independent service cards

### Interactivity
- Hover effects on all interactive elements
- Smooth transitions and animations
- Visual feedback for user actions
- Loading states and progress indicators

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance

## 🚀 Getting Started

The application starts on the Login page. You can:
1. Sign in to access the main app
2. Click "Sign up for free" to go through the onboarding flow
3. Navigate between sections using the top navigation bar
4. Click on events to view details and book services
5. Explore profile modules by clicking on any card

## 📝 Notes

- All event data is currently mocked for demonstration
- Images are sourced from Unsplash
- API integrations would replace mock data in production
- User authentication would connect to a backend service

---

Built with ❤️ using modern web technologies and best practices.
