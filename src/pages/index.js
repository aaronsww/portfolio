import * as React from "react";

export default function Home() {
  return (
    <div>
      <nav>
        <a href="">Portfolio</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
      <h1>Jeevan Aaron</h1>
      <h1>Web Developer</h1>
      <section>
        <h1>Projects</h1>
      </section>

      <secion>
        <h1> About</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        {/* Skill List */}
      </secion>
      {/* Call Github Api */}
      <secion>
        <h1> Contact</h1>
        <h2>Get in touch</h2>
      </secion>
    </div>
  );
}
