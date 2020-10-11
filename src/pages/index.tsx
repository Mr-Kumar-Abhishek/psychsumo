import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
          About Psychsumo<span className="fancy">.</span>
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <br></br>
          <br></br>
          <blockquote>
              <h3>"Psychsumo is a social hub dedicated to promoting better mental health."</h3>
          </blockquote>

          <p><strong>Psychsumo is your big brother, sister and best friend!</strong></p> 
          
          <br></br>

          <p>We understand how important it is to have good mental health -- and doing it alone 
          isn’t enough that’s why we’re here. Psychsumo is your online support that can inspire 
          and help you to improve your mental health.</p>

          <p>Psychsumo offers resources for health and wellness as well as mental health awareness. 
          We work as your close buddy to motivate, encourage and help you become the best version of yourself.
          So, whatever challenges you're experiencing right now, know that we're here for you. </p>

          <br></br>
          <br></br>
          <br></br>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
