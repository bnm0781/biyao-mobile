import React, { Component } from 'react';
import { Map } from 'immutable'

import { DaliyNewContainer as DailyNew } from '../components/dailyNew'
import { MakerContainer as Maker } from '../components/maker'
import { PeachContainer as Peach } from '../components/peach'
import { RankingContainer as Ranking } from '../components/ranking'
import { FloorContainer as Floor } from '../components/floor'
import { ClientContainer as Client } from '../components/client'

class FloorsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floors: {}
    }
  }

  componentDidMount() {
    fetch('/mock/floors.json')
      .then(response => response.json())
      .then(result => this.setState({floors: result}))
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (Map(nextState.floors).equals(Map(this.state.floors))) {
      return false
    } else {
      return true
    }
  }

  render() {
    if (Map(this.state.floors).size !== 0) {
      return (
        <div className="floors">
          <DailyNew></DailyNew>
          <Maker maker={this.state.floors.manufacturers}></Maker>
          <Peach></Peach>
          <Ranking></Ranking>
          {
            this.state.floors.floor.map((item, index) => (
              <Floor floor={item} key={index}></Floor>
            ))
          }
          <Client client={this.state.floors.repeat}></Client>
        </div>
      );
    } else {
      return null
    }
  }
}

export default FloorsContainer;