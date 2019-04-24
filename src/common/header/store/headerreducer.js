const defaultState={
	focused:false,
	list:[]
}
export default (state=defaultState,action)=>{
	if (action.type === 'onfocus') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.focused=true;
			  return newState
	};
	if (action.type === 'onblur') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.focused=false;
			  return newState
	};
	if (action.type === 'getList') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.list=action.data;
			  return newState
	};
  return state;
}