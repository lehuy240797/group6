import React from "react";
import "../css/BigBang.css"

const BigBang = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="custom_container">
            {/* Tiêu đề chính */}
            <header className="custom_container_header">
                <h1 className="custom_container_title">THE BIG BANG THEORY</h1>
            </header>

            {/* Video YouTube */}
            <section className="video_section">
                <iframe
                    src="https://www.youtube.com/embed/GncYOf29uc4?si=1qxx13oW3wXnuDUF"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </section>

            <section className="text_section">
                <article className="description">
                    <h2>1. What is the Big Bang?</h2>
                    <p>The Big Bang is a very important event that occurred about 13.8 billion years ago. It is considered the beginning of the universe we live in today.</p>
                </article>
            </section>

            <section className="video_section">
                <video
                    style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
                    width="auto"
                    height="auto"
                    src={`${path}/assets/videos/bigbang.mp4`}
                    type="video/mp4"
                    loop
                    autoPlay
                    muted>
                </video>
            </section>

            <section className="text_section">
                <article className="description">
                    <h2>2. Before the Big Bang:</h2>
                    <p>Before the Big Bang happened, everything in the universe was concentrated in an extremely small point. This point was so hot that it's hard to imagine—it was like a tiny superball containing all the energy and matter.</p>

                    <h2>3. What Happened?</h2>
                    <p>At the moment of the Big Bang, a huge expansion began. Space and time started to appear. This scene is like a balloon being inflated—it expanded very quickly!</p>

                    <h2>4. Formation of Particles:</h2>
                    <p>As the universe started to expand, it was very hot, but gradually it became cooler. During this process, tiny particles like protons, neutrons, and electrons formed. These are the basic building blocks of matter.</p>

                    <h2>5. Creation of Atoms:</h2>
                    <p>About 3 minutes after the Big Bang, protons and neutrons combined to create the first atoms. Atoms are the basic building blocks of everything around us.</p>

                    <h2>6. Formation of Stars and Galaxies:</h2>
                    <div className="image_section">
                        <img src={`${path}/assets/images/bigbang/milky_way.webp`} alt="Milky Way" className="responsive_image" />
                    </div>
                    <p>After millions of years, these atoms began to combine together. Some atoms formed stars, while stars grouped together to form galaxies. A galaxy is a large group of stars, planets, and gas. For example, our galaxy is called the Milky Way.</p>

                    <h2>7. First Light:</h2>
                    <p>About 380,000 years after the Big Bang, the universe cooled enough for light to move freely. This is when the first light appeared, and you can imagine it as a sky filled with twinkling stars.</p>

                    <h2>8. The Expanding Universe:</h2>
                    <p>Currently, scientists have discovered that the universe is still expanding. This means that galaxies are moving away from each other, just like when you blow up a balloon, it gets bigger.</p>
                </article>
            </section>

            <section className="summary_section">
                <h2>In Summary:</h2>
                <p>The Big Bang is an exciting story about how everything began. It is the start of everything—stars, planets, and even us! The universe is a marvelous place, and the Big Bang is one of the greatest mysteries that scientists are still trying to understand.</p>
            </section>
        </div>
    );
}

export default BigBang;
