import Quote from "../components/Quote"
import Auth from "../components/Auth"




const SignIn = () => {
  return (
    <div>
        <div className="grid grid-cols-2" >
            <Auth type="SignIn" />
            <Quote />
        </div>
    </div>
  )
}

export default SignIn