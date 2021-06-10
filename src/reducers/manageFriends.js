export function manageFriends(state = {friends: []}, action){

  switch(action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
        const friendFilter = state.friends.filter(friend => friend.id !== action.id)
      return {...state, friends: friendFilter}
    default:
      return state
  }
}
