import React from 'react';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext'
//import Card from './components/shared/Card';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import Post from './components/Post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {    
    
    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/post/:id' element={<Post />} />
                </Routes>

                {/* <Card>
                    <NavLink to="/" activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName='active'>
                        About
                    </NavLink>
                </Card> */}

                <AboutIconLink />
            </div>
        </Router>
        </FeedbackProvider>
    );
}

export default App;
