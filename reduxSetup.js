const INITIAL_STATE = { face: '༼ꉺɷꉺ༽', color: '#0dff45' };

function faceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, face: action.payload.face, color: action.payload.color };

    case "SAD":
      return { ...state, face: action.payload.face, color: action.payload.color };
    
    case "ANGRY":
      return { ...state, face: action.payload.face, color: action.payload.color };
  
    case "CONFUSED":
      return { ...state, face: action.payload.face, color: action.payload.color };

    case "RANDOM":
        return { ...state, face: action.payload.face, color: action.payload.color };
    
    default:
      return state;
  }
}

const store = Redux.createStore(faceReducer);
