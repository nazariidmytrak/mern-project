import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNoteById } from '../notesApiSlice';
import classes from './Note.module.css';

const Note = ({ noteId }) => {
  const note = useSelector((state) => selectNoteById(state, noteId));

  const navigate = useNavigate();

  if (note) {
    const created = new Date(note.createdAt).toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
    });

    const updated = new Date(note.updatedAt).toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
    });

    const handleEdit = () => navigate(`/dash/notes/${noteId}`);

    return (
      <div className={`${classes['note-item']} list-item`}>
        {note.completed ? (
          <div style={{ color: 'green' }}>Completed</div>
        ) : (
          <div style={{ color: 'firebrick' }}>Open</div>
        )}
        <div className={classes['note-item__created']}>{created}</div>
        <div className={classes['note-item__updated']}>{updated}</div>
        <div className={classes['note-item__title']}>{note.title}</div>
        <div className={classes['note-item__username']}>{note.username}</div>
        <button className='list-item__button' onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    );
  } else return null;
};

export default Note;
