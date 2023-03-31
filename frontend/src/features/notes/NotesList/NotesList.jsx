import { useGetNotesQuery } from '../notesApiSlice';
import Note from '../Note/Note';
import classes from './NotesList.module.css';

const NotesList = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className='errmsg'>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = notes;

    const notesContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    content = (
      <section>
        <div className='list-content'>
          <div className={`${classes['notes-list__header']} list-header`}>
            <h3>Status</h3>
            <h3 className={classes['notes-list__created']}>Created</h3>
            <h3 className={classes['notes-list__updated']}>Updated</h3>
            <h3>Title</h3>
            <h3 className={classes['notes-list__owner']}>Owner</h3>
            <h3>Edit</h3>
          </div>
          <div className='list-items'>{notesContent}</div>
        </div>
      </section>
    );
  }

  return content;
};

export default NotesList;
