import React, { FC } from 'react';
import { Drawer } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';

type SidebarProps = {
  openMobile: boolean;
  onMobileNavClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ openMobile, onMobileNavClose }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();
  console.log(matches);
  
  return (
    <Drawer
      anchor="left"
      variant={matches ? 'permanent' : 'temporary'}
      open={openMobile}
      onClose={onMobileNavClose}
      classes={{
        paper: classes.drawer
      }}
    >
      <div>
        <h3>Sidebar</h3>

      </div>
    </Drawer>
  )
}

export default Sidebar;