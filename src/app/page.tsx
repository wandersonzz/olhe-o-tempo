//import { Roboto } from '@next/font/google'
import { Form } from "components/Form";

//const inter = Roboto(default)

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-100 w-full h-screen items-center justify-center">
      <div className="m-16">
        <h1 className="font-bold text-6xl">Clima</h1>
      </div>
      <Form />
    </div>
  );
}
