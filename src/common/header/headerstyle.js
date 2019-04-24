import styled from 'styled-components';
import logo from '../../static/logo.png';
export const HeaderWrap=styled.div`
	position:relative;
	top:0px;
	left:50%;
	margin-left:-50%;
	width:100%;
	height:60px;
	border-bottom:1px solid #eee;
`;
export const Logo=styled.a.attrs({href :'/'})`
	position:absolute;
	top:0px;
	left:0px;
	display:block;
	width:100px;
	height:60px;
	background:url(${logo});
	background-size:100%;
	background-position:center;
	background-repeat:no-repeat;

`;
export const Nav=styled.div`
	position:absolute;
	top:0px;
	left:170px;
	width:960px;
	padding-right:120px;
	box-sizing:border-box;
	height:100%;
`;
export const NavItem=styled.div`
font-size:16px;
line-height:60px;
padding:0px 20px;
color:#333;

	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a;
	}
`;

export const NavInputWrap=styled.div`
	
	float:left;
	height: 100%;
	
	.iconfont{
		display: inline-block;
	    margin-left: -40px;
	    width: 40px;
	    height: 40px;
	    line-height: 36px;
	    text-align: center;
	    border-radius: 20px;
	    font-size: 18px;
	    color:#888;
	    &.focused{
	    	background-color: #888;
	    	color:#fff;
	    }
	}
	
`;
export const NavInput=styled.input.attrs({
	placeholder:'搜索一下'
})`
	width:160px;
	height:40px;
	border:0px;
	outLine:0px;
	border-radius:20px;
	padding:0px 40px 0px 15px;
	margin-top:10px;
	margin-left:20px;
	box-sizing:border-box;
	background-color:#eee;
	font-size:14px;
	&::placeholder{
		color:#999;
	}
	&.focused{
		width:220px;
	}
	&.slide-enter{
		transition: all 0.2s ease-out;
	}
	&.slide-enter-active{
		width:220px;
	}
	&.slide-exit{
		transition: all 0.2s ease-out;
	}
	&.slide-exit-active{
		width:160px;
	}
`;
export const SearchInfo=styled.div`
	clear:both;
	position:absolute;
	top:60px;
	left:200px;
	width:210px;
	height:auto;
	overflow:hidden;
	background-color:#fff;
	box-sizing:border-box;
	box-shadow: 0px 0px 5px #888888;
`;
export const SearchInfoContentHeader=styled.div`
	clear:both;
	width:210px;
	height:30px;
	line-height:30px;
	overflow:hidden;
`;

export const SearchInfoTitle=styled.span`
	float:left;
	font-size:14px;
	line-height: 30px;
	color:#969696;
	margin-left:10px;
`;
export const SearchInfoTitleSwich=styled.span`
	float:right;
	font-size:13px;
	line-height: 30px;
	color:#969696;
	margin-right:10px;
`;
export const SearchInfoContent=styled.div`
	width:190px;
	margin:10px auto;
	height:auto;
	overflow:hidden;
	clear:both;
`;
export const SearchInfoContentItem=styled.a`
	display:inline-block;
	padding:1px 3px;
	font-size:12px;
	color:#969696;
	float:left;
	margin-right:8px;
	margin-bottom:5px;
	border-radius:3px;
	border:1px solid #969696;
	cursor:pointer;
`;


export const Add=styled.div`
	position:absolute;
	left:1100px;
	top:0px;
	height:60px;
	width:205px;
	overflow:hidden;
`;
export const Btn=styled.div`
	overflow:hidden;	
	float:left;
	text-align:center;
	line-height:30px;
	padding:0px 20px;
	height:30px;
	margin:15px 0px;
	border:1px solid #ea6f5a;
	border-radius:15px;
	font-size:16px;
	&.reg{
		color:#ea6f5a;
		margin-right:20px;
	}
	&.wri{
		background-color:#ea6f5a;
		color:#fff;
	}
`;

