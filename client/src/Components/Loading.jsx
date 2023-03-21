import React from "react";
import "../styles/loading.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
