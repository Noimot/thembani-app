import PasswordReset from "../../components/auth/passwordreset/PasswordReset";
import Header from "../../components/header";

export default function ResetPassword() {
  return (
    <div className="h-screen w-full">
    <Header />
    <PasswordReset />
  </div>
  )
}