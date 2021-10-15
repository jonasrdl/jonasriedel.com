import './Hero.css'
import { CodeBlock, dracula } from "react-code-blocks";

const code = `let domain = 'protonmail.com'
let email = 'jonasriedel' + '@' + domain
`

const Hero = () => {
    return (
        <main>
            <p>
                Hello, my name is <a className="jonas-name-link" target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Jonas_(name)">Jonas</a>.
                I am <a className="decimal-to-binary-link" href="https://www.rapidtables.com/convert/number/decimal-to-binary.html" target="_blank" rel="noreferrer">10001</a><sub>2</sub> years old.
            </p>

            <img className="avatar" src="https://avatars.githubusercontent.com/u/76961402?v=4" alt="avatar"/>

            <div>
                <h1 className="communication-heading">Communication</h1>

                <p>You could write me an Email, if you know Javascript.</p>

                <div className="codeblock">
                    <CodeBlock
                        text={code}
                        language="javascript"
                        showLineNumbers="true"
                        theme={dracula}
                    />
                </div>    
            </div>

            <h2>Socials</h2>
            <p><a href="https://twitter.com/jvnxs7">jvnxs7</a> on Twitter <i className="fab fa-twitter"></i></p>
            <p><a href="https://github.com/jonasrdl">jonasrdl</a> on GitHub <i className="fab fa-github"></i></p>
            <p><a href="https://keybase.io/jonasrdl">jonasrdl</a> on Keybase <i className="fab fa-keybase"></i></p>
            <p><a href="https://discord.com">jvnxs7#6969</a> on Discord <i className="fab fa-discord"></i></p>   
        </main>
    )
}

export default Hero