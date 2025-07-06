import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Ahmed Ali',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sara Mohamed',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    name: 'Youssef Ibrahim',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    name: 'Mona Hassan',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
];

function AboutTeam() {
  return (
    <section id="about" className="py-7 bg-white text-center">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h3>
        <p className="mb-10 max-w-xl mx-auto text-gray-600">
          We are a passionate group of developers, designers, and dreamers who believe in the power of connection and creativity.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
