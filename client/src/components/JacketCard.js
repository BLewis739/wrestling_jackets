const JacketCard = ({ athletes, athleteId }) => {
  const athleteObject = { athletes }.athletes.filter((athlete) => {
    return athlete._id === { athleteId }.athleteId
  })

  const name = athleteObject[0].name

  return (
    <div className="jacket-card">
      <p>{name}</p>
    </div>
  )
}
export default JacketCard
