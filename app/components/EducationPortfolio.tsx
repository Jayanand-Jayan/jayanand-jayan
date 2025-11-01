import { GraduationCap, Award, BookOpen, Trophy, Star, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EducationPortfolio() {
  const degrees = [
    {
      degree: "Master of Science in Computer Science",
      university: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      specialization: "Distributed Systems & Machine Learning",
      thesis: "Optimizing Resource Allocation in Cloud-Native Microservices Architectures"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      university: "Indian Institute of Technology, Madras",
      location: "Chennai, India",
      period: "2014 - 2018",
      gpa: "9.2/10.0",
      specialization: "Software Engineering",
      thesis: "Scalable Real-Time Data Processing Frameworks"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2022"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "Coursera - deeplearning.ai",
      date: "2021"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Recognized for academic excellence throughout undergraduate studies",
      icon: Trophy
    },
    {
      title: "Research Publication",
      description: "Published 3 papers in top-tier conferences (SIGMOD, VLDB)",
      icon: BookOpen
    },
    {
      title: "Graduate Teaching Assistant",
      description: "Assisted in teaching 'Advanced Algorithms' and 'Distributed Systems' courses",
      icon: GraduationCap
    },
    {
      title: "Hackathon Winner",
      description: "First place in inter-university hackathon with AI-powered solution",
      icon: Award
    }
  ];

  const coursework = [
    "Advanced Algorithms & Data Structures",
    "Distributed Systems",
    "Machine Learning",
    "Database Systems",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering",
    "Artificial Intelligence",
    "Cloud Computing",
    "Information Security",
    "Big Data Analytics",
    "Computer Architecture"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 border-0">
                <GraduationCap className="w-3 h-3 mr-1" />
                Academic Excellence
              </Badge>
              <h1 className="mb-6">Educational Background</h1>
              <p className="text-indigo-100 mb-6 text-lg">
                A strong foundation in computer science from world-renowned institutions, complemented by continuous learning and professional certifications. Committed to academic excellence and lifelong learning.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl transform -rotate-3" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1653945475246-78f575f7c112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZWR1Y2F0aW9uJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NjE5ODIyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="University graduation"
                className="relative rounded-2xl w-full h-[400px] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Degrees Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-indigo-900">Academic Degrees</h2>
          <p className="text-indigo-700">Formal education from prestigious institutions</p>
        </div>
        <div className="space-y-8">
          {degrees.map((degree, index) => (
            <Card key={index} className="border-indigo-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-indigo-900">{degree.degree}</CardTitle>
                    </div>
                    <CardDescription className="text-indigo-600 ml-15">
                      {degree.university}
                    </CardDescription>
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">
                    <Star className="w-3 h-3 mr-1" />
                    GPA: {degree.gpa}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-indigo-700">
                    <MapPin className="w-4 h-4" />
                    <span>{degree.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-700">
                    <Calendar className="w-4 h-4" />
                    <span>{degree.period}</span>
                  </div>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 space-y-2">
                  <p className="text-indigo-900">
                    <span className="font-medium">Specialization:</span> {degree.specialization}
                  </p>
                  <p className="text-indigo-800">
                    <span className="font-medium">Thesis:</span> {degree.thesis}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-indigo-900">Academic Achievements</h2>
            <p className="text-indigo-700">Recognition and accomplishments</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="border-indigo-200 bg-white hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <CardTitle className="text-indigo-900">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-indigo-700">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-indigo-900">Professional Certifications</h2>
          <p className="text-indigo-700">Continuous learning and skill development</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-indigo-200 bg-white hover:shadow-lg transition-shadow hover:border-indigo-400">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Award className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-indigo-900 mb-2">{cert.name}</CardTitle>
                      <CardDescription className="text-indigo-600">{cert.issuer}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-indigo-300 text-indigo-700 flex-shrink-0">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Relevant Coursework Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="mb-4">Relevant Coursework</h2>
            <p className="text-indigo-100">Key subjects studied during academic programs</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coursework.map((course, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 text-center hover:bg-white/20 transition-colors"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
