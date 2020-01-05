import React from 'react';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/themeContext';
import ThemeToggle from './components/themeToggle';
import AutherContextProvider from './contexts/authContext';


function App() {
  return (
    <div className="App">
      <AutherContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggle />
        </ThemeContextProvider>
      </AutherContextProvider>
    </div>
  );
}

export default App;
