import React from "react";
import { FaRegStar } from "react-icons/fa";
import { LuClipboardType } from "react-icons/lu";
import { MdInsertEmoticon } from "react-icons/md";
const ProfileDashBoard: React.FC = () => {
  return (
    <div className="profile-dashboard">
      <div className="profile-dashboard-readme">
        <h2>Readme</h2>
        <p>
          Hi there! 👋 Welcome to my profile. I'm a passionate developer with
          expertise in JavaScript, React, and more.
        </p>
        <p>
          🌱 Currently working on improving my skills in web development and
          open-source contributions.
        </p>
        <p>
          🚀 Let's collaborate on exciting projects! Feel free to explore my
          repositories below.
        </p>
      </div>

      {/* Repositories Section */}
      <div className="profile-dashboard-repos">
        <h2>Repositories</h2>
        <div className="repos-grid">
          <div className="repo-item">
            <div className="repo-item-header">
              <h3>Repository Name</h3>
              <div className="repo-item-permission">public</div>
            </div>
            <p className="repo-item-description">
              RepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepository
            </p>
            <div className="repo-item-footer">
              <div>
                <LuClipboardType /> FileType
              </div>
              <div>
                <FaRegStar /> 40
              </div>
              <div>
                <MdInsertEmoticon /> 30
              </div>
            </div>
          </div>
          <div className="repo-item">
            <div className="repo-item-header">
              <h3>Repository Name</h3>
              <div className="repo-item-permission">public</div>
            </div>
            <p className="repo-item-description">
              RepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepository
            </p>
            <div className="repo-item-footer">
              <div>
                <LuClipboardType /> FileType
              </div>
              <div>
                <FaRegStar /> 40
              </div>
              <div>
                <MdInsertEmoticon /> 30
              </div>
            </div>
          </div>
          <div className="repo-item">
            <div className="repo-item-header">
              <h3>Repository Name</h3>
              <div className="repo-item-permission">public</div>
            </div>
            <p className="repo-item-description">
              RepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepositoryRepository
            </p>
            <div className="repo-item-footer">
              <div>
                <LuClipboardType /> FileType
              </div>
              <div>
                <FaRegStar /> 40
              </div>
              <div>
                <MdInsertEmoticon /> 30
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="profile-dashboard-history">
        <h2>Activity History</h2>
        <ul>
          <li>
            💬 Opened an issue in <a href="#">Repo1</a> - "Fix login bug"
          </li>
          <li>
            🛠️ Pushed commits to <a href="#">Repo2</a> - "Improve UI design"
          </li>
          <li>
            🌟 Starred <a href="#">Repo3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDashBoard;
