import { Button } from '@progress/kendo-react-buttons';
import { useDispatch } from 'react-redux';
import { logout } from '../auth/login/store/authActions';
const ToDo = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout())
  }
  return (
    <div>
      <h2>ToDo page</h2>
      <Button onClick={handleLogout}>Logout</Button>

    </div>
  )
}

export default ToDo;
