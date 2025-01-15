import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typewriter } from 'react-simple-typewriter';
import {
  Award,
  GraduationCap,
  Trophy,
  Code,
  BookOpen,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

import '../styles/About.css';

import ProfileSection from './ProfileSection';


const BackgroundPatterns = () => (
  <div className="fixed inset-0 pointer-events-none opacity-20">
    <div className="absolute top-0 right-0 w-96 h-96 bg-grid-blue-500/[0.1]" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-dot-blue-500/[0.2]" />
    <div className="absolute top-1/2 left-1/2 w-full h-96 -translate-x-1/2 -translate-y-1/2 bg-wave-blue-500/[0.1]" />
  </div>
);

const About = () => {
  const technicalSkills = {
    "Programming Languages": ["C/C++", "Python", "JavaScript", "Assembly Language", "Bash"],
    "Databases": ["MySQL", "PostgreSQL", "CockroachDB", "MongoDB"],
    "Tools & Environments": ["Git", "GitHub", "Jupyter", "Chrome DevTools", "Arduino", "LaTeX", "Linux", "Overleaf", "Fusion 360", "Shell"],
    "Libraries & Frameworks": ["Numpy", "Flask", "Dash", "React", "Node.js", "Bootstrap", "Pandas", "Matplotlib"],
    "Web Development": ["HTML", "CSS", "JavaScript", "WebSockets", "Render"]
  };

  const publications = [
    {
      title: "Machine Learning Integration in Gas Sensors",
      status: "(Under Review, IEEE, 2025)",
      details: "Led research on integrating machine learning techniques with gas sensor systems, developing novel mathematical models for environmental factor correlation."
    },
    {
      title: "Advanced Sensor Calibration Framework",
      status: "(Ongoing Research, 2025)",
      details: "Developing innovative mathematical framework to enhance gas sensor accuracy through advanced calibration methodologies."
    }
  ];

  const achievements = [
    {
      title: "Dean's List Recognition, IIIT Hyderabad (2023-24)",
      description: "Awarded Dean's List honors in consecutive Spring and Monsoon semesters for outstanding academic performance in first year."
    },
    {
      title: "JEE Advanced 2023",
      description: "Secured AIR 1504 (top 0.8% among 189,744 candidates)"
    },
    {
      title: "JEE Main 2023",
      description: "Achieved AIR 677 (top 0.06% among 1.1 million candidates)"
    },
    {
      title: "KVPY-SA 2022",
      description: "Secured AIR 642, receiving prestigious fellowship from Indian Institute of Science"
    }
    ,
    {
      title: "Academic Highlights",
      description: "Highest grades in Real Analysis, Linear Algebra, and Probability & Statistics"
    }
  ];

  const olympiads = [
    "Qualified for Indian National Astronomy Olympiad (INAO) through NSEA",
    "State merit listing in National Standard Examinations in Chemistry (NSEC) and Physics (NSEP)",
    "Cleared Indian Olympiad Qualifier in Mathematics (IOQM) in consecutive years (2020, 2021)",
    "District topper in Vidyarthi Vigyan Manthan (VVM) examination"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <BackgroundPatterns />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Profile Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
        {/* <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <ProfileCard />
              <h1 className="text-2xl font-bold text-slate-900 mt-8 mb-2">Shreyas Mehta</h1>
              <p className="text-slate-600 text-center">
                Computer Science Student at IIIT Hyderabad
              </p>
            </div>
          </CardContent>
        </Card> */}
        <ProfileSection />


<Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <Typewriter
                  words={['Academic Excellence', 'Research & Innovation', 'Technical Expertise']}
                  loop={true}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4">
                  <Trophy className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
                        I am a passionate Computer Science student at IIIT Hyderabad, driven by a love for problem-solving and innovation. With a strong foundation in mathematics and coding, I have excelled in various academic disciplines.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                          <h4 className="font-medium text-blue-600 mb-2">Academic Excellence</h4>
                          <p>My technical expertise spans across multiple programming languages including C/C++, Python, and JavaScript,, as well as various frameworks and libraries like React, Flask, and Pandas.</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                          <h4 className="font-medium text-blue-600 mb-2">Research Focus</h4>
                          <p>I was currently involved in research, particularly in the integration of machine learning with gas sensor systems and enhancing sensor accuracy through advanced calibration techniques.</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
                        <p className="mb-2">Throughout my academic journey, I have earned several accolades:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          <li>Dean's List honors at IIIT Hyderabad</li>
                          <li>Recognition in National Olympiads</li>
                          <li>Top ranks in JEE Advanced and KVPY</li>
                        </ul>
                      </div>
                      
                      <p className="italic text-gray-700 border-l-4 border-blue-300 pl-4">
                        My passion for learning and collaborating on challenging projects fuels my drive to make an impact in both the academic and tech communities. I thrive in dynamic environments, always seeking innovative solutions and striving for excellence in everything I do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Award className="w-5 h-5" /> Academic Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-slate-600">{achievement.description}</p>
                  </div>
                ))}
                <div className="mt-6">
                  <h3 className="font-semibold mb-4">Olympiad Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {olympiads.map((olympiad, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-slate-700">{olympiad}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Publications Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <FileText className="w-5 h-5" /> Publications & Research
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                {publications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-semibold text-lg">{pub.title}</h3>
                    <p className="text-blue-600 text-sm mb-2">{pub.status}</p>
                    <p className="text-slate-600">{pub.details}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <Code className="w-5 h-5" /> Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <AccordionItem key={category} value={category}>
                    <AccordionTrigger className="text-lg font-medium hover:text-blue-600">
                      {category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2 p-4 bg-blue-50 rounded-lg">
                        {skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline" 
                            className="bg-white hover:bg-blue-100"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  );
};

export default About;