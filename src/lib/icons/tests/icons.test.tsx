import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import {
  AddIcon16,
  AddOutlineIcon16,
  AddOutlineIcon24,
  ArrowIcon16,
  ArrowIcon24,
  ArrowRightIcon16,
  CheckIcon16,
  CheckIcon24,
  ClockIcon16,
  CloseIcon8,
  CloseIcon16,
  CloseIcon24,
  IncidentIcon16,
  HeartbeatIcon16,
  HelpIcon16,
  OneshotIcon16,
  ReopenIcon16,
  TakedownIcon16,
  TagIcon16,
  ThreatIcon16,
  TurnOffIcon16,
  DownloadIcon16,
  DownloadIcon24,
  EditIcon16,
  MailIcon16,
  PlayIcon16,
  PrintIcon24,
  SearchIcon24,
  SearchIcon16,
  TrashIcon16,
  UsersIcon16,
  UserOffIcon16,
  OptionsIcon16,
  UserIcon16,
  WarningIcon16,
  WarningOutlineIcon16,
  WarningIcon24,
  CopyIcon16,
  CloseIcon12
} from '..';
import { ArrowIcon12 } from '../ArrowIcon12';

describe('Icons', () => {
  enum Size {
    Small = 8,
    Small_12 = 12,
    Medium = 16,
    Medium_18 = 1618,
    Big = 24
  }

  it('AddIcon16', () => {
    const wrapper = render(<AddIcon16 />);
    expectIconToBeCorrect(wrapper, 'add-icon-16', Size.Medium);
  });

  it('AddOutlineIcon16', () => {
    const wrapper = render(<AddOutlineIcon16 />);
    expectIconToBeCorrect(wrapper, 'add-outline-icon-16', Size.Medium);
  });

  it('AddOutlineIcon24', () => {
    const wrapper = render(<AddOutlineIcon24 />);
    expectIconToBeCorrect(wrapper, 'add-outline-icon-24', Size.Big);
  });

  it('ArrowIcon12', () => {
    const wrapper = render(<ArrowIcon12 />);
    expectIconToBeCorrect(wrapper, 'arrow-icon-12', Size.Small_12);
  });

  it('ArrowIcon16', () => {
    const wrapper = render(<ArrowIcon16 />);
    expectIconToBeCorrect(wrapper, 'arrow-icon-16', Size.Medium);
  });

  it('ArrowIcon24', () => {
    const wrapper = render(<ArrowIcon24 />);
    expectIconToBeCorrect(wrapper, 'arrow-icon-24', Size.Big);
  });

  it('ArrowRight16', () => {
    const wrapper = render(<ArrowRightIcon16 />);
    expectIconToBeCorrect(wrapper, 'arrow-right-icon-16', Size.Medium);
  });

  it('CheckIcon16', () => {
    const wrapper = render(<CheckIcon16 />);
    expectIconToBeCorrect(wrapper, 'check-icon-16', Size.Medium);
  });

  it('CheckIcon24', () => {
    const wrapper = render(<CheckIcon24 />);
    expectIconToBeCorrect(wrapper, 'check-icon-24', Size.Big);
  });

  it('CloseIcon8', () => {
    const wrapper = render(<CloseIcon8 />);
    expectIconToBeCorrect(wrapper, 'close-icon-8', Size.Small);
  });

  it('CloseIcon16', () => {
    const wrapper = render(<CloseIcon16 />);
    expectIconToBeCorrect(wrapper, 'close-icon-16', Size.Medium);
  });

  it('CloseIcon24', () => {
    const wrapper = render(<CloseIcon24 />);
    expectIconToBeCorrect(wrapper, 'close-icon-24', Size.Big);
  });

  it('IncidentIcon16', () => {
    const wrapper = render(<IncidentIcon16 />);
    expectIconToBeCorrect(wrapper, 'incident-icon-16', Size.Medium);
  });

  it('HeartbeatIcon16', () => {
    const wrapper = render(<HeartbeatIcon16 />);
    expectIconToBeCorrect(wrapper, 'heartbeat-icon-16', Size.Medium);
  });

  it('HelpIcon16', () => {
    const wrapper = render(<HelpIcon16 />);
    expectIconToBeCorrect(wrapper, 'help-icon-16', Size.Medium);
  });

  it('TakedownIcon16', () => {
    const wrapper = render(<TakedownIcon16 />);
    expectIconToBeCorrect(wrapper, 'takedown-icon-16', Size.Medium);
  });

  it('TagIcon16', () => {
    const wrapper = render(<TagIcon16 />);
    expectIconToBeCorrect(wrapper, 'tag-icon-16', Size.Medium);
  });

  it('OneshotIcon16', () => {
    const wrapper = render(<OneshotIcon16 />);
    expectIconToBeCorrect(wrapper, 'oneshot-icon-16', Size.Medium);
  });

  it('ReopenIcon16', () => {
    const wrapper = render(<ReopenIcon16 />);
    expectIconToBeCorrect(wrapper, 'reopen-icon-16', Size.Medium);
  });

  it('TurnOffIcon16', () => {
    const wrapper = render(<TurnOffIcon16 />);
    expectIconToBeCorrect(wrapper, 'turnoff-icon-16', Size.Medium);
  });

  it('ThreatIcon16', () => {
    const wrapper = render(<ThreatIcon16 />);
    expectIconToBeCorrect(wrapper, 'threat-icon-16', Size.Medium);
  });

  it('DownloadIcon16', () => {
    const wrapper = render(<DownloadIcon16 />);
    expectIconToBeCorrect(wrapper, 'download-icon-16', Size.Medium);
  });

  it('DownloadIcon24', () => {
    const wrapper = render(<DownloadIcon24 />);
    expectIconToBeCorrect(wrapper, 'download-icon-24', Size.Big);
  });

  it('EditIcon16', () => {
    const wrapper = render(<EditIcon16 />);
    expectIconToBeCorrect(wrapper, 'edit-icon-16', Size.Medium);
  });

  it('MailIcon16', () => {
    const wrapper = render(<MailIcon16 />);
    expectIconToBeCorrect(wrapper, 'mail-icon-16', Size.Medium);
  });

  it('PlayIcon16', () => {
    const wrapper = render(<PlayIcon16 />);
    expectIconToBeCorrect(wrapper, 'play-icon-16', Size.Medium);
  });

  it('PrintIcon24', () => {
    const wrapper = render(<PrintIcon24 />);
    expectIconToBeCorrect(wrapper, 'print-icon-24', Size.Big);
  });

  it('SearchIcon24', () => {
    const wrapper = render(<SearchIcon24 />);
    expectIconToBeCorrect(wrapper, 'search-icon-24', Size.Big);
  });

  it('SearchIcon16', () => {
    const wrapper = render(<SearchIcon16 />);
    expectIconToBeCorrect(wrapper, 'search-icon-16', Size.Medium);
  });

  it('TrashIcon16', () => {
    const wrapper = render(<TrashIcon16 />);
    expectIconToBeCorrect(wrapper, 'trash-icon-16', Size.Medium);
  });

  it('UsersIcon16', () => {
    const wrapper = render(<UsersIcon16 />);
    expectIconToBeCorrect(wrapper, 'users-icon-16', Size.Medium);
  });

  it('UserOffIcon16', () => {
    const wrapper = render(<UserOffIcon16 />);
    expectIconToBeCorrect(wrapper, 'user-off-icon-16', Size.Medium);
  });

  it('OptionsIcon16', () => {
    const wrapper = render(<OptionsIcon16 />);
    expectIconToBeCorrect(wrapper, 'options-icon-16', Size.Medium);
  });

  it('UserIcon16', () => {
    const wrapper = render(<UserIcon16 />);
    expectIconToBeCorrect(wrapper, 'user-icon-16', Size.Medium);
  });

  it('WarningIcon16', () => {
    const wrapper = render(<WarningIcon16 />);
    expectIconToBeCorrect(wrapper, 'warning-icon-16', Size.Medium);
  });
  it('WarningOutlineIcon16', () => {
    const wrapper = render(<WarningOutlineIcon16 />);
    expectIconToBeCorrect(wrapper, 'warning-icon-16', Size.Medium);
  });

  it('WarningIcon24', () => {
    const wrapper = render(<WarningIcon24 />);
    expectIconToBeCorrect(wrapper, 'warning-icon-24', Size.Big);
  });

  it('CopyIcon16', () => {
    const wrapper = render(<CopyIcon16 />);
    expectIconToBeCorrect(wrapper, 'copy-icon-16', Size.Medium);
  });

  it('CloseIcon12', () => {
    const wrapper = render(<CloseIcon12 />);
    expectIconToBeCorrect(wrapper, 'close-icon-12', Size.Small_12);
  });

  it('ClockIcon16', () => {
    const wrapper = render(<ClockIcon16 />);
    expectIconToBeCorrect(wrapper, 'clock-icon-16', Size.Medium);
  });
});

const expectIconToBeCorrect = (
  wrapper: RenderResult,
  testId: string,
  dimensions: number
) => {
  expect(wrapper.getByTestId(testId)).toHaveClass('axr-icon');
  expect(wrapper.getByTestId(testId)).toHaveClass(`axr-icon-${dimensions}`);
  expect(wrapper.getByTestId(testId).getAttribute('style')).toEqual(
    expect.stringMatching(/--svg-fill-color:.*;/)
  );
};
