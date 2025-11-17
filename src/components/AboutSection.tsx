import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Music2, Guitar, Mic2 } from "lucide-react";

export function AboutSection() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <ImageWithFallback
            src="../../img/mainbandpic.jpg"
            alt="3113 Band"
            className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-white">About 3113</h2>
          <p className="text-gray-300">
            Born from a passion for rock and alternative music, 3113 brings a fresh energy to your favorite classics. 
            We're not just a cover band—we're a tribute to the sounds that shaped generations, delivered with raw power 
            and authentic soul.
          </p>
          <p className="text-gray-300">
            From 90s grunge anthems to modern alternative hits, our setlist spans decades of rock evolution. 
            Whether you're hosting a festival, planning a private event, or booking talent for your venue, 
            3113 delivers an unforgettable live experience that gets crowds moving.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
          <Music2 className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-white mb-2">Versatile Repertoire</h3>
          <p className="text-gray-400 text-sm">
            From Led Zeppelin to Weezer, Aerosmith to Nirvana — we cover the full spectrum of rock and alternative, classic and modern.
          </p>
        </div>
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
          <Guitar className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-white mb-2">Professional Sound</h3>
          <p className="text-gray-400 text-sm">
            Years of experience and top-tier equipment ensure every performance sounds incredible.
          </p>
        </div>
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
          <Mic2 className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-white mb-2">High-Energy Shows</h3>
          <p className="text-gray-400 text-sm">
            We don't just play songs—we create experiences that keep your audience engaged from first note to last.
          </p>
        </div>
      </div>
    </div>
  );
}
