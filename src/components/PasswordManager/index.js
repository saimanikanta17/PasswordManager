import './index.css'

import AddNewPassword from '../AddNewPassword'

const PasswordManager = () => (
  <div className="bg-container">
    <img
      className="logo"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
    />
    <AddNewPassword />
  </div>
)
export default PasswordManager
