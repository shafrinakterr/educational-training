import PropTypes from 'prop-types'
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../authprovider/AuthProvider';
const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation();
    console.log(location.pathname)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg "></span>
        </div>

    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.object
}
export default PrivateRoutes;