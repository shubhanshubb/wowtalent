import "./Dashboard.css";
import styles from "./DateRange.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const ApiDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(2022, 8, 13),
      endDate: new Date(2022, 8, 25),
      key: "selection",
    },
  ]);
  const [anchor, setAnchor] = useState({
    top: null,
    left: null,
  });

  useEffect(() => {
    axios
      .get(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10"
      )
      .then((res) => {
        console.log(res);
        setPosts(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <div className="api-dashboard">
        <div className="leftCol">
          <div className="leftColView">Show</div>
          <select className="dashboardInput" id="dashboardInput" value={50}>
            <option className="options" value="10">
              10
            </option>
            <option className="options" value="50">
              50
            </option>
            <option className="options" value="100">
              100
            </option>
            <option className="options" value="500">
              500
            </option>
            <option className="options" value="1000">
              1000
            </option>
          </select>
          <div className="leftColView">Entries</div>

          <div className={styles.calendar}>
            <div
              id="select-duration"
              className={styles.calenderDuration}
              onClick={() => {
                let element = document.getElementById("select-duration");
                setAnchor({
                  top: element.offsetTop + element.offsetHeight,
                  left: element.offsetLeft,
                  right: element.offsetRight,
                });
                setOpenDate(!openDate);
              }}
            >
              Select Duration{" "}
              <FontAwesomeIcon
                icon={faCalendarDays}
                className={styles.calenderIcon}
              />
            </div>
            {openDate && (
              <div
                className={styles.DateRange}
                style={{
                  position: "absolute",
                  ...anchor,
                }}
              >
                <DateRange
                  showPreview={false}
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className={styles.date}
                  wrapperClassName={styles.rdrDateRangeWrapper}
                />
              </div>
            )}
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th className="th" width="150">
                Date
              </th>
              <th className="th">Day Installs</th>
              <th className="th">platform</th>
              <th className="th">Day Uninstalls</th>
              <th className="th">Platform</th>
              <th className="th">Churn Rate</th>
              <th className="th">Churn Platform</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((r, i) => (
              <tr key={i} className="tr">
                <td className="td">
                  {new Date(r.created_At)
                    .toDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    .replace(/,.+/, "")}
                </td>
                <td className="td">{r.totalinstall}</td>
                <td className="td">
                  <AiFillAndroid />
                  &nbsp;{r.android_install}
                  <br />
                  <AiFillApple />
                  &nbsp;{r.ios_install}
                </td>
                <td className="td">{r.totaluninstall}</td>
                <td className="td">
                  <AiFillAndroid />
                  &nbsp;{r.android_uninstall}
                  <br />
                  <AiFillApple />
                  &nbsp;{r.ios_uninstall}
                </td>
                <td className="td">{r.totalchurn}</td>
                <td className="td">
                  <AiFillAndroid />
                  &nbsp;{r.android_churn}
                  <br />
                  <AiFillApple />
                  &nbsp;{r.ios_churn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiDashboard;
