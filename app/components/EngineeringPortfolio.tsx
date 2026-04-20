import { Code2, Terminal, Cpu, Zap, Github, Rocket, Database, Cloud, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EngineeringPortfolio() {
  const projects = [
    {
      title: "Feature Flag & Quota Management Microservice",
      tech: ["FastAPI", "Python", "Redis", "Consul", "Prometheus"],
      description: "Architected a factory-based manager pattern with Redis-backed distributed locking for safe concurrent quota operations; implemented quota allocation, transfer, and expiry via a controller-manager layered architecture with Consul config management and StatsD/Prometheus observability",
      impact: "Production-grade reliability"
    },
    {
      title: "Decision Configurator Microservice",
      tech: ["FastAPI", "React.js", "PostgreSQL", "RBAC"],
      description: "Built from scratch with DFS-based tree evaluation and a React.js frontend for tree visualization, validation, and RBAC-enforced multi-tree management",
      impact: "p99 latency 49ms @ 3K RPS"
    },
    {
      title: "Pricing, Payments & Subscription Platform",
      tech: ["Apache Kafka", "Redis", "PostgreSQL", "AWS"],
      description: "Architected scalable backend microservices for pricing, payments, and subscription management with event-driven async communication and Redis caching layers",
      impact: "99.9% uptime, 60% fewer DB calls"
    }
  ];

  const skills = {
    languages: ["Python", "TypeScript", "JavaScript", "SQL"],
    frameworks: ["Django REST Framework", "FastAPI", "React.js", "Next.js"],
    cloud: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes", "CI/CD"],
    databases: ["PostgreSQL", "Redis", "Elasticsearch", "Apache Kafka"]
  };

  const experience = [
    {
      company: "WorkIndia",
      role: "Software Development Engineer 1",
      period: "Jul 2024 – Present",
      achievements: [
        "Architected feature flag & quota management microservice using factory-based manager pattern with Redis-backed distributed locking for safe concurrent operations",
        "Built decision configurator microservice from scratch with DFS-based tree evaluation achieving p99 latency of 49ms under 3000 concurrent requests",
        "Optimized PostgreSQL queries and implemented advanced indexing strategies, reducing average query response time by 40%",
        "Designed event-driven architectures using Apache Kafka; built Redis caching layers achieving 60% reduction in database calls",
        "Containerized applications with Docker and orchestrated deployments via Kubernetes on AWS"
      ]
    },
    {
      company: "WorkIndia",
      role: "Software Development Engineer Intern",
      period: "Jan 2024 – Jul 2024",
      achievements: [
        "Developed and optimized backend APIs serving Android application pages with ~500K–600K DAU under sustained heavy load",
        "Reduced on-call toil by tuning alert thresholds and authoring SOPs, saving ~500 engineer-minutes/month",
        "Contributed to frontend development using React.js and TypeScript, building responsive UIs integrated with backend APIs",
        "Worked with AWS (EC2, S3, RDS) to deploy and manage cloud infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1640552421447-1808735878e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjAxOTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-slate-900/95" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700 border-0">
                <Terminal className="w-3 h-3 mr-1" />
                Software Development Engineer
              </Badge>
              <h1 className="mb-6 text-white">Jayanand Jayan</h1>
              <p className="text-slate-300 mb-6">
                Backend systems and cloud infrastructure specialist with 2+ years of experience.
                Proven track record architecting microservices from scratch — including a decision
                configurator achieving p99 latency of 49ms under 3000 concurrent requests.
                Expertise in Python, Django, FastAPI, PostgreSQL, Redis, Kafka, Docker, Kubernetes, and AWS.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Jayanand-Jayan" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  jayanand-jayan.github.io
                </button>
                </a>
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
                  <span className="text-white">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              <CardTitle className="text-white">Databases & Infra</CardTitle>
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                    <CardDescription className="text-blue-400">{exp.company} · Bengaluru, Karnataka</CardDescription>
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
      <div className="relative z-10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Terminal className="w-16 h-16 mx-auto mb-6 text-blue-500" />
          <h2 className="mb-6 text-white">Let&apos;s Build Something Amazing</h2>
          <p className="text-xl text-slate-300 mb-8">
            Always excited to collaborate on high-performance systems and tackle challenging backend engineering problems.
          </p>
          <a href="mailto:nandujayanand@gmail.com">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
