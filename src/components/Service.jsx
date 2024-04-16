import '../styles/Service.css';
import Card from "./Card";
import data from '../utilities/pictures.json';


const Service = ({ visibleModal, serviceInfo }) => {

  return (
    <div className="mt-4 w-75 w-sm-100 d-flex flex-column align-items-center mb-5">
        <div className="container">
            <article className="mb-5">
                <p className="fw-bold mb-0"
                    style={{color: "#dec195", fontSize: "15px"}}>
                    CONDITIONS WE HELP
                </p>
                <p className="fs-1" style={{fontWeight: "800"}}>
                    FROM <em> "BLAH" </em> TO AAAAH...
                </p>
                <p className="fs-4 fw-bold">
                    FUNCTIONAL MEDICINE'S SOLUTION FOR YOU HEALTH <br /> STRUGGLES
                </p>
            </article>
        </div>
        <section className="section d-flex overflow-x-scroll w-100 "
                style={{justifyContent: 'space-between'}}>
            {data.services.map((service, index) => (
                <Card key={index} info={service} visibleModal={visibleModal} serviceInfo= {serviceInfo}/>
            ))}
        </section>
    </div>
  )
}

export default Service