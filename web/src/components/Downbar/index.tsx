import React, { FC } from 'react';
import { Drawer, Hidden } from '@material-ui/core';
import { useStyles } from './styles';

type DownbarProps = {
  onMobileNavOpen: () => void;
}

const Downbar: FC<DownbarProps> = ({ onMobileNavOpen }) => {
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <Drawer
        anchor="bottom"
        variant="permanent"
        open={true}
        classes={{
          paper: classes.drawer
        }}
        >
        <h3 onClick={onMobileNavOpen}>Downbar</h3>
      </Drawer>
    </Hidden>
  )
}

export default Downbar;