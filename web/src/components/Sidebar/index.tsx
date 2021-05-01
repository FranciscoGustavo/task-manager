import React, { FC } from 'react';
import { Drawer } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SidebarNav from '../SidebarNav';
import { useStyles } from './styles';

type SidebarProps = {
  openMobile: boolean;
  onMobileNavClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ openMobile, onMobileNavClose }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      variant={matches ? 'permanent' : 'temporary'}
      open={openMobile}
      onClose={onMobileNavClose}
      classes={{
        paper: classes.drawer,
      }}
    >
      <SidebarNav />
    </Drawer>
  );
};

export default Sidebar;
