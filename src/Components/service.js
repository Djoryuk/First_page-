import React from 'react'
import '../Styles/service.css'
import {TiLockClosedOutline , TiGlobeOutline} from 'react-icons/ti'
import {IoFileTrayStackedSharp} from 'react-icons/io5'
import {BsCodeSlash}from 'react-icons/bs'
export default function Service() {
    const info = [{
        id: 1 ,
        icon : <TiLockClosedOutline className='ion-icon'/>,
        title : "SSL certifecate",
        paragraph : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
        anchor : "#",
    },
    {
        id: 2 ,
        icon: <TiGlobeOutline className='ion-icon'/>,
        text: "Personal Domain",
        paragraph :  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
        anchor : "#",
    },
    {
        id: 3 ,
        icon: <BsCodeSlash  className='ion-icon'/>,
        text :"Personal Domain" ,
        paragraph : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
        anchor : "#",
    },
    {
        id: 4,
        icon: <IoFileTrayStackedSharp className='ion-icon'/>,
        text : "Media Storage",
        paragraph : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,ea!",
        anchor : "#",
    }]
    const infoList = info.map(info => (
        <div key={info.id} className="offer">
            {info.icon}
          {info.title}
            {info.paragraph}
          <a href={info.anchor}><h2>MORE!</h2></a>
        </div>

    ))
  return (
    <div className="section services">
      <div className="section-content">
        <h1>Hosting solution with benifits.</h1>
        <p>
          Turn your ideas into reality with static . <br />
          With a lot of powerfull features , <br />
          we guarantee simplicity and clarity.
        </p>
        <div className="btn-container">
          <button className="green-btn">
            <span className="btn-txt">Read more</span>
          </button>
        </div>
      </div>
      <div className="offers">
        { infoList }
      </div>
    </div>
  )
}
