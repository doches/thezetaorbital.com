import * as React from "react";
import * as ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import shuffle from "lodash-es/shuffle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const title = require("./img/Titlemark.png");
const titleVertical = require("./img/Titlemark-vertical.png");

const mp4 = require("./video/promo-hd.mp4");
const ogg = require("./video/promo-hd.ogg");
const webm = require("./video/promo-hd.webm");

import "./index.less";

const root = document.createElement("div");
document.body.appendChild(root);

let screenshots: any[] = [];

for (var i = 1; i <= 15; i++) {
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
                    <source src={mp4} type="video/mp4" />
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
                    <p><strong>The Zeta Orbital</strong> is a first-person roguelite set onboard an abandoned space station. Descend through the station's decks, scavenging for vital supplies as you uncover clues to why the station is abandoned.</p>
                    <p>Coming to Steam Early Access December 2019!</p>
                </div>
                <div className="section">
                    <ImageGallery items={screenshots} />
                </div>
                <div className="section section-blue">
                    <p>The look of <strong>The Zeta Orbital</strong> is inspired by classic sci-fi games like System Shock and Marathon, combined with in-world puzzles reminiscent of Myst and the "what happened here" exploration of games like Gone Home or The Station.</p>
                </div>
                <div className="section section-green">
                    <p>Want to keep up with <strong>The Zeta Orbital</strong>'s development? Follow <a href="https://twitter.com/doches">@doches <FontAwesomeIcon icon={faTwitter} /></a> on Twitter.</p>
                </div>
            </div>
        </div>
    </div>
), root);
