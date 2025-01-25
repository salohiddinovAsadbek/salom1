import img1 from "../images/sh16.png";
import img2 from "../images/sh17.png";
import img3 from "../images/sh18.png";
import img4 from "../images/sh19.svg";
import "../assets/person.css";
import { useState } from "react";

function Person() {
  const data = [
    {
      id: 1,
      img: img1,
      name: "Benny Roll",
      title: "Design, Australia",
      icon: img4,
      phone: "+1 (378) 400-1234",
      email: "julie@email.com",
      isOpen: false,
    },
    {
      id: 2,

      img: img2,
      name: "Nattasha Julie",
      title: "Design, Australia",
      icon: img4,
      phone: "+1 (378) 400-1234",
      email: "julie@email.com",
      isOpen: false,
    },
    {
      id: 3,

      img: img1,
      name: "Benny Roll",
      title: "Design, Australia",
      icon: img4,
      phone: "+1 (378) 400-1234",
      email: "julie@email.com",
      isOpen: false,
    },
    {
      id: 4,
      img: img3,
      name: "Nattasha Julie",
      title: "Design, Australia",
      icon: img4,
      phone: "+1 (378) 400-1234",
      email: "julie@email.com",
      isOpen: false,
    },
  ];

  const [data1, setData] = useState([...data]);

  return (
    <div className="person">
      <h1>What the People Thinks About Us</h1>
      <div className="personWrapper">
        {data1.map((item, index) => {
          return (
            <div
              className="personCard"
              key={index}
              onClick={() => {
                setData((c) => {
                  const update = [...c];
                  update.map((item) => {
                    item.isOpen = false;
                  });
                  update[item.id - 1].isOpen = !update[item.id - 1].isOpen;
                  return update;
                });
              }}
            >
              {!item.isOpen ? (
                <img src={item.img} alt="person" />
              ) : (
                <div className="personCard2">
                  <h1>{item.name}</h1>
                  <p>{item.title}</p>
                  <img src={item.icon} alt="icon" />
                  <p>{item.phone}</p>
                  <p>{item.email}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Person;
