import React from "react";
// import { useNavigate } from "react-router-dom";
// import { withRouter } from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate();
  // useNavigate replaced useHistory
  // setTimeout(() => {
  //   navigate("/about");
  // }, 2000);
  // console.log(props);
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  // if we take in the props in the params of this Component we have automatically added to the props the router info, because this is one of the components that the router loads within the BrowserRouter on the App parent component - anything inside the BrowserRouter on the App.js file will automatically have the router properties added to the props(before React Router v6???) - a higher-order component is basically a higher-order function/component that wraps another component and provides it extra functionality -the higher-order function adds properties to the props object which gives extra features to the component it wraps - the withRouter higher-order function provides properties related to the router info to the props object.
  return (
    <div className="container">
      <h4 className="center blue-text">Contact</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem
        perferendis perspiciatis saepe suscipit possimus ipsum maiores expedita
        maxime aperiam dolorem dolores vitae optio nisi non ipsa, quos
        molestiae? Sed.
      </p>
    </div>
  );
};

export default Contact;
// export default withRouter(Contact);

// higher-order components are applied in the export - the higher-order function/component is wrapping the component and applying the properties of the router to the props allowing the component to access those router properties - returns the component with new/extra features that we can now use for routing.
