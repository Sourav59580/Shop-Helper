
import React, { Component } from 'react'

export class List extends Component {
    constructor(props){
        super(props);
        this.state ={
            lists : []
        }
    }
    componentDidMount(){
        fetch("api/items/list")
        .then(res => res.json())
        .then(lists => this.setState({lists},()=>{
            console.log("data success fetch",lists);
        }))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
             <div className='container-fluid bg-dark text-light p-2 h5'>Vegetables</div>
             <h2>{this.props.imgsrc}</h2>
             <div className='container' style={{overflowY:'scroll',height:'65vh'}}>
                 <ul className='list-group list-group-flush'>
                     {
                         this.state.lists.map(lists =>
                         <li className='list-group-item'>
                           <img src={lists.imgsrc} width='100'/>
                           <span className='h5 ml-5'>{lists.name}</span>
                         </li>
                         )}
                     {/* <li className='list-group-item'>
                        <img src='https://www.srilalithagreens.in/wp-content/uploads/2019/11/Bringle-black.jpg' width='100'/>
                        <span className='h5 ml-5'>Brinjal</span>
                     </li>
                     <li className='list-group-item'>
                        <img src='https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg' width='100'/>
                        <span className='h5 ml-5'>Carrot</span>  
                     </li>
                     <li className='list-group-item'>
                        <img src='https://4.imimg.com/data4/RB/FW/MY-937476/green-chilli-500x500.jpg' width='100'/>
                        <span className='h5 ml-5'>Green Chilli</span>  
                     </li>
                     <li className='list-group-item'>
                        <img src='https://seedsnpots.com/wp-content/uploads/2017/09/tomato.jpg' width='100'/>
                        <span className='h5 ml-5'>Tomato</span>  
                     </li> */}
                 </ul>
             </div>
            </React.Fragment>
        )
    }
}

