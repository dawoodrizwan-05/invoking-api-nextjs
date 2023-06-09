import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function getQuote() {
  const resp = await fetch("https://api.quotable.io/random",{
  cache: "no-cache",
 // next:{revalidate:10},
});
  return resp.json();
}

export default async function Home() {
  const quote = await getQuote();
  console.log("quote", quote);
return <h1 className='text-4xl font-bold text-center '>Hello! Dogar....{quote.content}</h1>;

}

