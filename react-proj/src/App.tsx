import "./App.css";
import cat1 from "./assets/cozy-kittens.jpg";
import cat2 from "./assets/playful-kitty.jpg";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">🌸 Cute React Gallery 🌸</h1>
      <p className="subtitle">A tiny, cozy image gallery made with React 💖</p>

      <div className="gallery">
        {/* Image 1 (local file) */}
        <div className="card">
          <img src={cat1} alt="Cat 1" />
          <h3>Sleepy Kitty 😴</h3>
          <p>Taking the cutest nap ever.</p>
        </div>

        {/* Image 2 (local file) */}
        <div className="card">
          <img src={cat2} alt="Cat 2" />
          <h3>Curious Kitty 👀</h3>
          <p>Ready to explore the world.</p>
        </div>

        {/* Image 3 (external) */}
        <div className="card">
          <img src="https://www.cuteness.com/cuteness/18-extremely-fluffy-cats-for-your-enjoyment/4afd9582eca14cb3be9d3117af91480f.png" alt="Kitten" />
          <h3>Fluffy Friend 🐾</h3>
          <p>Just look at that adorable face!</p>
        </div>

        {/* Image 4 (external) */}
        <div className="card">
          <img src="https://picsum.photos/400/300?random=2" alt="Random" />
          <h3>Aesthetic Vibes 🌈</h3>
          <p>Soft colors and peaceful mood.</p>
        </div>
      </div>

      <footer>Made with 💗 by Dean</footer>
    </div>
  );
}