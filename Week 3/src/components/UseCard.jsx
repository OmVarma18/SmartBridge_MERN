const UserCard = ({ name, email }) => {
    return (
      <div className="border rounded-lg shadow-md p-4 max-w-xs bg-white">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  