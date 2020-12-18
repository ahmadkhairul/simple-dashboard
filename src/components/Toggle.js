import React, { Fragment } from "react";
import { connect } from "react-redux";
import { handleToggle, handleToggleChild } from "../_actions/setting";

const Toggle = (props) => {
  const { handleToggle, handleToggleChild, menu } = props;

  return (
    <table className="tableToggle">
      <thead>
        <tr>
          <th>Number</th>
          <th>Module</th>
          <th>Show</th>
          <th>Allow</th>
        </tr>
      </thead>
      <tbody>
        {menu.data.map((item, index) =>
          item.childs ? (
            <Fragment key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>
                  <button
                    className={
                      item.isShowed ? "buttonToggleOn" : "buttonToggleOff"
                    }
                    onClick={() => handleToggle("isShowed", menu, index)}
                  >
                    {item.isShowed ? "ON" : "OFF"}
                  </button>
                </td>
                <td>
                  <button
                    className={
                      item.isAllowed ? "buttonToggleOn" : "buttonToggleOff"
                    }
                    onClick={() => handleToggle("isAllowed", menu, index)}
                  >
                    {item.isAllowed ? "ON" : "OFF"}
                  </button>
                </td>
              </tr>
              {item.childs.map((i, idx) => (
                <tr key={idx}>
                  <td>
                    {index + 1}.{idx + 1}
                  </td>
                  <td>&nbsp;&nbsp;{i.id}</td>
                  <td>
                    <button
                      className={
                        i.isShowed ? "buttonToggleOn" : "buttonToggleOff"
                      }
                      onClick={() =>
                        handleToggleChild("isShowed", menu, index, idx)
                      }
                    >
                      {i.isShowed ? "ON" : "OFF"}
                    </button>
                  </td>
                  <td>
                    <button
                      className={
                        i.isAllowed ? "buttonToggleOn" : "buttonToggleOff"
                      }
                      onClick={() =>
                        handleToggleChild("isAllowed", menu, index, idx)
                      }
                    >
                      {i.isAllowed ? "ON" : "OFF"}
                    </button>
                  </td>
                </tr>
              ))}
            </Fragment>
          ) : (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>
                <button
                  className={
                    item.isShowed ? "buttonToggleOn" : "buttonToggleOff"
                  }
                  onClick={() => handleToggle("isShowed", menu, index)}
                >
                  {item.isShowed ? "ON" : "OFF"}
                </button>
              </td>
              <td>
                <button
                  className={
                    item.isAllowed ? "buttonToggleOn" : "buttonToggleOff"
                  }
                  onClick={() => handleToggle("isAllowed", menu, index)}
                >
                  {item.isAllowed ? "ON" : "OFF"}
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggle: (type, menu, index) =>
      dispatch(handleToggle(type, menu, index)),
    handleToggleChild: (type, menu, index, idx) =>
      dispatch(handleToggleChild(type, menu, index, idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
