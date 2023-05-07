import React, { Fragment } from "react";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
import { GoTrashcan } from "react-icons/go";
const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  function handleClick(id) {
    console.log(id);
    doRemoveUser(id);
  }
  const header = (
    <Fragment>
      <Button
        className="mr-3"
        loading={isLoading}
        onClick={() => handleClick(user.id)}
      >
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user</div>}
      {user.name}
    </Fragment>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
