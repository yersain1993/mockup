import '../styles/Card.css';
import images from '../utilities/pictures.json';

const Card = ({ info, visibleModal, serviceInfo }) => {

    const gradient = images.gradientURL;

  return (
    <div>
        <div className="card"
            style={{width: "18.75rem", height: "23.125rem", border: "none", background: "#f8f9fa"}}>
            <div className="">
                <img src={Object.values(info)[0].imgURL} className="card-img" alt="first_service" style={{borderTopRightRadius: "20%"}}/>
            </div>
            <img src={gradient} className="position-absolute" alt="gradient" style={{width: "300px", height: "370px"}} />
            <div className="card-img-overlay d-flex flex-column align-items-center justify-content-end p-0"
                style={{marginLeft: "0px", marginTop: "0px"}}>
                <h5 className="card-title fw-bold text-light"> {Object.values(info)[0].tittle1} <br /> {Object.values(info)[0].tittle2} </h5>
                <p className="card-text fw-semibold text-light"><small>{Object.values(info)[0].text}</small></p>
                <div className="d-flex"
                    style={{gap: "12px"}}>
                    <button className="" style={{background: "#dec195", border: "none", padding: "5px 25px"}}>
                        <strong style={{fontSize: "13px"}}>GET STARTED</strong>
                    </button>
                    <button className="text-light" style={{background: "#464646", border:"none", fontSize: "13px", padding: "5px 25px"}}
                            onClick={() => {
                                visibleModal();
                                serviceInfo(Object.values(info)[0]);
                            }}
                    >
                        <strong>LEARN MORE</strong>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Card