export const StateResolver= function (path, Ostate){
    let temp = path.split('.');
    for(let i=0;i<temp.length;i++){
      Ostate = Ostate[temp[i]];
    }
    return Ostate;
}