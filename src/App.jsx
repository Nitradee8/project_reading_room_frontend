import Route from './route/Route';
import { ToastContainer } from 'react-toastify'
import Loading from './utils/Loading';
import { useAuth } from './hooks/use-auth';

function App() {
  const { isLoading } = useAuth();
  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return (
    <>
      <Route />
      <ToastContainer position='top-right' autoClose={3000} theme='colored'/>
    </>
  );
}
export default App;
