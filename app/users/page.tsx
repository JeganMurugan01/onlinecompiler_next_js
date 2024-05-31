import { globalValue } from '../constants';

const UserList = () => {
  return (
    <>
      <p className='text-3xl p-5'>{globalValue?.userPageLabel?.userList}</p>
    </>
  );
};

export default UserList;
