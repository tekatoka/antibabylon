import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
* @ Component Imported
* */
import AboutPage from "./pages/about";
import TeamPage from "./pages/team";
import MembersPage from "./pages/members";
import JuryPage from "./pages/jury";
import EventsPage from "./pages/events";
import EventPage from './pages/events/event-page';
import ErrorPage from "./pages/404Error";
import ImpressumPage from "./pages/impressum";
import PrivacyPage from "./pages/privacy";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog/BlogDetails";
import HomePage from "./pages/home/HomePage";

import CookieConsentComponent from './components/CookieConsent';

export const AppContext = React.createContext();

const App = () => {
       const [modalVisible, setModalVisible] = useState(false);
       const [modalContent, setModalContent] = useState(null);
       const [modalStyle, setModalStyle] = useState("default");

       useEffect(() => {
              function handleEscapeKey(event) {
                     if (event.code === 'Escape') {
                            setModalVisible(false)
                            setModalContent(null)
                            setModalStyle("default")
                     }
              }

              document.addEventListener('keydown', handleEscapeKey)
              return () => document.removeEventListener('keydown', handleEscapeKey)
       }, [])

       const showModal = (children, modalStyle) => {
              setModalContent(children);
              setModalVisible(true);
              setModalStyle(modalStyle ? modalStyle : "default")
       }

       const hideModal = () => {
              setModalContent(null);
              setModalVisible(false);
              setModalStyle("default");
       }

       return (
              <AppContext.Provider value={{ modalVisible, modalContent, modalStyle, showModal, hideModal }}>
                     <Router>
                            <Switch>
                                   <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                                          component={AboutPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/blog/:slug"}`}
                                          component={BlogDetails} />
                                   <Route path={`${process.env.PUBLIC_URL + "/blog"}`}
                                          component={BlogPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/poets"}`}
                                          component={MembersPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/jury"}`}
                                          component={JuryPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/team"}`}
                                          component={TeamPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/events/:countryName"}`}
                                          component={EventPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/events"}`}
                                          component={EventsPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/impressum"}`}
                                          component={ImpressumPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/privacy"}`}
                                          component={PrivacyPage} />
                                   <Route exact path={`${process.env.PUBLIC_URL + "/"}`}
                                          component={HomePage}
                                   />
                                   <Route exact component={ErrorPage} />
                            </Switch>
                            <CookieConsentComponent />
                     </Router>
              </AppContext.Provider>
       );
};

export default App;