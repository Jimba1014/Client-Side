
function Login(){
    
    return (
        <div className='form-container'>
            <form 
                className='trueForm'
                // onSubmit={onSubmit}
            >
                <label> UserName </label>
                <input
                  className='form-container-input' 
                  type="text"
                  name="username" 
                  id="username" 
                //   value={username} 
                //   onChange={(e) => setUsername(e.target.value)} 
                />
                <label> Password </label>
                <input
                  className='form-container-input' 
                  type="password" 
                  name="password" 
                  id="password" 
                //   value={password} 
                //   onChange={(e) => setPassword(e.target.value)} 
                />
                <button className='buttonPretty' type='submit' value='Log in!'>Log In!</button>
                
            </form>
            {/* {errors? <div className='errors'>{errors}</div>:null}  */}
            {/* <div>{isLoading ? "Loading..." : null }</div> */}
            <div> Are You New to the Company? </div>
                <button className='buttonPretty'> Sign up Here!</button>
        </div>
    )
}

export default Login