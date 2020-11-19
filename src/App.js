import { useRef } from "react";
import cs from "classnames";
import useElementScroll from "use-element-scroll";

import './App.scss';

function App() {
  const card = useRef(null);

  const windowScrollData = useElementScroll();
  const { direction, height, percent } = windowScrollData;
  const blockScrollData = useElementScroll({ ref: card });
  
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  console.log(card);

  console.log(windowScrollData);
  console.log(blockScrollData);

  return (
    <div className="wrapper">
      <header className={cs("header", "centered", { "hidden": (direction.down) })}>
        Header is here
      </header>
      <main className="main">
        <section className="section centered">Section is here</section>
        <section className="section centered">Section is here</section>
        <section className="section centered">Section is here</section>
        <section className="section">
          <div className={cs("card", {
              "topShadow": true,
              "bottomShadow": true,
            })
          }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </section>
      </main>
      <footer className="footer centered">Footer is here</footer>
      <button className={cs("anchor", { "hidden": height.scrolled < 300 })} onClick={onClick}>TOP</button>
      <div ref={card} className="progress">
        <div style={{ width: `${percent.current}%` }} className="line"></div>
      </div>
    </div>
  );
}

export default App;
