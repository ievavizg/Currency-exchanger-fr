import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Title = () => {
    return (
        <div>
            <Grid container spacing={5} >
                <Grid item xs={12} sm={10}>
                    <Paper>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6">
                                    Currency Exchanger
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default Title;