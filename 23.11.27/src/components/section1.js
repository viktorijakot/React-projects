import Header from "./header";
import { useState } from "react";
export default function Section1() {
  const [click, setClick] = useState(false);

  const background = {
    height: "512px",
    width: "100%",
    // width: '880px',
    objectFit: "cover",
    // transform: 'matrix(1.25, 0, 0, 1.25, 0, -64.000001)',
    borderLeftColor: "rgb(255, 255, 255)",
    borderRightColor: "rgb(255, 255, 255)",
    position: "absolute",
    zIndex: "-1",
  };
  const sectionbackground = {
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0px, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "512px",
  };

  const container = {
    height: "450px",
    color: "white",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "50px",
    fontSize: "18px",
  };

  const inputBox = {
    width: "363px",
    height: "56px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    border: "1px solid grey",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: "bolder",
    color: "white",
  };

  const button = {
    height: "56px",
    width: "209px",
    backgroundColor: "#e50815",
    borderRadius: "5px",
    border: "none",
    color: "white",
    fontSize: "25px",
    fontWeight: "bolder",
  };

  const form = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  const input = {
    width: "330px",
    height: "50px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    border: "none",
    outline: "none",
    color: "white",
  };
  const key = {
    height: "20px",
    backgroundColor: "grey",
    padding: "3px",
    borderRadius: "5px",
  };
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div>
        <img
          style={background}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/2afd33fe-8672-4faf-a236-68dd73380701/LT-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="movies"
        />
        <div style={sectionbackground}>
          <Header />
          <div style={container}>
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form style={form}>
              <div style={inputBox}>
                <input
                  style={input}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  onFocus={handleClick}
                />
                {click && <img
                  style={key}
                  src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/104-512.png"
                  title="smart key icons"
                />}
              </div>
              <button style={button}>Get Started ＞</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
