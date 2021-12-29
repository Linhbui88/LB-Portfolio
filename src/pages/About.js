import profilePic2 from '../photo/profilePic2.jpg'

const About = () => {
  return (
    <section>
      <img src={profilePic2} alt={profilePic2} style={{width:"140px", height:"160px"}} />
      <div>
        <h4>Linh Bui</h4>
        <ul>
          <li>front-end developer</li>
          <li>tech ethusiast</li>
          <li>based in Michigan</li>
          <li>raised by '90</li>
          <li>fueled by coffee and driven by passion.</li>
          <li>dogs and plants mama</li>
        </ul>
      </div>
    </section>
  )
}

export default About
