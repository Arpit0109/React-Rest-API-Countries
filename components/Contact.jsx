import { useParams } from "react-router-dom"

function Contact() {
  const prams = useParams();
  console.log(prams);
  
  return (

    <div><h1>Contact</h1></div>
  )
}

export default Contact