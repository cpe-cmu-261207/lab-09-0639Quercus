import React from "react";
import Hyperlink from "../components/hyperlink";
import Navbar from "../components/Navbar";

export default function contacts() {
  const contentBar = {
    backgroundColor: "#f8f8ff",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };

  return (
    <div>
      <Navbar key="contacts" link="contacts" />

      <div class="mx-5 py-4" style={contentBar}>
        <div
          style={{ alignContent: "center" }}
          class="m-4 vstack d-flex justify-content-center"
        >
          <div class="m-3">
            <h1 style={{ textAlign: "center" }}>CONTACTS</h1>
            <hr />
          </div>

          <div class="m-4 d-flex justify-content-center overflow-hidden px-2">
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14GgdOw4wUZKZhVlBGUKogk_Y7Z5YV0Q6CMMc1Yms=s360-p-rw-no"
              width="150px"
              height="150px"
              style={{ objectFit: "cover" }}
              class="rounded-circle my-auto"
            />
            <table class="mx-4">
              <tr>
                <tr>
                  <th>Fullname</th>
                  <td>Thanapat Somsit</td>
                </tr>
                <tr>
                  <th>Nickname</th>
                  <td>Oak</td>
                </tr>
                <tr>
                  <th>Facebook</th>
                  <td>
                    <Hyperlink
                      key="https://www.facebook.com/thpsomsits"
                      content="https://www.facebook.com/thpsomsits"
                      link="https://www.facebook.com/thpsomsits"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <Hyperlink
                      key="https://mail.google.com/mail/?view=cm&fs=1&to=thanapat_somsit@cmu.ac.th"
                      content="thanapat_somsit@cmu.ac.th"
                      link="https://mail.google.com/mail/?view=cm&fs=1&to=thanapat_somsit@cmu.ac.th"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>+66 95 675 9130</td>
                </tr>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
