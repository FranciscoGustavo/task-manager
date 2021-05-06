import React, { useState, FC, ReactNode } from 'react';
import Sidebar from '../Sidebar';
import Downbar from '../Downbar';
import Header from '../Header';
import { useStyles } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Header onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        openMobile={isMobileNavOpen}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
