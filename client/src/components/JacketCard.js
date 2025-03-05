const JacketCard = ({ jacket, status }) => {
  const abbrevName = jacket.athlete.abbrevName
  const emptyStars = jacket.emptyStars
  const fullStars = jacket.fullStars
  const starBanner = []

  const getStarBannerArray = (emptyStars, fullStars) => {
    for (let i = 0; i < emptyStars; i++) {
      starBanner.push(
        <img
          src="https://i.imgur.com/5ZJbBzV.png"
          alt="empty-star"
          key={Math.random(0, 100) * 100}
        ></img>
      )
    }
    for (let i = 0; i < fullStars; i++) {
      starBanner.push(
        <img
          src="https://i.imgur.com/ZeXuOdn.png"
          alt="full-star"
          key={Math.random(0, 100) * 100}
        ></img>
      )
    }
  }

  getStarBannerArray(emptyStars, fullStars)

  let fade = 'noFade'
  let starBannerClass = 'starBanner'

  const statusFade = () => {
    if (status === 'Before Update') {
      fade = 'fade'
      starBannerClass = 'starBannerFade'
    }
  }

  statusFade()

  return (
    <div className="jacket-card">
      <img className={fade} src="https://i.imgur.com/GU0AdIM.png"></img>
      <div className="status">{status}</div>
      <div className="name">{abbrevName}</div>
      <div className="role">{jacket.role}</div>
      <div className="award1">{jacket.award1}</div>
      <div className="award2">{jacket.award2}</div>
      <div className="award3">{jacket.award3}</div>
      <div className="award4">{jacket.award4}</div>
      <div className="award5">{jacket.award5}</div>
      <div className="award6">{jacket.award6}</div>
      <div className="award7">{jacket.award7}</div>
      <div className="award8">{jacket.award8}</div>
      <div className="award9">{jacket.award9}</div>
      <div className="award10">{jacket.award10}</div>
      <div className={starBannerClass}>{starBanner}</div>
    </div>
  )
}
export default JacketCard
