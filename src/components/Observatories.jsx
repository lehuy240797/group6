import React from 'react';
import "../css/Observatories.css";

const Observatories = () => {
    return (
        <div className="sketch2-container">
            <div className="content">
                <h1>Observatories</h1>
                {/* First row of images and text box */}
                <div className="image-row">
                    <img src="/assets/images/observatories/maunakea.png" alt="Image01" className="obserimg" />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.4280896922305!2d-155.47134467490895!3d19.82183157813577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7953bd838daa46cd%3A0xf288d380869e8d89!2sMauna%20Kea!5e0!3m2!1sen!2s!4v1727711636205!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="img"
                        title='map02'
                    ></iframe>
                </div>
                <div className="text-box">
                    <h2>Maunakea Observatories, Hawaii, United States</h2>
                    <p className="spacing">
                        Maunakea is an exceptional site for ground-based astronomy due to its elevation, dark skies, environmental conditions, and location.
                        The telescopes and instruments on Maunakea span from radio to ultraviolet wavelengths, wide- to narrow-field high angular resolution,
                        and measurement techniques from imaging, to spectroscopy to interferometry.
                    </p>
                    <p className="spacing">
                        By the number of papers produced with Maunakea observations and these papers’ citations, Maunakea is the most scientifically productive and impactful site in ground-based astronomy.
                        We are simultaneously invested in scientific excellence and mutual stewardship in alignment with the new governance structure for Maunakea.
                    </p>
                    <p className="spacing">
                        In 2022, Act 255 formed the Maunakea Stewardship and Oversight Authority (MKSOA), which represents a model of mutual stewardship with 11 members representing astronomy;
                        Native Hawaiian cultural practitioners and community leaders; local business; education; land/resource management; lineal descendants of indigenous Maunakea caretakers; the University of Hawaiʻi;
                        and local government. Maunakea is currently co-managed by MKSOA and the University of Hawaiʻi, with governance being fully transferred to MKSOA by 2028.
                        MKSOA will be responsible for the negotiation and renewal of any new astronomy leases on Maunakea.
                    </p>
                    <p className="spacing">
                        The Maunakea Observatories are united by our deep respect and appreciation for Maunakea’s environment that makes our work possible, and the communities
                        with whom we share stewardship responsibility to ensure the mauna is treated with respect now and for generations to come.
                    </p>
                </div>
                <hr className="separator" />

                {/* Second row of images and text box */}
                <div className="image-row">
                    <img src="/assets/images/observatories/Kitt.webp" alt="Image02" className="obserimg" />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13539.423887277602!2d-111.60980434487107!3d31.96480383844367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d5b3c13bda5da9%3A0x63124647309ad337!2sKitt%20Peak!5e0!3m2!1sen!2s!4v1727712456040!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='map02'
                    ></iframe>
                </div>
                <div className="text-box">
                    <h2>The Kitt Peak National Observatory, Arizona, United States</h2>
                    <p className="spacing">
                        Kitt Peak National Observatory (KPNO) is a Program of the NOIRLab. KPNO hosts the facilities of consortia that,
                        between them, operate more than a dozen optical telescopes and two radio telescopes.
                    </p>
                    <p className="spacing">
                        KPNO operates the Nicholas U. Mayall 4-meter Telescope on behalf of the Dark Energy Spectroscopic Instrument (DESI) survey (a project led by the US Department of Energy Office of Science)
                        and the WIYN 3.5 meter Telescope (a partnership between Indiana University, the University of Wisconsin,
                        Pennsylvania State University, the University of Missouri-Columbia, Purdue University, the NSF and NASA).
                    </p>
                    <p className="spacing">
                        Established in 1964 and in its sixth decade of operations, the Kitt Peak Visitor Center has been enjoyed by more than two million people.
                        Our guests experience the largest and most diverse collection of research telescopes in any one place in the world.
                        Three of the nearly two dozen active telescopes on Kitt Peak are dedicated solely to public viewing in our world-renowned nightly stargazing programs.
                    </p>
                    <p className="spacing">
                        The mission of the visitor center is to inspire a sense of wonder and awe about the Universe through exhibits,
                        daytime tours, and nighttime public programs. Our goal is to inform and educate the public daily about basic astronomy,
                        its current research themes, and the nature of the scientific process.
                    </p>
                </div>
                <hr className="separator" />

                {/* Third row of images and text box */}
                <div className="image-row">
                    <img src="/assets/images/observatories/VLT.png" alt="Image03" className="obserimg" />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.8903070174824!2d-70.40703512458596!3d-24.62746530162313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a54b61d20df8a7%3A0xffc2d3eef16a026b!2sVery%20Large%20Telescope!5e0!3m2!1sen!2s!4v1727712338263!5m2!1sen!2s"
                        width="600"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='map03'
                    ></iframe>
                </div>
                <div className="text-box">
                    <h2>Very Large Telescope, Atacama Desert, Chile</h2>
                    <p className="spacing">
                        The Very Large Telescope (VLT) is an astronomical facility operated since 1998 by the European Southern Observatory, located on Cerro Paranal in the Atacama Desert of northern Chile.
                        It consists of four individual telescopes, each equipped with a primary mirror that measures 8.2 meters in diameter. These optical telescopes, named Antu, Kueyen, Melipal,
                        and Yepun (all words for astronomical objects in the Mapuche language), are generally used separately but can be combined to achieve a very high angular resolution.
                        The VLT array is also complemented by four movable Auxiliary Telescopes (ATs) with 1.8-meter apertures.
                    </p>
                    <p className="spacing">
                        The VLT is capable of observing both visible and infrared wavelengths. Each individual telescope can detect objects that are roughly four billion times fainter than what can be seen with the naked eye.
                        When all the telescopes are combined, the facility can achieve an angular resolution of approximately 0.002 arcsecond. In single telescope mode, the angular resolution is about 0.05 arcseconds.
                    </p>
                    <p className="spacing">
                        The VLT is one of the most productive facilities for astronomy, second only to the Hubble Space Telescope.
                        The VLT has contributed to significant discoveries in the fields of exoplanets, star formation, galaxy formation, and cosmology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Observatories;
