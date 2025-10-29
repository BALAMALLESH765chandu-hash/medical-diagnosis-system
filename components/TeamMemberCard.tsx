
import React from 'react';
import type { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img
        className="mx-auto h-32 w-32 rounded-full object-cover"
        src={member.imageUrl}
        alt={member.name}
      />
      <h3 className="mt-6 text-lg font-semibold text-slate-900">{member.name}</h3>
      <p className="text-primary">{member.role}</p>
    </div>
  );
};

export default TeamMemberCard;
