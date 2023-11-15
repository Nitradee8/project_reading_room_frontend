import Route from './route/Route';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Route />
      <ToastContainer position='top-right' autoClose={3000} theme='colored'/>
    </>
  );
}
export default App;
