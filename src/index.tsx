import * as React from "react";
import * as ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import shuffle from "lodash-es/shuffle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const title = require("./img/Titlemark.png");
const titleVertical = require("./img/Titlemark-vertical.png");

const about_hydroponics = require("./img/about_hydroponics.jpg");
const about_computers = require("./img/about_computers.jpg");
const about_puzzles = require("./img/about_puzzles.jpg");

const h264 = require("./video/promo-h264.mp4");
const hevc = require("./video/promo-hevc.mp4");
const ogg = require("./video/promo-hd.ogg");
const webm = require("./video/promo-hd.webm");

const trailer_h264 = require("./video/trailer-h264.mp4");
const trailer_hevc = require("./video/trailer-hevc.mp4");
const trailer_raw = require("./video/trailer-glitchy.mp4");

import "./index.less";

const root = document.createElement("div");
document.body.appendChild(root);

let screenshots: any[] = [];

for (var i = 1; i <= 18; i++) {
    const thumb = require(`./thumbs/screenshot${i}.jpg`);
    const image = require(`./gallery/screenshot${i}.png`);
    screenshots.push({
        original: image,
        thumbnail: thumb,
    });
}

screenshots = shuffle(screenshots);

ReactDOM.render((
    <div>
        <div className="background">
        </div>
        <div className="overlay" />
        <div className="hero">
            <div className="background-video scanlines">
                <video playsInline autoPlay muted loop>
                    <source src={h264} type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" />
                    <source src={hevc} type="video/mp4; codecs=hevc,mp4a.40.2" />
                    <source src={ogg} type="video/ogg" />
                    <source src={webm} type="video/webm" />
                </video>
            </div>
        </div>
        <div className="content">
            <div className="inner-content">
                <div className="title">
                    <img src={title} className="title-horizontal" />
                    <img src={titleVertical} className="title-vertical" />
                </div>
                <div className="section section-blue">
                    <p><strong>The Zeta Orbital</strong> is a first-person sci-fi exploration game set on an abandoned research station orbiting an alien planet. Explore the station, uncovering clues to the crew’s mysterious disappearance. They found something on the planet, and brought it back to orbit — but what else did they bring with it?</p>

                    <video playsInline controls className="trailer">
                        <source src={trailer_h264} type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" />
                        <source src={trailer_hevc} type="video/mp4; codecs=hevc,mp4a.40.2" />
                        <source src={trailer_raw} type="video/mp4" />
                    </video>

                    <p>Welcome to <strong>The Zeta Orbital</strong>. Can you find the answers, navigate the station, and scavenge enough resources to escape?</p>
                </div>
                <div className="section">
                    <ImageGallery items={screenshots} />
                </div>
                <div className="section section-blue">
                    <h3>A Rogue-(like)-like</h3>
                    <p>The decks of the Zeta Orbital are procedurally generated, and you can save your progress only when moving between them. Scavenge precious resources to explore each level, but never take your eye off your oxygen supply.</p>
                    <img src={about_hydroponics} className="row-image" />
                    
                    <h3>An intricately-woven story</h3>
                    <p>The orbital’s crew didn’t disappear all at once — and left their own theories about what they saw happening around them scattered in their PDAs & terminals. Piece together what really happened from snippets and suggestions as you make your way through the crew’s quarters.</p>
                    <img src={about_computers} className="row-image" />

                    <h3>Every system a puzzle</h3>
                    <p>Many doors were left locked on the orbital, and many of its support systems are barely functioning. You’ll need to restore what you can if you want to escape the station intact.</p>
                    <img src={about_puzzles} className="row-image" />
                </div>
                <div className="section section-green">
                    <p>Want to keep up with <strong>The Zeta Orbital</strong>'s development? Follow <a href="https://twitter.com/doches">@doches <FontAwesomeIcon icon={faTwitter} /></a> on Twitter.</p>
                </div>
            </div>
        </div>
    </div>
), root);
