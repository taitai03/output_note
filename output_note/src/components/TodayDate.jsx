function TodayDate(){
  const today = new Date()
  const formatted=today.toLocaleDateString("ja-JP",{
    year: 'numeric',
    month: 'long',
    day:'numeric',
    weekday:'long'
  })

  return (
    <div style={{ margin: "1rem 1.5rem", fontSize: "1.2rem", color: "#4B5563" }}>
      {formatted}の学び
    </div>
  )
}

export default TodayDate