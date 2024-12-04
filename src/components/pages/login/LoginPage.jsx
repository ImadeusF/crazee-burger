import LoginForm from "./LoginForm";

export default function LoginPage({ setUsername }) {
  return (
    <div>
      <LoginForm setUsername={setUsername} />
    </div>
  );
}
