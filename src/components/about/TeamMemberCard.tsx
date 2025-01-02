import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  photo: string;
  skills: string[];
  linkedin?: string;
  email: string;
}

export function TeamMemberCard({ name, role, photo, skills, linkedin, email }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={photo}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-1">{name}</h4>
        <p className="text-blue-600 mb-4">{role}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          <a
            href={`mailto:${email}`}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}