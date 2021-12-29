

const Project = ({title, img, code,deployedLink}) => {
  return (
    <div>
      Hello
      {title}
      {code}
      <img src={img} style={{width: "500px", height:"450px"}} />
      
    </div>
  )
}

export default Project
