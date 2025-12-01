import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile,
  Users,
  Bell,
  Calendar,
  ArrowLeft,
} from "lucide-react";

export function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [showChatList, setShowChatList] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("all");

  const conversations = [
    {
      id: "1",
      name: "Sarah Johnson",
      lastMessage: "See you at the Tech Summit!",
      time: "2m ago",
      unread: 2,
      avatar: "SJ",
      online: true,
      type: "direct",
    },
    {
      id: "2",
      name: "Marketing Masterclass Group",
      lastMessage: "Alex: Thanks for sharing the notes",
      time: "15m ago",
      unread: 0,
      avatar: "MM",
      online: false,
      type: "group",
      members: 24,
    },
    {
      id: "3",
      name: "Michael Chen",
      lastMessage: "Would love to connect after the event",
      time: "1h ago",
      unread: 1,
      avatar: "MC",
      online: true,
      type: "direct",
    },
    {
      id: "4",
      name: "AI Workshop Alumni",
      lastMessage: "New resources shared in the chat",
      time: "3h ago",
      unread: 0,
      avatar: "AI",
      online: false,
      type: "group",
      members: 156,
    },
    {
      id: "5",
      name: "EventConnect",
      lastMessage: "Reminder: Tech Summit starts tomorrow at 9 AM",
      time: "5h ago",
      unread: 0,
      avatar: "EC",
      online: false,
      type: "system",
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "Sarah Johnson",
      avatar: "SJ",
      message: "Hey! Are you going to the Tech Leaders Summit tomorrow?",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: "2",
      sender: "Me",
      message: "Yes! I'm really excited. Will you be there?",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: "3",
      sender: "Sarah Johnson",
      avatar: "SJ",
      message:
        "Absolutely! I'm speaking on the AI panel in the afternoon. We should grab coffee during the break.",
      time: "10:35 AM",
      isMe: false,
    },
    {
      id: "4",
      sender: "Me",
      message: "That would be great! I'll be at the opening keynote.",
      time: "10:37 AM",
      isMe: true,
    },
    {
      id: "5",
      sender: "Sarah Johnson",
      avatar: "SJ",
      message: "See you at the Tech Summit!",
      time: "10:40 AM",
      isMe: false,
    },
  ];

  const systemMessages = [
    {
      id: "1",
      type: "event-reminder",
      title: "Event Reminder",
      message: "Tech Leaders Summit 2025 starts tomorrow at 9:00 AM",
      time: "5 hours ago",
      icon: Calendar,
      color: "text-[#FF7A33]",
    },
    {
      id: "2",
      type: "match",
      title: "New Connection Match",
      message: "You have 3 new connection recommendations based on your interests",
      time: "1 day ago",
      icon: Users,
      color: "text-[#1D6FD8]",
    },
    {
      id: "3",
      type: "suggestion",
      title: "Event Suggestion",
      message: "AI & Machine Learning Workshop matches your interests",
      time: "2 days ago",
      icon: Bell,
      color: "text-purple-600",
    },
  ];

  const currentConversation = conversations.find((c) => c.id === selectedChat);

  // Filter conversations based on active tab
  const filteredConversations = conversations.filter((conversation) => {
    if (activeTab === "all") return true;
    if (activeTab === "direct") return conversation.type === "direct";
    if (activeTab === "clubs") return conversation.type === "group";
    return true;
  });

  // Handle chat selection
  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
    // On mobile, hide list and show chat
    if (window.innerWidth < 1024) {
      setShowChatList(false);
    }
  };

  // Handle back button on mobile
  const handleBackToList = () => {
    setSelectedChat(null);
    setShowChatList(true);
  };

  return (
    <div className="h-screen bg-gray-50 overflow-hidden flex flex-col max-h-screen md:h-screen">
      {/* Header */}
      <div className="px-4 lg:px-6 py-4 border-b border-gray-200 bg-white flex-shrink-0">
        <h1 className="text-xl lg:text-2xl font-semibold">Messages</h1>
      </div>

      {/* Main Chat Layout - 50/50 on desktop, stacked on mobile */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Conversations List - Always visible on desktop, conditional on mobile */}
        <div
          className={`${
            showChatList ? "flex" : "hidden"
          } lg:flex flex-col h-full border-r border-gray-200 bg-white overflow-hidden transition-all`}
        >
          <Card className="h-full flex flex-col rounded-none border-0 shadow-none min-h-0">
            <div className="p-4 border-b border-gray-200 flex-shrink-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-10 mb-4">
                  <TabsTrigger value="all" className="text-sm">All</TabsTrigger>
                  <TabsTrigger value="direct" className="text-sm">Direct</TabsTrigger>
                  <TabsTrigger value="clubs" className="text-sm">Clubs</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-10 h-10 text-sm"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0 overscroll-contain">
              <div className="p-2">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => handleChatSelect(conversation.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all mb-2 ${
                      selectedChat === conversation.id
                        ? "bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback
                            className={`text-sm ${
                              conversation.type === "system"
                                ? "bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {conversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="truncate text-base font-medium">{conversation.name}</p>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                            {conversation.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm text-gray-600 truncate flex-1">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <Badge className="ml-2 bg-[#FF7A33] text-white border-0 h-5 min-w-5 flex items-center justify-center p-0 px-1.5 text-xs flex-shrink-0">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        {conversation.type === "group" && conversation.members && (
                          <div className="flex items-center gap-1 mt-1">
                            <Users className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500">
                              {conversation.members} members
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Users className="w-12 h-12 text-gray-300 mb-3" />
                    <p className="text-gray-500 text-sm">
                      {activeTab === "direct" 
                        ? "No direct messages yet" 
                        : activeTab === "clubs"
                        ? "No clubs available"
                        : "No conversations"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Chat Window - 50% on desktop, full screen on mobile */}
        <div
          className={`${
            selectedChat ? "flex" : "hidden"
          } lg:flex flex-col h-full bg-white overflow-hidden transition-all`}
        >
          {currentConversation ? (
            <Card className="h-full flex flex-col rounded-none border-0 shadow-none">
              {currentConversation.type === "system" ? (
                // System Messages View
                <div className="flex-1 flex flex-col min-h-0">
                  <div className="p-4 border-b border-gray-200 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleBackToList}
                          className="lg:hidden h-9 w-9"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-sm">
                            {currentConversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold">{currentConversation.name}</h3>
                          <p className="text-sm text-gray-600">System Notifications</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto scroll-smooth min-h-0 pb-4 md:pb-0">
                    <div className="p-6 space-y-4">
                      {systemMessages.map((msg) => {
                        const Icon = msg.icon;
                        return (
                          <Card key={msg.id} className="p-4 hover:shadow-md transition-all">
                            <div className="flex items-start gap-4">
                              <div
                                className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 ${msg.color}`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-2 gap-2">
                                  <h4 className="text-base font-medium truncate">{msg.title}</h4>
                                  <span className="text-xs text-gray-500 flex-shrink-0">{msg.time}</span>
                                </div>
                                <p className="text-sm lg:text-base text-gray-600 break-words">{msg.message}</p>
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                // Regular Chat View
                <>
                  <div className="p-4 border-b border-gray-200 flex-shrink-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleBackToList}
                          className="lg:hidden h-9 w-9 flex-shrink-0"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <Avatar className="w-12 h-12 flex-shrink-0">
                          <AvatarFallback className="bg-gray-200 text-gray-700 text-sm">
                            {currentConversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold truncate">{currentConversation.name}</h3>
                          {currentConversation.online && (
                            <p className="text-sm text-green-600">Online</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <Phone className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <Video className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto scroll-smooth min-h-0 pb-4 md:pb-0">
                    <div className="p-6 space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`flex gap-3 max-w-[75%] lg:max-w-[65%] ${
                              msg.isMe ? "flex-row-reverse" : "flex-row"
                            }`}
                          >
                            {!msg.isMe && (
                              <Avatar className="w-8 h-8 flex-shrink-0">
                                <AvatarFallback className="bg-gray-200 text-gray-700 text-xs">
                                  {msg.avatar}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div className="min-w-0">
                              <div
                                className={`rounded-2xl px-4 py-3 break-words transition-all ${
                                  msg.isMe
                                    ? "bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white"
                                    : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <p className="text-sm lg:text-base leading-relaxed break-words">{msg.message}</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-1 px-2">
                                {msg.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200 flex-shrink-0 bg-white md:relative fixed bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto z-40 md:z-auto shadow-lg md:shadow-none" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))' }}>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-10 w-10 flex-shrink-0">
                        <Paperclip className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-10 w-10 flex-shrink-0">
                        <Smile className="w-5 h-5" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            setMessage("");
                          }
                        }}
                        className="flex-1 text-sm lg:text-base h-10 min-w-0"
                      />
                      <Button
                        size="icon"
                        onClick={() => setMessage("")}
                        className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] h-10 w-10 flex-shrink-0"
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          ) : (
            // Empty state on desktop when no chat selected
            <div className="flex-1 flex items-center justify-center bg-gray-50 lg:flex hidden">
              <div className="text-center">
                <p className="text-gray-500 text-base">
                  Select a conversation to start chatting
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
