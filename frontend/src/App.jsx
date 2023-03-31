import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './features/auth/Login';
import Public from './components/Dash/PublicComponent/Public';
import DashLayout from './components/Dash/DashLayout/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList/NotesList';
import UsersList from './features/users/UsersList/UsersList';
import EditUser from './features/users/User/EditUser';
import NewUserForm from './features/users/User/NewUserForm';
import EditNote from './features/notes/Note/EditNote';
import NewNote from './features/notes/Note/NewNote';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path='users'>
            <Route index element={<UsersList />} />
            <Route path=':id' element={<EditUser />} />
            <Route path='new' element={<NewUserForm />} />
          </Route>
          <Route path='notes'>
            <Route index element={<NotesList />} />
            <Route path=':id' element={<EditNote />} />
            <Route path='new' element={<NewNote />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
