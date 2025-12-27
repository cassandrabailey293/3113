import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Play, Download } from "lucide-react";
import { Button } from "./ui/button";

export function MediaSection() {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMGNvbmNlcnQlMjBzdGFnZXxlbnwxfHx8fDE3NjA1NDgyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Live at The Sunset Theater - 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1576109188032-aed32779c007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHRlcm5hdGl2ZSUyMGJhbmQlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjA1Njk3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Summer Rock Fest Performance"
    },
    {
      url: "https://images.unsplash.com/photo-1604364260242-1156640c0dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBjb25jZXJ0JTIwY3Jvd2R8ZW58MXx8fHwxNjA1Njk3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Packed House at Downtown Venue"
    },
    {
      url: "https://images.unsplash.com/photo-1739051261848-fdf6c43fe0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGJhbmQlMjBncm91cCUyMHBob3RvfGVufDF8fHx8MTc2MDU2OTgwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Band Promo Shoot 2024"
    }
  ];

  const videos = [
    {
      title: "\"Black Hole Sun\" - Live Performance",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: photos[0].url
    },
    {
      title: "\"Everlong\" - Club Show Highlights",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: photos[1].url
    },
    {
      title: "Full Set - Rock Festival 2024",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: photos[2].url
    }
  ];

  const audioTracks = [
    { title: "Smells Like Teen Spirit (Live)", duration: "4:38" },
    { title: "Lithium (Live)", duration: "4:17" },
    { title: "The Pretender (Live)", duration: "4:29" },
    { title: "Plush (Live)", duration: "5:13" },
    { title: "Do I Wanna Know? (Live)", duration: "4:32" }
  ];

  return (
    <Tabs defaultValue="photos" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-zinc-900 border border-zinc-800">
        <TabsTrigger value="photos">Photos</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
        <TabsTrigger value="audio">Audio</TabsTrigger>
      </TabsList>

      <TabsContent value="photos" className="mt-6">
        <div className="grid md:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src={photo.url}
                alt={photo.caption}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="videos" className="mt-6">
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="relative aspect-video bg-black group cursor-pointer">
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white">{video.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="audio" className="mt-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <div className="p-6 space-y-1">
            {audioTracks.map((track, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-zinc-800/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <Button
                    size="sm"
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 ml-0.5" fill="white" />
                  </Button>
                  <div>
                    <p className="text-white">{track.title}</p>
                    <p className="text-gray-400 text-sm">{track.duration}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Full demo recordings available upon request
        </p>
      </TabsContent>
    </Tabs>
  );
}
