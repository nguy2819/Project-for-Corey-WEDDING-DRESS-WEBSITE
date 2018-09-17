import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ScrollHider = styled.div`
  display: inline-block;
  height: 75px;
  width: 210px;
  overflow: hidden;
`;

const StyledContainer = styled.div`
  display: flex;
  width: 200px;
  height: 95px;
  overflow-x: scroll
`;

const StyledItem = styled.div`
  width: 75px;
  height: 75px;
  background: green;
  color: black;
  margin: 0 10px;
  display: block;
  flex-shrink: 0;
`;

class ItemSelector extends React.Component{

  constructor(props){
    super(props);
    this.myRef =[];
    this.state = {
      currentIndex: 0
    };
  }

  componentDidUpdate() {
    if(this.state.currentIndex >= 0 && this.state.currentIndex < this.myRef.length){
      this.myRef[this.state.currentIndex].scrollIntoView({block: 'end', behavior: 'smooth'});
    }
  }

  render(){
    const {
      items
    } = this.props;
    const itemElements = items.map((item, i) => {
      return <StyledItem key={item.itemName} innerRef={r => this.myRef[i] = r}>{item.itemName}</StyledItem>;
    });
    return (
      <div>
        <button onClick={() => this.setState({currentIndex: this.state.currentIndex - (this.state.currentIndex > 0 ? 1 : 0)})}>Left</button>
        <ScrollHider>
          <StyledContainer>
            {itemElements}
          </StyledContainer>
        </ScrollHider>
        <button onClick={() => this.setState({currentIndex: this.state.currentIndex + (this.state.currentIndex < items.length ? 1 : 0)})}>Right</button>
      </div>
    );  
  }
}

ItemSelector.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemSelector;
