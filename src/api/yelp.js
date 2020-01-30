import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Q63WtBknDSyX9DBg4owMilJOGhMir14NC_gD4VzSxkF9G6ZQbnqjJN_94xRR0D05EPju8AKp6RmPtveCE7q6Bn0TqCjaaPFYkPtjDzvA3BBR4t-uD4E88VGkQeJ8XXYx'
    }


});