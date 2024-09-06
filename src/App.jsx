import React, { useState, useEffect } from "react";
import { csv } from "d3";
import { getValueByPartialKey } from "./utils/utils";
import DropdownBox from "./components/DropdownBox";
import MentorCard from "./components/MentorCard";

const App = () => {
  const [mentors, setMentors] = useState([]);
  const [filters, setFilters] = useState({
    faculty: [],
    meetingFormat: [],
    researchField: [],
  });

  useEffect(() => {
    csv("/demo1.csv").then((data) => {
      setMentors(
        data.slice(1).map((row) => ({
          name: row["First Name"] + " " + row["Last Name"],
          id: row["Mentor ID"],
          faculty:
            row["Faculty - Selected Choice"] === "Other (Please state below):"
              ? row["Faculty - Other (Please state below): - Text"]
              : row["Faculty - Selected Choice"],
          researchField: row["Field of Research"],
          meetingFormat: row["Individual or group project"],
          summary:
            row["Provide a quick summary of your research (200 words max)"],
          menteeGoals: getValueByPartialKey(
            row,
            "summary of what you would like to do"
          ),
          citations: [
            getValueByPartialKey(row, "Citation 1"),
            getValueByPartialKey(row, "Citation 2"),
            getValueByPartialKey(row, "Citation 3"),
          ],
        }))
      );
    });
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const filteredMentors = mentors.filter(
    (mentor) =>
      (filters.faculty.length > 0
        ? filters.faculty.includes(mentor.faculty)
        : true) &&
      (filters.meetingFormat.length > 0
        ? filters.meetingFormat.includes(mentor.meetingFormat)
        : true) &&
      (filters.researchField.length > 0
        ? filters.researchField.some((field) =>
            mentor.researchField.includes(field)
          )
        : true)
  );

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="p-4">
        <DropdownBox
          mentors={mentors}
          onFilterChange={handleFilterChange}
          filters={filters}
        />
      </div>
      <div className="flex flex-col overflow-y-auto max-h-screen">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="mb-4">
            <MentorCard mentor={mentor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
