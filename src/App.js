import React from 'react';  
import Header from "./Header";
import AboutUs from './AboutUs';
import TabPanel from './TabPanel';
import Home from './Home';
import ContactUs from './ContactUs';


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
            Item four
        </TabPanel>    
      </div>
    </div>
  );
}

export default App;
