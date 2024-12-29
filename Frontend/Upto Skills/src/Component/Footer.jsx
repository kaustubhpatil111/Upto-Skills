import "./Footer.css";

function Footer() {
  return (
    <footer id="Footer">
      <div id="Upper" className="container">
        {/* Contact Information */}
        <section id="contact-info">
          <img src="./UptoSkills.png" alt="UptoSkills logo" />
          <ul>
            <li>
              <p>
                <span className="highlight">Address:</span> Palam, New Delhi,
                Delhi 110077
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">Email:</span> info@uptoskills.com
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">Phone:</span> +91-9319772294
              </p>
            </li>
          </ul>
        </section>

        {/* Links */}
        <section id="links">
          <h2>Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </section>

        {/* Services */}
        <section id="Services">
          <h2>Services</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </section>

        {/* Courses */}
        <section id="Courses">
          <h2>Courses</h2>
          <ul>
            <li>AI & Machine Learning Courses</li>
            <li>Data Science Courses</li>
            <li>Digital Marketing Courses</li>
            <li>Cloud Computing Courses</li>
          </ul>
        </section>

        {/* Subscribe Us */}
        <section id="Subscribe-us">
          <h2>Subscribe Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </section>
      </div>

      <div id="lower">
        <div className="Lower-Container">
          <img src="./Linkedin.png" alt="LinkedIn" />
          <img src="./Instagram.png" alt="Instagram" />
          <img src="./Facebook.png" alt="Facebook" />
          <img src="./Twitter.png" alt="Twitter" />

          <input type="text" placeholder="Enter Your Email" />
          <button>Submit</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
