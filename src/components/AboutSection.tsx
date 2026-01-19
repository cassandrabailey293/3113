import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Music2, Guitar, Mic2 } from "lucide-react";
const mainbandpic = "../../img/mainbandpic.jpg";

export function AboutSection() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <ImageWithFallback
            src={mainbandpic}
            alt="3113 Band"
            className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-white">About 3113</h2>
          <p className="text-gray-300">
            Why is our name 3113 (read: "thirty-one thirteen"), you ask? Maybe you'll just have to <a href="mailto:booking.3113@gmail.com">ask us</a> and find out.
          </p>
          <p className="text-gray-300">
            Hailing from Summit County, Colorado, 3113 is more than a cover band. We bring rock music to life with high-energy sets for fans of all ages and creeds. Book us now!
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
