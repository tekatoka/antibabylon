import React from 'react';
import Header from './components/header/HeaderOne';
import SideHeader from './components/SideHeader';
import Footer from './components/footer/Footer';


export const Layout = ({children}) => {

       return (
              <div className={'main-wrapper p-4'}>
                     <div class='inner-wrapper'>
                            <Header classes={'position-static'} />
                            <SideHeader mobile={true} />
                                   {children}
                            <Footer position={'relative'} />
                     </div>
              </div>
       );
};
