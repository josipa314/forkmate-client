import "./AboutUsPage.css"
import background from "../assets/top-view-lunchboxes-with-phone.jpg"
import wework from "../assets/wework-logo.png"
import qonto from "../assets/qonto-logo.png"
import netflix from "../assets/netflix-logo2.jpg"
import blablacar from "../assets/blablacar_logo2.jpg"
import ironhack from "../assets/ironhack-logo.jpeg"


function AboutUs () {
  
    return (
      <main className="wrapper">
      <section className="container">
      <section className="about-container">
        <div className="about-mission">
        <br/>
        <br/>
          <p className="first-p">
            It's not always easy to meet coworkers in big companies. But fear
            not, ForkMate will help you break the ice. 
          </p>

          <p className="second-p">
            Did you bring too much food at work? You've organized a birthday
            party with your team and no one has touched the cake?
            <br/> You're tired of eating alone at your desk? You forgot to pack
            your lunch? You might not be the only one. 
            <br/> 
            <br/> 
            Login, browse the list of meals available in your building or add one yourself!
            Than share it with your colleagues and cofork with them!
          </p>  
        </div>
        <div className="our-mission-container">
          <h2 className="about-title">Our mission</h2>
          <p className="mission-statement2">
            Help people connect in the workplace and tackle food waste, all at once!
          </p>

          <p className="mission-statement">
            Help us spread the word by joining ForkMate! 
            Become a forker and look for your coforkers.
          </p>
          <h3 className="catch-phrase2">Your forkmates are waiting for you.</h3>
        </div>

        <article className="about-our-partners">
          <div className="companies-partner">
          <h2 className="about-title">Our partners</h2>
            <p className="mission-statement">
              Join the growing list of companies partering with us: Netflix
              (Los Angeles), IronHack (Madrid), Microsoft(San Francisco), ToGoodToGo (Paris) and more
            </p>
          </div>
          <div className="companies-icons">
          <img src={ironhack} className="background-homepage" alt="background"/>
          <img src={blablacar} className="background-homepage" alt="background"/>
          <img src={qonto} className="background-homepage" alt="background"/>
          <img src={netflix} className="background-homepage" alt="background"/>
          <img src={wework} className="background-homepage" alt="background"/>
            <p>
              
            </p>
          </div>
        </article>

      </section>
    </section>
    </main>
    );
    
}

export default AboutUs;