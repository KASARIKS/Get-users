import { usersAPI } from './api/api';
import './App.css';
import UsersListContainer from './components/UsersListContainer';
import { getUsersThunkCreator } from './state/users_reducer';

function App() {
  return (
    <div className="App">
      <UsersListContainer />
    </div>
  );
}

export default App;
