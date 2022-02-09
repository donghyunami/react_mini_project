import { useState } from "react";

export default function Tabs() {
    const [ToggleState, setToggleState] = useState(1);
      
    const toggleTab = index => {
      setToggleState(index);
    };

    return (
      <section>
        <div className="container">
          <div className="tabs-wrap">
            <button
              className={ToggleState === 1 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(1)}
            >
              Tab 1
            </button>
            <button
              className={ToggleState === 2 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(2)}
            >
              Tab 2
            </button>
            <button
              className={ToggleState === 3 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(3)}
            >
              Tab 3
            </button>
          </div>
  
          <div className="content-tabs">
            <div
              className={
                ToggleState === 1 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                praesentium incidunt quia aspernatur quasi quidem facilis quo
                nihil vel voluptatum?
              </p>
            </div>
  
            <div
              className={
                ToggleState === 2 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptatum qui adipisci.
              </p>
            </div>
  
            <div
              className={
                ToggleState === 3 ? 'content  active-content' : 'content'
              }
            >
              <h2>Content 3</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                Accusamus in quia odit aspernatur provident et ad vel distinctio
                recusandae totam quidem repudiandae omnis veritatis nostrum
                laboriosam architecto optio rem, dignissimos voluptatum beatae
                aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}