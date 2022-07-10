import './HistoryComp.css'

const HistoryComp = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="lists">
      <div className="itemcontainer">
        <div className="timeAccessed">{timeAccessed}</div>
        <div className="logoUrl">
          <img src={logoUrl} alt="item" />
        </div>
        <div className="title">{title}</div>
        <div className="domainUrl">{domainUrl}</div>
        <button type="button" className="delete-container" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete-icon"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryComp
