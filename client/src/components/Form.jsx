import React from 'react'
import './css/Form.css'
function Form(props) {
    return (
        <React.Fragment >
            <div className='container'>
                <form onSubmit={props.loadVegetables}>
                    <div className='row'>
                        <div className='col-2'></div>
                        <div className='col-6'><input type='text' name='name' className='form-control mx-auto my-4 border-0 outline-0' placeholder='Enter vegetables name' /></div>
                        <div className='col-2 text-left'><button className='btn border-0 my-4 px-4'>Submit</button></div>
                        <div className='col-2'></div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Form
