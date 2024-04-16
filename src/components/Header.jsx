import images from '../utilities/pictures.json';

const Header = () => {

  const logo = images.logos.logoURL;

  return (
    <div>
        <header className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <img src={logo} className='img-fluid float-start' alt="health_logo" style={{width: "40%", margin: "0% 10%"}}/>
            </div>
        </header>
    </div>
  )
}

export default Header;

