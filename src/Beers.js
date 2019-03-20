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

  query(pageNum) {
    let url = `https://sandbox-api.brewerydb.com/v2/beers/?key=20b378f58ba545551afeaf7f29820c4c&p=${pageNum}`;
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
          )
        })
        this.setState({beers: beers});
      })
  }

  componentDidMount() {
    // for (var i = 1; i < 5; i++) {
    //   this.query(i)
    // }
    this.query(1);
    this.query(2);
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
      <div className = "table-responsive">
        <table className = "table table-bordered table-striped table-sm">
          <thead className = "thead-light">
            <tr>
              <th scope = "col">Beer Name</th>
              <th scope = "col">Description</th>
              <th scope = "col">Percent Alcohol</th>
              <th scope = "col">IBU</th>
              <th scope = "col">Gravity</th>
            </tr>
          </thead>
          <tbody>
            {tableBody}
          </tbody>
        </table>
    </div>
    )
  }
}



export default Beers;
