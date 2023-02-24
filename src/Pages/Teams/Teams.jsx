import React from "react";

import TeamPosuaWording from "../../Components/Team/TeamPosuaWording/TeamPosuaWording";
import TeamMember from "../../Components/Team/TeamMembers/TeamMembers.jsx";

const Teams = () => {
  return (
    <div className="containerTeam">
      <TeamPosuaWording />
      <TeamMember />
    </div>
  );
};

export default Teams;
