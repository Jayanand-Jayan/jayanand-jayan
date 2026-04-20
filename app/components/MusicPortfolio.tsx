import { Music2, Mic2, Radio, Heart, PlayCircle, Instagram, Award, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MusicPortfolio() {
  const achievements = [
    {
      title: "Arangettam",
      venue: "Mumbai",
      date: "2018",
      description: "Formal debut Carnatic vocal performance — a milestone marking the completion of foundational training under the guru-shishya tradition"
    },
    {
      title: "2nd Prize — National Tabla Competition",
      venue: "Hindustan Times",
      date: "National Level",
      description: "Awarded second place at a national-level tabla competition organised by Hindustan Times, competing against players from across India"
    }
  ];

  const repertoire = [
    { name: "Carnatic Vocals", level: "Advanced", years: "13 years" },
    { name: "Tabla", level: "Advanced", years: "12 years" },
    { name: "Guitar", level: "Exploring", years: "Beginner" },
    { name: "Flute", level: "Exploring", years: "Beginner" },
    { name: "Keyboard", level: "Exploring", years: "Beginner" },
    { name: "Clapbox", level: "Intermediate", years: "Active" },
    { name: "Music Production", level: "Learning", years: "DAW & Recording" },
    { name: "Songwriting", level: "In Progress", years: "Original compositions" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1rTikKt6ir5g"
          alt="Tabla being played"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-red-900/90 to-orange-800/95" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">
                <Music2 className="w-3 h-3 mr-1" />
                Carnatic Vocalist · Tabla Artist · One Man Band
              </Badge>
              <h1 className="mb-6 text-white">Back to the Raga</h1>
              <p className="text-orange-100 mb-6">
                13 years of Carnatic vocal training. 12 years on the tabla. A 6-year hiatus. And now — a return
                to music with something new to say. Writing original songs, composing, singing, playing every
                instrument, and producing it all myself. One man, many ragas.
              </p>
              <div className="flex gap-4 flex-wrap">

                  <a href="https://instagram.com/known_as_jj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  @known_as_jj
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-3" />
              <ImageWithFallback
                src="https://unsplash.com/photos/a-close-up-of-a-person-playing-a-musical-instrument-rTikKt6ir5g"
                alt="Tabla performance"
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Repertoire Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Musical Palette</h2>
          <p className="text-orange-200">A lifelong student — trained in the classical tradition, exploring new sounds</p>
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

      {/* Achievements Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Highlights</h2>
          <p className="text-orange-200">Milestones from the musical journey so far</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <Card key={index} className="border-orange-200 bg-white/70 backdrop-blur hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Award className="w-8 h-8 text-orange-600" />
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    {item.date}
                  </Badge>
                </div>
                <CardTitle className="text-orange-900">{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Radio className="w-4 h-4" />
                  {item.venue}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-orange-300" />
          <h2 className="mb-6 text-white">The Vision</h2>
          <p className="text-xl leading-relaxed text-orange-100 mb-12">
            After years away from music, I&apos;m coming back — not just to perform, but to create.
            Writing my own songs, composing original pieces, playing every instrument myself,
            and producing from the ground up. The goal is a sound that carries classical roots
            into entirely new spaces.
          </p>

          {/* Collaboration CTA */}
          <div className="bg-white/10 border border-orange-300/30 rounded-2xl p-8 backdrop-blur">
            <Star className="w-10 h-10 mx-auto mb-4 text-orange-300" />
            <h3 className="text-2xl font-semibold text-white mb-3">Open to Collaborations</h3>
            <p className="text-orange-100 mb-6">
              Vocalists, instrumentalists, producers, beatmakers — if you feel the music, let&apos;s make something together.
              Slide into my DMs on Instagram.
            </p>

              <a href="https://instagram.com/known_as_jj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-lg font-medium"
            >
              <Instagram className="w-6 h-6" />
              @known_as_jj on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
