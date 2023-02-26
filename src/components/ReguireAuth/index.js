import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
function RequireAuth(){
    const auth = useSelector((state) => state.user);
    console.log(auth)
    return(
        auth.accessToken?  <Outlet/>  :<Navigate to="/login"/>
    )
}
export default RequireAuth