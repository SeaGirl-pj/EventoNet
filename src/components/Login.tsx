import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Calendar, Sparkles } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

export function Login({ onLogin, onSwitchToSignup }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF7A33]/10 via-white to-[#1D6FD8]/10 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden md:block space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-xl md:text-3xl">EventConnect</h1>
          </div>
          <h2 className="text-2xl md:text-4xl leading-tight pt-4">
            Discover Events.
            <br />
            <span className="text-[#FF7A33]">Build Connections.</span>
            <br />
            <span className="text-[#1D6FD8]">Grow Together.</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg">
            Join thousands of professionals connecting through meaningful events
            and experiences.
          </p>
          <div className="flex gap-3 md:gap-4 pt-3 md:pt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF7A33]/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A33]" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-600">AI-Powered Matching</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1D6FD8]/20 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#1D6FD8]" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-600">Smart Recommendations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="p-4 md:p-8 shadow-xl">
          <div className="mb-4 md:mb-6">
            <h2 className="mb-2 text-lg md:text-xl">Welcome Back!</h2>
            <p className="text-gray-600 text-sm md:text-base">Sign in to continue to EventConnect</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-sm text-[#1D6FD8] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember me for 30 days
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF7A33] to-[#FF9966] hover:from-[#FF6A23] hover:to-[#FF8856] text-white"
            >
              Sign In
            </Button>

            <div className="relative my-4 md:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-3 md:px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <Button type="button" variant="outline" className="w-full text-xs md:text-sm" size="sm">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button type="button" variant="outline" className="w-full text-xs md:text-sm" size="sm">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Facebook
              </Button>
            </div>
          </form>

          <p className="mt-4 md:mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToSignup}
              className="text-[#1D6FD8] hover:underline"
            >
              Sign up for free
            </button>
          </p>
        </Card>
      </div>
    </div>
  );
}
