import React from 'react';
import PropTypes from 'prop-types';

import BatList from './BatList';

const PopulationComponent = ({ bats }) =>
  (
    <section className="main">
      <BatList bats={bats} />
    </section>
  )

PopulationComponent.propTypes = {
  bats: PropTypes.array,
}

export default PopulationComponent;