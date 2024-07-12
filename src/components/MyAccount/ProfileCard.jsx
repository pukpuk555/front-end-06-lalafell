import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import ChangePasswordForm from "./ChangePasswordForm";

function ProfileCard() {
  const [emailToggle, setEmailToggle] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [profile, setProfile] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageSelected, setImageSelected] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  const emailOn = (e) => {
    e.preventDefault();
    setEmailToggle(!emailToggle);
  };

  const passwordForm = (e) => {
    e.preventDefault();
    setChangePassword(!changePassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ส่งข้อมูลที่แก้ไขแล้วไปที่ backend
    try {
      const response = await axiosInstance.patch("/profile", {
        firstName,
        lastName,
        email,
      });
      if (response.data && !response.data.error) {
        // อัปเดต state ในกรณีที่ไม่มี error
        setProfile(response.data.myUser);
        setEmailToggle(false);
      } else {
        console.error(
          "เกิดข้อผิดพลาดในการอัปเดตโปรไฟล์:",
          response.data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserImage = async (e) => {
    e.preventDefault();
    setUploadSuccess(false); // รีเซ็ตสถานะก่อนการอัปโหลดใหม่

    if (e.target.files && e.target.files[0]) {
      try {
        const formData = new FormData();
        formData.append("img", e.target.files[0]);

        const response = await axiosInstance.put("/profile/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.data && !response.data.error) {
          setProfile(response.data.myUser);
          setImageSelected(false); // ซ่อนปุ่ม Submit หลังจากอัปเดตสำเร็จ
          setUploadSuccess(true); // ตั้งสถานะการอัปโหลดสำเร็จ
        } else {
          console.error(
            "เกิดข้อผิดพลาดในการอัปเดตโปรไฟล์:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการส่งคำขอ:", error);
      }
    } else {
      console.error("ไม่ได้เลือกไฟล์ภาพ");
    }
  };

  //API
  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/profile");
      if (response.data) {
        setProfile(response.data.myUser);
        setFirstName(response.data.myUser.name);
        setLastName(response.data.myUser.lastName);
        setEmail(response.data.myUser.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-auto mb-[50px]">
      <h2 className="text-4xl font-bold pb-3">Your Account</h2>
      <div className="lg:w-[700px] w-[500px] md:h-[450px] md:flex border-[1px] border-black rounded-xl">
        <div className="md:w-2/5 flex flex-col items-center">
          <img
            src={
              profile.img
                ? profile.img.url || "/defaultAccount.png"
                : "/defaultAccount.png"
            }
            alt="profile"
            className="mt-10 w-[150px] h-[150px] rounded-xl"
          />
          <label className="custom-file-input w-32 h-12 px-8 py-3.5 bg-black rounded-lg shadow text-white text-base font-medium font-['Inter'] leading-normal mt-5 cursor-pointer">
            Change
            <input
              type="file"
              accept="image/*"
              onChange={handleUserImage}
              className="hidden"
            />
          </label>
          {imageSelected && (
            <button
              onClick={handleUserImage}
              className="Frame w-32 h-12 px-6 py-3.5 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex mt-5"
            >
              <div className="Change text-white text-base font-medium font-['Inter'] leading-normal">
                Submit
              </div>
            </button>
          )}
          {uploadSuccess && (
            <div className="text-green-500 mt-3">Upload Successful!</div>
          )}
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
                placeholder={profile.firstName || "First Name"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                placeholder={profile.lastName || "Last Name"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                  placeholder={profile.email || "example@example.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 mb-2 rounded-md border-[1px] border-black w-[330px] h-[30px] ${
                    emailToggle ? "flex" : "hidden"
                  }`}
                />
                <p
                  className={`mt-1 mb-2 mx-3 ${
                    emailToggle ? "hidden" : "flex"
                  }`}
                >
                  {profile.email}
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
              className="Frame w-32 h-12 px-6 py-3.5 bg-black rounded-lg shadow justify-center items-center gap-2 inline-flex mt-5"
            >
              <div className="Change text-white text-base font-medium font-['Inter'] leading-normal">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
      {changePassword && <ChangePasswordForm passwordForm={passwordForm} />}
    </div>
  );
}

export default ProfileCard;
