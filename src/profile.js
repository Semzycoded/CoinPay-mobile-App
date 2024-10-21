import { useState } from "react";


function Profile() {
  const [profileImage, setProfileImage] = useState("https://placehold.co/80x80");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white w-50 rounded-3 shadow-lg">
        <div className="p-4 border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <i className="fas fa-chevron-left text-secondary"></i>
            <h1 className="h5 fw-semibold">My Profile</h1>
            <div></div>
          </div>
        </div>
        <div className="p-4">
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img
                className="rounded-circle"
                style={{ width: "80px", height: "80px" }}
                src={profileImage}
                alt="Profile"
              />
              <label htmlFor="profileImageInput">
                <i className="fas fa-edit position-absolute bottom-0 end-0 bg-white rounded-circle p-1 text-secondary" style={{ cursor: "pointer" }}></i>
              </label>
              <input
                type="file"
                id="profileImageInput"
                className="d-none"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <h2 className="h5 fw-semibold">Mehedi Hasan</h2>
            <p className="text-muted">helloyouthmind@gmail.com</p>
            <p className="text-muted">+8801995867406</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;