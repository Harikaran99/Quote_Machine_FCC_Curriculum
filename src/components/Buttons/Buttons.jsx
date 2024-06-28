import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const StyledButton = styled(Button)(({theme}) => ({
    fontSize: "1.1em",
    marginTop: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    textTransform: 'capitalize',
    transition: "1s",
    border: "1px solid transparent",
    color: 'rgb(255 255 255 / 0.3)',
    // width: '132px',
    '&:hover' : {
        backgroundColor: 'rgba(0, 0, 0, 0.40)',
        boxShadow: "rgba(0, 10, 0, 0.5) 0px 10px 50px 10px",
        border: "1px solid red",
        transition: "1s"
    } 
}))

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        }
    render() {
        // console.log(this.props.newQuote)
        return (
            <Box>

                <StyledButton 
                        id="new-quote" 
                        variant="contained" 
                        onClick={() => this.props.newQuote()} 
                        startIcon={<AutoAwesomeIcon/>} 
                        className="">
                     New Quote
                </StyledButton>

                <StyledButton 
                        id="tweet-quote" 
                        href="https://twitter.com/intent/tweet" 
                        variant="contained" 
                        target="_top" 
                        startIcon={<FontAwesomeIcon icon={faTwitter}/>} 
                        className="button">
                    Tweet It!
                </StyledButton>

                <StyledButton 
                        id="faWhatsapp"
                        variant="contained" 
                        target="_top" 
                        href="https://twitter.com/intent/tweet" 
                        startIcon={<FontAwesomeIcon icon={faWhatsapp} />} 
                        className="button">
                    Share It!
                </StyledButton>
            </Box>
        )
    }
}

export default Buttons
