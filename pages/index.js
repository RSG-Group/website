// @flow
// Get React and Head to populate <head />
import React from "react";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>RSG-Group</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    </Head>
    <p>Hello world!</p>
  </div>
);
