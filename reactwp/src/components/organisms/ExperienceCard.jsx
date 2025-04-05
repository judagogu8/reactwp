import React from 'react';

const ExperienceCard = ({ title, company, location, date, description }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 w-full">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="text-md font-medium text-gray-800">{company}</p>
      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-600 mt-1">
        <span>{location}</span>
        <span>{date}</span>
      </div>
      <ul className="list-disc list-inside mt-3 text-gray-700">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
