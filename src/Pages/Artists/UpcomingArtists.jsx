import React, { useState } from 'react'
import style from './Artists.module.scss';
import leftcardpart from "../../Assets/Artists/left-card-part-removebg.png";
import topcardpart from "../../Assets/Artists/top-card-part-removebg.png";
import rightcardpart from "../../Assets/Artists/right-card-part-removebg.png";
// import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { upcomingartist } from "../../Data/Artistsdata";
// import UpcomingModal from './UpcomingModal'

import Modal from 'react-modal';
const UpcomingArtists = () => {
    // const [modal, setmodal] = useState(false);
    // const [modalid, setmodalid] = useState(1);
    const [toggle, setToggle] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div className={style.artistsmain}>
                <div className={style.animateposua}>
                    <div className={style.redbg}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
                            alt=""
                        />
                    </div>

                    <div className={style.gmcha}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
                            alt=""
                        />
                    </div>

                    <div className={style.tabla}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
                            alt=""
                        />
                    </div>

                    <div className={style.flute}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
                            alt=""
                        />{" "}
                    </div>
                </div>
                <div className={style.titleholderartist}>
                    {" "}
                    <h1 className={style.artismainh1}>UPCOMING ARTISTS</h1>
                </div>

                <div className={style.animateposua} id={style.right}>
                    <div className={style.redbg}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
                            alt=""
                        />
                    </div>

                    <div className={style.gmcha}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
                            alt=""
                        />
                    </div>

                    <div className={style.tabla}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
                            alt=""
                        />
                    </div>

                    <div className={style.flute}>
                        <img
                            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
                            alt=""
                        />{" "}
                    </div>
                </div>
            </div>

            {toggle && (
                <div className={style.allupcomingcard}>
                    {upcomingartist.map((item) => {
                        return (
                            <>
                                <div className={style.indicard} key={item.id}
                                    // onClick={() => {
                                    //         setmodalid(item.id);
                                    //         setmodal(true);
                                    //     }}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        openModal();
                                    }}
                                >



                                    <div className={style.artistdetails} >
                                        <h2 className={style.artistname}>{item.artist}</h2>
                                        <div className={style.artistwork}>
                                            <h3>Singer</h3>
                                        </div>
                                    </div>

                                    <Modal
                                        isOpen={modalIsOpen}
                                        onAfterOpen={afterOpenModal}
                                        onRequestClose={closeModal}
                                        // style={customStyles}
                                        className={style.modell}
                                        contentLabel="Example Modal"
                                    >
                                        <h2 >Hello</h2>
                                        <button onClick={closeModal}>close</button>
                                        <div>I am a modal</div>
                                        <form>
                                            <input />
                                            <button>tab navigation</button>
                                            <button>stays</button>
                                            <button>inside</button>
                                            <button>the modal</button>
                                        </form>
                                    </Modal>

                                </div>
                            </>
                        );
                    })}
                    {/* <Modal style={{zIndex:"10000"}} size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
             <ModalHeader toggle={() => setmodal(!modal)}></ModalHeader>
             <ModalBody>
                 <UpcomingModal dataid={modalid} />
             </ModalBody>
         </Modal> */}
                </div>
            )}

            {/* <img src={artistbg} alt="" /> */}
            <img src={topcardpart} className={style.topcardimg} alt="" />
            <img src={leftcardpart} className={style.leftcardimg} alt="" />
            <img src={rightcardpart} className={style.rightcardimg} alt="" />
            <img src={item.img} className={style.artistpic} alt="" />
            <div className={style.flowerholder} style={{ userSelect: "none", pointerEvents: "none" }}>
                <img
                    className={style.leftflower}
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677096323/posua/flowers-posua-removebg-preview_qjehkd12_nqdt2z.png"
                    alt=""
                />
                <img
                    className={style.rightflower}
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677096323/posua/flowers-posua-removebg-preview_qjehkd12_nqdt2z.png"
                    alt=""
                />
            </div>


        </>
    )
}

export default UpcomingArtists