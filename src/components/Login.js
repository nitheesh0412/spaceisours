import React  from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="">
        <h1 class="text-center text-info ">Don't Forget to CanOpener!!</h1>
        <div className="login1 d-flex justify-content-center ">
            {/* <p>hudsjkbiu</p> */}
            <form className="align-items-center">
                <br></br>
            <div className="mt-5 container align-items-center">
  <div class="row mb-3" >
    <label for="inputEmail3" class="col-sm-4 text-light col-form-label">Email</label>
    <div class="col-sm-8">
      <input type="email" class="form-control" id="inputEmail3"></input>
    </div>
  </div>
  <div class="row mb-3" >
    <label for="inputPassword3" class="col-sm-4 text-light col-form-label">Password</label>
    <div class="col-sm-8">
      <input type="password" class="form-control" id="inputPassword3"></input>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-4 pt-0 text-light">gender</legend>
    <div class="col-sm-8">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
        <label class="form-check-label" for="gridRadios1">
          Male
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
        <label class="form-check-label" for="gridRadios2">
          Female
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" ></input>
        <label class="form-check-label" for="gridRadios3">
          prefer not to mention
        </label>
      </div>
    </div>
  </fieldset>
  <Link to="/Home">
  <button type="submit" className="btn btn-primary justify  ">login/signup</button>
  </Link>
  
  
  </div>
  <br></br>
</form>
    </div>
    </div>
    )
    
    
}
export default Login