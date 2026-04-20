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
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1601327707681-63fac29e4bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyMDIyNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-purple-950/90 to-indigo-900/95" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden text-white">

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Academic Degrees</h2>
          <p className="text-indigo-200">Formal education from prestigious institutions</p>
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
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">Academic Achievements</h2>
            <p className="text-indigo-200">Recognition and accomplishments</p>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Professional Certifications</h2>
          <p className="text-indigo-200">Continuous learning and skill development</p>
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
      <div className="relative z-10 text-white">
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
