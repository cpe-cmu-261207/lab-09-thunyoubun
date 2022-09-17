import React from "react";
import MainLayout from "./layout/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <div class="bg-primary vh-100 d-flex justify-content-center" id="contact">
        <div class="container mw-100 w-75  bg-light rounded-4 row d-flex justify-content-center align-items-center text-center p-2 m-5">
          <h2 class="m-3  text-dark">Contact Me</h2>

          <div
            class="d-flex text-center bg-light flex-column justify-content-center shadow rounded-4 p-5 "
            style={{ width: 500 }}
          >
            <a>
              <img
                class="rounded-circle m-3 shadow"
                src="/assets/profile.jpg"
                style={{ height: 200, width: 200 }}
              />
            </a>
            <h2>Thun Anuntart</h2>
            <p class="fw-semibold text-black-50">Engineer Student</p>

            <hr />
            <div class="d-flex flex-row justify-content-center gap-3 m-2">
              <a href="https://github.com/thunyoubun" target="_blank">
                <img
                  src="/assets/contact/GitHub-Mark-64px.png"
                  style={{ height: 32, width: 32 }}
                />
              </a>
              <a href="https://www.facebook.com/switch.2412/" target="_blank">
                <img
                  src="/assets/contact/facebook.png"
                  style={{ height: 32, width: 32 }}
                />
              </a>
              <a href="mailto:thun_a@cmu.ac.th" target="_blank">
                <img
                  src="/assets/contact/email.png"
                  style={{ height: 32, width: 32 }}
                />
              </a>
            </div>
            {/* <div class="text-center text-primary">
              <p>© 2022 thunresume.com by Thun Anuntarat</p>
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
