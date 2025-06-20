const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="bg-linear-60 from-violet-700 to-pink-700 flex flex-col items-center justify-center min-h-screen text-white w-full">
        <h1 className="font-semibold text-5xl pb-3">Welcome to Bach</h1>
        <p>Connect, create and grow your musical skills with a community of passionate musicians</p>
        <div className="p-4">
            <button className="mr-2">Start Your Journey</button>
            <button>Sign In</button>
        </div>
      </div>
      <div className="py-10 text-black">
        <h2>Everything you need to grow musically!</h2>
        <p>From beginners to professionals</p>
      </div>
      <div className="text-black flex flex-row justify-evenly w-full">
        <div>Connect</div>
        <div>Achieve</div>
        <div>Collaborate</div>
        <div>Showcase</div>
      </div>
    </div>
  );
}

export default Home;