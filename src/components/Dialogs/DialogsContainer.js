import { updateNewMessageActionCreator, addMessageActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    dialogsPage: state.dialogsPage 
});

const mapDispatchToProps = dispatch => ({
    messageClick: () => { 
        dispatch(addMessageActionCreater())
    },
    
    messageChange: text => { 
        dispatch(updateNewMessageActionCreator(text))
    }
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;