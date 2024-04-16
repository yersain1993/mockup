

const Modal = ({ isVisibleModal, children }) => {
  return (
    <div>
        {isVisibleModal && (
            <div className="position-fixed d-flex flex-column justify-content-center align-times-center"
                style={{height: "100vh", width: "100wh", inset: "0", backgroundColor: "rgb(0,0,0,0.6)"}}>
            <div className="">{children}</div>
        </div>
        )}
    </div>
  )
}

export default Modal