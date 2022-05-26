import "./AboutUsPage.css"
import background from "../assets/top-view-lunchboxes-with-phone.jpg"

function AboutUs () {
  
    return (
      <section className="about-container">
        <div className="about-mission">
        <br/>
        <br/>
          <p className="first-p">
            It's not always easy to meet coworkers in big companies. But fear
            not, ForkMate will help you break the ice. Become a forker and look
            for your coforkers.
          </p>

          <p className="second-p">
            Did you bring too much food at work? You've organized a birthday
            party with your team and no one has touched the cake?
            <br /> You're tired of eating alone at your desk? You forgot to pack
            your lunch? You might not be the only one. Share it with your
            colleagues on ForkMate and cofork with them!
          </p>

          
        </div>
        <div className="our-mission-container">
          <h2 className="about-title">Our mission</h2>

          <p className="mission-statement2">
            Help people connect in the workplace and tackle food waste, all at
            once! Login, browse the list of meals available in your building<br/> or add one yourself. 
            <h3 className="catch-phrase2">Your forkmates are waiting for you.</h3>

          <p className="mission-statement">Help us spread the word by joining ForkMate</p>
          </p>
        </div>

        <article className="about-our-partners">
          <div className="companies-partner">
            <p className="mission-statement">
              Join the growing list of companies partering with us: Netflix
              (Los Angeles), IronHack (Madrid), Microsoft(San Francisco), ToGoodToGo (Paris) and more
            </p>
          </div>
          <div className="companies-icons">
            <p>
              
            </p>
          </div>
        </article>

      </section>
    );
    
}

export default AboutUs;