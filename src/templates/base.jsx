import React from 'react';

function PlantDiseaseDetection() {
  return (
    <>
      <!doctype html>
      <html lang="en">

      <head>
          {/* Required meta tags */}
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Bootstrap CSS */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bttn.css/0.2.4/bttn.css" />

          <title> {% block pagetitle %}

              {% endblock pagetitle %}</title>
          <style>
              {/* CSS styles */}
          </style>
      </head>

      <body>
          <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#05380b' }}>
              {/* Navbar content */}
          </nav>
          {% block body %}

          {% endblock body %}
          <div class="footer-basic">
              <footer>
                  <center>
                      {/* Social media icons */}
                  </center>
                  <br />
                  <ul class="list-inline">
                      <li class="list-inline-item"><a href="/">Home</a></li>
                      {/* Additional footer links */}
                      <li class="list-inline-item laptop"><a href="/index">🍀Predictor🍀</a></li>
                  </ul>
                  <p class="copyright">Created by Team Neural Ninjas</p>
              </footer>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </body>
      {/* JavaScript scripts */}
      </html>
    </>
  );
}

export default PlantDiseaseDetection;