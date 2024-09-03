function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping-para">
          <p>Also Available On</p>
        </div>

        <div className="brand_icons">
          <img src="/images/flipkart.png" alt="Flipkart.png" />
          <img src="/images/amazon.png" alt="Amazon.png" />
        </div>
      </div>

      <div className="hero-image"></div>
      <img src="/images/shoe_image.png" alt="shoe-image.png" />
    </main>
  );
}
export default HeroSection;
