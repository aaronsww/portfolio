const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="three-js-cdn"
      src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
    />,
  ]);
};
