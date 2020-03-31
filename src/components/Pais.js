import React, {Fragment} from 'react'

export default function Pais({
    Country,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered}) {
    return (
        <Fragment>

            <div className="container">
                {/* <h3 className="text-center  country">{Country}</h3> */}
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                    <div className="card  bg-light shadow mb-3">
                        <div className="card-header text-center">Nuevos confirmados:</div>
                        <div className="card-body ">
                            <h5 className="card-title text-center">{NewConfirmed.toLocaleString()}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card bg-light shadow mb-3">
                        <div className="card-header text-center">Total confirmados:</div>
                        <div className="card-body">
                            <h5 className="card-title text-center">{TotalConfirmed.toLocaleString()}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card bg-light shadow mb-3">
                        <div className="card-header text-center">Nuevas muertes:</div>
                        <div className="card-body">
                            <h5 className="card-title text-center">{NewDeaths.toLocaleString()}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card bg-danger shadow mb-3">
                        <div className="card-header text-center text-white">Total <br/> muertes:</div>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white">{TotalDeaths.toLocaleString()}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card bg-primary shadow mb-3">
                        <div className="card-header text-center text-white">Nuevos Recuperados:</div>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white">{NewRecovered.toLocaleString()}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card bg-success shadow mb-3">
                        <div className="card-header text-center text-white">Total recuperados:</div>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white">{TotalRecovered.toLocaleString()}</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
        
        </Fragment>
    )
}
