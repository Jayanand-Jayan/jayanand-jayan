import { Code2, Terminal, Cpu, Zap, Github, Rocket, Database, Cloud, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EngineeringPortfolio() {
  const projects = [
    {
      title: "Distributed Microservices Platform",
      tech: ["Kubernetes", "Go", "gRPC", "PostgreSQL"],
      description: "Architected and implemented a high-throughput microservices platform handling 10M+ requests/day",
      impact: "Reduced latency by 60%"
    },
    {
      title: "Real-time Analytics Engine",
      tech: ["Apache Kafka", "Python", "Redis", "React"],
      description: "Built real-time data processing pipeline with streaming analytics and visualization",
      impact: "Processing 500K events/sec"
    },
    {
      title: "AI-Powered Code Review System",
      tech: ["TensorFlow", "Node.js", "Docker", "AWS"],
      description: "Developed ML-based code review automation tool with pattern detection and suggestions",
      impact: "40% reduction in review time"
    }
  ];

  const skills = {
    languages: ["Python", "TypeScript", "Go", "Java", "Rust"],
    frameworks: ["React", "Node.js", "Spring Boot", "FastAPI", "Django"],
    cloud: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "Elasticsearch"]
  };

  const experience = [
    {
      company: "Tech Giant Inc.",
      role: "Senior Software Development Engineer",
      period: "2022 - Present",
      achievements: [
        "Led team of 6 engineers in building cloud-native applications",
        "Improved system reliability from 99.5% to 99.99% uptime",
        "Mentored junior developers and established coding standards"
      ]
    },
    {
      company: "Innovative Startups Ltd.",
      role: "Software Development Engineer",
      period: "2020 - 2022",
      achievements: [
        "Developed core backend services for fintech platform",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Optimized database queries improving performance by 3x"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 border-0">
                <Terminal className="w-3 h-3 mr-1" />
                Software Development Engineer
              </Badge>
              <h1 className="mb-6 text-white">Building Scalable Systems</h1>
              <p className="text-slate-300 mb-6">
                Passionate about crafting elegant solutions to complex problems. Specialized in distributed systems,
                cloud architecture, and high-performance backend engineering. Turning coffee into code since 2018.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View Projects
                </button>
                <button className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634838872223-92ca3d20a927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NjE5ODk1NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer coding"
                className="relative rounded-2xl w-full h-[400px] object-cover border border-slate-800 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-white">5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Technical Arsenal</h2>
          <p className="text-slate-400">Technologies and tools I work with daily</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur hover:border-blue-700 transition-all">
            <CardHeader>
              <Code2 className="w-10 h-10 text-blue-500 mb-2" />
              <CardTitle className="text-white">Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <Badge key={lang} variant="secondary" className="bg-slate-800 text-slate-300">
                  {lang}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur hover:border-blue-700 transition-all">
            <CardHeader>
              <Rocket className="w-10 h-10 text-green-500 mb-2" />
              <CardTitle className="text-white">Frameworks</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework) => (
                <Badge key={framework} variant="secondary" className="bg-slate-800 text-slate-300">
                  {framework}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur hover:border-blue-700 transition-all">
            <CardHeader>
              <Cloud className="w-10 h-10 text-cyan-500 mb-2" />
              <CardTitle className="text-white">Cloud & DevOps</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.cloud.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300">
                  {tech}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur hover:border-blue-700 transition-all">
            <CardHeader>
              <Database className="w-10 h-10 text-purple-500 mb-2" />
              <CardTitle className="text-white">Databases</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.databases.map((db) => (
                <Badge key={db} variant="secondary" className="bg-slate-800 text-slate-300">
                  {db}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Featured Projects</h2>
          <p className="text-slate-400">Innovative solutions that make an impact</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 backdrop-blur hover:border-blue-700 hover:shadow-2xl hover:shadow-blue-900/20 transition-all group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Cpu className="w-8 h-8 text-blue-500" />
                  <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
                    {project.impact}
                  </Badge>
                </div>
                <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-slate-700 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">Professional Experience</h2>
          <p className="text-slate-400">Career journey and achievements</p>
        </div>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 backdrop-blur">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <CardTitle className="text-white mb-2">{exp.role}</CardTitle>
                    <CardDescription className="text-blue-400">{exp.company}</CardDescription>
                  </div>
                  <Badge className="bg-slate-800 text-slate-300 border-slate-700">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Terminal className="w-16 h-16 mx-auto mb-6 text-blue-500" />
          <h2 className="mb-6 text-white">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-300 mb-8">
            Always excited to collaborate on innovative projects and tackle challenging technical problems.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
