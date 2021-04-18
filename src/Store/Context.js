import {useContext, createContext,useState} from 'react'
import {useHistory} from 'react-router-dom'
const AppContext = createContext(); 

const AppProvider = (props) => {
    const [values,setValues] = useState({})
    function Validate() {
        if(values===''){alert ('all fields are required')}
        else {alert('login successful')}
    }
    
    function updateValues(e){
       
        setValues({...values,[e.target.name ]: e.target.value})
        console.log(values)
    }
    console.log(values)
    let history  = useHistory()
      function goToPage(path){
        history.push(path)
    }
    

    return (

        <AppContext.Provider value ={{ goToPage, updateValues,Validate,values}}>
            { props.children }
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)

export  {
    AppProvider,
    useAppContext
}



