// @flow
// Import React.
import React from "react";

// Import Header, Link and Button from material-ui.
import Header from "../imports/header";
import Link from "next/link";
import {IconButton} from "material-ui";
import {ArrowBack as Arrow} from "material-ui-icons";

// Beware the ugly and unmaintainable code that the following code shall link to. BEWARE.
export default () => (
  <div>
    <Header homeButton={<Link href="/"><IconButton color="contrast"><Arrow/></IconButton></Link>}/>
    {/* Unmaintable code linked here. */}
    <iframe src="http://rsg-group.github.io/Chess/index.html" height="500em" width="100%" frameBorder="0"/>
  </div>
);
