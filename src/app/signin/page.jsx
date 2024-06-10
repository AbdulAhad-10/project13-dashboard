import {
  ArrowLeftOutlined,
  GoogleOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

const SigninPage = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 px-20 py-10">
        <Link href="/">
          <Button
            type="link"
            icon={<ArrowLeftOutlined />}
            className="text-[#A0AEC0] text-[16px]"
          >
            Back to Simmmply
          </Button>
        </Link>
        <div className="mt-8">
          <h2 className="text-4xl font-bold text-[#1A202C] mb-2">Sign In</h2>
          <p className="mb-4 text-[#A0AEC0] text-[16px]">
            Enter your email and password to sign in!
          </p>
          <Button
            type="default"
            className="w-full mb-4 bg-[#E2E8F0] text-[#1A202C] flex items-center justify-center py-5 rounded-2xl"
          >
            <GoogleOutlined className="mr-2" />
            Sign in with Google
          </Button>
          <div className="flex items-center mb-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-4 text-[#A0AEC0]">or</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-[#1A202C] font-semibold">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="mail@simmmply.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#1A202C] font-semibold">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg"
                placeholder="Min. 8 characters"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-[#1A202C] font-semibold">
                <input type="checkbox" className="mr-2" />
                Keep me logged in
              </label>
              <a href="#" className="text-[#3311DB]">
                Forgot password?
              </a>
            </div>
            <Button
              type="primary"
              className="w-full bg-[#3311DB] text-white py-5 rounded-2xl"
            >
              Sign In
            </Button>
          </form>
          <p className="mt-4 text-center text-[#1A202C]">
            Not registered yet?{" "}
            <Link href="#" className="text-[#3311DB]">
              Create an Account
            </Link>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-1/2 text-white bg-gradient-to-br from-[#0E21DD] to-[#786AFF] rounded-bl-[250px]">
        <div className="text-center">
          <AntDesignOutlined className="mb-4 text-white text-9xl" />
          <h1 className="text-6xl font-bold">Horizon UI</h1>
          <p className="mt-4 text-xl">Learn more about Horizon UI on</p>
          <p className="text-xl text-white">horizon-ui.com</p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
