import React from 'react';
import Header from '../../components/Header';

const HomePageLayout = ({ children, withoutHeader = false }) => {
  return (
    <React.Fragment> 
      <div className='container-fluid p-0'>
        {!withoutHeader && <Header/>}
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};
export default HomePageLayout;