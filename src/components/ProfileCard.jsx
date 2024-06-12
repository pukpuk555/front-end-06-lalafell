import React from "react";

function ProfileCard() {
  return (
    <div className="w-[700px]">
      <h2 className="text-4xl font-bold">Your Account</h2>
      <div className="w-[700px] h-[530px] flex">
        <div className="w-2/5 flex flex-col items-center">
          <img
            src="#"
            alt="profile"
            className="mt-10 w-[150px] h-[150px] rounded-xl"
          />
          <button class="Frame w-32 h-12 px-6 py-3.5 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex mt-5">
            <div class="Change text-white text-base font-medium font-['Inter'] leading-normal">
              Change
            </div>
          </button>
        </div>
        <div className="w-3/5">
          <h3 className="text-2xl font-semibold my-3">Edit Your Profile</h3>
          <form className="my-3">
            <div>
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                id="firstname"
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                name="lasttName"
                id="lastname"
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              {/* <input
                type="text"
                name="email"
                id="email"
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
              /> */}
              <div className="flex justify-between">
                <p className="mt-1 mb-2 mx-3">example@example.com</p>
                <button>edit</button>
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              {/* <input
                type="text"
                name="password"
                id="password"
                className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
              /> */}
              <div className="flex justify-between">
                <button className="mt-1 mb-2 mx-3">Change Password</button>
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
    </div>
  );
}

export default ProfileCard;
