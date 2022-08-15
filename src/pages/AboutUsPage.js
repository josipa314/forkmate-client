import "./AboutUsPage.css";
import foodshare from "../assets/foodsharecollaborators.jpeg";
import wework from "../assets/wework-logo.png";
import qonto from "../assets/qonto-logo.png";
import netflix from "../assets/netflix-logo2.jpg";
import blablacar from "../assets/blablacar_logo2.jpg";
import ironhack from "../assets/ironhack-logo.jpeg";

function AboutUs() {
  return (
    <main className="wrapper">
      <section className="container">
        <section className="about-container">
          <div className="about-mission">
            <img
              src={foodshare}
              className="background-homepage"
              alt="background"
            />

            <p className="catch-phrase1">
              It's not always easy to meet coworkers in big companies. But fear
              not, ForkMate will help you break the ice.
            </p>
            <br />
            <p className="second-p">
              Did you bring too much food at work? You've organized a birthday
              party with your team and no one has touched the cake?
              <br /> You're tired of eating alone at your desk?
              <br />
              You forgot to pack your lunch?
              <br />
              You might not be the only one.
              <br />
              <br />
              Login, browse the list of meals available in your building or add
              one yourself! Then share it with your colleagues and cofork with
              them!
            </p>
          </div>
          <div className="our-mission-container">
            <br />
            <h2>Our mission</h2>
            <p className="catch-phrase2">
              Help people connect in the workplace and tackle food waste, all at
              once!
            </p>
          </div>

          <article className="our-partners-container">
            <h2 className="about-title">Our partners</h2>
            <p className="mission-statement2">
              Join the growing list of companies partering with us: Netflix (Los
              Angeles), IronHack (Madrid), Microsoft(San Francisco), ToGoodToGo
              (Paris) and more
            </p>
            <div className="companies-icons">
              <img
                src={netflix}
                className="background-homepage"
                alt="background"
              />
              <img
                src={qonto}
                className="background-homepage"
                alt="background"
              />
              <img
                src={wework}
                className="background-homepage"
                alt="background"
              />
              <img
                src={ironhack}
                className="background-homepage"
                alt="background"
              />
              <img
                src={blablacar}
                className="background-homepage"
                alt="background"
              />
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default AboutUs;
