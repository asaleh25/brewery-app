import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import './index.css';

class Beers extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    let pageNum = 13;
    let url = `https://sandbox-api.brewerydb.com/v2/beers/?key=20b378f58ba545551afeaf7f29820c4c&p=${pageNum}`
    fetch(url)
      .then(results => {
        return results.json();
      })
      .then(mydata => {
        let beers = mydata.data.map((beer) => {
          return (
            {
              "key": beer.id,
              "beerName": beer.nameDisplay,
              "beerDesc": beer.description,
              "abv": beer.abv,
              "ibu": beer.ibu,
              "gravity": beer.originalGravity
            }
            // <tr key={beer.id}>
            //   <td>{beer.nameDisplay}</td>
            //   <td>{beer.description}</td>
            //   <td>{beer.abv}</td>
            //   <td>{beer.ibu}</td>
            //   <td>{beer.originalGravity}</td>
            // </tr>
          )
        })
        this.setState({beers: beers});
      })
  }

  render() {
    let tableBody = this.state.beers.map((beer) => {
      return (
        <tr key={beer.key}>
          <td>{beer.beerName}</td>
          <td>{beer.beerDesc}</td>
          <td>{beer.abv}</td>
          <td>{beer.ibu}</td>
          <td>{beer.gravity}</td>
        </tr>
      )
    })
    return(
      <table className="beerTable">
        <thead>
          <tr>
            <th>Beer Name</th>
            <th>Description</th>
            <th>Percent Alcohol</th>
            <th>IBU</th>
            <th>Gravity</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    )
  }
}



export default Beers;
