import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Service from "./Service";
import Modal from "./Modal";
import CardDetail from "./CardDetail";

const Layout = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [serviceData, setServiceData] = useState({})

  const handleClickOn =  () => {
    setIsVisible(true);
  };

  const handleClickOff = () => {
    setIsVisible(false);
  }
  
  const serviceInfo = (serviceData) => {
    const {id, ...data} = serviceData;
    setServiceData(data);
  };
 
  return (
    <div className="d-flex flex-column align-items-center">
        <div className="align-self-start">
          <Header/>
        </div>
        <Main/>
        <Service 
          visibleModal = {handleClickOn}
          serviceInfo = {serviceInfo}
        />
        <Modal isVisibleModal = {isVisible}>
          <div>
            <CardDetail
              serviceInfo={serviceData}
              visibleModalOff = {handleClickOff}
            />
          </div>
        </Modal>
    </div>
  )
}

export default Layout;