
function Start({onStart}) {
  return (
    <div className="Start">
      <h1>guess quick</h1>
      <button className="start-btn" onClick={onStart}>
        start
      </button>
    </div>
  )
}

export default Start