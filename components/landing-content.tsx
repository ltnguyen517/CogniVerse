"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Thompson",
    avatar: "S",
    title: "Web Developer",
    description: "As a web developer, I'm always seeking creative tools that can elevate my projects. This AI website blew me away with its code generation capabilities. It's like having a coding genius right at my fingertips. From complex algorithms to stylish CSS, this platform has transformed the way I work. My projects now stand out with innovative code, thanks to this incredible tool!",
  },
  {
    name: "Alex Vu",
    avatar: "A",
    title: "Photographer",
    description: "Capturing moments through my lens is my passion, and this app added a new dimension to my photography. The image generation feature is mind-blowing! Whether I need nature landscapes or urban vibes, this tool delivers stunning visuals that resonate with my artistic vision. It's like having a virtual art gallery at my disposal!",
  },
  {
    name: "Mark Vuong",
    avatar: "M",
    title: "Filmmaker",
    description: "Creating compelling videos is my forte, and this AI website took my projects to a whole new level. The video generation feature is a game-changer! It crafts captivating scenes, special effects, and even unique storylines. With this tool, my imagination knows no bounds. This platform is my secret weapon for cinematic excellence!",
  },
  {
    name: "Ethan Williams",
    avatar: "E",
    title: "Music Producer",
    description: "Music is my life, and this website turned my compositions into pure magic. The music generation feature is nothing short of extraordinary. It composes melodies, harmonies, and beats that resonate with emotions I didn't even know existed. From classical symphonies to futuristic electronica, this tool fuels my creativity like never before. It's my symphony of inspiration!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
