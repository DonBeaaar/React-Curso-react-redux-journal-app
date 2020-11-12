import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploadPicture } from "../../actions/notes";

export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handleClickPicture = () => {
    document.querySelector("#picture").click();
  };

  const handleUploadPicture = (e) => {
    dispatch( startUploadPicture(e.target.files[0]))
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>

      <input
        type="file"
        name="picture"
        id="picture"
        onChange={handleUploadPicture}
        style={{ display: "none" }}
      />

      <div>
        <button onClick={handleClickPicture} className="btn">
          Picture
        </button>

        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};
