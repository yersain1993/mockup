
import '../styles/Main.css';
import images from '../utilities/pictures.json';

const Main = () => {

    const heroPhoto = images.pictures.heroPhotoURL;
    const googleLogo = images.logos.googleButonURL;
    const womenPic = images.pictures.photoSLURL;
    const check = images.logos.checkURL;

  return (
    <div>
        <article className="d-flex flex-column-reverse flex-sm-row justify-content-sm-center align-items-center border-bottom border-top border-black border-3"
                style={{gap: "px"}}>
            <div className="d-flex flex-column aligne-items-center text-center px-4" 
                style={{width: "58%"}}>
                <h6 className="fw-bold" style={{color: "#dec195"}}>
                    ARIZONA PROVIDER
                </h6>
                <h1 style={{fontWeight: "800"}}>
                    DISCOVER A <br /> HEALTHIER YOU
                </h1>
                <h3 style={{}}>
                    WITH FUNCTIONAL MEDICINE
                </h3>
                <h5 className="fw-bold">
                    Dr. Jeffrey William - Your Specialist in <br /> Functional Medicine
                </h5>
                <p style={{}}>
                Not feeling your best? The holistic approach can <br /> help! Jeffrey Williams 
                from Functional Medicine is <br /> here to give you the wellness solutions that 
                will <br /> lead to a brand new healthy you!
                </p>
                <section className="d-flex order- flex-column justify-content-center align-items-center">
                    <button className="border border-2 rounded-4 p-2" style={{width: "16rem"}}>
                        <img className="w-75" src={googleLogo} alt="googleButton" />
                    </button>
                    <button className="border border-2 rounded-4 d-flex flex-column justify-content-center align-items-center fw-bold mt-0 mt-sm-2"
                            style={{background:"#dec195", width: "16rem", height: "3.5rem", }}>
                        <p className="m-0">
                            Book Your Free Assesment
                        </p>
                    </button>
                </section>
            </div>
            <div className="mt-3 mt-sm-0" style={{width: "42%"}}>
                <img className="w-100 object-fit-contain" src={heroPhoto} alt="doctor_image" style={{height: "90%"}} />
            </div>
        </article>
        <article className="d-flex flex-column flex-sm-row justify-content-center align-items-center border-bottom border-black border-3"
                style={{backgroundColor: "#ffffff"}}>
            <div className="py-sm-5 ps-sm-1 ps-0 w-sm-100 py-0 mt-4 mt-sm-0" style={{width: "50%"}}>
                <img className="object-fit-contain" src={womenPic} alt="women_pic" style={{width: "80%", height: "90%"}}/>
            </div>
            <div className="d-flex flex-column gap-sm-2" style={{width: "50%"}}>
                <h2 className="fw-bold text-start">
                We specialize in helping you get to the root cause and restore health 
                and vitality with personalized functional medicine.
                </h2>
                <p className="fw-bold text-start">
                    This program is for you if:
                </p>
                <ul className="list-unstyled">
                    <li className="d-flex" style={{gap: "4px"}}>
                        <img src={check} alt="check list" style={{width: "1.4rem"}} />
                        <p className="mb-0 fw-semibold">
                            You have been to multiple doctors and can’t get help
                        </p>
                    </li>
                    <li className="d-flex" style={{gap: "4px"}}>
                        <img src={check} alt="check list" style={{width: "1.4rem"}} />
                        <p className="mb-0 fw-semibold">
                            You are on a lot of prescriptions and want to stop
                        </p>
                    </li>
                    <li className="d-flex" style={{gap: "4px"}}>
                        <img src={check} alt="check list" style={{width: "1.4rem"}} />
                        <p className="mb-0 fw-semibold">
                            You feel sick and can’t figure out why
                        </p>
                    </li>
                    <li className="d-flex" style={{gap: "4px"}}>
                        <img src={check} alt="check list" style={{width: "1.4rem"}} />
                        <p className="mb-0 fw-semibold">
                            Your body is not working the same - sexual, digestive, etc
                        </p>
                    </li>
                    <li className="d-flex" style={{gap: "4px"}}>
                        <img src={check} alt="check list" style={{width: "1.4rem"}} />
                        <p className="mb-0 fw-semibold">
                            You feel tired all the time
                        </p>
                    </li>
                    <li className="d-flex" style={{gap: "4px"}}>
                        <img src={check} alt="check list" style={{width: "1.4rem"}} />
                        <p className="mb-0 fw-semibold">
                            You need to lose weight and working out hasn’t been helping
                        </p>
                    </li>
                </ul>
                <button className="align-self-center align-self-sm-start border border-2 rounded-4 d-flex flex-column justify-content-center align-items-center fw-bold mt-0 mt-sm-2"
                        style={{background:"#dec195", width: "16rem", height: "3.5rem"}}>
                    <p className="m-0">
                        Book Your Free Assesment
                    </p>
                </button>
            </div>
        </article>
    </div>
  )
}

export default Main