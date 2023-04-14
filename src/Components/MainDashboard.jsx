import "./Dashboard.css";
import { GrConfigure, GrPower } from "react-icons/gr";
import {
  BiCheckCircle,
  BiCloudDownload,
  BiRefresh,
  BiTransferAlt,
} from "react-icons/bi";

const MainDashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="row">
          <div className="col">
            <BiCloudDownload className="dashboard-icon" />
            <div className="text">
              <label for="totalInstall">3154</label>
              <div className="text-info">App installed</div>
            </div>
          </div>
          <div className="col">
            <GrPower className="dashboard-icon" />
            <div className="text">
              <label for="activeinstall">900</label>
              <div className="text-info">Active Installs</div>
            </div>
          </div>
          <div className="col">
            <BiTransferAlt className="dashboard-icon" />
            <div className="text">
              <label for="churn">14.85%</label>
              <div className="text-info">Churn Rate</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GrConfigure className="dashboard-icon" />
            <div className="text">
              <label for="totaluninstall">2010</label>
              <div className="text-info">App UnInstalled</div>
            </div>
          </div>
          <div className="col">
            <BiCheckCircle className="dashboard-icon" />
            <div className="text">
              <label for="aliveappusers">840</label>
              <div className="text-info">Alive installed</div>
            </div>
          </div>
          <div className="col">
            <BiRefresh className="dashboard-icon" />
            <div className="text">
              <label for="alivechurn">14.85%</label>
              <div className="text-info">Alive Churn Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
