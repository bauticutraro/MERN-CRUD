import React from 'react';
import { List, Drawer } from '@material-ui/core';
import styled from 'styled-components';
import { mixins } from '../../utils/styles';

export const ListWrapper = styled(List)`
  color: white;
`;

export const SideBarNav = styled(({ ...props }) => (
  <Drawer {...props} classes={{ paper: 'paper' }} />
))`
  top: 0;
  bottom: 0;
  position: fixed;
  white-space: nowrap;
  width: ${props => (props.open ? '260px' : '56px')};
  ${props => mixins.transition('width', props.open)};

  & .paper {
    position: relative;
    width: ${props => (props.open ? '260px' : '56px')};
    overflow-x: ${props => (!props.open ? 'hidden' : '')};
    ${props => mixins.transition('width', props.open)};
    background-color: #43425d;
  }

  @media (max-width: 600px) {
    width: 72px;
  }
`;

export const ToolbarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: '0 8px';
  ${mixins.toolbar}
`;
