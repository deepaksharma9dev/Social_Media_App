import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route,Redirect} from  'react-router-dom';


const PrivateRoute = ({component:Component, auth:{isAuthenticated,loading},...rest}) => (
    // console.log(component);
    
    <Route {...rest} render={props=>!isAuthenticated && !loading ? (<Redirect to="/login"/>):(<Component {...props}/>)}/>
);
PrivateRoute.propTypes = {
    auth:propTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
