import React from "react";
import "../css/BigBang.css"

const EoE = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="custom_container">
            <header className="custom_container_header">
                <h1 className="custom_container_title">EVOLUTION OF EARTH</h1>
            </header>

            <section className="video_section">
                <iframe
                    style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/fJ0J4mbj0_o?si=8YV78zFgM1hZRFGh"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </section>

            <section className="text_section">
                <article className="description">
                    <h2>1. How Did Earth Form?</h2>
                    <p>
                        Around 4.6 billion years ago, our Solar System began to form from a massive cloud of gas and dust in space.
                        Over millions of years, particles of dust and gas collided and stuck together, forming larger objects. One
                        of these objects became Earth.
                    </p>
                    <p>
                        At first, Earth was just a molten ball of rock and metal. Under the pull of gravity, different layers of
                        materials began to separate and form: the core, the mantle, and the crust, which we live on today.
                    </p>
                </article>
            </section>

            <section className="video_section">
                <video
                    style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
                    width="auto"
                    height="auto"
                    src={`${path}/assets/videos/earth.mp4`}
                    type="video/mp4"
                    loop
                    autoPlay
                    muted
                    controls
                ></video>
            </section>

            <section className="text_section">
                <article className="description">
                    <h2>2. The Appearance of Oceans and Atmosphere</h2>
                    <p>
                        As Earth cooled down, its surface started to solidify, creating Earth’s crust. At the same time, volcanoes were very
                        active, releasing gases like water vapor, carbon dioxide (CO2), and other gases. Water vapor condensed and fell
                        as rain, forming the oceans. This is how water first appeared on Earth.
                    </p>
                    <p>
                        The atmosphere, the layer of air surrounding Earth, also began to form during this period. However, it was very different from today.
                        The early atmosphere was filled with toxic gases like CO2 and had no oxygen, the gas humans and animals need to breathe today.
                    </p>

                    <h2>3. The Appearance of Life</h2>
                    <p>
                        Around 3.5 billion years ago, the first forms of life, which were very tiny, appeared in the oceans.
                        These were single-celled organisms. Over millions of years, these organisms evolved and became more complex.
                    </p>
                    <p>
                        A crucial event was the appearance of bacteria that could perform photosynthesis, which means they could use sunlight to
                        produce energy and oxygen. Thanks to this, oxygen started to build up in the atmosphere, making it possible for more complex life forms to develop.
                    </p>

                    <h2>4. The Age of Dinosaurs and Ancient Times</h2>
                    <div className="image_section">
                        <img src={`${path}/assets/images/EoE/dinosaur.webp`} alt="dinosaur" className="responsive_image" />
                    </div>
                    <p>
                        Around 250 million years ago, Earth entered the age of giant creatures like dinosaurs. This was one of the most
                        fascinating periods in Earth’s history. Dinosaurs lived on Earth for about 180 million years, before going extinct around 65 million years ago, possibly due to a giant asteroid impact that caused drastic climate changes.
                    </p>

                    <h2>5. The Evolution of Humans</h2>
                    <p>
                        Humans, or Homo sapiens, appeared around 300,000 years ago. Humans are unique compared to other animals because
                        we have the ability to think and create. We learned to use fire, make tools, build houses, and even develop civilizations.
                    </p>
                    <p>
                        Humans evolved and adapted to many different environments on Earth, from jungles and deserts to frozen lands.
                    </p>

                    <h2>6. Earth Today</h2>
                    <p>
                        Today, Earth is a diverse planet with millions of living species. We have vast oceans, green forests, towering mountains, and modern cities. However, Earth is also facing many challenges like climate change and pollution, and it is our job to protect this planet so it can sustain life for future generations.
                    </p>
                </article>
            </section>
            <section className="summary_section"><h2>Conclusion</h2>
                <p>
                    Earth has gone through billions of years of changes and evolution, from a molten ball to the life-filled planet we call home. This journey is incredibly miraculous and full of important events. And we, as humans, have the responsibility to preserve and protect this planet so it can continue to thrive in the future.
                </p>
                <p>
                    Hopefully, through the story of Earth’s formation and evolution, you will appreciate our planet even more!
                </p></section>


        </div>
    );
}

export default EoE;
