import React from "react";

function ChangePasswodForm({ passwordForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //logic under here

    passwordForm();
  };

  return (
    <div
      id="changPassword"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <div className="flex justify-between p-3 bg-black rounded-t-lg">
          <h3 className="font-bold text-xl text-white">Change Password</h3>
          <button
            onClick={passwordForm}
            className="font-bold text-xl text-white"
          >
            Close
          </button>
        </div>
        <form className="p-3">
          <div>
            <label htmlFor="prevPass" className="font-medium text-lg">
              Current Password
            </label>
            <br />
            <input
              id="prevPass"
              name="prevPass"
              className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
            />
          </div>
          <div>
            <label htmlFor="newPass" className="font-medium text-lg">
              New Password
            </label>
            <br />
            <input
              id="newPass"
              name="newPass"
              className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
            />
          </div>
          <div>
            <label htmlFor="confirmPass" className="font-medium text-lg">
              Confirm Password
            </label>
            <br />
            <input
              id="confirmPass"
              name="confirmPass"
              className="mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px]"
            />
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
  );
}

export default ChangePasswodForm;
