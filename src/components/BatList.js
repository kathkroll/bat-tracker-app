import React, { Component } from 'react';

export default class BatList extends Component {
  
  render() {
    const { bats } = this.props;

    const batList = bats.map(bat =>
      <li key={bat.id}>{bat.name}</li>
    );

    return (
      <div>
        <ul>
          {batList}
        </ul>
      </div>
    );
  }
}