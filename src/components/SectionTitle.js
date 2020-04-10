import React from 'react';

import styled from 'styled-components';

class SectionTitle extends React.Component{

  render() {
    let sectionTitle;
    let titleType = this.props.titleType;

    switch(titleType){
      case "variant":
          sectionTitle = <SectionTitleVariant>{this.props.text}</SectionTitleVariant>
          break;
      default:
          sectionTitle = <SectionTitleWrapper>{this.props.text}</SectionTitleWrapper>
          break;
    }

    return sectionTitle;
    }
  }



const SectionTitleWrapper = styled.div`
    font-size: 18px;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
    padding-top: 20px;
`
const SectionTitleVariant = styled(SectionTitleWrapper)`
    font-size: 16px;
    text-decoration: none;
    padding-top: 20px;
`

export default SectionTitle;
