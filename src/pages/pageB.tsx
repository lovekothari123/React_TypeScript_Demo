import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Grid, Dialog } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import {AddEducation} from './addEducation';
import {months} from '../untility/String'
import {Header} from '../Header/Header'
import {SidebarComponent} from '../components/sidebar'

const className = require('../model/styles.css');
import '../model/styles.css';


interface Props extends RouteComponentProps {}

interface Props {
  degree?: String,
  studyField?: String,
  university?: String,
  startYear?: String,
  endYear?: String,
  grade?: String,
  selectedGrade?: String,
  description?: String,
  universityList?: any,
  error_degree?: String,
  error_studyField?: String,
  error_university?: String,
  error_startYear?: String,
  error_endYear?: String,
  error_grade?: String,

  name?: String,
  educationLists?: any,
  openDialog?: boolean,
  listR?: boolean,
  onClose: () => void,
  userName? : any,
  showDialog: () => void,
  onAddEducation: any;
  close: any;
  
}



export const PageB: React.FC<Props> = ({openDialog = false,
   listR = false, universityList = [], educationLists = [], ...props })  =>{
    const [openDialogs, setOpenDialogs] = React.useState(openDialog);
    const [educationList, setEducationList] = React.useState(educationLists);

  const onAddEducation = (newEdu) => {
      let newEducation = newEdu;
      let educationBackup = educationList;
      educationBackup.unshift(newEducation);
      setEducationList(educationBackup);
  }
  const  gotoBookmark = (e) => {
    let element = document.getElementById(e.target.id).getBoundingClientRect();
    window.scrollTo(0, element.top);
}

  const  getYearMonth = (str) => {
    // const { months } = this.state;
    console.log("Get Year Months ===>", str, " Months ", months)
    if (str) {
        let date = str.split("-");
        let dateM = `${months[parseInt(date[1]) - 1]} ${date[0]}`
        return dateM
    } else {
        return "Present"
    }

}


 return( 
   <>
    {/* <Link to="/">Navigate to Page A</Link> */}
    {console.log("Details ==>", props.location.state)}
  <div style={{ textAlign: "center", padding: "10px" }}>
                <div style={{ marginBottom: "25px" }}>
                    <p style={{ fontSize: "18px" }}>Welcome to <span>{props.location.state}</span>'s education page.</p>
                    {/* <CustomButton name="add_education" title="Add new education"
                        onButtonClick={() => { this.setState({ openDialog: true }) }}
                    /> */}
                     <Button name="add_education" variant="contained" color="primary" onClick={() => {setOpenDialogs(true) }}>
                     Add new education
                    </Button>
                </div>

                <Grid container>
                    {/* <Grid item md={3} sm={4} xs={12}>
                        <div className="uni-list">
                            <div style={{ padding: "15px" }}>
                                <div className="head-text" style={{ marginBottom: "15px" }}> Showwcase University</div>
                                <h1>
                                   
                                </h1>
                            </div>
                        </div>
                    </Grid> */}

                    {educationList.map((ele, index) => {
                                        return (
                                            <div key={index} id={`${ele.university}_${index}`}
                                                style={{ marginBottom: "10px", cursor: "pointer" }}
                                                onClick={gotoBookmark}>
                                                {/* {ele.university} */}
                                        <SidebarComponent DataList={ele.university} isVisible={true} children={<h2>"List of Showwcase University"</h2>}/>
                                            </div>
                                        );
                                    })}
                    

                    <Grid item md={9} sm={8} xs={12}>
                        {/* education list */}
                        <div className="head-text" style={{ marginBottom: "15px" }}> Showwcase University Lists</div>
                        {educationList.map((ele, index) => {
                            return (
                                <div  style={{ marginLeft: '25%',marginBottom: "15px", backgroundColor: (index == 0 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 0, 0.5)') }} key={index} id={`${ele.university}_${index}`}>
                                     {/* <EducationCard education={ele} />  */}
                                     {console.log("======> Education List ===>", ele)}
                                     <div className="card">
                <div style={{ padding: "15px" }}>
                    <div className="head-text" style={{ fontSize: "18px" }}>
                        {`${ele.degree} ${ele.studyField} @ ${ele.university} `}
                    </div>

                    <div style={{ marginTop: "10px" }}>
                   
                        {`${getYearMonth(ele.startYear)} - ${getYearMonth(ele.endYear)}  `}
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        Grade: {ele.grade}
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        {ele.description}
                    </div>
                </div>
            </div>
                                </div>
                            );
                        })}
                    </Grid>
                </Grid>

                <Dialog open={openDialogs} onClose={() => { setOpenDialogs(false) }}
                    scroll={'body'}>
                         <AddEducation onAddEducation={onAddEducation}
                        //   close={setOpenDialogs(false)}
                    />
                </Dialog>
               
            </div>
  </>
  )
}