import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg m-4 p-6 bg-white">
      <div className="absolute top-0 right-0 m-2 flex space-x-2">
        <img
          src="logo.png" 
          alt="Mentor Badge 1"
          className="w-16 h-12"
        />
        <img
          src="dino.png" 
          alt="Mentor Badge 2"
          className="w-12 h-12"
        />
      </div>

      <h3 className="font-bold text-xl mb-4 text-gray-900">{mentor.name}</h3>
      <div className="space-y-3">
        <p className="text-gray-700">
          <strong>Mentor ID:</strong> {mentor.id}
        </p>
        <p className="text-gray-700">
          <strong>Faculty:</strong> {mentor.faculty}
        </p>
        <p className="text-gray-700">
          <strong>Field of Research:</strong> {mentor.researchField}
        </p>
        <p className="text-gray-700">
          <strong>Project Type:</strong> {mentor.projectType}
        </p>
        <p className="text-gray-700">
          <strong>Meeting Format (Online/ In-person):</strong>{" "}
          {mentor.meetingFormat}
        </p>
        <p className="text-gray-700">
          <strong>Summary of Research:</strong> {mentor.summary}
        </p>
        <p className="text-gray-700">
          <strong>Mentee Goals:</strong> {mentor.menteeGoals}
        </p>
        {mentor.citations.map((citation, index) => (
          <p key={index} className="text-gray-600">
            <strong>Citation {index + 1}:</strong> {citation}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MentorCard;
