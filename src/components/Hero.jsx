import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumx_logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          type="button"
          onClick={() =>
            window.open("https://github.com/olatunde222?tab=repositories")
          }
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text capitalize">
        summarize lengthy articles with <br className="max-md:hidden" />
        <span className="orange_gradient">openAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
