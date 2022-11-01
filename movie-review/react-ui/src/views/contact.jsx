import React from 'react';

const Contact = () => {
  return <div className="y-wrap">
            <h1>Contact Us</h1>
            <form>
              <div>
                <input type="name" id="name" className="name" placeholder="Name"/>
                <label className="name" htmlFor="name">Name</label>
              </div>
              <div>
                <input type="email" id="email" className="email" placeholder="email"/>
                <label className="email" htmlFor="email" >Email</label>
              </div>
              <div className="form-group">
                <textarea className="message" id="message" rows="3" placeholder="Message"></textarea>
               </div>
            </form>
            <button className="submit-contact-form" type="submit">Send</button>
          </div>;
};

export default Contact;