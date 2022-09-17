import React from "react";

import MainLayout from "./layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-primary d-flex justify-content-center align-items-center ">
        <div class="container bg-light m-5 p-5 rounded-4 row d-flex justify-content-center align-items-center text-center">
          <div class="d-flex justify-content-center  position-relative px-5 m-5 w-75">
            <div class="">
              <img
                class="rounded-circle mw-50  shadow"
                src="/assets/profile.jpg"
                style={{ width: 200, height: 200 }}
              ></img>
            </div>
            <div class=" flex-wrap m-4  text-start">
              <h1>Thun Anuntarat</h1>
              <p>
                I'm Engineer Student.👋I would like to lerning new knowledge and
                some tech and looking for a job likes Full-Dev, Front-End,
                Back-End.
              </p>
            </div>
          </div>

          <h2 class="m-5">My Skills</h2>

          <div class="container w-75 h-100 shadow rounded-4 m-4">
            <div class="row d-flex justify-content-center gap-3 p-5 ">
              <img
                class="  border border-5 d-flex justify-content-center border-primary shadow w-25   rounded-4 border-opacity-75  "
                src="/assets/skills/java.png"
                style={{ width: 149, height: 149 }}
              ></img>

              <div class=" border border-5  border-primary shadow w-25 mw-auto rounded-4 border-opacity-75 justify-content-center ">
                <img
                  class="img-fluid p-2 "
                  src="assets/skills/c.png"
                  style={{ width: 149, height: 149 }}
                ></img>
              </div>

              <div class=" border border-5  border-primary shadow w-25 mw-auto rounded-4 border-opacity-75 justify-content-center ">
                <img
                  class="img-fluid p-2 "
                  src="assets/skills/bootstrap-logo.png"
                  style={{ width: 149, height: 149 }}
                ></img>
              </div>
            </div>

            <div class="row justify-content-center gap-3 p-5 w-100">
              <div class=" border border-5  border-primary shadow w-25 mw-auto rounded-4 border-opacity-75 justify-content-center ">
                <img
                  class="img-fluid p-2 "
                  src="assets/skills/html5-icon-13.jpg"
                  style={{ width: 149, height: 149 }}
                ></img>
              </div>

              <div class=" border border-5  border-primary shadow  w-25 mw-auto rounded-4 border-opacity-75 justify-content-center ">
                <img
                  class="img-fluid p-2 "
                  src="assets/skills/CSS3_logo.svg.png"
                  style={{ width: 149, height: 149 }}
                ></img>
              </div>

              <div class=" border border-5  border-primary shadow  w-25 mw-auto rounded-4 border-opacity-75 justify-content-center ">
                <img
                  class="img-fluid p-2 mt-4 "
                  src="assets/skills/tailwind-css.png"
                  style={{ width: 149, height: 149 }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
