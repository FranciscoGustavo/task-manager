import React, { FC } from 'react';
import { Hidden, Drawer } from '@material-ui/core';
import SidebarNav from '../SidebarNav';

type SidebarProps = {
  openMobile: boolean;
  onMobileNavClose: () => void;
};

const Sidebar: FC<SidebarProps> = ({ openMobile, onMobileNavClose }) => {
  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          variant="temporary"
          open={openMobile}
          onClose={onMobileNavClose}
          PaperProps={{
            style: {
              width: 256,
            },
          }}
        >
          <SidebarNav />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          variant="persistent"
          open
          onClose={onMobileNavClose}
          PaperProps={{
            style: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)',
            },
          }}
        >
          <SidebarNav />
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
