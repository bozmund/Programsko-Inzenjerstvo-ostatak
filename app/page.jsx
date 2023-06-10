import Feed from "@components/Feed";
import Link from "next/link";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">Pixel-art Prompts</span>
      </h1>
      <p className="desc text-center">
        Pixlrtd is a page for posting prompts for AI to make your pixel-art reality at:
      </p>
      <div>
        <Link href="http://localhost:5173/" target="_blank" className='desc text-sm'>
          My DALL-E Website
        </Link>
      </div>
      
      <Feed/>
    </section>
  )
}

export default Home