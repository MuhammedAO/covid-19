import React from 'react';
import styles from './App.module.css';
import {Cards, CountryPicker, Chart} from './components'
import coronaImg from './images/image.png'

import {fetchData} from './api'

class App extends React.Component{
  state = {
    data: {},
    country:''
  }
 async componentDidMount(){
   const fetchedData = await fetchData()

   this.setState({data:fetchedData})
   
  }

  handleCountryChange = async (country) => {
   //fetch data
   const fetchedData = await fetchData(country)
  
   this.setState({data:fetchedData, country:country})
   
   //set state
  }

  render(){
    const {data, country} = this.state
    return (
      <div className={styles.container}>
      <img src={coronaImg} className={styles.img} alt="corona img"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
