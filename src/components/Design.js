import React from 'react';

export const Design = () => {
  return <div className="container">
    <div class="col d-flex justify-content-center">
      <div className="row myDesign">
         <div className="col-12">
           <div className="col-md-6 offset-md-3 mycard">
             <div className="card">
                <img src="./mylogo.jpeg" alt=".." className="myImage"/>
               <div className="card-body">
                  <div className="titles">
                    <strong className="name">Danso Solomon Danquah</strong><br/>
                    <small className="role">Full Stack Developer</small>
                    
                    <p className="buttons-container">
                      <button className="btn btn-primary email"> Email</button>
                      <button className="btn btn-info linkedin"> LinkedIn</button>
                    </p>

                    <p className="about">
                        <strong>ABOUT</strong><br/>
                        <small>A computer programmer with a Bsc. Informaton Technology, and very diversified in my programming with security in mind</small>
                    </p>

                    <p className="about">
                        <strong>INTEREST</strong><br/>
                        <small>Java, Python, React, Networking, Data Analysis and Software Support Technician</small>
                    </p>

                    <p className="social">
                      <img src="/twitter.png" alt=".." className="social-img 1"/>
                      <img src="/github.png" alt=".." className="social-img 2"/>
                      <img src="/linkedin.png" alt=".." className="social-img 3"/>
                      <img src="/facebook.png" alt=".." className="social-img 4"/>
                    </p>
                  </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>;
};
