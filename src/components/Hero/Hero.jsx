import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <>
                <div id='main'>
                    <h1 className='section-header'>about</h1>
                    <div className='card section first'>
                        <div className='aboutme card'>
                            <div className='aboutme-main'>
                                <img
                                    width='80'
                                    height='80'
                                    src='https://avatars.githubusercontent.com/u/76961402?v=4'
                                    alt='profile picture'
                                    className='avatar'
                                ></img>
                                <h2 className='name-heading'>hi! I'm jonas.</h2>
                            </div>
                        </div>

                        <div className='aboutme-places'>
                            <ul className='links'>
                                <li>
                                    <a href='https://github.com/jonasrdl'>
                                        github (jonasrdl)
                                    </a>
                                </li>
                                <li>discord (jvnxs7#6969)</li>
                            </ul>
                        </div>

                        <p>Becoming programmer, and im 17 years old.</p>

                        <p>Stuff i know:</p>
                        <ul>
                            <li>Linux (daily driving)</li>
                            <li>Java</li>
                            <li>Javascript (Node.js / browser)</li>
                            <li>HTML & CSS</li>
                            <li>React</li>
                            <li>General computer related stuff</li>
                        </ul>
                    </div>

                    <h2 className='section-header'>projects</h2>
                    <div className='card section'>
                        <h3>repos</h3>
                        <ul className='links'>
                            <li>
                                <a href='https://github.com/jonasrdl/JonasDiscordBot'>
                                    Discord Bot
                                </a>
                                <span className='fontsmall'>
                                    : i created my own Discord Bot.
                                </span>
                            </li>
                            <li>
                                <a href='https://github.com/jonasrdl/discord-token-grabber'>
                                    Discord token grabber
                                </a>
                                <span className='fontsmall'>
                                    : to do cool stuff with Discord's
                                    websockets.
                                </span>
                            </li>
                        </ul>
                        <h3>projects I've contributed to</h3>
                        <ul className='links'>
                            <li>
                                <a href='https://github.com/PreMiD/Presences'>
                                    PreMiD/Presences
                                </a>
                                <span className='fontsmall'>
                                    :{' '}
                                    <a href='https://github.com/PreMiD/Presences/pull/4913'>
                                        added CoinMarketCap presence
                                    </a>
                                </span>
                            </li>
                            <li>
                                <a href='https://github.com/javascript-tutorial/de.javascript.info/'>
                                    javascript-tutorial/de.javascript.info
                                </a>
                                <span className='fontsmall'>
                                    :{' '}
                                    <a href='https://github.com/javascript-tutorial/de.javascript.info/pull/101'>
                                        translated
                                    </a>
                                </span>
                            </li>
                        </ul>

                        <h3>other stuff</h3>
                        <ul className='links'>
                            <li>
                                <a href='#'>Coming soon...</a>
                            </li>
                        </ul>
                    </div>

                    <h2 className='section-header'>random stuff</h2>
                    <div className='card section'>
                        <h3>my PC</h3>
                        <ul>
                            <li>CPU: Intel i5 8600k 4.20GHz overclocked</li>
                            <li>GPU: Nvidia GeForce RTX 3060</li>
                            <li>RAM: 16GB DDR4</li>
                            <li>Drives: 2TB HDD, 1x 512GB SSD, 1x 256GB SSD</li>
                        </ul>
                    </div>
                </div>
                <div id='footer'>
                    <p>
                        <a href='#'>Jonas Riedel</a>.
                    </p>
                </div>
            </>
        );
    }
}

export default Hero;
