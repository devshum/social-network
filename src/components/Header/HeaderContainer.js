import Axios from 'axios';
import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then(response => {
            
                if(response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    this.props.setUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props} data={this.props.login} isAuth={this.props.isAuth}/>
    };
};

const mapStateToProps = state => ({login: state.auth.login, isAuth: state.auth.isAuth });

export default connect(mapStateToProps, {setUserData})(HeaderContainer);