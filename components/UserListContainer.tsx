import UserCard from "./UserCard";

type Props = {};

const UserListContainer = (props: Props) => {
  return (
    <div className="flex h-[25rem] flex-col gap-8 overflow-y-scroll">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default UserListContainer;
