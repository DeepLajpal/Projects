import './intro.scss';


export default function Intro() {

  
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src='assets/DeepLajpal.Webp' alt='profile photo'></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Deep Lajpal</h1>
          <h3><span>Full-Stack Developer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.webp" alt='down arrow image for portfolio
          '></img>
        </a>
      </div>
    </div>
  )
}
