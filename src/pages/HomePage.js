import logo from "../assets/logo spining.png"

function HomePage() {


    return (
      <>
        <div className="HomePage-Container">
        <h1>Welcome to ForkMate!</h1>
        <img src={logo} className="App-logo" alt="logo"/>

       <p>It's not always easy to meet coworkers in big companies. But fear not, forkmate will help you break the ice. Become a forker and look for your coforkers.</p>

        <p>Did you bring too much food at work? You've organized a birthday party with your team and no one has touched the cake?<br/> You're tired of eating alone at your desk? You forgot to pack your lunch? You might not be the only one. Share it with your colleagues on ForkMate and cofork with them! </p>

        <p>Fight food waste while making friends at work</p>

        <p>Help us spread the word by joining ForkMate</p>
        <p>Your forkmates are waiting for you</p>
        <p>Join the growing list of companies partering with us:
        Netflix (city), IronHack (city), Microsoft(city), ToGoodToGo (city),</p>
        
       
        </div>
      </>
    );
  }
  
  export default HomePage;