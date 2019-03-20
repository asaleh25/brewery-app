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
    let beerList = [];
    let url = `https://sandbox-api.brewerydb.com/v2/beers/?key=20b378f58ba545551afeaf7f29820c4c&p=${pageNum}`;
    return(fetch(url)
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
        beerList.push(beers)
        //this.setState({beers: beers});
        return beerList;
      })
    )
  }

  componentDidMount() {
    let biggerList = [];
    var promises = [];
    for (var i = 1; i < 8; i++) {
      setTimeout(promises.push(this.query(i)), 20000);
    }
    Promise.all(promises).then(propList => {
      let list = propList.map((lists) => {
        biggerList.push(lists);
      })
      var output = biggerList.flat();
      this.setState({beers: output.flat()});
    })
  }

  caret(direction) {
    if (direction === 'asc') {
      return (
        <i className="fas fa-sort-up"></i>
      );
    }
    if (direction === 'desc') {
      return (
        <i className="fas fa-sort-down"></i>
      );
    }
    return (
      <i className="fas fa-sort"></i>
    )
  }

  render() {
    return (
      <div>
        <BootstrapTable className='table table-striped table-sortable' data={this.state.beers}
          search={true} strictSearch={false} options={this.options} version='4'
          pagination={true}>
          <TableHeaderColumn isKey={true} dataField='key' hidden={true}>
            Key
          </TableHeaderColumn>
          <TableHeaderColumn dataField='beerName' dataSort={true}
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
