import React from 'react'
import Link from 'gatsby-link'

import hs from '../images/hs.jpg'
import pic02 from '../images/pic02.jpg'
import bindery from '../images/bindery.jpg'
import react from '../images/react.png'
import GraphQL from '../images/GraphQL_Logo.png'
import MySQL from '../images/MySQL.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Blog</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>
             A link to my blog on medium: coming 6.28.18
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <h4>Work done for clients</h4>
          <hr></hr>
          <p>The Bindery: managed with Wordpress</p>
          <a href="http://thebinderydenver.com/">thebinderydenver.com</a>
          <span className="image main"><img src={bindery} alt="" /></span>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={hs} alt="" /></span>
          <p>The technologies I work and build with include: React, GraphQL, Node.JS, MySQL and more. While I build my applications from the ground up, I have experince designing and maintaining CMS platforms like Wordpress, Drupal and Blogger. </p>
          <p>I am an abstract artist, front-end developer, astronomy fanatic, runner, rock climber, dog owner, partner to an incredible
             woman and forever a student of the world. I build beautiful applications for businesses and individuals. </p>
          {close}
        <img src={react} alt="React" />
        <img src={GraphQL} alt="GraphQL" />
        <img src={MySQL} alt="MySQL" />
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
            <li><a href="https://twitter.com/zacsanders13" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/zac.sanders.520" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/zac__sanders/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/endurain" className="icon fa-github"><span className="label">GitHub</span></a></li>
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