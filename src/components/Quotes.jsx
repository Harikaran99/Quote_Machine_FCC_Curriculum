import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Typography } from "@mui/material"

class Quotes extends React.Component {
    render() {
        return (
        <Typography id="text" variant="h4">
          <FontAwesomeIcon icon={faQuoteLeft} id="quote-left"/>
            {this.state.quote}
          <FontAwesomeIcon icon={faQuoteRight} id="quote-right"/>
        </Typography>
        )
    }
}

export default Quotes;