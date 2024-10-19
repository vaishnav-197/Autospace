import { add } from '@autospace/sample-lib'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {add(1, 2)}
    </main>
  )
}
