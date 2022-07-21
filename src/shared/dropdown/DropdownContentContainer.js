import React, { Component } from 'react';
import { bool, string, node } from 'prop-types';
import styled from 'styled-components';
import { styleByTheme } from '../styleByTheme/styleByTheme';
import { Color } from '../../constants/colors';

export class DropdownContentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpen, parentWidth, listWidth, children } = this.props;
    const classNames = isOpen
      ? 'axr-dropdown-container axr-open'
      : 'axr-dropdown-container ';
    return (
      <DropContainer
        data-testid="DropdownContentContainer"
        className={classNames}
        style={{ width: listWidth, minWidth: parentWidth }}
      >
        {children}
      </DropContainer>
    );
  }
}

const DropContainer = styled.div`
  background-color: rgb(
    ${styleByTheme({ light: Color.L100, dark: Color.D100 })}
  );
  border-radius: 4px;
  border-top-left-radius: 0;
  box-shadow: 0 10px 20px 0 rgba($primary-two, 0.08);
  position: absolute;
  top: 31px;
  left: 0;
  z-index: 5;
  @keyframes animateHeight {
    from {
      max-height: 4rem;
    }
    to {
      max-height: 35rem;
    }
  }

  &.axr-open {
    border: 1px solid
      rgb(${styleByTheme({ light: Color.L400, dark: Color.D400 })});
    max-height: 42rem;
    animation: animateHeight 150ms ease-in-out;
  }

  .axr-dropdown-list {
    padding-bottom: 0.4rem;
  }
`;

DropdownContentContainer.propTypes = {
  isOpen: bool.isRequired,
  parentWidth: string.isRequired,
  listWidth: string.isRequired,
  children: node,
};
