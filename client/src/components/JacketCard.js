const JacketCard = ({ athletes, athleteId, jacket }) => {
  const athleteObject = { athletes }.athletes.filter((athlete) => {
    return athlete._id === { athleteId }.athleteId
  })

  const abbrevName = athleteObject[0].abbrevName
  const emptyStars = jacket.emptyStars
  const fullStars = jacket.fullStars
  const starBanner = []

  const getStarBannerArray = (emptyStars, fullStars) => {
    for (let i = 0; i < emptyStars; i++) {
      starBanner.push('https://imgur.com/AxSbxh3')
    }
    for (let i = 0; i < fullStars; i++) {
      starBanner.push('https://imgur.com/OSNaUNN')
    }
  }

  getStarBannerArray(emptyStars, fullStars)

  return (
    <div className="jacket-card">
      <img src="https://i.imgur.com/R5gPDhR.png"></img>
      <div className="name">{abbrevName}</div>
      <div className="role">{jacket.role}</div>
      <div className="award1">{jacket.award1}</div>
      <div className="award2">{jacket.award2}</div>
      <div className="award3">{jacket.award3}</div>
      <div className="award4">{jacket.award4}</div>
      <div className="award5">{jacket.award5}</div>
      <div className="starBanner">
        <img src="https://imgur.com/AxSbxh3.png"></img>
        <img src="https://imgur.com/OSNaUNN.png"></img>
      </div>
    </div>
  )
}
export default JacketCard
