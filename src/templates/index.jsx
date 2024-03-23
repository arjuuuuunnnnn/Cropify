<>
  {"{"}% extends 'base.html' %{"}"}
  {"{"}% block pagetitle %{"}"}
  AI Engine
  {"{"}% endblock pagetitle %{"}"}
  {"{"}% block body %{"}"}
  <div>
    <div className="container">
      {/* For demo purpose */}
      <div className="row mb-5 text-center text-white">
        <div className="col-lg-10 mx-auto">
          <h1
            className="display-4"
            style={{ paddingTop: "2%", fontWeight: 400, color: "whitesmoke" }}
          >
            <b>🍀Predictor🍀</b>
          </h1>
          <p className="lead" style={{ fontWeight: 500, color: "whitesmoke" }}>
            Detect
          </p>
        </div>
      </div>
      {/* End */}
      <div className="row ">
        <div className="col mx-auto">
          <div
            className="p-5 bg-white shadow rounded-lg"
            style={{ height: "95%" }}
          >
            <h5>
              <b>Why is it necessary to detect diseases in plants ?</b>
            </h5>
            <p>
              Detecting diseases in plants is paramount for safeguarding global
              food production, as it enables timely intervention to prevent
              yield losses, ensures the sustainability of agricultural
              practices, preserves biodiversity, and maintains economic
              stability within the farming sector. By identifying and managing
              plant diseases effectively, farmers can protect their crops from
              devastation, maintain food security for communities worldwide, and
              contribute to the overall resilience of agricultural systems in
              the face of environmental challenges and emerging threats.
            </p>
            <a
              target="_blank"
              href="https://extension.umn.edu/how/preventing-plant-diseases-garden"
              className="mx-2"
            >
              <button type="button" className="btn btn-outline-success">
                More info
              </button>
            </a>
          </div>
        </div>
        <div className="col mx-auto">
          <div
            className="p-5 bg-white shadow rounded-lg"
            style={{ height: "95%" }}
          >
            <img
              src="https://www.pngjoy.com/pngl/250/4840262_plants-png-indoors-tropical-plant-png-hd-png.png "
              height={300}
              alt=""
              width={200}
              className="d-block mx-auto mb-4 rounded-pill"
            />
            {/* Default bootstrap file upload*/}
            <form action="/submit" method="POST" encType="multipart/form-data">
              <div className="custom-file overflow-hidden mb-4">
                <input type="file" id="actual-btn" hidden="" name="image" />
                <label htmlFor="actual-btn">Choose File</label>
                <span id="file-chosen">No file chosen</span>
              </div>
              {/* End */}
              <h6 className="text-center mb-4 text-muted">
                Upload an image of your diseased plant leaf.
              </h6>
              {/* Custom bootstrap upload file*/}
              <center>
                <a className="mx-2">
                  <button type="submit" className="btn btn-outline-success">
                    Submit
                  </button>
                </a>
              </center>
            </form>
            {/* End */}
          </div>
        </div>
        <div className="col mx-auto">
          <div
            className="p-5 bg-white shadow rounded-lg"
            style={{ height: "95%" }}
          >
            <h5>
              <b>Prevent Plant Disease follow below steps:</b>
            </h5>
            <p>
              Preventing plant diseases involves several crucial steps:
              vigilantly monitoring crops, rotating them to avoid pathogen
              buildup, maintaining proper sanitation practices, ensuring timely
              and adequate irrigation, applying balanced fertilization methods,
              and selecting disease-resistant plant varieties for cultivation.
              These measures collectively contribute to safeguarding plant
              health, optimizing agricultural productivity, and sustaining
              global food security..
            </p>
            <a
              target="_blank"
              href="https://www.thespruce.com/prevent-plant-diseases-in-your-garden-2539511"
              className="mx-2"
            >
              <button type="button" className="btn btn-outline-success">
                More info
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {"{"}% endblock body %{"}"}
</>