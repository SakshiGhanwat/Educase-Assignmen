function MobileContainer({ children }) {
  return (
    <div className='main-container'>
      <div className='mobile-box'>
        {children}
      </div>
    </div>
  )
}

export default MobileContainer