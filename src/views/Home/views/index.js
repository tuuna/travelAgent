import React, {Component} from "react"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./style.css";


class HomePage extends Component {
    componentDidMount() {
        // When the component is mounted, add your DOM listener to the "nv" elem.
        // (The "nv" elem is assigned in the render function.)
        document.body.className += " js-loading";
        this.nv.addEventListener("load", this.handleNvEnter);
        this.main.addEventListener("main", this.handleMainEnter);

        // Testing
        setInterval(() => this.nv.dispatchEvent(new CustomEvent("load", { detail: new Date() })), 1000);
    }

    componentWillUnmount() {
        // Make sure to remove the DOM listener when the component is unmounted.
        this.nv.removeEventListener("load", this.handleNvEnter);
        this.main.removeEventListener("main", this.handleMainEnter);
    }

    // Use a class arrow function (ES7) for the handler. In ES6 you could bind()
    // a handler in the constructor.
    handleNvEnter = (event) => {
        document.body.className = document.body.className.replace("js-loading", "");
    };

    handleMainEnter = (event) => {
        document.body.className = document.body.className.replace("js-loading", "");
    };

  render() {

      // Finally, render the div using a "ref" callback which assigns the mounted
      // elem to a class property "nv" used to add the DOM listener to.

      return (
          <div>
              <div className="animated-header bg-blur">
              <div ref={elem => this.nv = elem} className="loading">
                 {/*loading*/}
              </div>
              <div ref={elem => this.main = elem} className="logo">
                  <Grid item xs={6}>
                      <Paper >xs=6</Paper>
                  </Grid>
                  <Grid item xs={6}>
                      <Paper >xs=6</Paper>
                  </Grid>
              </div>
          </div>
          </div>
      );
  }
}

export default HomePage;
