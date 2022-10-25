import React from 'react';

const Contact = () => {
  return <div class="y-wrap">
            <h1>Contact Us</h1>
            <form>
              <div>
                <input type="name" id="name" class="name" placeholder="Name"/>
                <label class="name" for="name">Name</label>
              </div>
              <div>
                <input type="email" id="email" class="email" placeholder="email"/>
                <label class="email" for="email" >Email</label>
              </div>
              <div class="form-group">
                <textarea class="message" id="message" rows="3" placeholder="Message"></textarea>
               </div>
            </form>
            <button class="submit-contact-form" type="submit">Send</button>
          </div>;
};

export default Contact;