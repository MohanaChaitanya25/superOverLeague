const element = (
  <div className="superOverLeagueApp-bg-container">
    <h1 className="superOverLeagueApp-heading">Super Over League</h1>
    <div className="teams-images-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="logo-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="logo-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
