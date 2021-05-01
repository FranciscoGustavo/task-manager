import React, { useState, FC, ReactNode } from 'react';
import Sidebar from '../Sidebar';
import Downbar from '../Downbar';
import { useStyles } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Sidebar
        openMobile={isMobileNavOpen}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />
      <div className={classes.wrapper}>
        <div className={classes.content}>{children}</div>
      </div>
      <Downbar onMobileNavOpen={() => setMobileNavOpen(true)} />
    </div>
  );
};

export default Layout;
