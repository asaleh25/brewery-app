import React, { Component } from 'react';
import ReactTable from 'react-table';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './index.css';

let order = 'desc';
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
    this.query(5)
  }

  caret(direction) {
    if (direction === 'asc') {
      return (
        <i class="fas fa-sort-up"></i>
      );
    }
    if (direction === 'desc') {
      return (
        <i class="fas fa-sort-down"></i>
      );
    }
    return (
      <i class="fas fa-sort"></i>
    )
  }

  render() {
    return (
      <div>
        <BootstrapTable className='table table-striped table-sortable' data={this.state.beers}
          search={true} strictSearch={false} options={this.options} version='4'
          pagination={true}>
          <TableHeaderColumn isKey={true} dataField='beerName' dataSort={true}
            caretRender={this.caret} width='20%' tdStyle={{whiteSpace: 'normal'}}>
            Beer Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='beerDesc' searchable={false}
            tdStyle={{whiteSpace: 'normal'}}>
            Description
          </TableHeaderColumn>
          <TableHeaderColumn dataField='abv' searchable={false} dataSort={true}
            caretRender={this.caret} width='15%'>
            Percent Alcohol
          </TableHeaderColumn>
          <TableHeaderColumn dataField='ibu' searchable={false} dataSort={true}
            caretRender={this.caret} width='5%'>
            IBU
          </TableHeaderColumn>
          <TableHeaderColumn dataField='gravity' searchable={false} dataSort={true}
            caretRender={this.caret} width='10%'>
            Gravity
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}



export default Beers;
