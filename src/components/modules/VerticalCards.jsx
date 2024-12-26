import React from "react";

import blog1 from "../../assets/images/Blog Item.png"
import blog2 from "../../assets/images/Blog Item1.png"
import blog3 from "../../assets/images/Blog Item2.png"
import blog4 from "../../assets/images/Blog Item3.png"
import blog5 from "../../assets/images/Blog Item4.png"
import blog6 from "../../assets/images/Blog Item5.png"
import blog7 from "../../assets/images/Blog Item6.png"
import blog8 from "../../assets/images/Blog Item7.png"
import blog9 from "../../assets/images/Blog Item8.png"
import blog10 from "../../assets/images/Blog Item9.png"
import blog11 from "../../assets/images/Blog Item10.png"
import blog12 from "../../assets/images/Blog Item11.png"


const verticalCards = [
  { id: 1, title: "Join the PCC Mailing List", image: blog1, link: "#" },
  { id: 2, title: "Memberships - Join Us", image: blog2, link: "#" },
  { id: 3, title: "Asteroid City", image: blog3, link: "#" },
  { id: 4, title: "Films on Films", image: blog4, link: "#" },
  { id: 5, title: "The Films of Peter Weir", image: blog5, link: "#" },
  { id: 6, title: "Gena and John", image: blog6, link: "#" },
  { id: 7, title: "Ranown Westerns", image:  blog7, link: "#" },
  { id: 8, title: "Bruce Lee Game of Death", image:  blog8, link: "#" },
  { id: 9, title: "Silent Films with Live Score", image:  blog9, link: "#" },
  { id: 10, title: "Prince Charles Cinema Merch", image:  blog10, link: "#" },
  { id: 11, title: "Visit Our Web Store", image:  blog11, link: "#" },
  { id: 12, title: "Gift Vouchers", image:  blog12, link: "#" },
];

const VerticalSection = () => {
  return (
    <div className="vertical-section">
      {verticalCards.map((card) => (
        <a key={card.id} href={card.link} className="vertical-card">
          <img src={card.image} alt={card.title} className="card-image img-fluid" />
        </a>
      ))}
    </div>
  );
};

export default VerticalSection;
