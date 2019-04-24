import axios from 'axios';
export const onFocus=()=>({
	type:'onfocus'
})

export const onBlur=()=>({
	type:'onblur'
})
export const getList=(data)=>({
	type:'getList',
	data:data
})
export const getListAxios=()=>{
	return (dispatch)=>{
		axios.get('api/list.json')
			.then((res)=>{
				dispatch(getList(res.data.data))
			})
			.catch((err)=>{
				console.log(err);
			})
	}
}



