import React from "react";
import { Table } from "antd";
import ActionButton from "../button";

const MemberTable = ({ data }) => {
  const handleDelete = async (currentUser) => {
    try {
      const res = await fetch(`/api/users/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!!data) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: "Firs Name",
      dataIndex: "firstName",
      key: "firstNameme",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "150px",
          }}
        >
          <ActionButton title="Edit" />
          <ActionButton title="Delete" onClick={() => handleDelete(data)} />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MemberTable;
