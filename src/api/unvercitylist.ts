import axios from 'axios';


export const getUniversity = (txt, getList) => {
    console.log("GET UNIVERSITY ==>", txt, " ==>", getList)
    axios.get(`http://universities.hipolabs.com/search?name=${txt}`).then(response => {
        let Ulist = []
        if (response.data) {
            response.data.forEach(ele => {
                Ulist.push({ value: ele.name, label: ele.name })
            })
        }
        getList(Ulist);
    }).catch((e) => {
        console.log(e)
    })
}