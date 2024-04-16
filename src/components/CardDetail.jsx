import '../styles/CardDetail.css'

const CardDetail = ({ serviceInfo, visibleModalOff }) => {
  return (
    <div>
        <article className="info d-flex flex-sm-column flex-md-row m-auto"
                style={{backgroundColor: "#464646", width: "85%"}}
        >
            <section className=""
                    style={{width: ""}}
            >
                <img src={serviceInfo.imgURL} alt={`${serviceInfo.tittle1 + serviceInfo.tittle2}`}
                    className="" 
                    style={{width: "100%"}}
                />
            </section>
            <section className="d-flex flex-column justify-content-center align-items-start text-start ps-4 p-1"
                    style={{width: "75%"}}
            >
                <h1 className="fw-bold"
                    style={{color: "#dec195"}}
                >
                    {serviceInfo.tittle1} <br />
                    {serviceInfo.tittle2}
                </h1>
                <p className="text-light">
                    {serviceInfo.textDetails}
                </p>
                <button className="get mt-2" style={{background: "#dec195", border: "none"}}>
                        <strong style={{fontSize: "13px", color: "#464646"}}>GET STARTED</strong>
                </button>
            </section>
            <button className="close rounded-circle"
                    style={{height: "30px", border: "none"}}
                    onClick={visibleModalOff}
            >
                <span className="material-symbols-outlined"
                    style={{color: "#464646"}}
                >
                    close 
                </span>
            </button>
        </article>
    </div>
  )
}

export default CardDetail