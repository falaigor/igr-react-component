import React, { Component } from 'react';
import { bool, string, node } from 'prop-types';
import styled from 'styled-components';
import { styleByTheme } from '../styleByTheme/styleByTheme';
import { Color } from '../../constants/colors';

export class DropdownList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isOpen, parentWidth, listWidth, children } = this.props;
    const classNames = isOpen
      ? 'axr-dropdown-list axr-open'
      : 'axr-dropdown-list ';
    return (
      <DropList
        data-testid="DropdownListUl"
        className={classNames}
        style={{ width: listWidth, minWidth: parentWidth }}
      >
        {children}
      </DropList>
    );
  }
}

DropdownList.propTypes = {
  isOpen: bool.isRequired,
  parentWidth: string.isRequired,
  listWidth: string.isRequired,
  children: node
};

const DropList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 5;
  left: 0;
  overflow: auto;
  max-height: 35rem;
  animation: none;

  @keyframes animateHeight {
    from {
      max-height: 4rem;
    }
    to {
      max-height: 35rem;
    }
  }

  &.axr-open {
    animation: animateHeight 150ms ease-in-out;
  }

  li {
    &.axr-dropdown-filter-input-wrapper {
      margin: 1.4rem 1.6rem 0.8rem 1.6rem;
      padding: 0 0.5rem 0 1rem;
      border: 1px solid
        rgb(
          ${styleByTheme({
            light: Color.L400,
            dark: Color.D400
          })}
        );
      border-radius: 4px;
      color: rgb(${styleByTheme({ light: Color.L700, dark: Color.D800 })});
      font-size: 1.3rem;
      outline-color: rgb(
        ${styleByTheme({ light: Color.L400, dark: Color.D400 })}
      );
      width: -webkit-fill-available;
      height: 32px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      input {
        outline: 0;
        border-color: transparent;
        flex: 1;
        background-color: rgb(
          ${styleByTheme({
            light: Color.L100,
            dark: Color.D100
          })}
        );
        color: rgb(${styleByTheme({ light: Color.L700, dark: Color.D700 })});

        &::placeholder {
          color: rgb(${styleByTheme({ light: Color.L700, dark: Color.D700 })});
        }

        :focus {
          outline: 0;
        }
      }
    }
  }

  .axr-categorizeddropdown-category-wrapper {
    padding: 0.4rem 0;
  }
`;
