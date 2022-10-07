import React, { useState } from 'react';
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
import BlogThreeColumnPage from "./pages/blog/ThreeColumn";
import HomePage from "./pages/home/HomePage";

import CookieConsentComponent from './components/CookieConsent';

export const AppContext = React.createContext();

const App = () => {
       const [modalVisible, setModalVisible] = useState(false);
       const [modalContent, setModalContent] = useState(null);

       const showModal = (children) => {
              setModalContent(children);
              setModalVisible(true);
       }

       const hideModal = () => {
              setModalContent(null);
              setModalVisible(false);
       }

       return (
              <AppContext.Provider value={{ modalVisible, modalContent, showModal, hideModal }}>
                     <Router>
                            <Switch>
                                   <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                                          component={AboutPage} />
                                   <Route path={`${process.env.PUBLIC_URL + "/blog"}`}
                                          component={BlogThreeColumnPage} />
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