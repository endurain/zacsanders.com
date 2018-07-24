import React from 'react';
import Link from 'gatsby-link';
import pic02 from '../images/pic02.jpg';
import bindery from '../images/bindery.jpg';
import medium from '../images/medium.png';
import facial from '../images/facialapp.png';
import focallocal from '../images/focallocal.png'
//this code is terrible I know. Cleaing it up soon
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() =>
       {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout
      ? {display: 'flex'}
      : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro'
        ? 'active'
        : ''}
            ${this.props.articleTimeout ? 'timeout' : ''}`}
            style={{display:'none'}}>
            <h2 className="major">Blog</h2>
            <span className="image main">
              <a href="https://medium.com/@zacharyjsanders">
                <img src={medium} alt="" />
              </a>
            </span>
            <p>Blog on Medium</p>
            {close}
        </article>

        <article id="work" className={`${this.props.article === 'work'
        ? 'active'
        : ''}
           ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
            <h2 className="major">Portfolio</h2>
            <h4>Client work and projects</h4>
            <hr></hr>
              <a href="https://focallocal.org/">
            <p>Focal Local: Wordpress and React</p>
              <span className="image main"><img src={focallocal} alt="" /></span>
            </a>
             <p>Carafind, A Face Recognition App</p>
            <span className="image main">
              <img src={facial} alt="" /></span>
            <a href="http://thebinderydenver.com/">
            <p>The Bindery: managed with Wordpress</p>
              <span className="image main"><img src={bindery} alt="" /></span>
            </a>
            {close}
        </article>

        <article id="about" className={`${this.props.article === 'about'
        ? 'active'
        : ''}
           ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
            <h2 className="major">Services</h2>
            <p>Web App Design and Development</p>
            <p>Mobile App Design and Development</p>
            <p>Server & Database Design</p>
            <p>ZS Web Solutions is a digital studio that offers web services for
               clients in any field. Our focus is for design with a passion for
               innovation. We believe that creativity and efficiency are
               the key ingredients in creating digital products for our clients.
             </p>
            {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''}
         ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li>Follow me on:</li>
            <li><a href="https://twitter.com/zacsanders13"
              className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/zac.sanders.520"
              className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/zac__sanders/"
              className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/endurain"
              className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
