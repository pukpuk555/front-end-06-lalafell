import React, { useState } from "react";
import ChangePasswodForm from "./ChangePasswodForm";

function ProfileCard() {
  const [emailToggle, setEmailToggle] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const emailOn = (e) => {
    e.preventDefault();
    setEmailToggle(!emailToggle);
  };
  const passwordForm = (e) => {
    e.preventDefault();
    setChangePassword(!changePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //logic here
  };

  return (
    <div className="w-auto mb-[50px]">
      <h2 className="text-4xl font-bold pb-3">Your Account</h2>
      <div className="lg:w-[700px] w-[500px] md:h-[450px] md:flex border-[1px] border-black rounded-xl">
        <div className="md:w-2/5 flex flex-col items-center">
          <img
            src="/defaultAccount.png"
            alt="profile"
            className="mt-10 w-[150px] h-[150px] rounded-xl"
          />
          <button class="Frame w-32 h-12 px-6 py-3.5 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex mt-5">
            <div class="Change text-white text-base font-medium font-['Inter'] leading-normal">
              Change
            </div>
          </button>
        </div>
        <div className="md:w-3/5 md:px-auto px-3">
          <h3 className="text-2xl font-semibold my-3">Edit Your Profile</h3>
          <form onSubmit={handleSubmit} className="my-3">
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstname"
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-full lg:w-[330px] h-[30px]"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                name="lasttName"
                id="lastname"
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-full lg:w-[330px] h-[30px]"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <div className="flex justify-between">
                <input
                  type="text"
                  name="email"
                  id="email"
                  // placeholder change to usestate
                  placeholder="example@example.com"
                  className={`mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px] ${
                    emailToggle ? "flex" : "hidden"
                  }`}
                />

                <p
                  className={`mt-1 mb-2 mx-3 ${
                    emailToggle ? "hidden" : "flex"
                  }`}
                >
                  example@example.com
                </p>
                <button onClick={emailOn} className="mr-3">
                  {emailToggle ? "Submit" : "Edit"}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <div className="flex justify-between">
                <button onClick={passwordForm} className="mt-1 mb-2 mx-3">
                  Change Password
                </button>
              </div>
            </div>
            <button
              type="submit"
              class="Frame w-32 h-12 px-6 py-3.5 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex mt-5"
            >
              <div class="Change text-white text-base font-medium font-['Inter'] leading-normal">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
      {changePassword && <ChangePasswodForm passwordForm={passwordForm} />}
    </div>
  );
}

export default ProfileCard;
