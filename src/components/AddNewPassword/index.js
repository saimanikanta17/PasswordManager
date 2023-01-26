import {Component} from 'react'

import {v4} from 'uuid'

import PasswordCard from '../PasswordCard'

import NoPasswords from '../NoPasswords'

import './index.css'

class AddNewPassword extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    details: [],
    show: false,
    searchInput: '',
  }

  clickShow = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  clickDelete = id => {
    const {details} = this.state
    const filteredList = details.filter(each => each.id !== id)
    this.setState({details: filteredList})
  }

  addPasswordDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newDetails = {
      id: v4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      details: [...prevState.details, newDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {website, username, password, details, show, searchInput} = this.state
    const searchResults = details.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = searchResults.length
    let noPassword
    if (count === 0) {
      noPassword = <NoPasswords />
    }
    return (
      <div>
        <div className="add-new-password">
          <div className="form-card">
            <h1 className="heading">Add New Password</h1>
            <form className="add-form" onSubmit={this.addPasswordDetails}>
              <label className="input-card">
                <div className="input">
                  <img
                    className="input-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.changeWebsite}
                  className="input-row"
                  value={website}
                />
              </label>
              <label className="input-card">
                <div>
                  <img
                    className="input-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.changeUsername}
                  className="input-row"
                  value={username}
                />
              </label>
              <label className="input-card">
                <div>
                  <img
                    className="input-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.changePassword}
                  className="input-row"
                  value={password}
                />
              </label>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <img
            className="password-manager-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="bg-container">
          <div className="top-card">
            <div className="count-container">
              <h2>Your Passwords</h2>
              <div className="count-card">
                <p>{count}</p>
              </div>
            </div>
            <label className="search-card">
              <div className="search-icon-card">
                <img
                  className="search-icon"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
              </div>
              <input
                type="search"
                className="input-box"
                placeholder="Search"
                onChange={this.changeInput}
                value={searchInput}
              />
            </label>
          </div>
          <hr className="line" />
          <div className="show">
            <label>
              <input type="checkbox" checked={show} onChange={this.clickShow} />
              Show passwords
            </label>
          </div>
          <ul>
            {searchResults.map(detail => (
              <PasswordCard
                key={detail.id}
                detail={detail}
                show={show}
                clickDelete={this.clickDelete}
              />
            ))}
          </ul>
          {noPassword}
        </div>
      </div>
    )
  }
}

export default AddNewPassword
