import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { getSidebar } from "./_actions/setting";
import { toTitleCase } from "./utils/helper";
import Accordion from "./components/Accordion";

const App = props => {
  const { getSidebar, menu } = props;

  useEffect(() => {
    getSidebar();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let setNavbar = null;
  const [sidebar, setSidebar] = useState(true);

  if (sidebar) {
    setNavbar = { display: 'flex' };
  } else {
    setNavbar = { display: 'none' };
  }

  return (
    <>
      <button
        className="showHideMenu"
        onClick={() => setSidebar(!sidebar)}
      >
        {sidebar ? 'X' : '+'}
      </button>
      <div className="mainContainer" style={{ transition: "0.5s" }}>
        <div className="sideBar" style={setNavbar}>
          <div className="sideBarContent">
            <div className="imageArea">

              <div className="imageContainer">
                <img className="logoImage" src="/avana-logo.png" alt="Logo" />
              </div>
              <div className="imageContainer">
                <img className="avatar" src="/profile.png" alt="Logo" />
              </div>
              <div className="profileName">
                Afriza Bramantyo
              </div>
            </div>
            <div className="menuArea">
              {menu.data.map((item, index) =>
                item.isShowed ? (
                  item.isAllowed ? (
                    item.childs ? (
                      <Accordion title={toTitleCase(item.id)} key={index}>
                        {item.childs
                          ? item.childs.map((item, index) =>
                            item.isShowed ? (
                              item.isAllowed ? (
                                <div className="accordion-text" key={index}>
                                  {toTitleCase(item.id)}
                                </div>
                              ) : (
                                  <div className="accordion-text disabled" key={index}                                  >
                                    {toTitleCase(item.id)}
                                  </div>
                                )
                            ) : null
                          )
                          : null}
                      </Accordion>
                    ) : (
                        <div className="noChild" key={index}>{toTitleCase(item.id)}</div>
                      )
                  ) : (
                      <div className="disabled" key={index}>{toTitleCase(item.id)}</div>
                    )
                ) : null
              )}
            </div>
          </div>
        </div>
        <div className="appContent">
          <div className="mainAppContent">
            <div className="contentContainer">
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
              <div className="blocks" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSidebar: () => dispatch(getSidebar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);