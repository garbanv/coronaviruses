import React, {Fragment,useState, useEffect} from 'react';
import Pais from './Pais';

const Jumbotron = ()=> {

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [query, setQuery] = useState([]);

    
        const getData = async () => {
            // const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=e160ff05`)
            const response = await fetch(`https://api.covid19api.com/summary`)
            const responseData = await response.json(); 
            setData(responseData.Countries) 
        };

        const handleSearch = (e)=> {
            setSearch(e.target.value);
            getCountry(e.target.value)
         
            }
        function getCountry(c){
            const x = data.filter(data=>data.Country===c)
            setQuery(x);
            console.log(x) 
        }

        useEffect(()=>{
            
            getData();
            
        },[])
        
    return  (
        <Fragment>
            
            <div className="container my-5 home">
                <div className="row">
                    
                <div className="col-md-4 homeLeft py-4 align-items-center">  

                    <h3 className="">Covid19 - 2020</h3>
                    <p className="lead">La información aqui presentada cambia cada 24hrs y puede no ser 100% exacta.</p>
                    <hr className="my-4"/>
                    <p className="my-4">Buscar  información</p>
                    <form>
                        <div className="input-group mb-3">
                            <select className="custom-select" id="inputGroupSelect01" onChange={handleSearch}>
                                <option defaultValue="choose">Selecciona un país...</option>
                                {
                                    data.map((item,index)=>{
                                        return <option value={item.Country} key={index}>{item.Country}</option>
                                        
                                    })
                                }
                            </select>
                            </div>
                    </form>
                
                </div> 

                <div className="col-md-8">
                {
                                    query.map(function(item,index){
                                        return(
                                            <>
                                            <Pais 
                                            key={item.Country}
                                            Country={item.Country}
                                            NewConfirmed={item.NewConfirmed}
                                            TotalConfirmed={item.TotalConfirmed}
                                            NewDeaths={item.NewDeaths}
                                            TotalDeaths= {item.TotalDeaths}
                                            NewRecovered={item.NewRecovered}
                                            TotalRecovered={item.TotalRecovered}
                                            />
                                            </>
                                      )
                                    })
                                }
                    
                </div>               
                </div>
            </div> 
        </Fragment>
    )
}

export default Jumbotron;