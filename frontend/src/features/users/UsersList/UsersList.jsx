import { useGetUsersQuery } from '../usersApiSlice';
import User from '../User/User';

import classes from './UsersList.module.css';

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className='errmsg'>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = users;

    const usersContent = ids?.length
      ? ids.map((userId) => <User key={userId} userId={userId} />)
      : null;
    content = (
      <section>
        <div className='list-content'>
          <div className={`${classes['users-list__header']} list-header`}>
            <h3>Username</h3>
            <h3>Roles</h3>
            <h3>Edit</h3>
          </div>
          <div className='list-items'> {usersContent}</div>
        </div>
      </section>
    );
  }

  return <div>{content}</div>;
};

export default UsersList;
