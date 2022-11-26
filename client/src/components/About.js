import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setuserData] = useState();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setuserData(data); 

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                {/* <img src={thapapic} alt="thapa"></img> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData}</h5>
                <h6>sfgdfsg</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span> 1/10</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="home"
                      aria-selected
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              ></input>
            </div>
          </div>

          <div className="row">
            {/*  left side url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
                <a href="" target="_thapa">
                  Youtube
                </a>
                <br />
              </div>
            </div>

            {/* right side data toogle */}

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  arial-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p> 123456789</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p> sdfgdgs</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p> sdfgd</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p> 123456789</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p> 123456789</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p> 123456789</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p> 123456789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
