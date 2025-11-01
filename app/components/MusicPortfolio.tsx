import { Music2, Mic2, Radio, Heart, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MusicPortfolio() {
  const performances = [
    {
      title: "Thyagaraja Aradhana Concert",
      venue: "Chennai Music Academy",
      date: "January 2024",
      description: "Traditional Carnatic vocal performance featuring compositions from the Trinity"
    },
    {
      title: "Fusion Night",
      venue: "Blue Frog, Bangalore",
      date: "November 2023",
      description: "Contemporary fusion of Carnatic ragas with electronic beats"
    },
    {
      title: "Margazhi Festival",
      venue: "Narada Gana Sabha",
      date: "December 2023",
      description: "Early morning Carnatic concert during the auspicious Margazhi season"
    }
  ];

  const repertoire = [
    { name: "Carnatic Vocals", level: "Advanced", years: "12 years" },
    { name: "Mridangam", level: "Intermediate", years: "6 years" },
    { name: "Music Composition", level: "Advanced", years: "8 years" },
    { name: "Electronic Production", level: "Intermediate", years: "4 years" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">
                <Music2 className="w-3 h-3 mr-1" />
                Carnatic Fusion Artist
              </Badge>
              <h1 className="mb-6 text-orange-900">Musical Journey</h1>
              <p className="text-orange-800 mb-6">
                Blending the timeless beauty of Carnatic classical music with contemporary sounds to create a unique sonic experience.
                Trained in traditional gurukul style while embracing modern production techniques.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Listen to Performances
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641309049240-6d158eb7e7ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJuYXRpYyUyMG11c2ljJTIwaW5zdHJ1bWVudHN8ZW58MXx8fHwxNzYxOTk0OTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Musical instruments"
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Repertoire Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-orange-900">Musical Expertise</h2>
          <p className="text-orange-700">Skills honed through years of dedicated practice and performance</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {repertoire.map((skill, index) => (
            <Card key={index} className="border-orange-200 bg-white/70 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                  <Music2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-orange-900">{skill.name}</CardTitle>
                <CardDescription>{skill.years}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  {skill.level}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Performances Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-orange-900">Recent Performances</h2>
          <p className="text-orange-700">Sharing the gift of music with audiences across India</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {performances.map((performance, index) => (
            <Card key={index} className="border-orange-200 bg-white/70 backdrop-blur hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Mic2 className="w-8 h-8 text-orange-600" />
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    {performance.date}
                  </Badge>
                </div>
                <CardTitle className="text-orange-900">{performance.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Radio className="w-4 h-4" />
                  {performance.venue}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800">{performance.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="mb-6">Musical Philosophy</h2>
          <p className="text-xl leading-relaxed opacity-95">
            &quot;Music is the bridge between tradition and innovation. By honoring the ancient ragas of Carnatic music
            while embracing modern technology, we create something timeless yet fresh. Every note carries the weight
            of centuries and the excitement of discovery.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
