import { motion } from 'framer-motion';
import { FaUser, FaBell, FaLock } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="container py-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="row justify-content-center"
      >
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="mb-4">Account Settings</h3>
              
              <div className="mb-4">
                <h5 className="d-flex align-items-center">
                  <FaUser className="me-2 text-primary" />
                  Profile Information
                </h5>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Your name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="Your email" />
                    </div>
                    <button className="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center">
                  <FaBell className="me-2 text-primary" />
                  Notification Preferences
                </h5>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" id="emailNotifications" />
                      <label className="form-check-label" htmlFor="emailNotifications">
                        Email Notifications
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" id="promotionalEmails" />
                      <label className="form-check-label" htmlFor="promotionalEmails">
                        Promotional Emails
                      </label>
                    </div>
                    <button className="btn btn-primary">Save Preferences</button>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="d-flex align-items-center">
                  <FaLock className="me-2 text-primary" />
                  Security
                </h5>
                <div className="card mt-3">
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="currentPassword" className="form-label">Current Password</label>
                      <input type="password" className="form-control" id="currentPassword" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newPassword" className="form-label">New Password</label>
                      <input type="password" className="form-control" id="newPassword" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                      <input type="password" className="form-control" id="confirmPassword" />
                    </div>
                    <button className="btn btn-primary">Change Password</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings; 