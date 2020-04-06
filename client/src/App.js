import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import { List } from './components/List';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      name : undefined,
      imgsrc : undefined
    }

    this.vegetableIcon = {
      Eggplant : 'https://www.srilalithagreens.in/wp-content/uploads/2019/11/Bringle-black.jpg',
      Carrot : 'https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg',
      Chilli : 'https://4.imimg.com/data4/RB/FW/MY-937476/green-chilli-500x500.jpg',
      Tomato : 'https://seedsnpots.com/wp-content/uploads/2017/09/tomato.jpg',
      Broccoli : 'https://mahadev-store.s3.ap-south-1.amazonaws.com/images/2018/08/1534851237_gallery_image_urlBroccoli.jpg',
      Cauliflower : 'https://images-na.ssl-images-amazon.com/images/I/91EdPVzD99L._SL1500_.jpg',
      Corn : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjHseLB1ulqTdnW3JZQAjGEXNAO0dBwo2nYDSeC8LnAcgES9oc&usqp=CAU',
      Cucumber : 'https://cdn-b.medlife.com/2019/04/cucumber-health-benefits.png',
      Mushrooms : 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1136653496%2F960x0.jpg%3Ffit%3Dscale',
      Onion : 'https://cdn.shopify.com/s/files/1/1891/6405/products/shop-online-from-usa-vegetables-red-onion-fresh-food-in-dubai-and-abu-dhabi-24624338062_450x450.jpg?v=1536787851',
      Potato : 'https://pathsensors.com/wp-content/uploads/potato-04.jpg',
      Pumpkin : 'https://5.imimg.com/data5/DW/KY/GLADMIN-25336358/pumpkin-green-500x500.png',
      default : 'https://www.eurodiet.gr/wp-content/uploads/2016/05/eurodiet-%CE%B1%CF%80%CE%BF%CF%84%CE%BF%CE%BE%CE%AF%CE%BD%CF%89%CF%83%CE%B7.jpg'
    }
  }
  getVegetableIcon(imgsrc,name){
    var src= "";
    switch(name){
      case 'Eggplant' : 
           src = this.vegetableIcon.Eggplant;
           break;
           case "Carrot" : 
           src = this.vegetableIcon.Carrot;
           break;
           case "Chilli" : 
           src = this.vegetableIcon.Chilli;
           break;
           case "Tomato" : 
           src = this.vegetableIcon.Tomato;
           break;
           case "Broccoli" : 
           src = this.vegetableIcon.Broccoli;
           break;
           case "Cauliflower" : 
           src = this.vegetableIcon.Cauliflower;
           break;
           case "Corn" : 
           src = this.vegetableIcon.Corn;
           break;
           case "Cucumber" : 
           src = this.vegetableIcon.Cucumber;
           break;
           case "Mushrooms" : 
           src = this.vegetableIcon.Mushrooms;
           break;
           case "Onion" : 
           src = this.vegetableIcon.Onion;
           break;
           case "Potato" : 
           src = this.vegetableIcon.Potato;
           break;
           case "Pumpkin" : 
           src = this.vegetableIcon.Pumpkin;
           break;
           default :
           src = this.vegetableIcon.default;   
    }

    return src;

  }

  submitVegetables = (e)=>{
    e.preventDefault();
    var name = e.target.elements.name.value;
    console.log(name);
    const srcvalue = this.getVegetableIcon(this.vegetableIcon,name);
    console.log(srcvalue);
    fetch("api/items/", {
      method:"POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
       "name" : e.target.elements.name.value,
       "imagesrc" : srcvalue
      })
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))

  }


  render() {
    return (
      <div style={{height:'100vh',overflow:'hidden'}}>
     <Navbar /> 
     <Form loadVegetables={this.submitVegetables}/>
     <List  imgsrc={this.state.imgsrc}/>
    </div>
    )
  }
}

export default App