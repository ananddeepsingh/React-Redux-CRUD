function validateUser(loggedInUser){
  var isUserLoggedIn = loggedInUser;
  if(isUserLoggedIn){
    this.props.history.push(`/student`);
  }else{
    this.props.history.push('/');
  }
}


function toggleElementClass(ele){
  if(ele.classList.contains('hide')){
    ele.classList.remove('hide');
    ele.classList.add('show');
  }else{
    ele.classList.remove('show');
    ele.classList.add('hide');
  }
}

export default { validateUser, toggleElementClass}
