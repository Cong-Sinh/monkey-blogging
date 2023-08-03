import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useState } from "react";
import UserTable from "./UserTable";
import { Button } from "components/button";

const UserManage = () => {
  const [userList, setUseList] = useState([]);
  return (
    <div>
      <DashboardHeading
        title="Users"
        desc="Manage your usere"
      ></DashboardHeading>
      <div className="flex justify-end mb-10">
        <Button bind="ghost" to="/manage/add-user">
          Add new user
        </Button>
      </div>
      <UserTable></UserTable>
    </div>
  );
};

export default UserManage;
