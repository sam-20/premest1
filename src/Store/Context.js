import {useContext, createContext,useState} from 'react'
import { useHistory } from 'react-router-dom'
const AppContext = createContext(); 

const AppProvider = (props) => {

    const [values,setValues] = useState({})
    let history = useHistory()

    // console.log(history);
    // const [usedetails, seUserdetails] = ({})
    // function getUserdetails(){

    // }


    function goToPage(path){
        history.push(path)
    }
    
    function updateValues(e){
        setValues({...values,[e.target.name ]: e.target.value})
    }
    


    return (

        <AppContext.Provider value ={{  updateValues,values,goToPage}}>
            { props.children }
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)

export  {
    AppProvider,
    useAppContext
}



