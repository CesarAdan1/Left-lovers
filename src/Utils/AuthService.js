const request = require('superagent');

const AuthService = {
  isAuthenticated: false,
  authenticate(credentials, done, onError) {
    request
      .post('https://backendlefts.herokuapp.com/api/v1/auth/login')
      .set('Content-Type', 'application/json')
      .send(credentials)
      .then(function(response) {
        const { token,user } = response.body;

        if (token) {
          AuthService.isAuthenticated = true;
          localStorage.setItem('jwt', token);
          localStorage.setItem('user_id',user[0]._id );
          //localStorage.setItem('user_id', ;
        }
      })
      .then(done)
      .catch(onError);
  },  
  signout(done) {
    this.isAuthenticated = false;
    localStorage.removeItem('jwt');
    localStorage.removeItem('user_id');
    done();
  }
};

module.exports = AuthService;
