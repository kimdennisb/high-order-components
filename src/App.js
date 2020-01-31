import React from 'react';
import logo from './logo.svg';
import './App.css';

var preload = { 
  "data": [
  {
    "name": "Ojo",
    "zone": "Lagos State",
    "region": "South West" },

  {
    "name": "Ahiazu Mbaise",
    "zone": "Imo State",
    "region": "South East" },

  {
    "name": "Akoko-Edo",
    "zone": "Edo State",
    "region": "South South" },

  {
    "name": "Anka",
    "zone": "Zamfara State",
    "region": "North West" },

  {
    "name": "Akwanga",
    "zone": "Nasarawa State",
    "region": "North Central" }
  ] 
}



const withSearch = WrappedComponent => {
  return  class extends React.Component {
    state = { searchTerm : '' }
    handleSearch = event =>{
      this.setState({searchTerm : event.target.value});
      //console.table(this);
  };
    render() {
      return (
        <div>
          <div>
            <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
          </div>
          <WrappedComponent searchTerm={this.state.searchTerm} />
        </div>
      )
    }};
};


const Location = props => {
  const { searchTerm } = props;
  console.table(props);//does output fun crumbs in table form!
  return (
<div>
  <div>
    <div>
      <h2>Preferred Location</h2>
    </div>
  </div>
<div>
{preload.data.filter(location=> `${location.name} ${location.zone} ${location.region}`
.toUpperCase().indexOf(searchTerm.toUpperCase())>=0)
.map(location=><LocationCard key={location.id} {...location}/>)}
  </div>
  </div>
  )
};

const LocationCard = props => {
  return (
    <div>
      <hr />
  <p><b>Name:</b>{props.name}</p>
  <p><b>zone:</b>{props.zone}</p>
  <p><b>Region:</b>{props.region}</p>
    </div>
  )
};

const Hoc = withSearch(Location);
console.log(Hoc)
 export default Hoc;