<HeaderBanner
        title=" Unlocking the world of code"
        description="Experience the future of Backend development -They optimize performance, troubleshoot bugs. They're the wizards behind the scenes, shaping the tech landscape with a blend of technical prowess and creative problem-solving."
        
        image={fullstackImage}
      />
    <div className="text-center pt-5">
        <div className="container mb-5 h-100">
          <p
            className={`fw-bold text-sm mt-3 ${cls["text-blue-dark"]} ${cls["font-medium-bold"]}`}
          >
            " <span className="fs-3">A</span>re you ready to embark on a journey into backend mastery? Join our 6-month Full Stack Development course and shape the future of tech with us! 
          </p>
          <h3 className={`mt-4 ${cls["sub-title"]}`}>
            {" "}
            Empower Backend Excellence{" "}
          </h3>
          <div className="row mt-5">
            {exploreDigital.map((item) => (
              <div className="col-md-4 ">
                <div className="d-flex justify-content-center">
                  <div
                    className={`text-center ${cls["explore-img-container"]}`}
                  >
                    <img src={item.image} className="img-fluid"></img>
                    <div></div>
                  </div>
                </div>
                <h4 className={`mt-2 ${cls["card-title"]} ${cls["cstm"]}`}>
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className={`${cls["bg-light"]} pb-5`}>
          <h2
            className={`mt-3 pt-5 ${cls["title-main"]} ${cls["font-extra-bold"]}`}
          >
            Why Choose Us?{" "}
          </h2>
          <div className="container h-100 px-0">
            <div className="row text-start mt-4 mx-0">
              {whyChooseUs.map((item) => (
                <div className="col-md-4 mt-md-0 mt-4">
                  <div
                    className={`h-100 ${cls["bg-light-blue"]}  py-4 px-3 rounded shadow-sm`}
                  >
                    <h4
                      className={`text-center fw-bold  ${cls["card-title"]}  ${cls["text-blue-dark"]}`}
                    >
                      {item.title}
                    </h4>
                    <p className={`${cls["font-small-bold"]} mb-0`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <FooterBanner
          title={` Don't just learn – thrive! `}
          subtitle="Enroll today and launch your
              digital marketing journey with confidence."
        /> */}
        <Footer /> 
        </div>
                     
    <div className={cls["backendpage"]}>  
   </div>
    </>
  )
}
