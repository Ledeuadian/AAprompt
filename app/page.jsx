import Feed from '@components/Feed';

const Home = () => {
    return (
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md"/>
            <span className="orange_gradient text-center">React-Next.JS Prompts</span>
        </h1>
        <p className="desc text-center">
        AA Build Value And Success By Helping People Connect With Value And Shape Lives. Programming is More Than just A Game - You Must Know The Way And The Best, Love The struggle and trust the process.
        </p>
        <Feed/>
      </section>
    )
  }
  
  export default Home