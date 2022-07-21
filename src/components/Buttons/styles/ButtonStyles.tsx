import styled from "styled-components";
import { Color } from "../../../constants/colors";
import { styleByTheme } from "../../../shared/styleByTheme/styleByTheme";

interface IconButtonProps {
  directionMargin?: string;
}

export const Btn = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline-color: rgb(${Color.L400});
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s;
  box-sizing: border-box;

  &.frz-button--size-small {
    padding: 7px 14px;
    font-size: 0.875rem;
  }

  &.frz-button--size-medium {
    padding: 14px 18px;
    font-size: 1rem;
  }

  &.frz-button--size-large {
    padding: 15px 62px;
    font-size: 1rem;
  }

  &.frz-button--icon {
    padding-left: 8px;
    padding-right: 12px;

    &.icon-holder {
      display: inline-flex;
    }

    .frz-icon {
      position: relative;
    }
  }

  &.frz-button--icon-right {
    padding-right: 8px;
    padding-left: 12px;

    &.icon-holder {
      display: inline-flex;
      margin-left: 8px;
    }

    &.frz-icon {
      position: relative;
    }
  }

  &.primary-button {
    background-color: rgb(${Color.PrimaryOne});
    color: rgb(${Color.L100});
    box-sizing: border-box;

    :hover {
      background-color: transparent;
      color: rgb(${Color.PrimaryOne});
      border: 1px solid rgb(${Color.PrimaryOne});
      cursor: pointer;
    }

    &.frz-disabled {
      background-color: rgba(${Color.PrimaryOne}, 0.5);
      color: rgba(${Color.L100}, 0.5);

      :hover {
        background-color: rgba(${Color.PrimaryOne}, 0.5);
        color: rgb(${Color.L100});
        cursor: not-allowed;
        border: none;
      }

      &.frz-icon {
        svg {
          fill: rgb(${styleByTheme({ light: Color.L500, dark: Color.D500 })});
        }
      }

      &.frz-loading-indicator {
        .frz-loading-dot {
          background-color: rgb(
            ${styleByTheme({ light: Color.L500, dark: Color.D500 })}
          );
        }
      }
    }
  }

  &.secondary-button {
    background-color: rgb(${Color.SecondaryOne});
    color: rgb(${Color.L100});
    box-sizing: border-box;

    :hover {
      background-color: transparent;
      color: rgb(${Color.SecondaryOne});
      border: 1px solid rgb(${Color.SecondaryOne});
      cursor: pointer;
    }

    &.frz-disabled {
      background-color: rgba(${Color.SecondaryOne}, 0.5);
      color: rgba(${Color.L100}, 0.5);

      :hover {
        background-color: rgba(${Color.SecondaryOne}, 0.5);
        color: rgb(${Color.L100});
        cursor: not-allowed;
        border: none;
      }

      &.frz-icon {
        svg {
          fill: rgb(${styleByTheme({ light: Color.L500, dark: Color.D500 })});
        }
      }

      &.frz-loading-indicator {
        .frz-loading-dot {
          background-color: rgb(
            ${styleByTheme({ light: Color.L500, dark: Color.D500 })}
          );
        }
      }
    }

    &.frz-loading-indicator {
      .frz-loading-dot {
        background-color: rgb(
          ${styleByTheme({ light: Color.L500, dark: Color.D500 })}
        );
      }
    }
  }

  &.neutral-button {
    background-color: rgb(${Color.L100});
    border: 1px solid rgb(${Color.L400});
    color: rgb(${Color.SecondaryOne});
    font-weight: 400;
    box-sizing: border-box;

    .frz-loading-indicator {
      .frz-loading-dot {
        background-color: rgb(${Color.PrimaryOne});
      }
    }

    :hover {
      background-color: transparent;
      border: 1px solid rgb(${Color.SecondaryOne});
      cursor: pointer;
    }

    &.frz-disabled {
      background-color: transparent;
      border: 1px solid rgba(${Color.L400}, 0.5);
      color: rgba(${Color.L500}, 0.5);

      .frz-icon {
        svg {
          fill: rgb(${Color.L500});
        }
      }

      .frz-loading-indicator {
        .frz-loading-dot {
          background-color: rgb(${Color.L500});
        }
      }
    }
  }

  &.dark-primary-button {
    background-color: rgb(${Color.DwFour});
    color: rgb(${Color.DwFive});
    outline: none;
    box-sizing: border-box;

    .frz-loading-indicator {
      .frz-loading-dot {
        background-color: rgb(${Color.PrimaryOne});
      }
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &:disabled,
  .frz-disabled {
    cursor: inherit;
  }

  &.frz-loading {
    .frz-content {
      opacity: 0;
    }
  }

  .frz-loading-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadein 250ms;
  }
`;

export const IconBtn = styled.span<IconButtonProps>`
  ${({ directionMargin }) => `margin-${directionMargin}: 8px`};
`;
