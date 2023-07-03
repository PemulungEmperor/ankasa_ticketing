import React, { useEffect, useState } from "react";
import "../style/Profile.css";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ankasa_api from "../backend";

//redux
import { useDispatch, useSelector } from "react-redux";
import { changePhotoPath } from "../redux/reducer/userSlicer";

const Profile = () => {
  //new img
  const [newAvatar, setnewAvatar] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  //user data from redux
  const data = useSelector((state) => state.user.userCredentials);
  const photo = data.photo_path;
  console.log(data);

  // logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    Swal.fire("Log out", "berhasil", "success");
    navigate("/login");
  };

  //photo preview
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    if (e.target.files.length !== 0) {
      if (uploaded.size > 2097152) {
        alert("Maximum size is 2mb!");
      } else {
        setPreviewImage(URL.createObjectURL(uploaded));
        setnewAvatar(uploaded);
      }
    }
  };

  //Save new photo profile
  const saveChanges = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("photoPath", newAvatar);

    fetch(`${ankasa_api}/update/profile-img/` + id, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(changePhotoPath(data.photoPath));
        Swal.fire({
          title: "Updated!",
          text: "Success updated image, relogin if doesnt change!",
          icon: "success",
        }).then(() => {
          navigate("/");
          window.location.reload();
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="col-md-3 p-5 bg-white rounded-3 m-3">
      <div className="first-section text-center">
        <div className="profile-image d-flex justify-content-center">
          <img src={photo} className="img-fluid mb-2" style={{ maxWidth: "100px", borderRadius: "100px" }} alt="" />
        </div>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn col-md-12 border-primary text-primary fw-bold">
          Select Photo
        </button>
        <div className="profile-information mt-3">
          <h4>{data.username}</h4>
          <i className="fa-solid fa-location-dot" style={{ color: "#2395FF" }} />
          <span className="text-muted ms-2">{data.city}</span>
        </div>
      </div>
      <div className="second-section mt-3">
        <div className="row">
          <div className="col mb-2">
            <b>Cards</b>
          </div>
          <div className="col text-primary text-end">
            <a
              href="/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "smaller",
              }}
            >
              + Add
            </a>
          </div>
        </div>
        <div
          className="row p-3 mb-3 rounded text-white"
          style={{
            backgroundColor: "#2395FF",
            boxShadow: "-0.1em 0.5em 1em #2395FF",
          }}
        >
          <small className="fw-bold">4441 1235 5512 5551</small>
          <small className="col">x card</small>
          <small className="col">$1,123,434</small>
        </div>
      </div>
      <div className="third-section mt-3 cursor-pointer">
        <ul className="list-unstyled">
          <li className="profilelink">
            <i className="fa-solid fa-user mt-3" />
            <b className="ms-5">Profile</b>
          </li>
          <li className="profilelink cursor-pointer">
            <i className="fa-solid fa-star mt-4" />
            <b className="ms-5">My Review</b>
          </li>
          <li className="profilelink cursor-pointer">
            <i className="fa-solid fa-gear mt-4" />
            <b className="ms-5">Settings</b>
          </li>
          <li className="profilelinkred cursor-pointer">
            <i className="fa-solid fa-right-from-bracket mt-4" />
            <b onClick={handleLogout} className="ms-5">
              Logout
            </b>
          </li>
        </ul>
      </div>

      {/* Modal edit profile */}
      <form onSubmit={saveChanges}>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Profile Image
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div>
                  <label className="mb-2">Upload New Photo Profile : </label>
                  <div className="input-group mb-3">
                    <input type="file" name="photo" className="form-control" onChange={handleUploadChange} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-fluid"
                      src={previewImage ? previewImage : photo ? photo : "/img/pp.png"}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary bg-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary bg-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* <div className="row">
            <button onClick={flightss}>get data</button>
            {flightData.map((data)=> (
              <h1 className="text-dark">Data : {data.departure} </h1>
            ))}
           
          </div> */}
    </div>
  );
};

export default Profile;
