import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {header} from './header'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    header
  });
