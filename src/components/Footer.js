import React, {Fragment} from 'react';

const Footer = () => {
return (
    <Fragment>
        <section className="footer py-5">
            <div className="container">
            <p className="text-center"> Esta información se recopila de https://www.covid19api.com/</p>
            <p className="text-center"> Creado por <a href="https://www.alexeigarban.com/">Alexei Garbán</a></p>
            </div>
        </section>
    </Fragment>
)
}

export default Footer;