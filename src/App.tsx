import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { AboutSection } from "./components/AboutSection";
import { MediaSection } from "./components/MediaSection";
import { ContactSection } from "./components/ContactSection";
import { Button } from "./components/ui/button";
import { Facebook, Instagram, Youtube, Music, Mail } from "lucide-react";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Toaster />
      
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGNvbmNlcnQlMjBzdGFnZXxlbnwxfHx8fDE3NjA1NDgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-6xl md:text-8xl mb-4 tracking-wider">3113</h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8">Rock & Alternative Cover Band</p>
          
          {/* Social Media Links */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-red-600 hover:border-red-600 transition-all"
              asChild
            >
              <a href="https://www.facebook.com/profile.php?id=61572396299697" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-red-600 hover:border-red-600 transition-all"
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </Button>
            {/* <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-red-600 hover:border-red-600 transition-all"
              asChild
            >
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-red-600 hover:border-red-600 transition-all"
              asChild
            >
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
                <Music className="w-5 h-5 text-white" />
              </a>
            </Button> */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-red-600 hover:border-red-600 transition-all"
              asChild
            >
              <a href="mailto:booking@3113band.com">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-zinc-900 border border-zinc-800 mb-8">
            <TabsTrigger value="about" className="data-[state=active]:bg-red-600">
              About
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-red-600">
              Media
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-red-600">
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <AboutSection />
          </TabsContent>

          <TabsContent value="media">
            <MediaSection />
          </TabsContent>

          <TabsContent value="contact">
            <ContactSection />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 3113. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a> */}
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
