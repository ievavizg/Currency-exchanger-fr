import React, {useEffect, useState} from "react";
import {Button, FormControl} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import'./CurrencyExchange.css';

const CurrencyExhange = () => {

    const [data, setData] = useState(null)
    const fetchURL = "http://localhost:8080"
    const getData = () =>
        fetch(`${fetchURL}/list`)
            .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    const [currencyFrom, setCurrencyFrom] = React.useState('EUR');
    const [currencyTo, setCurrencyTo] = React.useState('AUD');
    const [quantity, setquantity] = React.useState(1);
    const [result, setResult] = React.useState(0);

    const handleClick = (currencyFrom, currencyTo, quantity) => {
        const fromCurrency = encodeURIComponent(currencyFrom);
        const  encodeCurrencyTo = encodeURIComponent(currencyTo);
        const  encodequantity = encodeURIComponent(quantity);
        fetch(`${fetchURL}/calculate?fromCurrency=${fromCurrency}&toCurrency=${encodeCurrencyTo}&quantity=${encodequantity}`)
            .then(response => response.json())
            .then(result => setResult(result));

    }

    const handleChangeOnCurr = (event) => {
        setCurrencyTo(event.target.value);
    };

    const _handleTextFieldChange = (event) => {
        setquantity(event.target.value);
    }

    return <div>
        <Grid container spacing={5} >
            <Grid item xs={6} sm={10}>
                <Paper>
                    <TextField id="standard-basic" label="Select currency to convert from" value={currencyFrom} readOnly={true}/>
                    <TextField id="standard-basic" label="Enter the amount to convert" value={quantity} onChange={_handleTextFieldChange}/>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={10}>
                <Paper>
                    <FormControl variant="filled">
                        <TextField
                            id="standard-select-currency"
                            select
                            value={currencyTo}
                            label="Select currency to convert to"
                            helperText="Please select your currency"
                            onChange={handleChangeOnCurr}
                        >
                            {data?.map((item) =>
                                <MenuItem key={item.id} value={item.toCurrency}>{item.toCurrency}
                                </MenuItem>
                            )}
                        </TextField>
                    </FormControl>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Paper>
                    <div>
                        <Button variant="outlined" color="primary" size={"large"} onClick={() => {handleClick(currencyFrom, currencyTo, quantity)}}>
                            Convert
                        </Button>
                    </div>
                </Paper>
            </Grid>
        <Grid item xs={12} sm={10}>
            <Paper>
                <TextField id="standard-basic" label="Result" value={result} readOnly={true}/>
            </Paper>
        </Grid>
        </Grid>
    </div>;
}

export default CurrencyExhange;