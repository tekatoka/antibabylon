import React from 'react';
import Header from './components/header/HeaderOne';
import SideHeader from './components/SideHeader';
import Footer from './components/footer/Footer';
import ModalWindow from './components/modal';

export const Layout = ({ children }) => {
       return (
              <>
                     <ModalWindow />
                     <div id="main-wrapper" className={'main-wrapper p-4'}>
                            <div className='inner-wrapper'>
                                   <Header classes={'position-static'} />
                                   <SideHeader mobile={true} />
                                   {children}
                                   <Footer position={'relative'} />
                            </div>
                     </div>

              </>
       );
};
