import { useEffect, useState } from "react"

const HomePage = () => {

    const [error, setError] = useState({});

    useEffect(()=>{
        window.addEventListener("message", receiveMessage, false);
    },[])

    const receiveMessage = (event) => {
        const message = event.data.message;
    
        switch (message) {
            case 'getAppData':
                setError(event.data.value);
                break;
          
            default: 
                break;
        }
    }

    return(   
        <div className="App">
            <iframe title="form" src="/form" width="500px" height="830px" style={{border:"3px solid red", marginBottom:"15px"}}/>
            {Object.keys(error).length>0 && <div>Result: {JSON.stringify(error)}</div>}
        </div>
    )
}

export default HomePage