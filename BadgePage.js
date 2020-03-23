import React from 'react'
import {Badge, Button} from 'reactstrap'

const Example = (props) =>{
 return(<div>
    <Badge color="primary">HEY</Badge><br />
    <Button color="primary" outline>Notification<Badge color="secondary">4</Badge></Button><br/>
    <Badge href="#" color="warning">Warning</Badge><br />
 </div>)


}
export default Example;