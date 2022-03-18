import "./Links.scss";

const Links = () => {
  return (
    <div>
      <h1>Security</h1>
      <ul className="link-list">
        <li className="link-list-item">
          <a href="https://vez.mrsk.me/linux-hardening.html">
            Linux Security Hardening and Other Tweaks
          </a>
        </li>
        <li className="link-list-item">
          <a href="https://disknotifier.com/blog/simple-ssh-security/">
            SSH Security
          </a>
        </li>
      </ul>
      <h2>Disk encryption</h2>
      <ul className="link-list">
        <li className="link-list-item">
          <a href="https://wiki.archlinux.org/index.php/Dm-crypt">
            ArchLinux dm-crypt
          </a>
        </li>
        <li className="link-list-item">
          <a href="https://wiki.archlinux.org/title/Dm-crypt/Encrypting_an_entire_system">
            Linux Unified Key Setup (LUKS)
          </a>
        </li>
      </ul>
      <h2>OSINT</h2>
      <ul className="link-list">
        <li className="link-list-item">
          <a href="https://osintframework.com/">OSINT Framework</a>
        </li>
        <li className="link-list-item">
          <a href="https://github.com/GuidoBartoli/sherloq">Sherloq</a>
        </li>
        <li className="link-list-item">
          <a href="http://exif.regex.info/exif.cgi">Image EXIF viewer</a>
        </li>
        <li className="link-list-item">
          <a href="https://github.com/sherlock-project/sherlock">Sherlock</a>
        </li>
      </ul>
      <h2>Privacy</h2>
      <ul className="link-list">
        <li className="link-list-item">
          <a href="https://privacy.sexy/">Privacy sexy</a>
        </li>
      </ul>
      <h2>Tests</h2>
      <ul className="link-list">
        <li className="link-list-item">
          <a href="https://abrahamjuliot.github.io/creepjs/">CreepJS</a>
        </li>
        <li className="link-list-item">
          <a href="https://csstracking.dev/">CSS Fingerprint</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
