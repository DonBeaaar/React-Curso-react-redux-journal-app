import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, title, body, date, url }) => {
  const momentDate = moment(date);

  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(activeNote(id, { title, body, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)",
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{momentDate.format("dddd")}</span>
        <h4>{momentDate.format("Do")}</h4>
      </div>
    </div>
  );
};
