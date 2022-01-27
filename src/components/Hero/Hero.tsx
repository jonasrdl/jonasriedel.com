import './Hero.scss'
import { CodeBlock, dracula } from 'react-code-blocks'
import Link from '../Link/Link'
import { FC } from 'react'

const code: string = `let domain = 'protonmail.com'
let email = 'jonasriedel' + '@' + domain
`

const Hero: FC = () => {
  return (
    <main>
      <p>
        Hello, my name is <Link url="https://en.wikipedia.org/wiki/Jonas_(name)" text="Jonas" className="jonas-name-link" />. I am <Link url="https://www.rapidtables.com/convert/number/binary-to-decimal.html?x=10001" text="10001" className="decimal-to-binary-link" />
        <sub>2</sub> years old.
      </p>

      <img className="avatar" src="https://avatars.githubusercontent.com/u/76961402?v=4" alt="avatar" />

      <div>
        <h1 className="communication-heading">Communication</h1>

        <p>You can email me if you know Javascript.</p>

        <div className="codeblock">
          <CodeBlock text={code} language="javascript" showLineNumbers="true" theme={dracula} />
        </div>
      </div>

      <h2>Socials</h2>
      <p>
        <Link url="https://twitter.com/jvnxs7" text="jvnxs7" /> on Twitter <i className="fab fa-twitter"></i>
      </p>
      <p>
        <Link url="https://github.com/jonasrdl" text="jonasrdl" /> on GitHub <i className="fab fa-github"></i>
      </p>
      <p>
        <Link url="https://keybase.io/jonasrdl" text="jonasrdl" /> on Keybase <i className="fab fa-keybase"></i>
      </p>
      <p>
        <Link url="https://discord.com/users/209945797918195712" text="jvnxs7#6969" /> on Discord <i className="fab fa-discord"></i>
      </p>
    </main>
  )
}

export default Hero
