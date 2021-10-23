import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section id="footer">
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-4">
                        <h2>About Our Leage</h2>
                        <p>Illum si deserunt e ab nisi aliquip si expetendis multos officia nostrud, ex lorem commodo praesentibus, aliquip fore consequat, in minim proident, eram officia id firmissimum, amet cupidatat ita magna illum. Do nam noster dolore aliqua...</p>
                        <button className="btn btn-info py-2">Learn More</button>
                    </div>
                    <div className="col-md-4">
                        <h2>Recent News</h2>
                        <div>
                            <a href="#">Irure do excepteur culpa</a>
                            <p>AUG 1, 2020</p>
                        </div>
                        <div>
                            <a href="#">Deserunt velit sed admodum</a>
                            <p>JUL 23, 2020</p>
                        </div>
                        <div>
                            <a href="#">Hic ubi cillum quorum veniam</a>
                            <p>JUL 17, 2020</p>
                        </div>
                        <div>
                            <a href="#">Possumus erudit in deserunt</a>
                            <p>JUL 11, 2020</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>Newsletter</h2>
                        <p>Subscribe to our mailing list to get latest news to your email inbox!</p>
                        <input type="text" className="form-control bg-dark border-dark p-3 text-white" placeholder="Your Email Address" />
                        <button className="btn btn-info w-100 p-2">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;