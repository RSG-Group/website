// @flow
// Get React.
import React from "react";
// Get Material UI.
import {Card, CardContent, CardMedia, Button, CardActions, Typography as Text} from "material-ui";

export default () => (
  <Card style={{width: "24%"}} raised>
    <br/>
    <CardMedia style={{textAlign: "center"}}>
      <img
        src="https://s2.postimg.org/44mp8pj21/Screenshot_from_2017-08-07_13-50-38.png"
        alt="Hyper with hyper-aurora theme and a background added via hyper-background. Pure ZSH theme in use."
      />
    </CardMedia>
    <CardContent>
      <Text type="headline" component="h2">hyper-background</Text>
      <Text component="p">Change the background of your Hyper terminal!</Text>
    </CardContent>
    <CardActions>
      <Button
        dense
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/RSG-Group/hyper-background/blob/master/README.md"
      >Readme
      </Button>
      <Button
        dense
        color="primary"
        href="https://github.com/RSG-Group/hyper-background"
        target="_blank"
        rel="noopener noreferrer"
      >Repository
      </Button>
    </CardActions>
  </Card>
);
