import * as React from "react";
import { Link } from "react-router-dom";
import {
   
    SidebarComponent
  } from "../components";
 import {CloseDrawer} from '../model/imagesPath'
  import '../model/styles.css';
  import  {months} from '../untility/String'

  interface Props {    
    DataList?: any;
    state?: any
  }

export const Header = (props: Props)=>{
  const [isVisible, setVisible] = React.useState(false);
  let [data, setData] = React.useState(null);

  

return(
<>
{console.log("HEADER ++++>","==== user anme ===", props.state, " ====>",props.DataList, )}

            
<SidebarComponent isVisible={props.state}>
     
  <h1>List of Showwcase University</h1>
        
      </SidebarComponent>
 
 </>
 )
}