import { useState } from "react";

function Profile() {
  const [profileImage, setProfileImage] = useState("https://placehold.co/80x80");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Mehedi Hasan");
  const [email, setEmail] = useState("helloyouthmind@gmail.com");
  const [phone, setPhone] = useState("+8801995867406");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you could also add a function to save the changes to a database or API
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ margin: 0, padding: 0 }}>
      <div className="w-100 rounded-3 shadow-lg" style={{ maxWidth: "300px" }}>
        <div className="p-4 border-bottom position-relative">
          <div className="d-flex justify-content-between align-items-center">
            <i className="fas fa-chevron-left text-secondary"></i>
            <h1 className="h5 fw-semibold">My Profile</h1>
            <i
              className="fas fa-edit text-secondary"
              style={{ cursor: "pointer" }}
              onClick={handleEditClick}
            ></i>
          </div>
        </div>
        <div className="p-4">
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <img
                className="rounded-circle"
                style={{ width: "80px", height: "80px", cursor: "pointer" }}
                src={profileImage}
                alt="Profile"
                title="Click to change profile picture"
                onClick={() => document.getElementById("profileImageInput").click()}
              />
              <input
                type="file"
                id="profileImageInput"
                className="d-none" // Hide the file input
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="text-center mt-3">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  className="form-control mb-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div>
                <h2 className="h5 fw-semibold">{name}</h2>
                <p className="text-muted">{email}</p>
                <p className="text-muted">{phone}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
