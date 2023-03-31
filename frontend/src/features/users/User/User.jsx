import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../usersApiSlice';
import classes from './User.module.css';

const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  const navigate = useNavigate();

  if (user) {
    const handleEdit = () => navigate(`/dash/users/${userId}`);

    const userRolesString = user.roles.toString().replaceAll(',', ', ');

    return (
      <div
        className={`${classes['user-item']} ${
          user.active ? '' : classes['user-item--inactive']
        } list-item`}
      >
        <div className={classes['user-item__name']}>{user.username}</div>
        <div>{userRolesString}</div>
        <button className='list-item__button' onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    );
  } else return null;
};

export default User;
