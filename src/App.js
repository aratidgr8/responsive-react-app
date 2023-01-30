import React from 'react';  
import Header from "./common/Header";
import AboutUs from './components/AboutUs';
import TabPanel from './common/TabPanel';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Shop from './components/Shop';
import Login from './components/Login';


function App() {

  const [menuVal, setMenuVal] = React.useState(0);
  const sendDataToParent = (index) => { 
    // the callback function    
    setMenuVal(index);
  };

  return (
    <div>

      {/* Logo, Menu, Search field & Login button */}
      <Header sendDataToParent={sendDataToParent}></Header>

      <div style={{marginTop: "70px"}}>
        {/* Every Tabs unique content  */}
        <TabPanel value={menuVal} index={0}>
            <Home />
        </TabPanel>  
        <TabPanel value={menuVal} index={1}>
            <AboutUs />
        </TabPanel> 
        <TabPanel value={menuVal} index={2}>
            <ContactUs />
        </TabPanel> 
        <TabPanel value={menuVal} index={3}>
            <Shop />
        </TabPanel> 
        <TabPanel value={menuVal} index={4}>
            <Login />
        </TabPanel>    
      </div>
    </div>
  );
}

export default App;
