import React from "react";
import "../css/BigBang.css"

const Comets = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <div className="custom_container">
            
            <header className="custom_container_header">
                <h1 className="custom_container_title">COMETS</h1>
            </header>

            <section className="video_section">
                <iframe
                    src="https://www.youtube.com/embed/-_6nYgel4JI?si=LxChQr5zUUOIhdwz"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </section>

            <section className="text_section">
                <article className="description">
                    <h2>What are comets?</h2>
                    <p>Comets are small celestial bodies that orbit the Sun in the Solar System. They are composed of ice, dust, rocks, and organic compounds. When a comet approaches the Sun, the heat from the Sun melts the ice and volatile materials, causing them to evaporate and form a cloud of gas called the "coma." Comets are often visible to the naked eye due to the light reflecting from the coma and their tails.</p>
                    <div className="image_section">
                        <img src={`${path}/assets/images/comets/comet.webp`} alt="comet" className="responsive_image" />
                    </div>

                    <h2>Structure of a comet</h2>
                    <h3>Nucleus:</h3>
                    <p>The solid core of a comet, usually ranging from a few kilometers to tens of kilometers in diameter.</p>
                    <p>The nucleus contains organic compounds, dust, rock, water ice, ammonia, methane, and carbon dioxide.</p>
                    <p>Due to the low temperatures in distant regions of the Solar System, the ice in the nucleus has been preserved for billions of years.</p>
                    <h3>Coma:</h3>
                    <p>As the comet approaches the Sun, the increased temperature causes the ice and dust to evaporate, forming a cloud of gas around the nucleus called the coma.</p>
                    <p>The coma can range in size from thousands to hundreds of thousands of kilometers. It is visible to the naked eye due to the sunlight reflecting off it.</p>
                    <h3>Tail:</h3>
                    <p>Comets have two types of tails: dust tail and ion tail.</p>
                    <p>Dust tail: Composed of dust particles pushed out of the comet by the pressure of sunlight. This tail tends to be curved.</p>
                    <p>Ion tail: Made up of gases ionized by the solar wind and is always directed away from the Sun, often appearing blue.</p>
                    <h3>Plasma tail:</h3>
                    <p>Sometimes, comets also have a plasma tail (caused by the interaction between the solar magnetic field and the comet).</p>

                    <h2>Origin of comets</h2>
                    <h3>Comets are believed to originate from two distant regions of the Solar System:</h3>
                    <p>Kuiper Belt: This region lies beyond the orbit of Neptune, extending from 30 to 55 astronomical units (AU) from the Sun. Many short-period comets (with periods less than 200 years) originate from here.</p>
                    <p>Oort Cloud: The Oort Cloud is a more distant region, located at the outermost edge of the Solar System, between 2,000 and 100,000 AU from the Sun. Long-period comets (with periods of thousands of years) are believed to originate from here. It is a spherical cloud with comets in random orbits.</p>

                    <h2>Orbital characteristics of comets</h2>
                    <p>Orbits: Most comets have elliptical orbits, taking them far beyond the outer planets and then bringing them close to the Sun, where they form the coma and tails.</p>
                    <p>Periods: Long-period comets may only return to the Sun after thousands or even millions of years, while short-period comets may return after a few decades.</p>

                    <h2>Notable examples of comets</h2>
                    <h3>Halley's Comet (1P/Halley):</h3>
                    <div className="image_section">
                        <img src={`${path}/assets/images/comets/Giotto_halley.webp`} alt="Giotto_halley" className="responsive_image" />
                    </div>
                    <p>Period: Approximately 75-76 years.</p>
                    <p>Last seen: In 1986, it will return in 2061.</p>
                    <p>Characteristics: Halley is the only comet that can be seen with the naked eye during a single human lifetime. It has been observed and recorded since the 1st century BCE.</p>
                    <p>Size: The nucleus of Halley is about 15 km long and 8 km wide.</p>
                    <h3>Comet Hale-Bopp (C/1995 O1):</h3>
                    <div className="image_section">
                        <img src={`${path}/assets/images/comets/halebopp.webp`} alt="halebopp" className="responsive_image" />
                    </div>
                    <p>Period: Approximately 2,533 years.</p>
                    <p>Discovery: In 1995 by astronomers Alan Hale and Thomas Bopp.</p>
                    <p>Characteristics: Hale-Bopp was bright and visible to the naked eye for several months in 1997, even in urban areas.</p>
                    <h3>Comet Hyakutake (C/1996 B2):</h3>
                    <div className="image_section">
                        <img src={`${path}/assets/images/comets/Hyakutake.webp`} alt="Hyakutake" className="responsive_image" />
                    </div>
                    <p>Period: Approximately 70,000 years.</p>
                    <p>Discovery: In 1996 by Japanese astronomer Yuji Hyakutake.</p>
                    <p>Characteristics: This comet came very close to Earth in 1996, just 15 million km away, making it one of the brightest comets of that period. The tail of Hyakutake was one of the longest ever observed, extending about 570 million km.</p>
                    <h3>Comet Tempel 1 (9P/Tempel):</h3>
                    <div className="image_section">
                        <img src={`${path}/assets/images/comets/comet_9P-Tempel.webp`} alt="9P-Tempel" className="responsive_image" />
                    </div>
                    <p>Period: 5.5 years.</p>
                    <p>Discovery: In 1867 by Ernst Wilhelm Leberecht Tempel.</p>
                    <p>Characteristics: Tempel 1 became famous when NASA's Deep Impact mission sent a probe to collide with it in 2005, allowing scientists to study its internal composition.</p>
                </article>
            </section>

            <section className="summary_section">
                <h2>Scientific significance of comets</h2>
                <p>Comets play a crucial role in studying the formation of the Solar System. Since comets contain primordial material from the early stages of the Solar System, studying them helps scientists better understand the processes that led to the formation of planets and other celestial bodies. Comets may also carry water and organic compounds, which are essential for life. There is some speculation that comets may have played a role in delivering water to Earth.</p>
            </section>
        </div>

    );
}

export default Comets;