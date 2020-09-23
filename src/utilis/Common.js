// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    // sessionStorage.setItem('user', JSON.stringify(user));
  }
  // set reports
  export const setReportsSession=(reports)=>{
    sessionStorage.setItem('reports', reports);
  }

  export const setReportsLocalStorage=(reports)=>{
    localStorage.setItem("reports", JSON.stringify(reports))
  }

  // set candidates
  export const setCandidatesLocalStorage=(candidates)=>{
    localStorage.setItem("candidates", JSON.stringify(candidates))
  }
   // set companies
  export const setCompaniesLocalStorage=(companies)=>{
    localStorage.setItem("companies", JSON.stringify(companies))
  }

