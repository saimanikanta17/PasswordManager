import './index.css'

const PasswordCard = props => {
  const {detail, show, clickDelete} = props
  const {id, website, username, password} = detail
  const deleteButton = () => {
    clickDelete(id)
  }

  return (
    <li className="password">
      <div className="profile-pic">
        <p>y</p>
      </div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {show ? (
          <p>{password}</p>
        ) : (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button
        className="delete"
        type="button"
        onClick={deleteButton}
        testid="delete"
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordCard
