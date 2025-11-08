import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Linkedin, Database, Code2, Star } from 'lucide-react'

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <motion.h1 className="text-5xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          Building Reliable AI Through Better Data Design
        </motion.h1>
        <p className="text-xl mb-8">Data Product Owner | NLP Annotation | Quality Governance | ML Data Strategy</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">View My Work</Button>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed text-center">
          I'm a PMP-certified Data Product Owner who bridges the gap between AI/ML innovation and data reliability. 
          I’ve led multi-tier annotation teams of 74–650 members delivering training datasets for NLP and dialogue models, 
          developing scalable audit frameworks that ensure 90%+ accuracy and inter-rater agreement.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'LLM Annotation Optimization & Quality Framework',
              impact: '+8% model accuracy, +15% throughput efficiency',
            },
            {
              title: 'Dialogue Intent Labeling & Taxonomy Management',
              impact: '+10% precision in secondary intent classification',
            },
            {
              title: 'Data Governance & Metrics Dashboard',
              impact: 'Reduced issue detection time by 40%',
            },
            {
              title: 'Audio Transcription Flywheel Project',
              impact: 'Raised annotation quality to 91% HALO accuracy',
            },
            {
              title: 'Human-AI Collaboration Vision',
              impact: 'Thought leadership on scalable annotation ecosystems',
            }
          ].map((proj, i) => (
            <Card key={i} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-2">{proj.impact}</p>
                <Button variant="outline" size="sm">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {['Python', 'SQL', 'Labelbox', 'Looker Studio', 'Jira', 'MDLC', 'Data Governance', 'LLM Fine-tuning', 'Annotation QA'].map((skill, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-4 bg-white rounded-2xl shadow">
              <Code2 className="mx-auto mb-2" />
              <p className="font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[{
            text: 'Tosin transformed our data pipeline by enforcing consistent schema governance.',
            name: 'Project Stakeholder'
          }, {
            text: 'Her process redesign improved QA precision and model training efficiency.',
            name: 'AI Engineer Partner'
          }].map((t, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6 text-center italic">
                “{t.text}”
                <p className="font-semibold mt-4 not-italic">— {t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Build Reliable AI Together</h2>
        <div className="flex justify-center gap-6">
          <Button variant="outline" size="lg" className="border-white text-white" asChild>
            <a href="mailto:tosin@example.com"><Mail className="mr-2 h-5 w-5" /> Email Me</a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white" asChild>
            <a href="https://linkedin.com/in/tosinoriowo" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-5 w-5" /> LinkedIn</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} Oluwatosin Oriowo — Data Product Owner Portfolio
      </footer>
    </div>
  )
}
