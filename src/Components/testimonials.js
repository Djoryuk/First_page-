import React from 'react'
import '../Styles/testimonials.css'
import W1 from '../asset/w1.jpg'
import DS1 from '../asset/ds1.jpg'
import gggg from '../asset/gggg.jpg'
import hgghgh from '../asset/hgghgh.jpg'

export default function Testimonials() {
    const infos = [
        {
        id: 1,
        image:W1,
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditdeserunt ! Lorem ipsum dolor sit.",
        name: "Nat Reynolds",
        job : "chief accoutant"
        },
        {
        id: 2,
        image:DS1,
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditdeserunt ! Lorem ipsum dolor sit.",
        name: "Hugh jass",
        job : "chief accoutant"
        },
        {
        id: 3,
        image:hgghgh,
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditdeserunt ! Lorem ipsum dolor sit.",
        name: "joe mama",
        job : "chief accoutant"
        },
        {
        id: 4,
        image:gggg,
        quote:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impeditdeserunt ! Lorem ipsum dolor sit.",
        name: "moe lester",
        job : "chief accoutant"
        }
]
    const infosList = infos.map(infos => (
        <div className="user">
            <div className="img-container">
            <img src={infos.image} alt="chief.png" className='img-container'/>
            </div>
        
        <p className="quote">
        {infos.quote}
        </p>
        <h2>{infos.name}</h2>
        <p>{infos.job}</p>
        </div>

))
  return (
    <section className="feedback">
    <h2>TESTIMONIALS</h2>
    <h1>What Clients Say</h1>
    <h2>
      We place huge value on strong relationships and have seen the benifit
      they bring to our business. Customer feedback is vital in helping us to
      get it right.
    </h2>
    <div className="users">
      {infosList}
    </div>
  </section>
  )
}
