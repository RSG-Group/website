// @flow
// Get React.
import React from "react";
// Get Material UI.
import {Card, CardContent, CardMedia, Button, CardActions, Typography as Text} from "material-ui";
// Get Link to route to the demo.
import Link from "next/link";

export default () => (
  <Card style={{width: "24%"}} raised>
    <br/>
    <CardMedia style={{textAlign: "center"}}>
      <img
        src="https://camo.githubusercontent.com/903b573b18ecf3ca42522712ffd82f018428eba8/687474703a2f2f692e696d6775722e636f6d2f7a5353696f55302e706e67"
        alt="Chess demo."
        height="105pt"
      />
    </CardMedia>
    <CardContent>
      <Text type="headline" component="h2">Chess</Text>
      <Text component="p">Cool chess game to play with your friends. (Single player mode WIP)</Text>
    </CardContent>
    <CardActions>
      <Button
        dense
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/RSG-Group/Chess/blob/master/README.md"
      >Readme
      </Button>
      <Button
        dense
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/RSG-Group/Chess"
      >Repository
      </Button>
      <Link href="/chess"><Button dense color="primary">Demo</Button></Link>
    </CardActions>
  </Card>
);
