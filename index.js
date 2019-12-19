import {combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux-dynamic-reducer'
import {get,set} from 'dot-prop-immutable'

class CoolStore {

  createStore = createStore;
  composeWithDevTools = composeWithDevTools;
  get = get;
  set = set;
  combineReducers = combineReducers;

  StateResolver = function (path, Ostate){
    let temp = path.split('.');
    for(let i=0;i<temp.length;i++){
      Ostate = Ostate[temp[i]];
    }
    return Ostate;
  }
}

export default CoolStore;