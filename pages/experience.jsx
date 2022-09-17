import React from "react";
import MainLayout from "./layout/MainLayout";

export default function experience() {
  return (
    <MainLayout>
      <div class="bg-primary d-flex justify-content-center align-items-center">
        <div class="container   bg-light m-5 p-5 rounded-4 row d-flex justify-content-center align-items-center text-center">
          <h2 class="m-3 mt-5">My Experience</h2>

          <div class="d-flex flex-column position-relative justify-content-center text-center m-5">
            <div class="d-flex flex-row  m-2 mt-4 align-content-center justify-content-center mw-100">
              <div class="d-flex flex-column rounded-4 m-2 w-75 shadow border-1">
                <img
                  class="rounded-top w-100"
                  src="./assets/exp/game1.jpg "
                  style={{ width: 500 }}
                />
                <div class="text-start m-4">
                  <h4 class="">Game : CARIN</h4>
                  <p class="mt-3">Game Web made by using React.js , Java</p>
                  <a
                    href="https://github.com/work2544/OOP-CARIN"
                    target="_blank"
                    type="button"
                    class="btn btn-success w-100 justify-content-center"
                  >
                    Visit
                  </a>
                </div>
              </div>

              <div class="d-flex flex-column rounded-4 m-2 w-50  shadow border-1">
                <img
                  class="rounded-top w-100"
                  src="./assets/exp/game2.png "
                  style={{ width: 500 }}
                />
                <div class="text-start m-4">
                  <h4 class="">GAME : Word Cast</h4>
                  <p class="mt-3">
                    Fill blank boxs with words to attack to enemy each mission.
                    Using Scrath.
                  </p>
                  <a
                    href="https://scratch.mit.edu/projects/563429297/"
                    target="_blank"
                    type="button"
                    class="btn btn-success w-100 justify-content-center"
                  >
                    Visit
                  </a>
                </div>
              </div>
              <div class="d-flex flex-column rounded-4 m-2 w-50  shadow border-1">
                <img
                  class="rounded-top w-100"
                  src="./assets/exp/link.jpg "
                  style={{ width: 500 }}
                />
                <div class="text-start m-4">
                  <h4 class="">Link Company </h4>
                  <p class="mt-3">Attend training by Link company.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
