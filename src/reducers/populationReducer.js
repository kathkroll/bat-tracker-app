import data from '../mockData';

export default (state = data.populationReducer, action) => {
  switch (action.type) {
    default:
      console.log(state);
      return state
  }
}