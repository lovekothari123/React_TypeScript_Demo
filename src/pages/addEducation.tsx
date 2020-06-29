import * as React from 'react'
import { Grid, InputBase } from '@material-ui/core';
import { gradeList, degreeList, studyFieldList } from '../untility/String';
// import CustomButton from '../../components/button';
import Button from "@material-ui/core/Button";
import  {getUniversity}  from  '../api/unvercitylist';
import Select from 'react-select';
import { NotificationComponent } from "../common";


interface Props {
    degrees?: any,
    studyFields?: any,
    universitys?: any,
    startYears?: any,
    endYears?: any,
    grades?: any,
    selectedGrades?: any,
    descriptions?: any,
    universityLists?: any,
    error_degrees?: any,
    error_studyFields?: any,
    error_universitys?: any,
    error_startYears?: any,
    error_endYears?: any,
    error_grades?: any,
    onAddEducation?: any
}
    
interface PropsFunction {
    onAddEducation: () => void,
    close: () => void
}



export const  AddEducation: React.FC<Props> =({ universityLists = [], degrees= null, studyFields = null,
universitys=null,
startYears=null,
endYears=null,
grades=null,
selectedGrades=null,
descriptions=null,
error_degrees=null,
error_studyFields=null,
error_universitys=null,
error_startYears=null,
error_endYears=null,
error_grades=null,
onAddEducation = null,
    ...props}) => {

        const [degree, setDegree] = React.useState(degrees);
        const [studyField, setStudyField] = React.useState(studyFields);
        const [universityList, setUniversityList] = React.useState(universityLists);
 
        const [description, setDescriptions] = React.useState(descriptions);

        const [university, setUniversity] = React.useState(universitys);
        const [startYear, setstartYear] = React.useState(startYears);
        const [endYear, setendYear] = React.useState(endYears);
        const [grade, setgrade] = React.useState(grades);
        const [selectedGrade, setselectedGrade] = React.useState(selectedGrades);
        const [showLoginFailedMsg, setShowLoginFailedMsg] = React.useState(false);
        const [ErrosMessage, setErrorMessage] = React.useState('');
   
    const [error_degree, setError_degree] = React.useState(error_degrees)
    const [error_studyField, setError_studyField] = React.useState(error_studyFields)
    const [error_university, setError_university] = React.useState(error_universitys)
    const [error_startYear, setError_startYear] = React.useState(error_startYears)
    const [error_grade, setError_grade] = React.useState(error_grades)
    const [error_endYear, setError_endYear] = React.useState(error_endYears)

  

  const onTextChange = (e) => {
    setstartYear(e.target.value)
         e.target.id = e.target.value
    
    setErrorEmpty();
}

const onDescriptionChange = (e) => {
    setDescriptions(e.target.value)
}

  const onTextChangeEndYear = (e) => {
      setendYear(e.target.value)
  }

 const setErrorEmpty = () => {
    
        setError_degree(""),
        setError_studyField(""),
        setError_university(""),
        setError_startYear(""),
        setError_endYear(""),
        setError_grade("")    
}

  const validDate = () => {
    // validation date
    
    let pass = true;
    if (endYear) {
        let start = startYear.split("-");
        let end = endYear.split("-");

        if (parseInt(start[0]) > parseInt(end[0])) {
            setErrorMessage("Please select valid year");
            setShowLoginFailedMsg(true);
            setError_endYear("Please select valid year");
            pass = false;
        } else if (parseInt(start[0]) === parseInt(end[0])) {
            if (parseInt(start[1]) >= parseInt(end[1])) {
                setErrorMessage("Please select valid month");
            setShowLoginFailedMsg(true);
                setError_endYear("Please select valid month");
                pass = false;
            }
        }
    }
    console.log("Validate data ==> ", pass)
    return pass;
}



 const checkData = (data) => {
    // validation of data
    console.log("check Data ===>",data.degree , " =>", data.startYear, " =>", data.studyField , " =>", data.university, " => ", data.grade)
    let pass = true;
    if (!data.degree) {
      setErrorMessage("Please select a degree.");
      setShowLoginFailedMsg(true);
        //setError_degree("")
        pass = false;
    }

    if (!data.startYear) {
        setErrorMessage("Please select a start year.")
        setShowLoginFailedMsg(true)
        pass = false;
    }

    if (!data.studyField) {      
        setErrorMessage("Please select your field of study.")
        setShowLoginFailedMsg(true)
        pass = false;
    }

    if (!data.university) {      
        setErrorMessage("Please enter a university.")
        setShowLoginFailedMsg(true)
        pass = false;
    }

    if (!data.grade) {
        setErrorMessage("Please select your grade.")
      setShowLoginFailedMsg(true)
        pass = false;
    }
    console.log("check Data pass data ==> ", pass)
    
    if(pass == false){
   {console.log("Get Data Here ===> ", showLoginFailedMsg )}
   setShowLoginFailedMsg(true)
    }
    return pass;
}

   const onSubmit = () => {
    // handle click save
//    const { degree, studyField, university, startYear, endYear, grade, description } = React.useState()
     console.log("===> degree",degree && degree.value)
    let payload = {
        degree: degree.value,
        studyField: studyField.value,
        university: university.value,
        startYear: startYear,
        endYear: endYear,
        grade: grade.value,
        description: description
    }
    if (checkData(payload) && validDate()) {
        console.log("Payload data ==>", payload)
         onAddEducation(payload);
        // close();
    }
}

const handleSelectGrade = selectedOption => {
    console.log("===> handleSelectGrade",selectedOption)

     setgrade(selectedOption);
     setErrorEmpty();
};

 const handleSelectDegree = selectedOption => {
    console.log("===> handleSelectDegree",selectedOption)
       setDegree(selectedOption);
    setErrorEmpty();
};

 const handleSelectStudyField = selectedOption => {
    console.log("===> handleSelectStudyField",selectedOption)
    setStudyField(selectedOption)
    setErrorEmpty()
};

  const handleSelectUniversity = selectedOption => {
    setUniversity(selectedOption)
    setErrorEmpty();
};

 const getUniversityList = (Ulist) => {
     setUniversityList(Ulist);
}
  
        return (
            <div style={{ textAlign: "center" }} className="dialog-box">
                <p style={{ fontSize: "20px"}}> Add Education
                    <span style={{ float: "right", cursor: "pointer", marginRight: "20px", marginLeft: "-20px" }} 
                    //onClick={props.close}
                    >X</span>
                </p>

                <div className="inner-form">
                    <Grid container>
                        <Grid item md={6} sm={6} xs={12}>
                            <p className="textfield-head">Degree</p>
                            <div style={{ padding: "0 10px" }}>
                                <Select
                                    className="date-picker"
                                    placeholder="Degree"
                                    value={degree}
                                     onChange={handleSelectDegree}
                                    options={degreeList}
                                />
                            </div>
                            <p style={{ padding: "0 10px" }} className="hint error-hint">{error_degree}</p>
                        </Grid>

                        <Grid item md={6} sm={6} xs={12}>
                            <p className="textfield-head">Field of study</p>
                            <div style={{ padding: "0 10px" }}>
                                <Select
                                    className="date-picker"
                                    placeholder="Field of study"
                                    value={studyField}
                                     onChange={handleSelectStudyField}
                                    options={studyFieldList}
                                />
                            </div>
                            <p style={{ padding: "0 10px" }} className="hint error-hint">{error_studyField}</p>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <p className="textfield-head">University</p>
                            <div style={{ padding: "0 10px" }}>
                                <Select
                                    className="date-picker"
                                    value={university}
                                    placeholder="University"
                                    onInputChange={(e) => {
                                        if (e.length > 2)
                                            getUniversity(e, getUniversityList);
                                    }}
                                     onChange={handleSelectUniversity}
                                    options={universityList}
                                    noOptionsMessage={() => 'University not found.'}
                                />
                            </div>
                            <p style={{ padding: "0 10px" }} className="hint error-hint">{error_university}</p>
                        </Grid>

                        <Grid item md={6} sm={6} xs={12}>
                            <p className="textfield-head">Grade</p>
                            <div style={{ padding: "0 10px" }}>
                                <Select
                                    className="date-picker"
                                    placeholder="Grade"
                                    value={grade}
                                     onChange={handleSelectGrade}
                                    options={gradeList}
                                />
                            </div>
                            <p style={{ padding: "0 10px" }} className="hint error-hint">{error_grade}</p>
                        </Grid>

                        <Grid item md={6} sm={6} xs={12}></Grid>

                        <Grid item md={6} sm={6} xs={12}>
                            <p className="textfield-head">Start year</p>
                            <div style={{ padding: "0 10px" }}>
                                <InputBase type="month" id="startYear" className="date-picker" 
                                 onChange={onTextChange} 
                                />
                                <p className="hint error-hint">{error_startYear}</p>
                            </div>
                        </Grid>

                        <Grid item md={6} sm={6} xs={12}>
                            <p className="textfield-head">End Year</p>
                            <div style={{ padding: "0 10px" }}>
                                <InputBase type="month" id="endYear" className="date-picker" 
                                onChange={onTextChangeEndYear} 
                                />
                                <p className="hint">{error_endYear ? <span className="error-hint">{error_endYear}</span>
                                    : <span>(If you are currently pursuing leave it blank.)</span>
                                }
                                </p>
                            </div>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <p className="textfield-head">Description</p>
                            <div style={{ padding: "0 30px 0 10px" }}>
                                <textarea id="description" 
                                //  multiline={true}
                                    className="date-picker text-area"
                                     onChange={onDescriptionChange}
                                />
                            </div>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <div style={{ marginTop: "20px", textAlign: "center", marginBottom: '20px' }}>
                                {/* <CustomButton name="submit_education" title="Submit"
                                    onButtonClick={this.onSubmit}
                                /> */}
                                 <Button name="submit_education" variant="contained" color="primary" style={{justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} onClick={ onSubmit }>
                                 Submit
                                </Button>
                                <NotificationComponent
                                  message={ErrosMessage}
                                  show={showLoginFailedMsg}
                                  onClose={() => setShowLoginFailedMsg(false)}
                                  />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    
}


