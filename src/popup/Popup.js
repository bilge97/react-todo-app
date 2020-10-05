import React from 'react';  
import './Popup.css';  
import unsplash from '../unsplash';
import SearchBar from '../SearchBar';
import ImageList from '../ImageList'

class Popup extends React.Component {  
    constructor(props){
        super(props);
        this.state={
          images:[] 
        }
        this.onSearchSubmit = this.onSearchSubmit.bind(this);

    }    
    
  
 onSearchSubmit= async (term) =>{
    
    const response = await unsplash.get('/search/photos' , {
        params:{
            query: term
        }
    });
    console.log(response.request.status);
   this.setState({ images: response.data.results});
  
  }  
  render() {  
    return (  
        <div className='popup'>  
            <div className='popup\_inner'>  
                <h1>{this.props.text}</h1>  
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                <button onClick={this.props.closePopup}>close me</button>  
            </div>           
        </div>  
    );  
    }  
}  

export default Popup;