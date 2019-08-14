const axios = require('axios');
var _ = require('lodash');

module.exports = {
    checkBookingStatus: function (req,res) {
        const req_movie = req.query.movie;
        let status = false;
        const url = 'https://www.spicinemas.in/coimbatore/now-showing';
        axios.get(url).then((response) => {
            const movies = response.data.movies;
            result = _.find(movies, function (movie) {
                return movie.name.includes(req_movie);
            });
            status = result ? true:false;
            res.json({status:status});
        });
    },
    getComingSoonList: (req,res) => {
        const url = 'https://www.spicinemas.in/coimbatore/coming-soon/';
        result = { movies : { name: '' }};
        axios.get(url).then((response)=>{
            const movies = response.data.movies;
            result.movies = _.map(movies, (movie) => {
                return movie.name;
            });
            res.json(result);
        });
    }
}