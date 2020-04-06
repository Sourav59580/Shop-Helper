
import React, { Component } from 'react'

export class List extends Component {
    render() {
        return (
            <React.Fragment>
             <div className='container-fluid bg-dark text-light p-2 h5'>Vegetables</div>
             <div className='container'>
                 <ul className='list-group list-group-flush'>
                     <li className='list-group-item'>
                        <img src='https://www.srilalithagreens.in/wp-content/uploads/2019/11/Bringle-black.jpg' width='100'/>
                        <span className='h4 mx-5'>Brinjal</span>
                     </li>
                     <li className='list-group-item'>
                        <img src='https://www.srilalithagreens.in/wp-content/uploads/2019/11/Bringle-black.jpg' width='100'/>
                        <span className='h4 mx-5'>Brinjal</span>  
                     </li>
                 </ul>
             </div>
            </React.Fragment>
        )
    }
}

