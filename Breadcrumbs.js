import React from 'react'
import {Breadcrumb, BreadcrumbItem} from 'reactstrap'

const Example = (props) =>{
    return(<div>
        <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Login</BreadcrumbItem>
            <BreadcrumbItem tag="a" href="#">Sinup</BreadcrumbItem>
        </Breadcrumb>
    </div>)
}
export default Example;