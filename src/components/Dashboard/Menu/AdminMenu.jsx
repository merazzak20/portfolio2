import React from "react";
import MenuItem from "./MenuItem";
import { MdAssignmentAdd, MdMessage } from "react-icons/md";
import { GrArticle } from "react-icons/gr";

const AdminMenu = () => {
  return (
    <>
      {/* <MenuItem icon={BsGraphUp} label="Statistics" address="/dashboard" /> */}

      <MenuItem
        icon={MdAssignmentAdd}
        label="Add Project"
        address="/dashboard"
      />
      <MenuItem icon={GrArticle} label="Add Feedback" address="addFeedback" />
      <MenuItem icon={MdMessage} label="All Messages" address="allMessages" />
    </>
  );
};

export default AdminMenu;
