import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const distroList = {
    Debian: [
      {
        distro: "Linux Mint",
        description: "An ubuntu based OS without snap",
        rating: "4.5/5"
      },
      {
        distro: "Pop Os",
        description: "An ubuntu based OS with modified gnome shell",
        rating: "4.5/5"
      },
      {
        distro: "Ubuntu",
        description: "A debian based os with amazing software repos",
        rating: "4/5"
      },
      {
        distro: "Debian",
        description: "A stable os best suited for servers",
        rating: "3/5"
      }
    ],
    Redhat: [
      {
        distro: "Fedora",
        description:
          "A rolling relaease distro with all upcoming features of red-hat",
        rating: "4.5/5"
      },
      {
        distro: "Red Hat",
        description: "A commercial Os best suited for enterprises",
        rating: "4/5"
      },
      {
        distro: "Rocky Linux",
        description: "A rolling release cent os replacement.",
        rating: "4/5"
      },
      {
        distro: "Cent Os",
        description: "A stable os best suited for servers",
        rating: "3/5"
      }
    ],
    Arch: [
      {
        distro: "Manjaro",
        description: "An Arch Based beginner friendly distro",
        rating: "4.5/5"
      },
      {
        distro: "Arch",
        description: "A lightweight os for pro linux users",
        rating: "4.5/5"
      },
      {
        distro: "Garuda Linux",
        description: "An arch based highly customizable distro",
        rating: "4/5"
      },
      {
        distro: "AcroLinux",
        description: "An arch based distro with graphical installer",
        rating: "3.5/5"
      }
    ]
  };
  const [distro, setDistro] = useState("Debian");

  function onClilckHandler(distro) {
    setDistro(distro);
  }

  return (
    <div className="App">
      <h1>
        Linux Distro Recommender <span role="img">🐧</span>
      </h1>
      <h3>Recommended Distros for Linux users</h3>
      <hr />
      <div className="buttons">
        {Object.keys(distroList).map((distro) => (
          <button onClick={() => onClilckHandler(distro)}>
            {distro} Based
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {distroList[distro].map((os) => (
            <li key={os.name}>
              <div style={{ fontSize: "larger", margin: "0.5rem" }}>
                {os.distro}
              </div>
              <div style={{ margin: "0.5rem" }}>{os.description}</div>
              <div style={{ fontSize: "smaller", margin: "0.5rem" }}>
                {" "}
                Rating - {os.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
