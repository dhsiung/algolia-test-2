import React, { Component } from 'react';
import Stars from 'react-stars';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class RankingFilter extends Component {
  static RANKS = [0, 1, 2, 3, 4, 5];


  constructor(props) {
   super(props);

   this.state = { activeRank: null }
   this.updateRank = this.updateRank.bind(this);
  }

  updateRank = (rank) => {
    if (this.state.activeRank === rank) {
      // Resets the payment filter if already active
      this.setState({activeRank: null});
      this.props.updateRank('');
    } else {
      this.setState({activeRank: rank});
      this.props.updateRank(rank);
    }
  }

  active = (rank) => {
    if (this.state.activeRank === rank) {
      return 'active';
    }
  }

  renderRankFilter = () => {
    return RankingFilter.RANKS.map((rank, idx) => {
      return(
        <li className={this.active(rank)} onClick={() => {this.updateRank(rank)}} key={idx}>
          <Stars edit={false} value={rank}/>
        </li>
      )
    })
  }

  render() {
    const rankFilter = this.renderRankFilter();
    return (
      <div>
        <h4> Rating </h4>
        <ul>{rankFilter}</ul>
      </div>
    );
  }

}
