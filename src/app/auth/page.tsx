import Link from "next/link";

export default function Login() {
  return (
    <>
      <strong>Login</strong>
      <div className="bg-red-900">
        <Link href="/">dashboard</Link>
      </div>
    </>
  );
}
