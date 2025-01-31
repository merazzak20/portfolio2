import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import image from "../assets/login.jpg";
import Container from "../components/Shared/Container";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.confiq";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setLoading } = useContext(AuthContext);

  //   sign user
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setUser(res.user);
          setLoading(false);
          toast.success("Successfully Logged In");
          //   navigate("/");
          console.log(res);
        })
        .catch((error) => {
          toast.error(err.message);
          console.log(error);
        });
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <div className="bg-zinc-950 max-h-full">
      <Helmet>
        <title>FitVerse | Login</title>
      </Helmet>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center pt-14">
          {/* Left side with image */}
          <div
            className="relative bg-cover bg-center w-full md:w-1/2 h-[600px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${image})`,
            }}
          >
            {/* Black overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-6xl font-bold">
                {" "}
                {/* <span className="text-orange-500">Login</span> Here! */}
              </h2>
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-1/2 h-[600px] bg-zinc-800 p-10 flex flex-col items-center justify-center">
            <div className="w-full">
              <form onSubmit={handleSignIn} className="space-y-6">
                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-zinc-200">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input w-full rounded-none bg-zinc-700"
                    required
                  />
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-zinc-200">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className="input bg-zinc-700 rounded-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-[#b9ff00] w-full rounded-none py-3 text-zinc-800 font-semibold"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Login;
