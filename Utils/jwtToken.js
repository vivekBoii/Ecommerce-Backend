// create a token and saving it in cookie 

const sendToken = ( user , statusCode ,res)=>{
    const token = user.getJWTToken();

    // options for cookie 
    const options = {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameSite: none,
        secure: true,
        // sameSite: 'Lax',
      };

    // console.log(token);

    res.status(statusCode).cookie('token',token,options);
    res.json({
        success:true,
        user,
        token,
    });
}

module.exports = sendToken;