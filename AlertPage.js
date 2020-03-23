import React from 'react';
import {Alert} from 'reactstrap';
 import {UncontrolledAlert} from 'reactstrap';
const AlertPage = (props) =>{
    return(<div>
        <Alert color="primary"> red color alert</Alert>
        <Alert color="success"> secondary alert <a href="#" className="alert-link">example</a> link </Alert>
        <Alert color="secondary">
            <h4 className="alert-heading">Well Done</h4>
            <p>This alert has a body where content can be written and displayed as required.This is just an example</p>
            <hr />
            <p className="mb-0">You may write content by seperating it out. Important noticable things should be written here</p>
        </Alert>
        <UncontrolledAlert>This is an UncontrolledAlert</UncontrolledAlert>
        <UncontrolledAlert color="primary" style={{marginLeft:"405px", marginRight:"475px"}}>alert with mixture <a href="#">example</a> this is the
        <hr />
        <p className="mb-0">combo exist here</p>

        </UncontrolledAlert>
    </div>)
}
export default AlertPage;